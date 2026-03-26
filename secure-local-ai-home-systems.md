# Secure, Local-First AI Home Systems

A strong version of this business is not "smart home installer," but **"secure, local-first AI home systems"** with your son leading on doors, locks, strikes, access control, and then upselling the rest of the house.

Build it around **Home Assistant + Matter/Thread/Zigbee/Z-Wave + local Llama via Ollama**. That gives you one app, mostly local control, and an AI layer without depending on Alexa/Google for everything. Home Assistant officially supports Matter, Zigbee, Z-Wave, ESPHome, and an Ollama conversation agent that can control exposed devices through the Assist API.

**Core principle:** Every install — even Phase 1 — ships with a local AI brain. The AI is not a premium add-on; it's the product. It's what makes this different from "guy who installs smart switches."

**New Zealand note:** position this as a locksmith-led smart-home business that partners with a **licensed NZ electrician** for fixed wiring, relay installs, testing, and certification where required.

---

## The AI Brain (Ships with Every Install)

Every customer gets a mini PC running Home Assistant + Ollama from day one. One box does everything.

### Hardware options

| Option | Hardware | Model | Response speed | Price |
|--------|----------|-------|----------------|-------|
| Standard | Beelink EQR6 (Ryzen 5 6600H, 16GB) | Llama 3.1 8B Q4 | Good, ~10-15 tok/s | ~$329 |
| Budget | CM5 8GB | Llama 3.2 3B or Phi-3 Mini | Usable, ~5 tok/s | ~$100 |
| Premium | Beelink EQR6 (32GB) or GPU box | Llama 3.1 8B full | Fast, 20+ tok/s | ~$400+ |

**Why the Beelink EQR6:** Ryzen 5 6600H has an integrated Radeon 660M GPU — significantly faster for Ollama inference than Intel N-series. Dual 2.5G LAN is useful for camera VLAN separation. Can run HA + Frigate + Ollama simultaneously. If budget allows, go 32GB RAM to avoid memory pressure.

### What the AI does from day one

- **Home definition dashboard:** Customer asks *"What's in my house?"* — gets a plain-English summary of every device, room, scene, and automation
- **Rewiring assistant:** During install, documents which relay controls which circuit. *"What does the kitchen relay control?"* — it knows
- **Natural language control:** *"Turn off the upstairs lights"* — no app hunting
- **Scene builder via conversation:** *"I want a movie mode"* — the AI creates the scene
- **Status and diagnostics:** *"Is anything offline?" "What's my energy usage today?"*
- **Install log:** Maintains a record of what was installed, when, and where
- **Maintenance reminders:** Tracks lock batteries, sensor batteries, and offline devices before they become support calls
- **Family routines:** Understands named routines like *"school morning," "Shabbat prep," "guest mode,"* or *"lock up the shop"*

### Safety rules (all phases)

- AI picks from a **fixed menu of scripts** — no freestyle device calls
- Dangerous actions (unlock, disarm, open gate) require **phone confirmation** or are excluded from AI entirely
- All processing is **local** — no voice data leaves the house

---

## Phase 1 — Smart Lighting + AI Brain

The entry point. The AI makes it feel premium from day one.

### Parts list

| Item | Model | Protocol | Qty (typical) | Unit price | Subtotal |
|------|-------|----------|---------------|------------|----------|
| AI + Hub | Beelink EQR6 (16GB/500GB) | N/A | 1 | $329 | $329 |
| Zigbee/Thread radio | Home Assistant Connect ZBT-2 | Zigbee/Thread | 1 | $30 | $30 |
| In-wall relay (lights) | Shelly 1PM Gen4 | Wi-Fi/Zigbee/Matter | 8 | $23 | $184 |
| Wall switch reuse + rewiring allowance | Existing switches kept in place | Electrical labor | 8 circuits | ~$10-20/circuit | ~$80-160 |
| Motion sensor | Aqara FP300 (mmWave, battery) | Zigbee | 3 | $45 | $135 |
| Voice endpoint | M5Stack ATOM Echo S3R | Wi-Fi/ESPHome | 1 | $15 | $15 |
| | | | | **Typical phase total before install labor** | **~$773-853** |

