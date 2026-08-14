// ============================================================
// Solari Chatbot — Frontend Logic (Ayesha Naveed)
// API Integration & State Logic Lead
// Connects Abdullah's static UI to the Python (FastAPI/Flask) backend
// ============================================================

// ---- CONFIG ----
const API_URL = "http://127.0.0.1:8000/api/chat";

// ---- DOM REFERENCES ----
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const charCount = document.getElementById("char-count");
const chatThread = document.getElementById("chat-thread");
const typingRow = document.querySelector(".chat-row--typing");
if (typingRow) typingRow.style.display = "none";
const alertBanner = document.querySelector(".alert-banner");
if (alertBanner) alertBanner.style.display = "none";
const scrollAnchor = document.getElementById("scroll-anchor");
const sendBtn = document.getElementById("send-btn");
const suggestionChips = document.querySelectorAll(".suggestion-chip");

let isSending = false; // simple lock so user can't spam-send while waiting

// ---- STEP 2: Live character counter ----
chatInput.addEventListener("input", () => {
  const len = chatInput.value.length;
  charCount.textContent = `${len}/500`;
});

// ---- STEP 3: Handle form submit (Send click + Enter key) ----
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = chatInput.value.trim();
  if (!text || isSending) return;
  sendMessage(text);
});

// ---- STEP 9: Suggestion chips also trigger a send ----
suggestionChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const text = chip.textContent.trim();
    if (!text || isSending) return;
    sendMessage(text);
  });
});

// ---- Main flow ----
async function sendMessage(text) {
  isSending = true;
  toggleComposer(false);

  appendUserBubble(text);
  chatInput.value = "";
  charCount.textContent = "0/500";
  scrollToBottom();

  showTyping(true);
  hideError();

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text, system_type: "on-grid" }),
    });

    if (!response.ok) throw new Error(`Server responded ${response.status}`);

    const data = await response.json();
    const botReply = data.message || "Sorry, I didn't get that.";

    showTyping(false);
    appendBotBubble(botReply);
    
    if (data.tool_result) {
      appendToolResultCard(data.tool_result);
    }
    
    scrollToBottom();
  } catch (err) {
    console.error("Chat request failed:", err);
    showTyping(false);
    showError();
  } finally {
    isSending = false;
    toggleComposer(true);
  }
}

// ---- STEP 4 & 7: Bubble builders ----
function appendUserBubble(text) {
  const row = document.createElement("div");
  row.className = "chat-row chat-row--user";
  row.dataset.role = "user";
  row.innerHTML = `
    <div class="chat-group chat-group--right">
      <div class="chat-bubble chat-bubble--user"></div>
    </div>
  `;
  row.querySelector(".chat-bubble--user").textContent = text; // textContent avoids HTML injection
  chatThread.insertBefore(row, typingRow);
}

function appendBotBubble(text) {
  const row = document.createElement("div");
  row.className = "chat-row chat-row--bot";
  row.dataset.role = "bot";
  row.innerHTML = `
    <div class="chat-avatar chat-avatar--bot" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4.5" fill="currentColor" /></svg>
    </div>
    <div class="chat-group">
      <div class="chat-bubble chat-bubble--bot markdown-content"></div>
    </div>
  `;
  
  // Parse markdown and sanitize
  const parsedHTML = marked.parse(text);
  const cleanHTML = DOMPurify.sanitize(parsedHTML);
  row.querySelector(".chat-bubble--bot").innerHTML = cleanHTML;
  
  chatThread.insertBefore(row, typingRow);
}

function appendToolResultCard(result) {
  const row = document.createElement("div");
  row.className = "chat-row chat-row--bot";
  row.dataset.role = "bot";
  
  const systemSize = result.recommended_system_kw || "N/A";
  const panels = result.recommended_panels_count || "N/A";
  const roofArea = result.required_roof_area_sqft || "N/A";
  const battery = result.battery_capacity_kwh ? result.battery_capacity_kwh + " kWh" : "N/A";
  
  row.innerHTML = `
    <div class="chat-avatar chat-avatar--bot" aria-hidden="true" style="opacity: 0;"></div>
    <div class="chat-group">
      <div class="answer-card">
        <div class="answer-tabs">
          <span class="answer-tab answer-tab--active">Recommendation</span>
        </div>
        <div class="answer-body">
          <div class="answer-head">
            <span class="answer-label">Initial estimate</span>
          </div>
          <dl class="answer-grid">
            <div class="answer-item"><dt>System size</dt><dd>${systemSize} kW</dd></div>
            <div class="answer-item"><dt>Panels needed</dt><dd>${panels}</dd></div>
            <div class="answer-item"><dt>Est. roof area</dt><dd>${roofArea} sq ft</dd></div>
            <div class="answer-item"><dt>Battery backup</dt><dd>${battery}</dd></div>
          </dl>
        </div>
      </div>
    </div>
  `;
  chatThread.insertBefore(row, typingRow);
}

