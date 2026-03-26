# Secure, Local-First AI Home Systems

A strong version of this business is not "smart home installer," but **"secure, local-first AI home systems"** with your son leading on doors, locks, strikes, access control, and then upselling the rest of the house.

Build it around **Home Assistant + Matter/Thread/Zigbee/Z-Wave + local Llama via Ollama**. That gives you one app, mostly local control, and an AI layer without depending on Alexa/Google for everything. Home Assistant officially supports Matter, Zigbee, Z-Wave, ESPHome, and an Ollama conversation agent that can control exposed devices through the Assist API.

**Core principle:** Every install — even Phase 1 — ships with a local AI brain. The AI is not a premium add-on; it's the product. It's what makes this different from "guy who installs smart switches."

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
| Motion sensor | Aqara FP300 (mmWave, battery) | Zigbee | 3 | $45 | $135 |
| | | | | **Hardware total** | **~$678** |

**Why these devices:**
- **Shelly 1PM Gen4:** Multi-protocol (Wi-Fi + Zigbee + Matter in one), 16A, power monitoring, fits in junction box. "Works with Home Assistant" certified. No better alternative exists.
- **Aqara FP300:** True presence sensing (detects stationary people, not just motion), battery-powered, includes temp/humidity/light sensors. Much better than a basic PIR.

### What the customer gets

- **AI home assistant** from day one: *"Turn off everything downstairs," "What lights are on?"*
- **Home definition:** *"What's set up in my house?"* — the AI describes every room and device
- Phone control of all lights
- Presence-activated lighting (hallways, bathrooms, stairs — knows you're there even sitting still)
- Schedules: lights on at sunset, off at bedtime
- Scenes: "Movie night," "Good morning," "Away mode" (random lights to simulate occupancy)
- Energy monitoring per circuit via Shelly
- Rewiring documentation: every relay mapped in the AI

### Pricing suggestion

| | |
|---|---|
| Hardware | ~$678 |
| Install labor (half day) | ~$300-500 |
| **Customer price** | **~$1,000-1,200** |
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

### Elderly / Assisted living

- Aqara FP2 wired presence sensors (~$55 each) for activity monitoring
- Fall-risk lighting (auto-on at night)
- Medication reminders via voice
- Family dashboard: remote visibility without cameras (privacy-preserving)
- AI check-ins: *"Good morning, it's going to be warm today"*

### Small office / Retail

- Access control with audit log (who entered when)
- Opening/closing routines
- Energy management and scheduling
- After-hours security mode
- AI receptionist: *"The office is closed, hours are 9 to 5"*

### Gate & Intercom (locksmith specialty)

- ESPHome on ESP32 (~$8-12 per board) for strike relays, gate controllers, tamper inputs
- Video intercom integration
- Remote gate release from phone
- Multi-tenant buzzer systems

---

## Full Device Stack Reference

| Category | Model | Protocol | Price |
|----------|-------|----------|-------|
| AI + Hub | Beelink EQR6 (Ryzen 5, 16GB) | N/A | $329 |
| Radio | HA Connect ZBT-2 | Zigbee/Thread | $30 |
| In-wall relay | Shelly 1PM Gen4 | Wi-Fi/Zigbee/Matter | $23 |
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
| 1 | Lighting + AI Brain | ~$678 | ~$300-500 | ~$1,000-1,200 | $20/mo |
| 2 | Entry Security | ~$380 | ~$200-400 | ~$600-800 | $25/mo |
| 3 | Whole-Home | ~$500-630 | ~$500-1,000 | ~$1,200-2,000 | $30/mo |
| 4 | Voice Endpoints | ~$163 | ~$200-400 | ~$400-600 | $35/mo |
| **All phases** | **Full house** | **~$1,720-1,850** | **~$1,200-2,300** | **~$3,200-4,600** | **$35/mo** |

---

## Network Requirements

Bad network = bad customer experience = support calls. Every install should include:

- **Network audit:** Test Wi-Fi coverage in all rooms with devices
- **Recommendation:** Mesh system if coverage is poor (TP-Link Deco ~$100-200, UniFi for premium ~$300+)
- **Wired where possible:** Hub and cameras on Ethernet, PoE for cameras
- **Separate IoT VLAN** on premium installs for security

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