**Why these devices:**
- **Shelly 1PM Gen4:** Multi-protocol (Wi-Fi + Zigbee + Matter in one), 16A, power monitoring, fits in junction box. "Works with Home Assistant" certified. No better alternative exists.
- **Aqara FP300:** True presence sensing (detects stationary people, not just motion), battery-powered, includes temp/humidity/light sensors. Much better than a basic PIR.

### How the wall switches actually work

Most customers do **not** want touch panels everywhere. Keep the existing wall switches unless there is a reason to replace them.

- **Normal room, one switch / one group of lights:** Install one Shelly relay behind the switch. The wall switch still works normally, and the same lights also work from phone, voice, schedules, and scenes.
- **One switch controls a few lights together:** If those lights are on the **same electrical circuit**, one relay can control them as a group with no extra complexity.
- **One switch should control several different light circuits:** Put a relay on each circuit, then use the wall switch as an **input trigger** in Home Assistant. One press can turn on kitchen spots + island + dining lights together.
- **Two-way / three-way switching:** Keep the user experience simple. In some homes you can preserve the switching arrangement; in others it's cleaner to make one switch the real load controller and treat the second location as a scene/button input.
- **Customer-facing rule:** Physical switch always works first. Smart behavior is added on top, not instead of it.

### Example: one switch turns on a few lights

#### Option A — same circuit

If one wall switch already feeds three ceiling lights on the same load, use one relay:

- Switch on -> relay on -> all three lights on
- Switch off -> relay off -> all three lights off
- App/AI can also turn that whole group on or off

#### Option B — separate circuits, one-button scene

If the kitchen has separate circuits for spots, island, and dining:

- Install one relay per circuit
- Keep one wall switch as the user input
- In Home Assistant, map that switch to a scene like `kitchen_all_on`
- One tap turns on all three circuits
- A second tap can turn them all off, or a long-press can trigger a different scene

This is the right answer when the customer says, "I want this one switch to turn on a few different lights."

### What the customer gets