// ---- STEP 5: Typing indicator ----
function showTyping(visible) {
  if (!typingRow) return;
  typingRow.style.display = visible ? "flex" : "none";
  if (visible) scrollToBottom();
}

// ---- STEP 8: Error handling ----
function showError() {
  if (!alertBanner) return;
  alertBanner.style.display = "flex";
  scrollToBottom();
  // auto-hide after a few seconds
  setTimeout(hideError, 4000);
}

function hideError() {
  if (!alertBanner) return;
  alertBanner.style.display = "none";
}

// ---- Helpers ----
function scrollToBottom() {
  scrollAnchor.scrollIntoView({ behavior: "smooth", block: "end" });
}

function toggleComposer(enabled) {
  chatInput.disabled = !enabled;
  sendBtn.disabled = !enabled;
}

// ============================================================
// Calculator Modal Logic
// ============================================================

const RECOMMEND_URL = "http://127.0.0.1:8000/api/recommend";
const openCalcBtn = document.getElementById("open-calc-btn");
const closeCalcBtn = document.getElementById("close-calc-btn");
const calcModal = document.getElementById("calc-modal");
const calcForm = document.getElementById("calc-form");
const calcResult = document.getElementById("calc-result");

if (openCalcBtn && closeCalcBtn && calcModal && calcForm) {
  openCalcBtn.addEventListener("click", () => {
    calcModal.style.display = "flex";
  });

  closeCalcBtn.addEventListener("click", () => {
    calcModal.style.display = "none";
    // Reset form and result when closing
    calcForm.reset();
    calcResult.style.display = "none";
    calcResult.innerHTML = "";
  });

  // Close when clicking on the overlay (outside the container)
  calcModal.addEventListener("click", (e) => {
    if (e.target === calcModal) {
      closeCalcBtn.click();
    }
  });

  calcForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const monthlyUnits = document.getElementById("monthly-units").value;
    const backupHours = document.getElementById("backup-hours").value || 0;
    
    const submitBtn = calcForm.querySelector(".modal-submit-btn");
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = "<span>Calculating...</span>";
    submitBtn.disabled = true;
    
    // Show typing dots while "calculating"
    calcResult.innerHTML = `
      <div style="display: flex; justify-content: center; padding: 20px;">
        <div class="chat-bubble--typing" style="background: transparent; border: none; box-shadow: none;">
          <span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>
        </div>
      </div>
    `;
    calcResult.style.display = "block";
    
    try {
      // Add a small artificial delay for UX (makes the calculation feel robust)
      await new Promise(r => setTimeout(r, 600));
      const response = await fetch(RECOMMEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          monthly_units: parseFloat(monthlyUnits), 
          backup_hours: parseFloat(backupHours) 
        }),
      });

      if (!response.ok) throw new Error(`Server responded ${response.status}`);
      
      const data = await response.json();
      
      if (data.success && data.data) {
        const result = data.data;
        
        const systemSize = result.recommended_system_kw || "N/A";
        const panels = result.recommended_panels_count || "N/A";
        const roofArea = result.required_roof_area_sqft || "N/A";
        const battery = result.battery_capacity_kwh ? result.battery_capacity_kwh + " kWh" : "None";
        
        calcResult.innerHTML = `
          <div class="answer-head" style="margin-bottom: 16px;">
            <span class="answer-label">Calculated Estimate</span>
          </div>
          <dl class="answer-grid">
            <div class="answer-item"><dt>System size</dt><dd>${systemSize} kW</dd></div>
            <div class="answer-item"><dt>Panels needed</dt><dd>${panels}</dd></div>
            <div class="answer-item"><dt>Est. roof area</dt><dd>${roofArea} sq ft</dd></div>
            <div class="answer-item"><dt>Battery backup</dt><dd>${battery}</dd></div>
          </dl>
        `;
        calcResult.style.display = "block";
      } else {
        throw new Error("Invalid response format");
      }
      
    } catch (err) {
      console.error("Calculator request failed:", err);
      calcResult.innerHTML = `<p style="color: var(--red-400); font-size: 0.9rem;">Failed to calculate recommendation. Please check your inputs.</p>`;
      calcResult.style.display = "block";
    } finally {
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
    }
  });
}

// ---- Knowledge Base Tab Logic ----
const navChat = document.getElementById("nav-chat");
const navKb = document.getElementById("nav-kb");
const chatArea = document.querySelector(".chat-area");
const kbArea = document.querySelector(".kb-area");

if (navChat && navKb && chatArea && kbArea) {
  navChat.addEventListener("click", (e) => {
    e.preventDefault();
    navChat.classList.add("nav-link--active");
    navKb.classList.remove("nav-link--active");
    chatArea.style.display = "flex";
    kbArea.style.display = "none";
  });

  navKb.addEventListener("click", (e) => {
    e.preventDefault();
    navKb.classList.add("nav-link--active");
    navChat.classList.remove("nav-link--active");
    chatArea.style.display = "none";
    kbArea.style.display = "flex";
  });
}
