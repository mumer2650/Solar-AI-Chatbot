# Comparative Analysis of On-Grid, Off-Grid, and Hybrid Solar Photovoltaic Power Systems

**A Technical, Economic, and Regulatory Study**  
**(with Focus on Pakistan's 2026 Prosumer Regulations)**

**Muhammad Haris**  
**Intern No. 333**  
**August 2026**

## Important Research-Use Note

**Comparative Analysis of On-Grid, Off-Grid, and Hybrid Solar Photovoltaic Power Systems**

Research basis: authoritative technical, regulatory, governmental, international-organisation, and peer-reviewed sources

Citation style: APA 7th edition  
Regulatory jurisdiction emphasized: Pakistan  
Regulatory status considered: information available through 12 August 2026

## Abstract

Solar photovoltaic (PV) generation has evolved from a niche renewable technology into a major component of modern electricity systems. Global cumulative PV capacity exceeded approximately 2.26 TW by the end of 2024, while more than 600 GW of additional PV capacity was installed during 2025 according to the International Energy Agency (IEA) and IEA Photovoltaic Power Systems Programme (IEA PVPS). Pakistan is also experiencing rapid distributed-solar deployment, with the IEA estimating approximately 10 GW of solar additions in 2025, driven largely by on-grid and off-grid distributed systems.

The principal configurations considered in this study are on-grid, off-grid, and hybrid PV systems. On-grid systems normally minimize capital cost because they do not require batteries, but conventional grid-following systems cannot supply loads during a utility outage. Off-grid systems provide the highest energy independence but require appropriately sized energy storage and, frequently, backup generation. Hybrid systems combine grid access, PV, battery storage, and advanced inverter controls, allowing solar self-consumption, peak shaving, energy arbitrage and backup operation.

The technical comparison demonstrates that no configuration is universally superior. On-grid PV is generally most attractive where the grid is reliable and exported electricity receives economically meaningful compensation. Off-grid PV is technically appropriate where grid extension is unavailable or prohibitively expensive. Hybrid PV-plus-storage becomes particularly attractive where the grid is unreliable, outage costs are high, or export compensation is substantially below the retail electricity price.

Pakistan’s regulatory environment underwent a major change in February 2026. The NEPRA Prosumer Regulations, 2026, notified on 9 February 2026, repealed the earlier 2015 distributed-generation/net-metering regulations and introduced a net-billing framework for new prosumers. NEPRA subsequently issued an April 2026 amendment clarifying protection of valid agreements executed under the repealed framework. This change substantially increases the economic importance of self-consumption and batteries because imported electricity and exported solar electricity are valued differently under the new framework. For calendar year 2026, NEPRA’s Power Purchase Price Forecast reports a National Average Power Purchase Price (NAPPP) of PKR 25.32/kWh and a National Average Energy Purchase Price (NAEPP) of PKR 8.13/kWh.

Overall, the evidence indicates that the economically optimal architecture should be selected from the customer’s load profile, tariff structure, export compensation, outage frequency, required backup duration, solar resource, financing cost and battery cost, rather than from PV capacity alone.

**Keywords:** photovoltaic systems, solar PV, on-grid solar, off-grid solar, hybrid solar, battery energy storage, net metering, net billing, Pakistan, NEPRA, inverter, energy management, grid interconnection

## 1. Introduction

### 1.1 Background

Photovoltaic technology directly converts solar radiation into electricity through semiconductor devices. A PV cell produces direct current (DC), while most residential, commercial and industrial electrical loads and public distribution systems operate on alternating current (AC). Consequently, an inverter or power-conversion system is normally required between the PV array and AC loads. The U.S. Department of Energy describes PV modules, mounting systems and power-conversion equipment as fundamental parts of a complete PV system.

PV systems can be classified according to their relationship with the electricity grid:

1. On-grid/grid-connected: PV operates in parallel with the utility grid.
2. Off-grid/stand-alone: PV and storage form an independent electrical system.
3. Hybrid: PV, battery storage, grid supply and often backup generation operate under coordinated control.

The distinction is important because the architecture determines:

- whether batteries are required;
- whether electricity can be exported;
- whether loads operate during grid outages;
- how much solar electricity is self-consumed;
- the initial capital requirement;
- the system’s control complexity;
- the economic value of each generated kWh.

Solar PV’s economic importance has increased substantially. IRENA reports that the global weighted-average LCOE of newly commissioned utility-scale solar PV was approximately USD 0.043/kWh in 2024, while global utility-scale PV installed cost averaged approximately USD 691/kW. Battery storage installed costs also declined dramatically, reaching approximately USD 192/kWh in 2024, 93% below the 2010 value. These utility-scale values should not be directly substituted for residential installed prices, but they demonstrate the long-term technology-cost trajectory.

## 2. Basic Operating Principle of Solar PV

### 2.1 Photovoltaic Conversion

A PV cell is a semiconductor device. When photons with sufficient energy strike the semiconductor, electron-hole pairs are generated. The internal electric field associated with the semiconductor junction separates charge carriers, producing a voltage and allowing current to flow through an external circuit.

The basic relationship is:

\[
P_{DC} = V_{DC} \times I_{DC}
\]

where:

- \(P_{DC}\) = DC electrical power;
- \(V_{DC}\) = DC voltage;
- \(I_{DC}\) = DC current.

Individual cells are electrically interconnected into modules, and modules into strings and arrays.

### 2.2 DC-to-AC Conversion

PV modules generate DC electricity. Household and commercial loads such as motors, lighting, refrigerators, computers and air conditioners generally require AC electricity.

A grid-connected inverter therefore:

1. receives DC power from the PV array;
2. tracks the array’s maximum-power point;
3. converts DC to synchronized AC;
4. controls voltage, frequency, power factor and other grid-interface parameters;
5. disconnects or changes operating mode under abnormal grid conditions.

The basic energy path is:

```text
Solar radiation
↓
PV modules
↓
DC
↓
MPPT / inverter
↓
AC
↓
┌───────────────┬──────────────┐
│               │              │
Local loads   Battery       Utility grid
↑              ↓               ↑ ↓
DC/AC PCS     Bidirectional
              meter
```

### 2.3 Factors Affecting PV Performance

PV output is affected by:

- solar irradiance;
- module temperature;
- spectral conditions;
- orientation;
- tilt;
- shading;
- soiling;
- mismatch;
- cable losses;
- connector losses;
- inverter efficiency;
- availability;
- degradation;
- clipping caused by DC/AC ratio;
- curtailment;
- battery conversion losses where storage is present.

Sandia’s PV Performance Modeling Collaborative identifies shading, soiling and reflection as distinct sources of PV losses.

Soiling is particularly important in dusty or agricultural environments because accumulated particulates reduce the irradiance reaching the cell.

NREL’s PVWatts methodology historically used representative loss categories including soiling, shading, mismatch, wiring, connections, availability and inverter effects. These values are model defaults rather than universal engineering constants and should not be copied into a feasibility study without site-specific validation.

#### Temperature

PV module output normally decreases as cell temperature rises. Therefore, a hot roof can produce less power than a cooler module receiving the same irradiance.

#### Orientation and Tilt

The objective is to maximize annual plane-of-array irradiation while considering seasonal demand, roof geometry and structural limitations. In Pakistan, solar-resource assessment should use site-specific Global Solar Atlas or equivalent data rather than relying only on generalized national averages. The World Bank’s Pakistan solar dataset provides GHI, GTI, PVOUT, DNI and optimum-tilt information.

#### Degradation

Long-term PV degradation is relatively slow but economically significant. A major literature review found a median degradation rate around 0.5%/year, while NREL’s more recent assessments commonly use approximately 0.5–0.7%/year as a representative assumption depending on technology and model.

## 3. Major Components of Solar PV Systems

### 3.1 PV Modules

**Purpose:** Convert solar radiation into DC electricity.

**Typical characteristics:**

| Parameter | Representative range |
|---|---|
| Module power | ~400–700+ W |
| Module efficiency | ~20–24% for many modern crystalline-silicon products |
| Maximum-system voltage | Often 1,000 or 1,500 V DC at larger-system level |
| Temperature coefficient | Typically negative |
| Design life | Commonly 25–30+ years |
| Degradation | Often roughly 0.3–0.8%/year depending on product |

Actual specifications must be taken from the manufacturer’s datasheet and certification documentation.

### 3.2 String Inverter

A string inverter connects one or more PV strings and converts DC to AC.

**Advantages:**

- relatively low cost;
- high efficiency;
- centralized monitoring;
- simple maintenance.

**Limitations:**

- shading affecting a string can reduce output;
- inverter failure can affect a substantial portion of the array;
- string design must respect voltage/current/MPPT limits.

### 3.3 Microinverters

A microinverter is attached to individual modules or small module groups.

**Advantages:**

- module-level MPPT;
- useful where partial shading or multiple orientations exist;
- module-level monitoring;
- no high-voltage DC string extending across the roof.

**Limitations:**

- greater equipment count;
- potentially higher initial cost;
- rooftop electronics operate in high-temperature conditions.

### 3.4 Hybrid Inverter

A hybrid inverter integrates some or all of:

- PV MPPT;
- DC/AC conversion;
- battery charging;
- battery discharging;
- grid interaction;
- backup output;
- energy management.

It is the principal control element in many residential hybrid systems.

### 3.5 Batteries

Batteries store electrical energy chemically and release it later.

Important parameters include:

- nominal capacity, kWh;
- usable capacity, kWh;
- maximum charge/discharge power, kW;
- state of charge (SOC);
- depth of discharge (DoD);
- round-trip efficiency;
- cycle life;
- calendar life;
- operating temperature;
- thermal-management requirements.

### 3.6 Charge Controllers

#### PWM

Pulse-width-modulation controllers regulate charging by switching the PV source relative to battery voltage.

**Advantages:** low cost and simple construction.

**Limitations:** lower energy harvest where PV voltage differs substantially from battery voltage.

#### MPPT

Maximum-power-point-tracking controllers electronically transform the PV operating point so the array operates near its maximum power point.

**Advantages:**

- improved energy harvest;
- better operation under changing irradiance;
- particularly useful with higher-voltage PV strings.

### 3.7 Mounting System

The mounting structure:

- supports modules;
- provides the required orientation and tilt;
- withstands wind and environmental loads;
- provides corrosion resistance;
- maintains electrical bonding/grounding where required.

### 3.8 DC and AC Distribution Equipment

Typical equipment includes:

- DC combiner boxes;
- string fuses;
- DC circuit breakers;
- DC isolators;
- AC breakers;
- distribution boards;
- surge protective devices;
- contactors;
- residual-current protection where required;
- disconnect switches.

Protection ratings must be based on actual system voltage, short-circuit current, conductor ampacity and applicable codes.

### 3.9 Cables and Connectors

PV cables must tolerate:

- outdoor UV exposure;
- temperature variation;
- mechanical stress;
- DC voltage;
- moisture.

Poor connectors can create high-resistance joints and thermal failures.

### 3.10 Earthing and Lightning Protection

Earthing/grounding serves electrical safety and fault-current paths. Lightning protection is a separate but related engineering discipline and may require:

- air terminals;
- down conductors;
- earth electrodes;
- equipotential bonding;
- surge protection devices.

Design must follow local electrical codes and site-specific lightning-risk assessment.

### 3.11 Monitoring and EMS

Monitoring systems record:

- PV production;
- inverter status;
- battery SOC;
- import/export;
- alarms;
- voltage;
- current;
- temperature;
- historical energy flows.

An Energy Management System (EMS) determines priorities such as:

```text
Solar → Load
↓ surplus
Solar → Battery
↓ battery full
Solar → Grid
```

During an outage:

```text
PV → Battery → Critical Loads
```

if the inverter is capable of islanded operation.

### 3.12 Bidirectional Meter

A bidirectional meter records electricity flowing:

- from the grid to the customer; and
- from the customer to the grid.

This is essential when export is permitted.

## 4. On-Grid Solar PV Systems

### 4.1 Architecture

```text
SUN
↓
PV ARRAY
↓ DC
STRING INVERTER
↓ AC
AC DISTRIBUTION
↓
┌──────┴─────────┐
↓                ↓
LOADS      BIDIRECTIONAL METER
                 ↕
            UTILITY GRID
```

### 4.2 Normal Daytime Operation

If PV power exceeds load power:

\[
P_{export} = P_{PV} - P_{load}
\]

If PV power is less than load power:

\[
P_{import} = P_{load} - P_{PV}
\]

Thus, the grid acts as an energy balancing resource.

### 4.3 Grid Outage

A conventional grid-following inverter normally shuts down when the grid disappears.

This is intentional. A PV inverter that continued energizing an isolated distribution feeder could endanger utility workers and create unsafe conditions.

IEC 62116 specifies testing procedures for islanding-prevention measures in utility-interconnected PV inverters.

Therefore:

> A conventional on-grid inverter should not be considered a backup generator.

Backup requires an inverter and system architecture specifically designed for islanded operation.

### 4.4 Advantages

- lowest complexity of the three configurations;
- no battery replacement cost;
- high conversion efficiency;
- low maintenance;
- grid provides energy balancing;
- straightforward expansion;
- potentially rapid financial payback where electricity prices are high.

### 4.5 Disadvantages

- no backup in conventional architecture;
- dependent on grid availability;
- export value may be lower than retail electricity value;
- subject to utility approval;
- grid constraints can limit export capacity;
- regulatory changes can materially alter financial returns.

## 5. Off-Grid Solar PV Systems

### 5.1 Architecture

```text
SUN
↓
PV ARRAY
↓
MPPT / CHARGE CONTROL
↓
BATTERY BANK
↓
OFF-GRID INVERTER
↓
AC LOADS

Optional:
GENERATOR
↓
Battery / AC Bus
```

### 5.2 Energy Balance

An off-grid system must satisfy, over the relevant design period:

\[
E_{PV} + E_{gen} + E_{battery,out} \geq E_{load} + E_{losses}
\]

Unlike an on-grid system, energy deficit cannot simply be transferred to the utility network.

### 5.3 Operating Conditions

#### High solar + low demand

- PV → Load
- PV → Battery
- PV → Curtailment if battery is full

#### High solar + high demand

- PV → Load
- and any remaining PV can charge the battery.

#### Low solar + high demand

- PV → Load
- Battery → Load

#### Extended insufficient sunlight

If battery SOC becomes too low:

- Generator → Load/Battery
- or the EMS disconnects non-critical loads.

### 5.4 Battery Sizing

A simplified design equation is:

\[
C_{nom} = \frac{E_d \times N_a}{\eta_{inv} \times \eta_{bat} \times DoD}
\]

where:

- \(E_d\) = daily energy requirement;
- \(N_a\) = required autonomy days;
- \(\eta_{inv}\) = inverter efficiency;
- \(\eta_{bat}\) = battery/charge-discharge efficiency;
- \(DoD\) = allowable depth of discharge.

For critical facilities, additional reserve margins should be considered.

### 5.5 Advantages

- maximum independence;
- operates without utility infrastructure;
- excellent for remote communities;
- can provide predictable electricity where grid extension is expensive;
- can be combined with diesel or other generators.

### 5.6 Disadvantages

- batteries significantly increase CAPEX;
- batteries eventually require replacement;
- poor design can result in frequent load shedding;
- extended cloudy periods require oversizing, additional storage or backup generation;
- system design is more sensitive to load uncertainty.

A 2019 peer-reviewed study of off-grid PV for rural Punjab found favorable solar resources and estimated an electricity cost of approximately PKR 7.15/kWh under its assumptions, compared with PKR 20.7/kWh for conventional electricity at the time. Such historical economic results should not be interpreted as present-day Pakistan tariffs or present-day equipment costs.

## 6. Hybrid Solar PV Systems

### 6.1 Architecture

```text
PV ARRAY
↓
HYBRID INVERTER
↙ ↓ ↘
LOAD BATTERY GRID
↑ ↓ ↑↓
└───────┴────────┘
CRITICAL LOADS
↑
BACKUP OUTPUT
```

The hybrid inverter/EMS determines the energy source according to:

- solar availability;
- battery SOC;
- load demand;
- tariff;
- export value;
- grid condition;
- reserve SOC;
- outage requirements.

### 6.2 Operating Modes

| Mode | Energy flow |
|---|---|
| Solar → Load | PV directly supplies demand |
| Solar → Battery | Excess PV charges battery |
| Solar → Grid | Surplus PV exported |
| Grid → Load | Utility supplies demand |
| Grid → Battery | Battery charged from grid |
| Battery → Load | Stored energy supplies demand |
| Solar + Grid → Load | PV supplies part, grid supplies balance |
| Solar + Battery → Load | PV plus battery jointly supply load |

### 6.3 Peak Shaving

If the load is the sum of a base load and a peak load, the battery can discharge during peak periods to reduce power drawn from the grid. This can reduce demand charges where the tariff structure permits.

### 6.4 Load Shifting

Solar produced at noon can be stored and consumed during evening demand.

This is particularly valuable when the value of imported electricity exceeds the value of exported electricity, which is increasingly relevant under Pakistan’s 2026 net-billing framework.

NREL’s REopt case study found that combining PV with storage and controllable loads can substantially increase solar self-consumption and improve economics where exports receive less than retail value.

## 7. Comprehensive Technical Comparison

| Criterion | On-grid | Off-grid | Hybrid |
|---|---|---|---|
| Grid dependency | High | None | Low–moderate |
| Battery | Normally unnecessary | Essential | Normally included |
| Backup during outage | No, conventional system | Yes | Yes |
| Energy independence | Low | Very high | High |
| CAPEX | Low | High | High |
| OPEX | Low | Moderate | Moderate |
| Maintenance | Low | Moderate–high | Moderate |
| Complexity | Low | High | High |
| Solar self-consumption | Moderate | Very high | Very high |
| Export capability | Yes | Normally no | Yes, if permitted |
| Grid reliability sensitivity | High | Very low | Low |
| Battery replacement risk | None | High | Moderate |
| Scalability | Excellent | Good | Excellent |
| Peak shaving | Limited | Yes | Excellent |
| Load shifting | Limited | Yes | Excellent |
| Resilience | Low | Very high | Very high |
| Suitable for remote areas | Poor | Excellent | Excellent |
| Suitable for reliable grid | Excellent | Usually unnecessary | Good |
| Suitable for unreliable grid | Moderate | Excellent | Excellent |
| Technical complexity | Lowest | Highest | High |
| Typical service life | PV ~25–30+ yr; inverter shorter | PV + batteries + inverter | PV + inverter + battery |
| Export economics | Critical | Irrelevant | Important but less critical |
| Environmental impact | Lowest among three for same PV generation | Battery impacts added | Battery impacts added |
| Best application | Bill reduction | Electrification | Resilience + self-consumption |

## 8. Battery Energy Storage

### 8.1 Comparison

| Battery type | Typical usable DoD* | Round-trip efficiency* | Cycle-life tendency | Maintenance | Major advantages | Major limitations |
|---|---:|---:|---:|---|---|---|
| Flooded lead-acid | ~50–80% | ~75–85% | ~500–1,500 | High | Low upfront cost, mature recycling | Heavy, ventilation/water maintenance, shorter life |
| AGM | ~50–80% | ~75–90% | ~500–1,500+ | Low | Sealed, simple | Costlier than flooded lead-acid; deep cycling reduces life |
| Gel | ~50–80% | ~75–90% | ~700–1,500+ | Low | Sealed, relatively robust | Charging sensitivity |
| Li-ion/NMC | ~80–95% | ~90–97% | ~2,000–5,000+ | Low | High energy density, high efficiency | Thermal management and safety requirements |
| LiFePO4/LFP | ~80–100% depending on warranty/design | ~90–98% at cell/system level; lower at complete-system level | ~3,000–7,000+ possible depending on operating conditions | Low | Long life, strong thermal stability, high cycle capability | Higher initial cost; recycling economics less favorable |
| Sodium-ion | ~80–95% depending on product | Product dependent | Developing | Low | Reduced dependence on lithium; promising low-temperature performance | Less mature stationary market |
| Flow battery | Often deep cycling | ~65–85% | Very high potential | Moderate | Long cycle life, scalable energy capacity | Low energy density, higher complexity |

*Ranges are engineering approximations and not universal specifications. Actual values depend strongly on chemistry, cell design, temperature, C-rate, warranty conditions and operating strategy.

NREL and DOE research shows that battery performance is strongly influenced by depth of discharge, temperature, charge/discharge rate and operating history. LFP stationary systems are becoming particularly important because of their durability and safety characteristics.

A detailed stationary LFP study estimated real-world complete-system round-trip efficiency around 80–85%, after accounting for power electronics and auxiliary loads. This is lower than cell-level efficiencies frequently advertised.

### 8.2 Battery Capacity Calculation

Suppose:

- daily load = 10 kWh;
- autonomy = 1.5 days;
- inverter efficiency = 95%;
- battery efficiency = 92%;
- allowable DoD = 90%.

Then:

\[
C_{nom} = \frac{(10 \times 1.5)}{(0.95 \times 0.92 \times 0.90)} \approx 19.1\text{ kWh}
\]

A practical design would therefore consider approximately a 20 kWh nominal battery, followed by verification against peak power, temperature, aging and manufacturer’s warranty.

### 8.3 Power Versus Energy

A battery must be sized in both:

- kWh — energy capacity;
- kW — power capacity.

A 10-kWh battery capable of only 2 kW continuous discharge cannot necessarily operate a 5-kW peak load. Therefore, rated battery power must be greater than or equal to the critical peak load, after accounting for inverter limits and motor-starting surges.

### 8.4 Battery Lifecycle Cost

A useful metric is the levelized cost of storage:

\[
LCOS = \frac{C_{capital} + C_{replacement} + C_{O\&M} + C_{energy,charging}}{E_{lifetime,delivered}}
\]

Battery cost should therefore never be evaluated solely on PKR/kWh of nominal capacity.

### 8.5 Environmental Considerations

Battery manufacturing adds material and energy impacts to a PV system. An IEA PVPS residential PV-plus-LFP lifecycle study found that environmental impacts were sensitive to battery lifetime; reducing assumed battery life from 5,000 to 3,000 cycles increased greenhouse-gas and non-renewable-energy impacts materially.

LFP’s lower residual material value also creates recycling-economics challenges compared with nickel-rich chemistries, although recycling capacity is expanding.

## 9. Inverters and Power Electronics

| Feature | Grid-tied | Off-grid | Hybrid | Microinverter | String inverter |
|---|---|---|---|---|---|
| Grid synchronization | Essential | Not normally required | Required when grid-connected | Yes | Yes |
| Battery interface | Normally no | Yes | Yes | Usually no | Usually no |
| Backup | No | Yes | Yes | Only special systems | Special hybrid models |
| MPPT | Yes | Usually | Yes | Module-level | String-level |
| Anti-islanding | Essential | Not applicable to utility interface | Essential in grid mode | Yes | Yes |
| Surge capability | Limited | Important | Important | Limited | Moderate |
| Centralized control | High | High | High | Low | Moderate |
| Module-level monitoring | Usually no | No | No | Yes | Usually string-level |
| Shading tolerance | Moderate | Moderate | Moderate | High | Depends on string design |

### 9.1 Grid Synchronization

A grid-following inverter uses measurements of grid voltage and frequency to synchronize its output.

### 9.2 Anti-Islanding

The inverter detects abnormal grid conditions and disconnects from the grid. IEEE 1547-2018 addresses interconnection performance, abnormal conditions, power quality, islanding, testing and commissioning for distributed energy resources.

### 9.3 Power Quality

Relevant parameters include:

- voltage;
- frequency;
- harmonic distortion;
- DC injection;
- flicker;
- reactive power;
- power factor.

Actual limits are determined by the applicable national grid code, utility requirements and standards.

## 10. Bidirectional Metering and Net Metering

### 10.1 Why a Bidirectional Meter Is Required

A conventional meter designed primarily for one-way consumption cannot adequately perform energy accounting where power flows in both directions. A bidirectional meter separately records energy imported from the grid and energy exported to the grid.

### 10.2 Example: Traditional Net-Metering Model

Suppose during one month:

- grid imports = 700 kWh;
- solar exports = 500 kWh.

Under a 1:1 unit-offset arrangement:

\[
E_{net} = 700 - 500 = 200\text{ kWh}
\]

The consumer is financially treated as having net consumption of approximately 200 kWh, subject to the applicable billing rules.

### 10.3 Net Billing

Under net billing:

\[
Bill = (E_{import} \times T_{import}) - (E_{export} \times T_{export}) + \text{fixed charges} + \text{taxes/adjustments}
\]

where \(T_{import}\) = applicable retail import tariff, and \(T_{export}\) = solar export purchase price.

If \(T_{import} > T_{export}\), then maximizing self-consumption becomes more valuable than maximizing exports.

## 11. Pakistan’s Regulatory Framework

### 11.1 Regulatory History

Pakistan’s rooftop distributed-generation framework developed under the NEPRA Alternative & Renewable Energy Distributed Generation and Net Metering Regulations, 2015, subsequently amended several times. NEPRA’s legal archive records amendments in 2017, 2018, 2020 and 2022.

The framework changed fundamentally in 2026.

#### Regulatory Timeline

| Date | Development |
|---|---|
| September 2015 | NEPRA Distributed Generation and Net Metering Regulations introduced |
| 2017–2022 | Multiple amendments |
| December 2025 | Further amendment to 2015 framework |
| 9 Feb 2026 | NEPRA Prosumer Regulations, 2026 notified |
| Feb 2026 | New net-billing framework introduced |
| 2 Apr 2026 | Amendment concerning existing agreements notified |
| Apr 2026 | New Technical Standards for Grid Connectivity Regulations notified |
| Aug 2026 | 2026 Prosumer framework remains the relevant current framework for new applications, subject to subsequent notifications |

NEPRA’s official legal archive identifies the Prosumer Regulations as S.R.O. 251 dated 9 February 2026.

### 11.2 2026 Prosumer Regulations

The 2026 regulations replaced the earlier distributed-generation/net-metering framework for new arrangements.

The fundamental change is from unit-for-unit net metering to net billing, under which:

- electricity imported from the distribution licensee is billed at the applicable consumer tariff;
- electricity exported by the prosumer is purchased at the applicable national energy-purchase benchmark;
- bidirectional or equivalent metering is required.

For calendar year 2026, NEPRA’s Power Purchase Price Forecast calculated:

- NAPPP = PKR 25.32/kWh
- NAEPP = PKR 8.13/kWh.

These are distinct regulatory concepts and should not be confused with a particular household’s final retail tariff.

### 11.3 Existing Consumers

The transition generated substantial regulatory uncertainty in February 2026. NEPRA subsequently notified an amendment in April 2026. NEPRA’s official website records the 2 April 2026 notification of S.R.O. 547(I)/2026, amending the Prosumer Regulations.

The amendment clarified that valid approvals, licences and agreements executed under the repealed regulations before commencement of the new regulations remain governed by the previous arrangements until expiry, rather than being automatically converted in a manner that would invalidate those contractual arrangements.

For a feasibility study, the contract execution date is therefore critical.

### 11.4 New System Economics

The new framework creates a strong economic incentive to:

1. reduce daytime grid imports;
2. increase direct solar consumption;
3. shift loads into solar-production periods;
4. use batteries to move solar electricity to evening hours;
5. avoid excessive oversizing intended mainly for export.

This is particularly important because NAEPP for 2026 is substantially below many retail electricity tariffs.

### 11.5 Technical Approval

A grid-connected project must comply with the applicable NEPRA regulations, distribution-company requirements, technical standards, protection requirements and interconnection procedures.

The 2026 regulatory package also includes separate Technical Standards for Grid Connectivity Regulations, 2026, notified by NEPRA on 27 April 2026.

Because Pakistan’s regulatory environment is changing rapidly, a professional project should obtain the latest requirements directly from the relevant DISCO/utility and NEPRA before procurement.

## 12. Grid Interconnection and Safety

### 12.1 Fundamental Requirements

A grid-connected PV system should normally address:

- synchronization;
- voltage;
- frequency;
- anti-islanding;
- overcurrent protection;
- short-circuit protection;
- earth fault protection;
- surge protection;
- isolation;
- metering;
- power quality;
- inverter certification;
- inspection;
- commissioning;
- documentation.

### 12.2 International Standards

Important international references include:

#### IEC 61727

IEC 61727 establishes characteristics and requirements for the utility interface of grid-connected PV systems.

#### IEC 62116

IEC 62116 specifies testing procedures for islanding-prevention measures.

#### IEC 62109

IEC 62109 establishes safety requirements for power converters used in PV systems.

#### IEC 60364-7-712:2025

The 2025 edition covers electrical installation requirements for PV systems and includes requirements relevant to energy storage and island-mode operation.

#### IEC 62446-1

IEC 62446-1 specifies documentation, inspection and commissioning requirements for grid-connected PV systems.

#### IEEE 1547-2018

IEEE 1547-2018 covers DER interconnection, abnormal operating conditions, power quality, islanding, testing and commissioning.

These standards are reference frameworks; the local Pakistani utility/grid code takes precedence for a Pakistani interconnection where the requirements differ.

## 13. Economic Analysis

### 13.1 Fundamental Metrics

#### Simple Payback

\[
SPB = \frac{CAPEX}{Annual\ Net\ Savings}
\]

Useful for screening but ignores financing, degradation and replacement.

#### Net Present Value

\[
NPV = -C_0 + \sum \left[\frac{CF_t}{(1+r)^t}\right], \quad \text{for } t = 1 \text{ to } n
\]

A project is economically attractive under the chosen assumptions if NPV > 0.

#### Internal Rate of Return

IRR is the discount rate at which NPV = 0.

#### LCOE

\[
LCOE = \frac{\sum [C_t/(1+r)^t]}{\sum [E_t/(1+r)^t]}
\]

For PV-plus-storage, storage degradation, replacements and charging losses must be included.

### 13.2 Illustrative Pakistan Residential Example

The following is an engineering illustration, not a market quotation.

#### Assumptions

- PV = 5 kWp
- annual specific yield = 1,460 kWh/kWp-year
- annual PV generation = 7,300 kWh
- annual household demand = 9,000 kWh
- PV self-consumption = 60%
- export = 40%
- grid import tariff assumption = PKR 40/kWh
- 2026 NAEPP = PKR 8.13/kWh
- illustrative on-grid CAPEX = PKR 800,000
- illustrative hybrid CAPEX with 5-kWh LFP battery = PKR 1,200,000

The 1,460 kWh/kWp-year yield is an assumption for calculation, not a universal Pakistan yield. Site-specific Global Solar Atlas/PVsyst/SAM analysis should replace it. Pakistan is nevertheless categorized by the World Bank among countries with excellent practical solar PV potential.

#### PV Production

\[
5 \times 1,460 = 7,300\text{ kWh/year}
\]

#### Direct Solar Consumption

\[
7,300 \times 0.60 = 4,380\text{ kWh}
\]

#### Export

\[
7,300 - 4,380 = 2,920\text{ kWh}
\]

#### Remaining Grid Import

\[
9,000 - 4,380 = 4,620\text{ kWh}
\]

#### Annual Import Cost

\[
4,620 \times 40 = \text{PKR }184,800
\]

#### Export Credit

\[
2,920 \times 8.13 = \text{PKR }23,740
\]

#### Net Annual Electricity Payment

\[
184,800 - 23,740 = \text{PKR }161,060
\]

#### Without PV

\[
9,000 \times 40 = \text{PKR }360,000
\]

#### Approximate Annual Saving

\[
360,000 - 161,060 = \text{PKR }198,940
\]

#### Simple Payback (On-Grid)

\[
800,000 / 198,940 \approx 4.0\text{ years}
\]

This result is deliberately simplified. Taxes, fixed charges, tariff slabs, future tariff changes, degradation, maintenance, financing and actual self-consumption would alter the result.

## 14. Why Hybrid Systems Become More Attractive Under Low Export Compensation

Assume a solar kWh has two possible values:

#### Direct Self-Consumption

If it replaces a PKR 40/kWh grid purchase:

\[
Value_{self} = \text{PKR }40/\text{kWh}
\]

#### Export

\[
Value_{export} = \text{PKR }8.13/\text{kWh}
\]

Thus:

\[
Value_{self} / Value_{export} = 40 / 8.13 \approx 4.9
\]

Under these assumptions, a self-consumed solar kWh has approximately 4.9 times the energy-value of an exported solar kWh.

This does not mean that batteries should always be installed. Battery round-trip losses, degradation and capital cost must be included.

The correct question is: does the value of shifted energy exceed the marginal battery cost? If yes, storage can be economically justified.

## 15. Reliability and Performance

### 15.1 Reliability Hierarchy

For grid outages:

| Configuration | Grid outage capability |
|---|---|
| Conventional on-grid | None |
| Off-grid | Full, subject to stored energy |
| Hybrid | Full for protected loads, subject to battery/PV sizing |

### 15.2 Availability

PV systems generally have high availability because there are few moving parts. A field study of approximately 50,000 PV systems found that about 90% of systems without reported issues produced more than 90% of predicted electricity, while hardware problems were relatively uncommon; inverter problems were among the most significant reported hardware issues.

### 15.3 Seasonal Reliability

An off-grid system must be designed for the worst relevant solar period, not simply annual average production.

A system producing 10 kWh/day on an annual average may still fail if winter/cloudy-period production drops to 4 kWh/day for several consecutive days.

Therefore off-grid design should consider:

- monthly solar irradiation;
- worst-month energy;
- autonomy;
- generator availability;
- critical versus non-critical loads.

## 16. Environmental and Sustainability Analysis

### 16.1 PV

PV produces electricity without combustion during operation and therefore has no direct fuel-combustion emissions.

Lifecycle impacts arise from:

- raw-material extraction;
- semiconductor manufacturing;
- glass and aluminium;
- transport;
- installation;
- replacement;
- recycling.

### 16.2 Battery-Added Impacts

Battery systems add:

- mineral extraction;
- cell manufacturing;
- power electronics;
- thermal management;
- replacement impacts;
- end-of-life processing.

The environmental impact per delivered kWh can nevertheless remain attractive when storage allows renewable electricity to displace carbon-intensive generation. IEA PVPS lifecycle analysis demonstrates that battery lifetime is an important determinant of the environmental performance of PV-plus-storage systems.

### 16.3 Carbon Payback

A simplified carbon-payback equation is:

\[
Carbon\ Payback = \frac{Embodied\ CO_2}{Annual\ avoided\ CO_2}
\]

The result depends strongly on:

- manufacturing electricity mix;
- displaced grid generation;
- PV yield;
- battery replacement;
- system lifetime.

It is therefore inappropriate to claim one universal carbon-payback period.

## 17. System Design Methodology

### Step 1 — Load Assessment

Record at minimum:

- monthly kWh;
- hourly or 15-minute demand where possible;
- maximum demand;
- motor starting loads;
- critical loads;
- seasonal loads;
- daytime/evening consumption.

### Step 2 — Determine Load Profile

Example:

```text
Power
kW
8 | ███
6 | █████ ███
4 | ███████████████
2 | ███████████████████
0 +-------------------------
  00 06 12 18 24
Time
```

The daily energy requirement is the sum of each load’s power multiplied by its duration of use.

### Step 3 — Solar-Resource Assessment

Use:

- Global Solar Atlas;
- satellite irradiance;
- meteorological data;
- PVsyst;
- NREL SAM/PVWatts where applicable.

The World Bank’s Pakistan dataset provides PVOUT, GHI, GTI, DNI and optimum tilt as planning inputs.

### Step 4 — Preliminary PV Sizing

A simplified estimate is:

\[
P_{PV} = \frac{E_{daily}}{H_{PSH} \times PR}
\]

where \(H_{PSH}\) = peak-sun-hours/day, and \(PR\) = performance ratio.

### Step 5 — Inverter Sizing

For on-grid, inverter power is approximately equal to the required AC power, with DC/AC ratio selected according to solar resource, clipping tolerance, inverter limits and economics.

For hybrid/off-grid, additionally check continuous power, surge power, motor starting, battery charge/discharge limits, and backup-load priority.

### Step 6 — Battery Sizing

\[
C_{battery} = \frac{E_{critical} \times N_{autonomy}}{\eta_{system} \times DoD}
\]

Then independently check kW power requirements.

### Step 7 — Cable Sizing

Select conductors according to current, voltage, temperature, installation method, voltage drop, short-circuit conditions and local electrical code.

### Step 8 — Protection

Determine string fuses, DC breakers, AC breakers, SPD, earth-fault protection, isolators, and emergency shutdown where applicable.

### Step 9 — Energy Simulation

Model at least hourly operation for PV output, load, battery SOC, import, export, curtailment, and outages.

NREL PVWatts is an established preliminary production-estimation tool; its newer versions incorporate detailed PV, inverter and thermal models.

### Step 10 — Economic Simulation

Include CAPEX, financing, O&M, battery replacement, inverter replacement, degradation, tariff escalation, export compensation, taxes and discount rate.

### Step 11 — Regulatory Verification

Before procurement:

1. identify utility/DISCO;
2. verify consumer category;
3. verify sanctioned load;
4. verify permissible PV capacity;
5. obtain technical requirements;
6. confirm meter requirements;
7. obtain concurrence/approval;
8. conduct inspection;
9. commission;
10. retain as-built documentation.

## 18. Case Studies

### Case Study 1 — Grid-Connected PV: Toba Tek Singh, Pakistan

A published study examined the feasibility of a grid-connected PV system for a rural community in Toba Tek Singh, Pakistan, using RETScreen. The study evaluated electricity production, financial performance, capacity factor, fuel/electricity savings and greenhouse-gas reductions.

#### Technical Classification

- Configuration: grid-connected PV
- Battery: none in the analyzed configuration
- Grid: primary balancing resource
- Backup: utility grid
- Application: rural community/zero-energy concept

#### Key Lesson

The study demonstrates the traditional economic rationale of on-grid PV: use solar production when available and rely on the grid when PV output is insufficient.

For a current Pakistani project, however, the economic model must be updated for the 2026 net-billing framework rather than using historical 1:1 net-metering assumptions.

### Case Study 2 — Two-Household Off-Grid PV-Battery System, Punjab

A 2025 published study modeled two households at Vanike Tarar, Punjab, using HOMER Pro. The published design included:

- 2.57 kW PV
- 4 × Trojan SAGM 12 205 batteries
- 48-V battery bank
- 0.995-kW inverter
- approximately 7.45 kWh/day load
- 100% simulated renewable fraction
- 989 kWh/year excess electricity
- 88.8 kWh/year unmet load
- NPC approximately PKR 644,846
- LCOE approximately PKR 18.96/kWh.

#### Interpretation

This is a useful example of the trade-off between energy independence and battery requirements.

The relatively low inverter rating compared with total daily energy indicates that system design is governed not only by daily kWh but also by the specific load profile and demand timing.

#### Design Lesson

For rural Pakistan: if grid extension is expensive and the load is moderate, PV-battery systems can be technically viable even when the economics of grid-connected systems are more attractive in urban areas.

### Case Study 3 — Rural Pakistan Solar-Wind-Battery Hybrid

A 2024 peer-reviewed study examined a hybrid solar-wind-battery system for residential electrification in rural Pakistan. The authors compared grid-tied and off-grid configurations and used dynamic MATLAB/Simulink simulation. The reported LCOE was approximately USD 0.29/kWh for the grid-tied configuration and USD 0.91/kWh for the off-grid configuration under the study’s assumptions.

#### Key Lesson

The result illustrates an important principle: off-grid systems can be technically superior while still being economically inferior to grid-connected alternatives when a usable grid already exists.

The additional battery, power electronics and renewable-resource balancing requirements increase system cost.

### Case Study 4 — Pakistan Rural PV-Biomass Hybrid

A 2026 study of a rural Tharparkar community modeled an off-grid hybrid system consisting of:

- 11.5 kW solar PV;
- 15 kW biogas generator;
- 16 × 1-kWh lithium-ion batteries;
- 10.8-kW converter;
- approximately 71,280 kWh/year generation;
- NPC approximately USD 95,858;
- LCOE approximately USD 0.104/kWh;
- annual operating cost approximately USD 5,107;
- initial capital approximately USD 24,930;
- reported payback approximately 7.7 years.

#### Lesson

Hybrid generation can reduce dependence on one intermittent resource. In remote areas, a dispatchable generator can dramatically reduce the amount of battery storage needed to survive prolonged periods of low solar production.

## 19. Comparative Economic Logic

### 19.1 On-Grid

The financial equation is approximately:

\[
Annual\ benefit = (Self-consumption \times Retail\ tariff) + (Exports \times Export\ tariff)
\]

On-grid is particularly attractive where the retail tariff is much greater than the LCOE of PV and export compensation is reasonable.

### 19.2 Off-Grid

The relevant comparison is LCOE of the off-grid system versus the LCOE of grid extension — rather than simply comparing the LCOE of PV against the retail tariff.

If connecting a remote village to the grid requires expensive transmission/distribution infrastructure, off-grid PV can be economically preferable. The Punjab study illustrates this principle.

### 19.3 Hybrid

Hybrid economics are governed by the combined value of self-consumption, backup, peak shaving and export, relative to battery cost. The value of resilience is often omitted from simplistic payback calculations.

For a hospital, data center or manufacturing plant, one hour of outage can be worth much more than the electricity tariff.

## 20. Selection Framework

### Choose ON-GRID When:

- grid reliability is good;
- outages are acceptable;
- budget is constrained;
- battery backup is unnecessary;
- daytime electricity consumption is high;
- export compensation is attractive;
- simplicity is a priority.

**Best example**

A house with reliable grid electricity, daytime air-conditioning and a large daytime load.

### Choose OFF-GRID When:

- no grid exists;
- grid extension is prohibitively expensive;
- energy independence is essential;
- loads are moderate and controllable;
- backup generator fuel is expensive;
- reliable solar resource exists.

**Best example**

A remote agricultural or residential community several kilometers from practical grid infrastructure.

### Choose HYBRID When:

- grid exists but is unreliable;
- outages are frequent;
- electricity tariffs are high;
- export compensation is poor;
- evening demand is substantial;
- backup is important;
- the user wants resilience and high self-consumption.

**Best example**

A Pakistani household or business with frequent load shedding and high evening consumption.

## 21. Decision Matrix

| Condition | Recommended configuration |
|---|---|
| Reliable grid + lowest CAPEX | On-grid |
| Reliable grid + high daytime load | On-grid |
| Reliable grid + high export compensation | On-grid |
| Reliable grid + poor export compensation | On-grid with load shifting or hybrid |
| Frequent outages | Hybrid |
| Long outages | Hybrid with larger battery |
| No grid | Off-grid |
| Remote agriculture | Off-grid/hybrid |
| Critical facility | Hybrid/off-grid |
| Hospital | Hybrid + generator/advanced microgrid |
| Data center | Grid + BESS + redundant backup |
| Small rural home | Off-grid |
| Urban home with poor grid | Hybrid |
| Maximum energy independence | Off-grid/hybrid |
| Maximum simplicity | On-grid |

## 22. Environmental Comparison

| Impact | On-grid | Off-grid | Hybrid |
|---|---|---|---|
| Operational PV emissions | Very low | Very low | Very low |
| Battery manufacturing | None normally | High | Moderate–high |
| Battery replacement | None normally | Required | Required |
| Grid electricity displacement | High | Complete | High |
| Diesel backup | Optional | Often used | Optional |
| Recycling complexity | Moderate PV | PV + battery | PV + battery |
| Land use | Low for rooftops | Low–moderate | Low–moderate |
| Lifecycle complexity | Lowest | Highest | High |

The environmental superiority of PV does not eliminate lifecycle impacts. PV modules and batteries contain materials that require responsible manufacturing and end-of-life management. IEA analysis emphasizes the increasing importance of battery recycling as storage deployment expands.

## 23. Future Trends

### 23.1 Smart Hybrid Inverters

Hybrid inverters increasingly combine PV MPPT, battery management, grid-forming capability, backup, dynamic export control, demand response and remote monitoring.

### 23.2 Grid-Forming Inverters

Traditional grid-following inverters depend on an existing voltage/frequency reference. Grid-forming systems can establish voltage and frequency within an islanded microgrid and can therefore improve resilience and renewable penetration.

### 23.3 Virtual Power Plants

Thousands of residential PV + battery + EV + flexible-load systems can be aggregated into a virtual power plant. The aggregate system can provide frequency response, peak reduction, demand response, reserve capacity and energy arbitrage.

### 23.4 Artificial Intelligence

AI/advanced optimization can forecast solar output, household load, electricity prices, battery degradation and grid outages.

The EMS can then optimize battery dispatch.

### 23.5 Vehicle-to-Grid

EV batteries can potentially become distributed storage resources, with energy flowing between PV, home, grid, and EV in either direction. This may substantially increase the storage capacity available to buildings.

### 23.6 Advanced Batteries

Commercial development increasingly includes LFP, sodium-ion, solid-state concepts, flow batteries, zinc-based systems, and long-duration storage.

The IEA projects very rapid growth in battery storage, while IRENA reports that storage costs have fallen dramatically over the past decade.

### 23.7 Distributed Energy Resources

The IEA expects distributed PV to remain an important component of renewable expansion, particularly in countries with high retail electricity prices or unreliable grids. Its 2025 outlook specifically identifies Pakistan among countries where distributed solar deployment is expanding rapidly.

## 24. Overall Evidence-Based Assessment

### 24.1 Technical Conclusion

On-grid PV is the technically simplest architecture. It uses the grid as its energy-storage/balancing mechanism and therefore avoids battery complexity. Its major weakness is the inability of a conventional grid-following inverter to supply loads during grid outages.

Off-grid PV provides the greatest independence but transfers the responsibility for reliability from the utility to the system designer. Battery capacity, solar-resource uncertainty, load management and backup generation become critical design issues.

Hybrid PV provides the broadest functionality. It can combine direct solar consumption, battery storage, grid import, grid export, backup operation, peak shaving and load shifting. Its disadvantage is greater capital cost and control complexity.

### 24.2 Economic Conclusion

The traditional assumption that “the largest solar array is the best investment” is increasingly inappropriate. The correct optimization problem is to maximize the sum of self-consumption value, export value, backup value and peak-shaving value, minus CAPEX, OPEX and replacement cost.

For Pakistan, the 2026 transition to net billing makes this especially important. The large difference between the value of imported electricity and the 2026 NAEPP benchmark for exported electricity makes self-consumption and load shifting materially more important than under the previous 1:1 net-metering structure.

### 24.3 Reliability Conclusion

| Grid condition | Best general option |
|---|---|
| Excellent grid | On-grid |
| Occasional short outages | Hybrid |
| Frequent daily outages | Hybrid |
| Long outages | Hybrid with adequate battery + generator |
| No grid | Off-grid |
| Critical loads | Hybrid/microgrid |
| Remote community | Off-grid/hybrid |

### 24.4 Pakistan-Specific Conclusion

For a new Pakistani residential or commercial installation in 2026, the strongest general strategy is usually:

PV sized primarily around the customer’s own consumption, combined with intelligent load scheduling and appropriately sized battery storage where the value of backup and evening self-consumption justifies it.

This does not imply that every customer should install a battery. Where the grid is reliable and daytime demand is high, a simple on-grid system can remain the lowest-cost solution.

Conversely, where electricity outages are frequent and evening consumption is high, the additional cost of a hybrid inverter and LFP battery can provide two simultaneous benefits: increased solar self-consumption, and electricity availability during outages.

For a completely remote site, off-grid PV with battery storage remains the appropriate fundamental architecture, potentially supplemented by a generator or another renewable source for prolonged low-solar periods.

## 25. Recommended Engineering Design Philosophy

A professional feasibility study should follow this hierarchy:

### First: Reduce Consumption

Energy efficiency is generally cheaper than generating or storing additional electricity.

### Second: Maximize Direct Solar Consumption

Shift flexible loads such as water pumping, water heating, refrigeration, agricultural processing, EV charging and air-conditioning into solar-production periods.

### Third: Size PV

Use site-specific solar-resource and hourly-load analysis.

### Fourth: Evaluate Storage

Add batteries only where the combined value of backup, self-consumption and peak-shaving exceeds the battery lifecycle cost.

### Fifth: Evaluate Export

Do not assume exported electricity has the same value as self-consumed electricity.

### Sixth: Model Degradation and Replacements

A 25-year PV analysis must include module degradation, inverter replacement, battery replacement, maintenance, financing and tariff escalation.

### Seventh: Verify Regulations Before Investment

This is particularly important in Pakistan because the distributed-solar regulatory framework changed substantially in 2026.

## 26. Final Conclusion

On-grid, off-grid and hybrid solar PV systems are not competing technologies so much as different architectural solutions to different energy problems.

On-grid systems provide the best combination of simplicity, efficiency and low initial cost where electricity-grid reliability is good and solar exports retain sufficient economic value.

Off-grid systems provide maximum independence and are most appropriate where electricity networks are absent, unreliable over long periods, or prohibitively expensive to extend. Their central engineering challenge is balancing PV generation, battery capacity, demand and backup resources.

Hybrid systems offer the most flexible solution. They combine renewable generation with storage and grid connectivity and can provide self-consumption optimization, peak shaving, load shifting and backup power. Their economic attractiveness rises when grid electricity is expensive, export compensation is low, or outages have substantial economic consequences.

For Pakistan, the February 2026 transition from the historical net-metering regime to the Prosumer Regulations and net-billing framework is a particularly important development. New solar projects should not be evaluated using outdated 1:1 net-metering economics. The 2026 NAEPP of PKR 8.13/kWh reported by NEPRA is materially different from the value of electricity purchased by consumers, making self-consumption, energy management and appropriately sized storage increasingly important design variables. Existing consumers with valid agreements require separate regulatory analysis because of the 2026 transition provisions.

The evidence therefore supports the following final decision rule:

> Reliable grid + low need for backup → on-grid. No practical grid → off-grid. Unreliable grid + valuable loads + high retail electricity cost → hybrid.

The ultimate optimum should be established through hourly techno-economic simulation using actual load data, local solar-resource data, current utility tariffs, applicable export compensation, financing conditions, battery degradation and the latest interconnection requirements.

## References

International Energy Agency. (2025). *Renewables 2025.*

International Energy Agency. (2026). *Global Energy Review 2026.*

International Energy Agency. (2025). *Batteries and secure energy transitions.*

International Energy Agency Photovoltaic Power Systems Programme. (2025). *Trends in photovoltaic applications 2025.*

International Renewable Energy Agency. (2025). *Renewable power generation costs in 2024.*

National Electric Power Regulatory Authority. (2015). *NEPRA (Alternative & Renewable Energy) Distributed Generation and Net Metering Regulations, 2015, as amended.*

National Electric Power Regulatory Authority. (2026). *National Electric Power Regulatory Authority (Prosumer) Regulations, 2026, S.R.O. 251(I)/2026, 9 February 2026.*

National Electric Power Regulatory Authority. (2026). *Notification S.R.O. 547(I)/2026: Amendment to the Prosumer Regulations, 2026.* April 2026.

National Electric Power Regulatory Authority. (2026). *Power Purchase Price Forecast for CY 2026.*

National Electric Power Regulatory Authority. (2026). *Decision regarding federal-government motion and policy guidelines for rationalization of tariff.*

International Electrotechnical Commission. (2025). *IEC 60364-7-712:2025: Low-voltage electrical installations — Solar photovoltaic power supply installations.*

International Electrotechnical Commission. (2014). *IEC 62116:2014: Utility-interconnected photovoltaic inverters — Test procedure of islanding prevention measures.*

International Electrotechnical Commission. (2010). *IEC 62109-1:2010: Safety of power converters for use in photovoltaic power systems.*

International Electrotechnical Commission. (2016/2018). *IEC 62446-1:2016+A1:2018: Photovoltaic systems — Requirements for testing, documentation and maintenance.*

International Electrotechnical Commission. (2004). *IEC 61727:2004: Photovoltaic systems — Characteristics of the utility interface.*

IEEE Standards Association. (2018). *IEEE 1547-2018: Standard for interconnection and interoperability of distributed energy resources with associated electric power systems interfaces.*

Jordan, D. C., & Kurtz, S. R. (2013). Photovoltaic degradation rates—An analytical review. *Progress in Photovoltaics: Research and Applications, 21*(1), 12–29. https://doi.org/10.1002/pip.1182

Jordan, D. C., & Kurtz, S. R. (2015). Field performance of 1.7 GW of photovoltaic systems. *IEEE Journal of Photovoltaics, 5*(1), 243–249. https://doi.org/10.1109/JPHOTOV.2014.2361667

Irfan, M., Zhao, Z.-Y., Ahmad, M., & Rehman, A. (2019). A techno-economic analysis of off-grid solar PV system: A case study for Punjab Province in Pakistan. *Processes, 7*(10), 708.

Krebs, L., Frischknecht, R., Stolz, P., & Heath, G. (2020). *Environmental life cycle assessment of residential PV and battery storage systems: IEA PVPS Task 12.* IEA PVPS T12-17:2020. https://doi.org/10.2172/2308833

Schimpe, M., Naumann, M., Truong, N., Hesse, H. C., Santhanagopalan, S., Saxon, A., & Jossen, A. (2018). Energy efficiency evaluation of a stationary lithium-ion battery container storage system via electro-thermal modeling and detailed component analysis. *Applied Energy, 210.* https://doi.org/10.1016/j.apenergy.2017.10.129

World Bank. (2023). *Pakistan — Solar irradiation and PV power potential maps.*

World Bank. (2020). *Solar photovoltaic power potential by country.*

National Renewable Energy Laboratory. (2024). *Residential PV — Annual Technology Baseline.*

National Renewable Energy Laboratory. (2022). *PVWatts API and photovoltaic production modeling resources.*

National Renewable Energy Laboratory. (2021). *Residential battery storage — Annual Technology Baseline.*

National Renewable Energy Laboratory. (2022). *REopt optimizes residential solar-plus technologies behind the meter.*

IEA. (2025). *Geographical distribution of the LFP battery supply chain, 2024.*

IEA. (2024). *Battery lifecycle emissions by chemistry.*

IEA. (2024). *Outlook for battery demand and supply.*

## Important Research-Use Note

This report deliberately separates regulatory facts, published research results, and engineering assumptions. Numerical values used in the illustrative residential economic example are assumptions rather than quotations from the Pakistani market.

For an actual thesis, tender, bankable feasibility study or engineering design, the next step should be a site-specific model using the customer’s 12 months of electricity bills, preferably 15-minute/hourly load data, exact DISCO tariff, sanctioned load, roof geometry, Global Solar Atlas/PVsyst resource data, current equipment quotations, financing rate, and the latest NEPRA/DISCO interconnection documents. Pakistan’s 2026 distributed-solar framework is sufficiently dynamic that the applicable regulation should be verified immediately before financial close or equipment procurement.