- **AI home assistant** from day one: *"Turn off everything downstairs," "What lights are on?"*
- **Voice from day one:** One ATOM Echo mic ships with every Phase 1 install — the installer uses it to document wiring hands-free, then it stays as the customer's first voice endpoint
- **Home definition:** *"What's set up in my house?"* — the AI describes every room and device
- Phone, voice, and wall-switch control of all lights
- Presence-activated lighting (hallways, bathrooms, stairs — knows you're there even sitting still)
- Schedules: lights on at sunset, off at bedtime
- Scenes: "Movie night," "Good morning," "Away mode" (random lights to simulate occupancy)
- Arrival scene: porch or hallway lights come on automatically when someone gets home after dark
- Smart vacancy shutoff: lights turn off when a room is empty, with overridable timer rules
- Energy monitoring per circuit via Shelly
- Rewiring documentation: every relay mapped in the AI

### Pricing suggestion

| | |
|---|---|
| Parts + rewiring allowance | ~$773-853 |
| Install labor (half day to full day) | ~$300-500 |
| **Customer price** | **~$1,100-1,350** |
| Monthly support (optional) | ~$20/mo |

---

## Phase 2 — Entry Security Upgrade

Add security at the front door. Your son's core strength. The AI brain is already there.

### Parts list

| Item | Model | Protocol | Qty | Unit price | Subtotal |
|------|-------|----------|-----|------------|----------|
| Smart lock | Aqara U200 | Matter over Thread | 1 | $200 | $200 |
| Door/window sensor | Aqara P2 | Matter over Thread | 4 | $20 | $80 |
| Doorbell camera | Reolink Video Doorbell PoE | Ethernet/RTSP | 1 | $100 | $100 |
| | | | | **Hardware total** | **~$380** |

**Why these devices:**
- **Aqara U200:** Native Matter over Thread — no proprietary bridge needed. Rechargeable battery (6 months per charge), Apple Home Key + fingerprint + NFC + PIN. The first truly local smart lock.
- **Aqara P2:** Same Thread/Matter ecosystem, ~$20 each, fast and reliable.
- **Reolink Doorbell PoE:** Local storage, RTSP stream, no subscription. Good enough for the front door; Phase 3 upgrades to Dahua/Frigate.

### What the customer gets

- Lock/unlock from phone, auto-lock on schedule
- *"Is the front door locked?"* — ask the AI anytime
- "Who's at the door" notifications with camera snapshot
- Door left open alerts
- "Away mode" now includes: lights simulate occupancy + doors locked + camera active
- Guest access: temporary codes for cleaners, dog walkers, family
- AI knows the full security state: *"Is the house secure?"*
- Panic scene: one action turns on exterior lights, records cameras, and sends alerts
- Child-safe reminders: alert if the front door opens during defined overnight hours

### Pricing suggestion

| | |
|---|---|
| Hardware | ~$380 |
| Install labor (2-4 hours) | ~$200-400 |
| **Customer price** | **~$600-800** |
| Monthly support | ~$25/mo |

---

## Phase 3 — Whole-Home Automation

Expand to the full house. Upgrade cameras to Frigate for AI-powered detection.

### Parts list

| Item | Model | Protocol | Qty (typical) | Unit price | Subtotal |
|------|-------|----------|---------------|------------|----------|
| PoE cameras | Dahua IPC-HDW 4-5MP turret | Ethernet/RTSP | 3 | $70 | $210 |
| Garage/gate relay | Shelly 1PM Gen4 | Wi-Fi/Zigbee/Matter | 2 | $23 | $46 |
| Climate relay or thermostat | Shelly 1PM Gen4 or smart thermostat | varies | 1 | $23-150 | $23-150 |
| Water leak sensor | Aqara Water Leak Sensor T1 | Zigbee | 3 | $18 | $54 |
| Additional door sensors | Aqara P2 | Matter over Thread | 4 | $20 | $80 |
| Coral USB accelerator (for Frigate) | Google Coral USB | USB | 1 | $35 | $35 |
| PoE switch | TP-Link TL-SG1008P (8-port) | Ethernet | 1 | $55 | $55 |
| | | | | **Hardware total** | **~$500-630** |

**Why these devices:**
- **Dahua 4-5MP PoE:** Frigate's #1 recommended brand. Rock-solid RTSP, configurable sub-streams (high-res for recording, low-res for detection). Much better than Reolink at 4K+ which has stream reliability issues with Frigate.
- **Google Coral USB:** Offloads AI object detection for Frigate — person/car/animal detection without taxing the mini PC CPU.
- **Aqara Water Leak T1:** Cheap insurance. Catches leaks before they become damage.

### What the customer gets

- AI-powered camera detection: *"Person detected in driveway"* (via Frigate + Coral)
- Full house scenes via AI: *"Good night"* → locks doors, closes garage, turns off lights, arms cameras, sets thermostat
- *"Open the garage" / "Is the garage closed?"*
- Climate schedules and presence-based heating/cooling
- Camera feeds in the app — no cloud subscription, no monthly fee
- Leak detection alerts before damage happens
- AI daily summary: *"Last night: all doors locked at 11pm, garage closed, no alerts, energy usage 12kWh"*
- Package and visitor summaries: AI can tell the customer if someone came to the front door or a delivery arrived
- Utility protection: optional water-main or heater shutdown automation when a leak sensor triggers

### Pricing suggestion

| | |
|---|---|
| Hardware | ~$500-630 |
| Install labor (1-2 days) | ~$500-1,000 |
| **Customer price** | **~$1,200-2,000** |
| Monthly support | ~$30/mo |

---

## Phase 4 — Voice Endpoints

The AI brain gets ears and a mouth throughout the house.

### Parts list

| Item | Model | Protocol | Qty (typical) | Unit price | Subtotal |
|------|-------|----------|---------------|------------|----------|
| Voice (premium rooms) | HA Voice Preview Edition | Wi-Fi/ESPHome | 2 | $59 | $118 |
| Voice (other rooms) | M5Stack ATOM Echo S3R | Wi-Fi/ESPHome | 3 | $15 | $45 |
| | | | | **Hardware total** | **~$163** |

**Why these devices:**
- **HA Voice Preview Edition:** Purpose-built for HA, best microphone array + speaker, display. For kitchen and living room.
- **M5Stack ATOM Echo S3R:** $15 per unit — deploy everywhere cheaply. Flash with ESPHome, acts as a Wyoming voice satellite. For bedrooms, bathrooms, hallways.

### What the customer gets

- Hands-free voice in every room: *"Hey house, lock up and turn on the porch light"*
- No cloud dependency — Alexa/Google not needed
- AI proactive alerts via voice: *"The back door has been open for 10 minutes"*
- Natural language queries: *"Was the garage open last night?"*
- Follow-up conversation: *"Turn on kitchen lights to 30%"* then *"make them warmer"* without opening an app
- Spoken help mode: *"How do I arm away mode?"* or *"What does this switch do?"*

### Pricing suggestion

| | |
|---|---|
| Hardware | ~$163 |
| Setup + configuration | ~$200-400 |
| **Customer price** | **~$400-600** |
| Monthly support | ~$35/mo |

---

## Phase 5 — Specialty & Commercial Upgrades

Targeted add-ons for specific customer profiles.

### Airbnb / Short-term rental

- Auto-generated guest access codes per booking
- Check-in/check-out automations (lights, thermostat, lock codes)
- Turnover alerts for cleaning crew
- Energy tracking per stay
- AI guest guide: *"How do I use the pool heater?"*
- Cleaner mode: one tap turns on only the lights and access needed for turnovers

### Elderly / Assisted living

- Aqara FP2 wired presence sensors (~$55 each) for activity monitoring
- Fall-risk lighting (auto-on at night)
- Medication reminders via voice
- Family dashboard: remote visibility without cameras (privacy-preserving)
- AI check-ins: *"Good morning, it's going to be warm today"*
- Inactivity alerts: if there is no normal morning movement, notify family or caregiver

### Small office / Retail

- Access control with audit log (who entered when)
- Opening/closing routines
- Energy management and scheduling
- After-hours security mode
- AI receptionist: *"The office is closed, hours are 9 to 5"*
- Staff mode: one command prepares the office for opening, another secures everything at close

### Gate & Intercom (locksmith specialty)

- ESPHome on ESP32 (~$8-12 per board) for strike relays, gate controllers, tamper inputs
- Video intercom integration
- Remote gate release from phone
- Multi-tenant buzzer systems

---

## Extra High-Value Features to Offer

These are excellent upsells because customers understand them immediately.

### Safety & convenience

- **Panic mode:** One phone button or hidden trigger turns on selected lights, records cameras, and sends alerts
- **Night path lighting:** Bed to bathroom lighting at low brightness, no blinding overhead lights
- **Door left open intelligence:** Different response for "front door open 30 seconds" vs "garage side door open 20 minutes"
- **Vacation simulation:** AI varies lights and occupancy patterns so the house does not look empty

### Maintenance & support

- **Battery watch:** Alert before lock, sensor, or voice devices die
- **Offline device report:** Weekly summary of weak or unreliable devices
- **Remote support dashboard:** Support customers can get quick troubleshooting without a site visit
- **Install memory:** Every switch, relay, scene, and automation is documented for future service calls

### Family-friendly automation

- **Arrival mode:** First family member home can trigger lights, hallway AC, and disarm selected routines
- **Guest mode:** Gives visitors the right lights and access without exposing the whole system
- **Quiet hours:** Reduces spoken notifications or bright automations late at night
- **Kids routine:** Alerts if exterior doors or gates open at unusual times

---

## Simple Wiring Example for Sales Conversations

This is not a permit drawing. It is a simple explanation your son can use with customers.

### Case 1: one switch controls one group of lights

```text
Power -> wall switch -> Shelly relay -> ceiling lights
```

What the customer should understand:

- The wall switch stays in place
- The relay is hidden behind the switch or in an accessible box
- The same lights can now be controlled by:
  - the wall switch
  - the Home Assistant app
  - voice
  - schedules and scenes

### Case 2: one switch should turn on several separate lighting circuits

```text
Power -> Switch input ---------------> Home Assistant automation
Power -> Shelly relay A -------------> Kitchen spots
Power -> Shelly relay B -------------> Island pendants
Power -> Shelly relay C -------------> Dining lights

Switch pressed -> automation runs -> A + B + C turn on together
```

What the customer should understand:

- The one switch becomes the trigger
- Each lighting circuit stays safely wired and independently controlled
- One tap can turn on multiple circuits together
- A second tap, double-tap, or long-press can run different scenes

### Suggested installer rule

If multiple lights are already on one circuit, keep it simple and use one relay.

If the customer wants one switch to coordinate multiple independent circuits, use separate relays and let Home Assistant handle the scene logic.

---

## Sample Quote: 3-Bedroom Home (New Zealand)

Example home:

- 3 bedrooms
- living room
- kitchen + dining area
- 2 bathrooms
- entry hallway
- front door

### Phase 1 quote — lighting + AI brain

Pricing note:

- The original device list above uses rough USD planning prices
- For New Zealand quoting, convert to **NZD**, then add margin for shipping, importer pricing, and stock variation
- Use **1 USD ~= 1.69 NZD** as a planning reference, not a final buy price
- Fixed wiring should be quoted with an electrician allowance, not hidden inside device cost

Assume:

- 10 lighting circuits
- 4 presence sensors
- existing wall switches reused
- one special scene in kitchen/dining where one switch controls a few light groups

| Item | Qty | Unit | Subtotal |
|------|-----|------|----------|
| Beelink EQR6 mini PC | 1 | ~NZ$560 | ~NZ$560 |
| Home Assistant Connect ZBT-2 | 1 | ~NZ$50 | ~NZ$50 |
| Shelly 1PM Gen4 relays | 10 | ~NZ$39 | ~NZ$390 |
| Aqara FP300 presence sensors | 4 | ~NZ$76 | ~NZ$304 |
| M5Stack ATOM Echo S3R (voice) | 1 | ~NZ$25 | ~NZ$25 |
| Rewiring / switch adaptation allowance | 10 circuits | ~NZ$25 | ~NZ$250 |
| Scene programming + documentation allowance | 1 | ~NZ$170 | ~NZ$170 |
| | | **Parts + setup subtotal** | **~NZ$1,749** |

Install labor suggestion:

- Smart-home setup and commissioning: ~NZ$400-700
- Electrician allowance for switching/relay work: ~NZ$700-1,100

Suggested customer quote:

- **Phase 1 total:** **~NZ$2,850-3,550**

What the customer gets:

- Smart control of 10 lighting circuits
- Existing wall switches still work
- Presence automation in hallway, bathrooms, and entry
- Arrival lighting after dark
- Away mode and good-night scene
- AI assistant that knows the room layout and device map

### Phase 2 add-on quote — entry security

| Item | Qty | Unit | Subtotal |
|------|-----|------|----------|
| Aqara U200 smart lock | 1 | ~NZ$340 | ~NZ$340 |
| Aqara P2 door/window sensors | 4 | ~NZ$34 | ~NZ$136 |
| Reolink Doorbell PoE | 1 | ~NZ$170 | ~NZ$170 |
| Security setup and automations | 1 | ~NZ$200 | ~NZ$200 |
| | | **Parts + setup subtotal** | **~NZ$846** |

Install labor suggestion:

- Locksmith / door hardware install: ~NZ$300-500
- Setup and commissioning: ~NZ$150-250

Suggested customer quote:

- **Phase 2 add-on:** **~NZ$1,300-1,650**

### Full starter package for this home

- **Phase 1 + Phase 2 combined:** **~NZ$4,150-5,200**

This is a strong real-world starter package for a family home because it gives them daily value from lighting and visible value from front-door security.

---

## Full Device Stack Reference

| Category | Model | Protocol | Price |
|----------|-------|----------|-------|
| AI + Hub | Beelink EQR6 (Ryzen 5, 16GB) | N/A | $329 |
| Radio | HA Connect ZBT-2 | Zigbee/Thread | $30 |
| In-wall relay | Shelly 1PM Gen4 | Wi-Fi/Zigbee/Matter | $23 |
| Existing wall switch reuse | Standard rocker/toggle switch | wired input | usually reused |
| Smart lock | Aqara U200 | Matter over Thread | $200 |
| Door/window sensor | Aqara P2 | Matter over Thread | $20 |
| Presence sensor (battery) | Aqara FP300 (mmWave) | Zigbee | $45 |
| Presence sensor (wired) | Aqara FP2 (mmWave) | Wi-Fi | $55 |
| Camera (PoE) | Dahua IPC-HDW 4-5MP | Ethernet/RTSP | $70 |
| AI detection accelerator | Google Coral USB | USB | $35 |
| Voice (premium) | HA Voice Preview Edition | Wi-Fi/ESPHome | $59 |
| Voice (budget) | M5Stack ATOM Echo S3R | Wi-Fi/ESPHome | $15 |
| Water leak sensor | Aqara T1 | Zigbee | $18 |
| Custom jobs | ESP32 + ESPHome | Wi-Fi | $8-12 |

---

## Cumulative Investment per Phase (Typical Home)

| Phase | What | Hardware | Install | Customer price | Monthly |
|-------|------|----------|---------|----------------|---------|
| 1 | Lighting + AI Brain + Voice | ~$773-853 | ~$300-500 | ~$1,100-1,350 | $20/mo |
| 2 | Entry Security | ~$380 | ~$200-400 | ~$600-800 | $25/mo |
| 3 | Whole-Home | ~$500-630 | ~$500-1,000 | ~$1,200-2,000 | $30/mo |
| 4 | Voice Endpoints | ~$163 | ~$200-400 | ~$400-600 | $35/mo |
| **All phases** | **Full house** | **~$1,815-2,025** | **~$1,200-2,300** | **~$3,300-4,750** | **$35/mo** |

---

## Network Requirements

Bad network = bad customer experience = support calls. Every install should include:

- **Network audit:** Test Wi-Fi coverage in all rooms with devices
- **Recommendation:** Mesh system if coverage is poor (TP-Link Deco ~$100-200, UniFi for premium ~$300+)
- **Wired where possible:** Hub and cameras on Ethernet, PoE for cameras
- **Separate IoT VLAN** on premium installs for security

---

## New Zealand Operating Notes

- Quote customers in **NZD**
- Decide whether your published prices are **GST-inclusive**; New Zealand GST is **15%**
- Partner with a **licensed electrician** for relay installs, switch rewiring, new circuits, testing, and certification
- Keep records of any electrical certificates provided for fixed wiring work
- Position the company as:
  - locksmith and access-control specialist
  - smart-home designer and automation provider
  - electrician-partnered for compliant wiring work

---

## Backup & Recovery

- **Automated Home Assistant backups** to USB or NAS — weekly minimum
- **Document every install:** the AI maintains the device list, network map, scripts, and config
- **Spare hub policy:** For support customers, keep a pre-imaged backup SD card — swap and restore in under an hour

---

## Business Model

### Revenue streams

1. **Hardware + install** — one-time, per phase
2. **Monthly support** — remote troubleshooting, updates, seasonal adjustments, new automations ($20-35/mo)
3. **Phase upgrades** — each phase is an upsell from the last
4. **Annual service visit** — physical check, firmware updates, battery replacements, network health (~$150-200)

### The AI as a sales tool

The AI is present from Phase 1. Every interaction reminds the customer what the system can do — and what it could do with more devices:

- *"You asked about the garage door — I could control that with a Shelly relay"*
- Home definition shows what's connected and what could be: *"You have 8 lights and 3 presence sensors. Your garage, front gate, and 3 exterior doors aren't connected yet."*

### Competitive advantage

Your son's edge is **trust at the door**. A locksmith who also does smart home — with a local AI — is rare and valuable.

### Growth path

Phase 1 (lights + AI) → customer uses AI daily → AI surfaces upgrade opportunities → Phase 2 (security) → Phase 3 (whole house) → Phase 4 (voice) → specialty packages → recurring monthly revenue on every customer.

### Revenue example (10 customers/month)

| | Per customer | 10 customers/mo |
|---|---|---|
| Phase 1 install | ~$1,100 | $11,000/mo |
| Phase 2 upsell (60% convert) | ~$700 | $4,200/mo |
| Monthly support (cumulative) | $20-35/mo each | grows monthly |
| Year 1 monthly recurring (120 customers) | | ~$2,400-4,200/mo |
