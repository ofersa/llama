const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");

// Icons
const { FaShieldAlt, FaLightbulb, FaLock, FaHome, FaMicrophone, FaBrain, FaUsers, FaChartLine, FaArrowRight, FaCheckCircle, FaComments, FaDollarSign, FaWifi, FaEye, FaKey, FaThermometerHalf, FaVideo, FaTint, FaCar, FaBed, FaBuilding, FaSuitcase, FaHeart, FaStore, FaDoorOpen, FaPlug, FaPhoneAlt } = require("react-icons/fa");
const { MdSecurity, MdSmartToy, MdPrivacyTip } = require("react-icons/md");

function renderIconSvg(IconComponent, color = "#000000", size = 256) {
  return ReactDOMServer.renderToStaticMarkup(
    React.createElement(IconComponent, { color, size: String(size) })
  );
}

async function iconToBase64Png(IconComponent, color, size = 256) {
  const svg = renderIconSvg(IconComponent, color, size);
  const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();
  return "image/png;base64," + pngBuffer.toString("base64");
}

// Color palette — Midnight/Teal theme
const C = {
  darkBg: "0F1B2D",       // deep navy
  medBg: "162A45",         // medium navy
  cardBg: "1C3352",        // card background
  accent: "00D4AA",        // teal/mint accent
  accentDim: "0A8F75",     // dimmer accent
  white: "FFFFFF",
  lightText: "B8C9DE",     // muted light text
  dimText: "7A8FA6",       // dim text
  warmAccent: "FFB74D",    // warm orange for highlights
  red: "FF6B6B",           // for problem slide
  green: "4ADE80",         // green for checkmarks
};

const FONT_H = "Georgia";
const FONT_B = "Calibri";

// Helper: fresh shadow factory
const cardShadow = () => ({ type: "outer", blur: 8, offset: 3, angle: 135, color: "000000", opacity: 0.3 });

async function main() {
  let pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "AI Home Systems";
  pres.title = "Secure, Local-First AI Home Systems";

  // Pre-render all icons
  const icons = {
    shield: await iconToBase64Png(FaShieldAlt, `#${C.accent}`, 256),
    lightbulb: await iconToBase64Png(FaLightbulb, `#${C.warmAccent}`, 256),
    lock: await iconToBase64Png(FaLock, `#${C.accent}`, 256),
    home: await iconToBase64Png(FaHome, `#${C.accent}`, 256),
    mic: await iconToBase64Png(FaMicrophone, `#${C.accent}`, 256),
    brain: await iconToBase64Png(FaBrain, `#${C.accent}`, 256),
    users: await iconToBase64Png(FaUsers, `#${C.accent}`, 256),
    chart: await iconToBase64Png(FaChartLine, `#${C.accent}`, 256),
    arrow: await iconToBase64Png(FaArrowRight, `#${C.accent}`, 256),
    check: await iconToBase64Png(FaCheckCircle, `#${C.green}`, 256),
    comments: await iconToBase64Png(FaComments, `#${C.accent}`, 256),
    dollar: await iconToBase64Png(FaDollarSign, `#${C.warmAccent}`, 256),
    wifi: await iconToBase64Png(FaWifi, `#${C.red}`, 256),
    eye: await iconToBase64Png(FaEye, `#${C.red}`, 256),
    key: await iconToBase64Png(FaKey, `#${C.accent}`, 256),
    thermo: await iconToBase64Png(FaThermometerHalf, `#${C.accent}`, 256),
    video: await iconToBase64Png(FaVideo, `#${C.accent}`, 256),
    tint: await iconToBase64Png(FaTint, `#${C.accent}`, 256),
    car: await iconToBase64Png(FaCar, `#${C.accent}`, 256),
    bed: await iconToBase64Png(FaBed, `#${C.accent}`, 256),
    building: await iconToBase64Png(FaBuilding, `#${C.accent}`, 256),
    suitcase: await iconToBase64Png(FaSuitcase, `#${C.warmAccent}`, 256),
    heart: await iconToBase64Png(FaHeart, `#${C.warmAccent}`, 256),
    store: await iconToBase64Png(FaStore, `#${C.warmAccent}`, 256),
    door: await iconToBase64Png(FaDoorOpen, `#${C.accent}`, 256),
    plug: await iconToBase64Png(FaPlug, `#${C.warmAccent}`, 256),
    phone: await iconToBase64Png(FaPhoneAlt, `#${C.accent}`, 256),
    checkWhite: await iconToBase64Png(FaCheckCircle, `#${C.white}`, 256),
    brainWhite: await iconToBase64Png(FaBrain, `#${C.white}`, 256),
    shieldWhite: await iconToBase64Png(FaShieldAlt, `#${C.white}`, 256),
  };

  // ============================================================
  // SLIDE 1: Title
  // ============================================================
  let s1 = pres.addSlide();
  s1.background = { color: C.darkBg };
  // Accent bar at top
  s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.accent } });
  // Icon
  s1.addImage({ data: icons.shield, x: 4.4, y: 0.8, w: 1.2, h: 1.2 });
  // Title
  s1.addText("Secure, Local-First\nAI Home Systems", {
    x: 0.5, y: 2.1, w: 9, h: 1.6, fontSize: 40, fontFace: FONT_H,
    color: C.white, bold: true, align: "center", lineSpacingMultiple: 1.1
  });
  // Tagline
  s1.addText("Your home. Your data. One app. No cloud.", {
    x: 0.5, y: 3.8, w: 9, h: 0.5, fontSize: 18, fontFace: FONT_B,
    color: C.accent, align: "center", italic: true
  });
  // Bottom line
  s1.addShape(pres.shapes.RECTANGLE, { x: 3, y: 4.6, w: 4, h: 0.01, fill: { color: C.accentDim } });
  // Sub-tagline
  s1.addText("Professional installation by a locksmith you trust", {
    x: 0.5, y: 4.8, w: 9, h: 0.4, fontSize: 14, fontFace: FONT_B,
    color: C.lightText, align: "center"
  });

  // ============================================================
  // SLIDE 2: The Problem
  // ============================================================
  let s2 = pres.addSlide();
  s2.background = { color: C.darkBg };
  s2.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.accent } });
  s2.addText("The Problem with Smart Homes Today", {
    x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 32, fontFace: FONT_H,
    color: C.white, bold: true, align: "left", margin: 0
  });

  // Four problem cards in 2x2 grid
  const problems = [
    { icon: icons.wifi, title: "Fragmented Ecosystem", desc: "Five apps for five brands. Nothing talks to anything." },
    { icon: icons.eye, title: "Cloud Dependency", desc: "Your lights stop working when Amazon's servers go down." },
    { icon: icons.lock, title: "Privacy Concerns", desc: "Your voice recordings stored on corporate servers forever." },
    { icon: icons.key, title: "No One You Trust", desc: "IT guys who don't understand physical security at your door." },
  ];

  problems.forEach((p, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.7;
    const y = 1.3 + row * 1.9;
    // Card bg
    s2.addShape(pres.shapes.RECTANGLE, { x, y, w: 4.3, h: 1.6, fill: { color: C.cardBg }, shadow: cardShadow() });
    // Icon
    s2.addImage({ data: p.icon, x: x + 0.25, y: y + 0.3, w: 0.5, h: 0.5 });
    // Title
    s2.addText(p.title, {
      x: x + 0.9, y: y + 0.2, w: 3.1, h: 0.4, fontSize: 16, fontFace: FONT_B,
      color: C.warmAccent, bold: true, margin: 0
    });
    // Description
    s2.addText(p.desc, {
      x: x + 0.9, y: y + 0.65, w: 3.1, h: 0.7, fontSize: 13, fontFace: FONT_B,
      color: C.lightText, margin: 0
    });
  });

  // ============================================================
  // SLIDE 3: The Solution
  // ============================================================
  let s3 = pres.addSlide();
  s3.background = { color: C.darkBg };
  s3.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.accent } });
  s3.addText("The Solution", {
    x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 32, fontFace: FONT_H,
    color: C.white, bold: true, align: "left", margin: 0
  });

  // Three pillars
  const pillars = [
    { icon: icons.brain, title: "Local AI Brain", desc: "A private AI that lives in your home. No cloud. Ask it anything about your house." },
    { icon: icons.shield, title: "Professional Install", desc: "Installed by a licensed locksmith. Physical security meets smart technology." },
    { icon: icons.home, title: "One System, One App", desc: "Everything in Home Assistant. Lights, locks, cameras, voice — one app controls it all." },
  ];

  pillars.forEach((p, i) => {
    const x = 0.5 + i * 3.15;
    // Card
    s3.addShape(pres.shapes.RECTANGLE, { x, y: 1.3, w: 2.85, h: 3.5, fill: { color: C.cardBg }, shadow: cardShadow() });
    // Accent top bar
    s3.addShape(pres.shapes.RECTANGLE, { x, y: 1.3, w: 2.85, h: 0.05, fill: { color: C.accent } });
    // Icon
    s3.addImage({ data: p.icon, x: x + 1.05, y: 1.7, w: 0.75, h: 0.75 });
    // Title
    s3.addText(p.title, {
      x: x + 0.2, y: 2.65, w: 2.45, h: 0.45, fontSize: 17, fontFace: FONT_B,
      color: C.white, bold: true, align: "center", margin: 0
    });
    // Description
    s3.addText(p.desc, {
      x: x + 0.2, y: 3.2, w: 2.45, h: 1.2, fontSize: 13, fontFace: FONT_B,
      color: C.lightText, align: "center", margin: 0
    });
  });

  // ============================================================
  // SLIDE 4: How It Works
  // ============================================================
  let s4 = pres.addSlide();
  s4.background = { color: C.darkBg };
  s4.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.accent } });
  s4.addText("How It Works", {
    x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 32, fontFace: FONT_H,
    color: C.white, bold: true, align: "left", margin: 0
  });

  // Flow: 3 steps horizontal
  const steps = [
    { num: "1", title: "One Small Box", desc: "A mini PC running Home Assistant + Llama AI. Sits next to your router." },
    { num: "2", title: "Smart Devices Connect", desc: "Lights, locks, sensors, cameras — all talk to the box via Zigbee, Thread, or Wi-Fi." },
    { num: "3", title: "Talk to Your House", desc: "Ask in plain English: \"Turn off the lights\" or \"Is the house secure?\"" },
  ];

  steps.forEach((s, i) => {
    const x = 0.5 + i * 3.15;
    // Number circle
    s4.addShape(pres.shapes.OVAL, { x: x + 1.05, y: 1.3, w: 0.75, h: 0.75, fill: { color: C.accent } });
    s4.addText(s.num, {
      x: x + 1.05, y: 1.3, w: 0.75, h: 0.75, fontSize: 28, fontFace: FONT_H,
      color: C.darkBg, bold: true, align: "center", valign: "middle", margin: 0
    });
    // Title
    s4.addText(s.title, {
      x: x + 0.1, y: 2.25, w: 2.65, h: 0.45, fontSize: 17, fontFace: FONT_B,
      color: C.white, bold: true, align: "center", margin: 0
    });
    // Description
    s4.addText(s.desc, {
      x: x + 0.1, y: 2.8, w: 2.65, h: 1.0, fontSize: 13, fontFace: FONT_B,
      color: C.lightText, align: "center", margin: 0
    });
    // Arrow between steps
    if (i < 2) {
      s4.addImage({ data: icons.arrow, x: x + 2.85, y: 1.45, w: 0.4, h: 0.4 });
    }
  });

  // Example conversation box at bottom
  s4.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: 4.0, w: 8.4, h: 1.2, fill: { color: C.cardBg }, shadow: cardShadow() });
  s4.addImage({ data: icons.comments, x: 1.1, y: 4.25, w: 0.5, h: 0.5 });
  s4.addText([
    { text: "You: ", options: { color: C.accent, bold: true } },
    { text: "\"Good night\"", options: { color: C.white, italic: true, breakLine: true } },
    { text: "AI: ", options: { color: C.warmAccent, bold: true } },
    { text: "\"Front door locked, garage closed, downstairs lights off, alarm armed.\"", options: { color: C.lightText, italic: true } },
  ], {
    x: 1.8, y: 4.15, w: 7.1, h: 0.9, fontSize: 14, fontFace: FONT_B, margin: 0
  });

  // ============================================================
  // SLIDE 5: Phase 1 — Smart Lighting + AI Brain
  // ============================================================
  let s5 = pres.addSlide();
  s5.background = { color: C.darkBg };
  s5.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.accent } });
  s5.addText("Phase 1", {
    x: 0.5, y: 0.2, w: 2, h: 0.4, fontSize: 13, fontFace: FONT_B,
    color: C.accent, bold: true, margin: 0
  });
  s5.addText("Smart Lighting + AI Brain", {
    x: 0.5, y: 0.5, w: 6, h: 0.6, fontSize: 28, fontFace: FONT_H,
    color: C.white, bold: true, margin: 0
  });

  // Left: what you get
  s5.addImage({ data: icons.lightbulb, x: 0.5, y: 1.3, w: 0.4, h: 0.4 });
  s5.addText("What You Get", {
    x: 1.0, y: 1.3, w: 3, h: 0.4, fontSize: 16, fontFace: FONT_B,
    color: C.warmAccent, bold: true, margin: 0
  });
  const phase1Items = [
    "AI assistant from day one — talk to your house",
    "Phone control of every light",
    "Presence-activated lighting (mmWave sensors)",
    "Automated schedules & scenes",
    "Energy monitoring per circuit",
    "\"Away mode\" — simulates occupancy",
  ];
  s5.addText(phase1Items.map((t, i) => ({
    text: t, options: { bullet: true, breakLine: i < phase1Items.length - 1, color: C.lightText }
  })), {
    x: 0.7, y: 1.8, w: 4.3, h: 2.6, fontSize: 12.5, fontFace: FONT_B, margin: 0
  });

  // Right: parts & price card
  s5.addShape(pres.shapes.RECTANGLE, { x: 5.5, y: 1.3, w: 4.2, h: 3.0, fill: { color: C.cardBg }, shadow: cardShadow() });
  s5.addText("Parts & Pricing", {
    x: 5.7, y: 1.45, w: 3.8, h: 0.35, fontSize: 15, fontFace: FONT_B,
    color: C.white, bold: true, margin: 0
  });

  const phase1Parts = [
    ["Beelink Mini PC (AI + Hub)", "$329"],
    ["Connect ZBT-2 Radio", "$30"],
    ["Shelly 1PM Gen4 x8 (relays)", "$184"],
    ["Aqara FP300 x3 (presence)", "$135"],
  ];
  phase1Parts.forEach((p, i) => {
    s5.addText(p[0], {
      x: 5.7, y: 1.95 + i * 0.35, w: 2.8, h: 0.3, fontSize: 11.5, fontFace: FONT_B,
      color: C.lightText, margin: 0
    });
    s5.addText(p[1], {
      x: 8.6, y: 1.95 + i * 0.35, w: 0.9, h: 0.3, fontSize: 11.5, fontFace: FONT_B,
      color: C.white, bold: true, align: "right", margin: 0
    });
  });
  // Divider
  s5.addShape(pres.shapes.RECTANGLE, { x: 5.7, y: 3.4, w: 3.8, h: 0.01, fill: { color: C.dimText } });
  // Total
  s5.addText("Hardware total", {
    x: 5.7, y: 3.5, w: 2.8, h: 0.3, fontSize: 12, fontFace: FONT_B,
    color: C.accent, bold: true, margin: 0
  });
  s5.addText("~$678", {
    x: 8.3, y: 3.5, w: 1.2, h: 0.3, fontSize: 12, fontFace: FONT_B,
    color: C.accent, bold: true, align: "right", margin: 0
  });

  // Price callout at bottom
  s5.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.5, w: 9, h: 0.85, fill: { color: C.medBg } });
  s5.addText("Starting at", {
    x: 0.8, y: 4.55, w: 2, h: 0.35, fontSize: 12, fontFace: FONT_B, color: C.dimText, margin: 0
  });
  s5.addText("$1,000 – $1,200", {
    x: 0.8, y: 4.82, w: 3, h: 0.45, fontSize: 24, fontFace: FONT_H, color: C.accent, bold: true, margin: 0
  });
  s5.addText("installed  |  $20/mo optional support", {
    x: 4.0, y: 4.85, w: 5, h: 0.4, fontSize: 13, fontFace: FONT_B, color: C.lightText, margin: 0
  });

  // ============================================================
  // SLIDE 6: Phase 2 — Entry Security
  // ============================================================
  let s6 = pres.addSlide();
  s6.background = { color: C.darkBg };
  s6.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.accent } });
  s6.addText("Phase 2", {
    x: 0.5, y: 0.2, w: 2, h: 0.4, fontSize: 13, fontFace: FONT_B,
    color: C.accent, bold: true, margin: 0
  });
  s6.addText("Entry Security", {
    x: 0.5, y: 0.5, w: 6, h: 0.6, fontSize: 28, fontFace: FONT_H,
    color: C.white, bold: true, margin: 0
  });

  // Left: features
  s6.addImage({ data: icons.lock, x: 0.5, y: 1.3, w: 0.4, h: 0.4 });
  s6.addText("What You Get", {
    x: 1.0, y: 1.3, w: 3, h: 0.4, fontSize: 16, fontFace: FONT_B,
    color: C.warmAccent, bold: true, margin: 0
  });
  const phase2Items = [
    "Smart lock — fingerprint, NFC, PIN, phone",
    "\"Is the front door locked?\" — ask the AI",
    "Doorbell camera with local storage",
    "Door/window open alerts",
    "Guest access codes (cleaners, family)",
    "\"Is the house secure?\" — full status check",
  ];
  s6.addText(phase2Items.map((t, i) => ({
    text: t, options: { bullet: true, breakLine: i < phase2Items.length - 1, color: C.lightText }
  })), {
    x: 0.7, y: 1.8, w: 4.3, h: 2.6, fontSize: 12.5, fontFace: FONT_B, margin: 0
  });

  // Right: parts card
  s6.addShape(pres.shapes.RECTANGLE, { x: 5.5, y: 1.3, w: 4.2, h: 2.5, fill: { color: C.cardBg }, shadow: cardShadow() });
  s6.addText("Parts & Pricing", {
    x: 5.7, y: 1.45, w: 3.8, h: 0.35, fontSize: 15, fontFace: FONT_B,
    color: C.white, bold: true, margin: 0
  });
  const phase2Parts = [
    ["Aqara U200 Smart Lock", "$200"],
    ["Aqara P2 Sensors x4", "$80"],
    ["Reolink Doorbell PoE", "$100"],
  ];
  phase2Parts.forEach((p, i) => {
    s6.addText(p[0], {
      x: 5.7, y: 1.95 + i * 0.35, w: 2.8, h: 0.3, fontSize: 11.5, fontFace: FONT_B,
      color: C.lightText, margin: 0
    });
    s6.addText(p[1], {
      x: 8.6, y: 1.95 + i * 0.35, w: 0.9, h: 0.3, fontSize: 11.5, fontFace: FONT_B,
      color: C.white, bold: true, align: "right", margin: 0
    });
  });
  s6.addShape(pres.shapes.RECTANGLE, { x: 5.7, y: 3.05, w: 3.8, h: 0.01, fill: { color: C.dimText } });
  s6.addText("Hardware total", {
    x: 5.7, y: 3.15, w: 2.8, h: 0.3, fontSize: 12, fontFace: FONT_B,
    color: C.accent, bold: true, margin: 0
  });
  s6.addText("~$380", {
    x: 8.3, y: 3.15, w: 1.2, h: 0.3, fontSize: 12, fontFace: FONT_B,
    color: C.accent, bold: true, align: "right", margin: 0
  });

  // Price callout
  s6.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.5, w: 9, h: 0.85, fill: { color: C.medBg } });
  s6.addText("Add-on:", {
    x: 0.8, y: 4.55, w: 2, h: 0.35, fontSize: 12, fontFace: FONT_B, color: C.dimText, margin: 0
  });
  s6.addText("$600 – $800", {
    x: 0.8, y: 4.82, w: 3, h: 0.45, fontSize: 24, fontFace: FONT_H, color: C.accent, bold: true, margin: 0
  });
  s6.addText("installed  |  $25/mo support", {
    x: 3.5, y: 4.85, w: 5, h: 0.4, fontSize: 13, fontFace: FONT_B, color: C.lightText, margin: 0
  });

  // ============================================================
  // SLIDE 7: Phase 3 — Whole-Home
  // ============================================================
  let s7 = pres.addSlide();
  s7.background = { color: C.darkBg };
  s7.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.accent } });
  s7.addText("Phase 3", {
    x: 0.5, y: 0.2, w: 2, h: 0.4, fontSize: 13, fontFace: FONT_B,
    color: C.accent, bold: true, margin: 0
  });
  s7.addText("Whole-Home Automation", {
    x: 0.5, y: 0.5, w: 6, h: 0.6, fontSize: 28, fontFace: FONT_H,
    color: C.white, bold: true, margin: 0
  });

  // 2x3 feature grid
  const phase3Features = [
    { icon: icons.video, label: "AI Cameras", desc: "Person/car detection, no subscription" },
    { icon: icons.car, label: "Garage & Gate", desc: "Open/close from phone or voice" },
    { icon: icons.thermo, label: "Climate Control", desc: "Presence-based heating & cooling" },
    { icon: icons.tint, label: "Leak Detection", desc: "Alerts before damage happens" },
    { icon: icons.door, label: "Every Door", desc: "Sensors on all entry points" },
    { icon: icons.comments, label: "Daily Summary", desc: "AI reports what happened overnight" },
  ];
  phase3Features.forEach((f, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.5 + col * 3.1;
    const y = 1.3 + row * 1.35;
    s7.addShape(pres.shapes.RECTANGLE, { x, y, w: 2.8, h: 1.1, fill: { color: C.cardBg }, shadow: cardShadow() });
    s7.addImage({ data: f.icon, x: x + 0.2, y: y + 0.25, w: 0.45, h: 0.45 });
    s7.addText(f.label, {
      x: x + 0.75, y: y + 0.15, w: 1.85, h: 0.35, fontSize: 14, fontFace: FONT_B,
      color: C.white, bold: true, margin: 0
    });
    s7.addText(f.desc, {
      x: x + 0.75, y: y + 0.5, w: 1.85, h: 0.45, fontSize: 11, fontFace: FONT_B,
      color: C.lightText, margin: 0
    });
  });

  // Price callout
  s7.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.5, w: 9, h: 0.85, fill: { color: C.medBg } });
  s7.addText("Add-on:", {
    x: 0.8, y: 4.55, w: 2, h: 0.35, fontSize: 12, fontFace: FONT_B, color: C.dimText, margin: 0
  });
  s7.addText("$1,200 – $2,000", {
    x: 0.8, y: 4.82, w: 3.5, h: 0.45, fontSize: 24, fontFace: FONT_H, color: C.accent, bold: true, margin: 0
  });
  s7.addText("installed  |  hardware ~$500-630  |  $30/mo support", {
    x: 4.5, y: 4.85, w: 5, h: 0.4, fontSize: 13, fontFace: FONT_B, color: C.lightText, margin: 0
  });

  // ============================================================
  // SLIDE 8: Phase 4 — Voice
  // ============================================================
  let s8 = pres.addSlide();
  s8.background = { color: C.darkBg };
  s8.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.accent } });
  s8.addText("Phase 4", {
    x: 0.5, y: 0.2, w: 2, h: 0.4, fontSize: 13, fontFace: FONT_B,
    color: C.accent, bold: true, margin: 0
  });
  s8.addText("Voice Control — Every Room", {
    x: 0.5, y: 0.5, w: 7, h: 0.6, fontSize: 28, fontFace: FONT_H,
    color: C.white, bold: true, margin: 0
  });

  // Left: features
  s8.addImage({ data: icons.mic, x: 0.5, y: 1.3, w: 0.4, h: 0.4 });
  s8.addText("Hands-Free, No Cloud", {
    x: 1.0, y: 1.3, w: 4, h: 0.4, fontSize: 16, fontFace: FONT_B,
    color: C.warmAccent, bold: true, margin: 0
  });
  const phase4Items = [
    "Voice control in every room",
    "No Alexa or Google needed",
    "All processing stays local",
    "Proactive alerts: \"Back door open for 10 min\"",
    "\"Was the garage open last night?\"",
  ];
  s8.addText(phase4Items.map((t, i) => ({
    text: t, options: { bullet: true, breakLine: i < phase4Items.length - 1, color: C.lightText }
  })), {
    x: 0.7, y: 1.8, w: 4.3, h: 2.2, fontSize: 12.5, fontFace: FONT_B, margin: 0
  });

  // Right: two device cards
  s8.addShape(pres.shapes.RECTANGLE, { x: 5.5, y: 1.3, w: 4.2, h: 1.2, fill: { color: C.cardBg }, shadow: cardShadow() });
  s8.addText("HA Voice Preview Edition", {
    x: 5.7, y: 1.4, w: 3, h: 0.3, fontSize: 13, fontFace: FONT_B, color: C.white, bold: true, margin: 0
  });
  s8.addText("Premium rooms (kitchen, living room)", {
    x: 5.7, y: 1.7, w: 3, h: 0.3, fontSize: 11, fontFace: FONT_B, color: C.lightText, margin: 0
  });
  s8.addText("$59", {
    x: 8.8, y: 1.45, w: 0.7, h: 0.3, fontSize: 16, fontFace: FONT_B, color: C.accent, bold: true, align: "right", margin: 0
  });
  s8.addText("each", {
    x: 8.8, y: 1.7, w: 0.7, h: 0.25, fontSize: 10, fontFace: FONT_B, color: C.dimText, align: "right", margin: 0
  });

  s8.addShape(pres.shapes.RECTANGLE, { x: 5.5, y: 2.7, w: 4.2, h: 1.2, fill: { color: C.cardBg }, shadow: cardShadow() });
  s8.addText("M5Stack ATOM Echo", {
    x: 5.7, y: 2.8, w: 3, h: 0.3, fontSize: 13, fontFace: FONT_B, color: C.white, bold: true, margin: 0
  });
  s8.addText("Budget satellites (bedrooms, bathrooms)", {
    x: 5.7, y: 3.1, w: 3, h: 0.3, fontSize: 11, fontFace: FONT_B, color: C.lightText, margin: 0
  });
  s8.addText("$15", {
    x: 8.8, y: 2.85, w: 0.7, h: 0.3, fontSize: 16, fontFace: FONT_B, color: C.accent, bold: true, align: "right", margin: 0
  });
  s8.addText("each", {
    x: 8.8, y: 3.1, w: 0.7, h: 0.25, fontSize: 10, fontFace: FONT_B, color: C.dimText, align: "right", margin: 0
  });

  // Price callout
  s8.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.5, w: 9, h: 0.85, fill: { color: C.medBg } });
  s8.addText("Add-on:", {
    x: 0.8, y: 4.55, w: 2, h: 0.35, fontSize: 12, fontFace: FONT_B, color: C.dimText, margin: 0
  });
  s8.addText("$400 – $600", {
    x: 0.8, y: 4.82, w: 3, h: 0.45, fontSize: 24, fontFace: FONT_H, color: C.accent, bold: true, margin: 0
  });
  s8.addText("installed  |  $35/mo support", {
    x: 3.5, y: 4.85, w: 5, h: 0.4, fontSize: 13, fontFace: FONT_B, color: C.lightText, margin: 0
  });

  // ============================================================
  // SLIDE 9: Specialty Packages
  // ============================================================
  let s9 = pres.addSlide();
  s9.background = { color: C.darkBg };
  s9.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.accent } });
  s9.addText("Specialty Packages", {
    x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 32, fontFace: FONT_H,
    color: C.white, bold: true, align: "left", margin: 0
  });

  const specialties = [
    {
      icon: icons.suitcase, title: "Airbnb & Rentals",
      items: ["Auto guest access codes", "Check-in/out automations", "Energy tracking per stay", "AI guest guide"]
    },
    {
      icon: icons.heart, title: "Elderly Care",
      items: ["Activity monitoring", "Fall-risk night lighting", "Voice reminders", "Family dashboard"]
    },
    {
      icon: icons.store, title: "Small Office",
      items: ["Access control + audit log", "Open/close routines", "After-hours security", "AI receptionist"]
    },
  ];

  specialties.forEach((sp, i) => {
    const x = 0.5 + i * 3.15;
    s9.addShape(pres.shapes.RECTANGLE, { x, y: 1.2, w: 2.85, h: 3.6, fill: { color: C.cardBg }, shadow: cardShadow() });
    s9.addShape(pres.shapes.RECTANGLE, { x, y: 1.2, w: 2.85, h: 0.05, fill: { color: C.warmAccent } });
    s9.addImage({ data: sp.icon, x: x + 1.05, y: 1.55, w: 0.65, h: 0.65 });
    s9.addText(sp.title, {
      x: x + 0.2, y: 2.35, w: 2.45, h: 0.4, fontSize: 16, fontFace: FONT_B,
      color: C.white, bold: true, align: "center", margin: 0
    });
    s9.addText(sp.items.map((t, j) => ({
      text: t, options: { bullet: true, breakLine: j < sp.items.length - 1, color: C.lightText }
    })), {
      x: x + 0.25, y: 2.9, w: 2.35, h: 1.7, fontSize: 12, fontFace: FONT_B, margin: 0
    });
  });

  // ============================================================
  // SLIDE 10: The AI Difference
  // ============================================================
  let s10 = pres.addSlide();
  s10.background = { color: C.darkBg };
  s10.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.accent } });
  s10.addText("The AI Difference", {
    x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 32, fontFace: FONT_H,
    color: C.white, bold: true, align: "left", margin: 0
  });
  s10.addText("Talk to your house like a person", {
    x: 0.5, y: 0.85, w: 9, h: 0.4, fontSize: 15, fontFace: FONT_B,
    color: C.lightText, italic: true, margin: 0
  });

  const conversations = [
    { q: "\"What's in my house?\"", a: "\"You have 8 smart lights, 3 presence sensors, and 2 scenes configured. Your garage and front gate aren't connected yet.\"" },
    { q: "\"Is the house secure?\"", a: "\"Front door locked, all windows closed, camera active, alarm armed.\"" },
    { q: "\"Good night\"", a: "\"Locking doors, closing garage, turning off downstairs, arming cameras. Sleep well.\"" },
    { q: "\"Was the garage open last night?\"", a: "\"The garage was closed at 9:47pm and stayed closed all night.\"" },
  ];

  conversations.forEach((c, i) => {
    const y = 1.4 + i * 0.95;
    s10.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 9, h: 0.8, fill: { color: C.cardBg }, shadow: cardShadow() });
    s10.addText([
      { text: "You: ", options: { color: C.accent, bold: true, fontSize: 13 } },
      { text: c.q, options: { color: C.white, italic: true, fontSize: 13, breakLine: true } },
      { text: "AI: ", options: { color: C.warmAccent, bold: true, fontSize: 11.5 } },
      { text: c.a, options: { color: C.lightText, italic: true, fontSize: 11.5 } },
    ], {
      x: 0.75, y: y + 0.05, w: 8.5, h: 0.7, fontFace: FONT_B, margin: 0
    });
  });

  // ============================================================
  // SLIDE 11: Pricing Overview
  // ============================================================
  let s11 = pres.addSlide();
  s11.background = { color: C.darkBg };
  s11.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.accent } });
  s11.addText("Investment Overview", {
    x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 32, fontFace: FONT_H,
    color: C.white, bold: true, align: "left", margin: 0
  });

  // Table
  const headerRow = [
    { text: "Phase", options: { fill: { color: C.accent }, color: C.darkBg, bold: true, fontSize: 12, fontFace: FONT_B, align: "left" } },
    { text: "What", options: { fill: { color: C.accent }, color: C.darkBg, bold: true, fontSize: 12, fontFace: FONT_B, align: "left" } },
    { text: "Hardware", options: { fill: { color: C.accent }, color: C.darkBg, bold: true, fontSize: 12, fontFace: FONT_B, align: "right" } },
    { text: "Installed", options: { fill: { color: C.accent }, color: C.darkBg, bold: true, fontSize: 12, fontFace: FONT_B, align: "right" } },
    { text: "Monthly", options: { fill: { color: C.accent }, color: C.darkBg, bold: true, fontSize: 12, fontFace: FONT_B, align: "right" } },
  ];

  const makeRow = (cells, bg) => cells.map((c, i) => ({
    text: c, options: {
      fill: { color: bg }, color: C.lightText, fontSize: 11.5, fontFace: FONT_B,
      align: i <= 1 ? "left" : "right"
    }
  }));

  const totalRow = ["All", "Full House", "~$1,800", "$3,200-4,600", "$35/mo"].map((c, i) => ({
    text: c, options: {
      fill: { color: C.medBg }, color: C.accent, fontSize: 12, fontFace: FONT_B, bold: true,
      align: i <= 1 ? "left" : "right"
    }
  }));

  s11.addTable([
    headerRow,
    makeRow(["1", "Lighting + AI Brain", "~$678", "$1,000-1,200", "$20/mo"], C.cardBg),
    makeRow(["2", "Entry Security", "~$380", "$600-800", "$25/mo"], C.darkBg),
    makeRow(["3", "Whole-Home", "~$500-630", "$1,200-2,000", "$30/mo"], C.cardBg),
    makeRow(["4", "Voice Endpoints", "~$163", "$400-600", "$35/mo"], C.darkBg),
    totalRow,
  ], {
    x: 0.5, y: 1.2, w: 9, h: 2.5,
    colW: [0.7, 2.5, 1.5, 2.2, 1.5],
    border: { pt: 0.5, color: C.dimText },
    rowH: [0.4, 0.38, 0.38, 0.38, 0.38, 0.42],
  });

  // Callout
  s11.addText("Start with Phase 1. Upgrade anytime. Each phase builds on the last.", {
    x: 0.5, y: 4.0, w: 9, h: 0.4, fontSize: 15, fontFace: FONT_B,
    color: C.warmAccent, italic: true, align: "center", margin: 0
  });

  // Big number callout
  s11.addShape(pres.shapes.RECTANGLE, { x: 1.5, y: 4.5, w: 3.2, h: 0.85, fill: { color: C.cardBg }, shadow: cardShadow() });
  s11.addText("Full house from", {
    x: 1.7, y: 4.55, w: 2.8, h: 0.25, fontSize: 11, fontFace: FONT_B, color: C.dimText, margin: 0
  });
  s11.addText("$3,200", {
    x: 1.7, y: 4.78, w: 2.8, h: 0.45, fontSize: 28, fontFace: FONT_H, color: C.accent, bold: true, margin: 0
  });

  s11.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: 4.5, w: 3.2, h: 0.85, fill: { color: C.cardBg }, shadow: cardShadow() });
  s11.addText("Camera subscriptions", {
    x: 5.5, y: 4.55, w: 2.8, h: 0.25, fontSize: 11, fontFace: FONT_B, color: C.dimText, margin: 0
  });
  s11.addText("$0/mo", {
    x: 5.5, y: 4.78, w: 2.8, h: 0.45, fontSize: 28, fontFace: FONT_H, color: C.green, bold: true, margin: 0
  });

  // ============================================================
  // SLIDE 12: Why Us
  // ============================================================
  let s12 = pres.addSlide();
  s12.background = { color: C.darkBg };
  s12.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.accent } });
  s12.addText("Why Choose Us", {
    x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 32, fontFace: FONT_H,
    color: C.white, bold: true, align: "left", margin: 0
  });

  const reasons = [
    { icon: icons.shieldWhite, title: "Locksmith Trust", desc: "Professional physical security expertise. Licensed, insured, trusted at your door." },
    { icon: icons.brainWhite, title: "AI Expertise", desc: "We don't just install switches — we give your home a brain that grows with you." },
    { icon: icons.checkWhite, title: "100% Local & Private", desc: "No cloud accounts, no voice recordings sent anywhere, no corporate dependencies." },
    { icon: icons.checkWhite, title: "No Camera Subscriptions", desc: "Your cameras record locally. No monthly fees. No company watching your footage." },
    { icon: icons.checkWhite, title: "Grows With You", desc: "Start with lights. Add security, cameras, voice whenever you're ready. Same system." },
    { icon: icons.checkWhite, title: "One App, One System", desc: "Everything in Home Assistant. Not five apps from five brands." },
  ];

  reasons.forEach((r, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.7;
    const y = 1.2 + row * 1.3;
    // Icon circle
    s12.addShape(pres.shapes.OVAL, { x: x, y: y + 0.1, w: 0.55, h: 0.55, fill: { color: C.accent } });
    s12.addImage({ data: r.icon, x: x + 0.1, y: y + 0.2, w: 0.35, h: 0.35 });
    // Title
    s12.addText(r.title, {
      x: x + 0.7, y, w: 3.7, h: 0.35, fontSize: 15, fontFace: FONT_B,
      color: C.white, bold: true, margin: 0
    });
    // Desc
    s12.addText(r.desc, {
      x: x + 0.7, y: y + 0.4, w: 3.7, h: 0.7, fontSize: 12, fontFace: FONT_B,
      color: C.lightText, margin: 0
    });
  });

  // ============================================================
  // SLIDE 13: Contact / Next Steps
  // ============================================================
  let s13 = pres.addSlide();
  s13.background = { color: C.darkBg };
  s13.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.accent } });

  s13.addImage({ data: icons.home, x: 4.4, y: 0.6, w: 1.2, h: 1.2 });

  s13.addText("Ready to Make Your Home Smart?", {
    x: 0.5, y: 1.9, w: 9, h: 0.8, fontSize: 32, fontFace: FONT_H,
    color: C.white, bold: true, align: "center"
  });

  s13.addText("Start with Phase 1 — we'll have your lights automated in half a day.", {
    x: 0.5, y: 2.7, w: 9, h: 0.5, fontSize: 16, fontFace: FONT_B,
    color: C.lightText, align: "center", italic: true
  });

  // Steps
  const nextSteps = [
    { num: "1", text: "Free consultation — we visit and map your home" },
    { num: "2", text: "Choose your starting phase" },
    { num: "3", text: "Professional install, usually same week" },
  ];

  nextSteps.forEach((ns, i) => {
    const y = 3.4 + i * 0.5;
    s13.addShape(pres.shapes.OVAL, { x: 2.8, y, w: 0.4, h: 0.4, fill: { color: C.accent } });
    s13.addText(ns.num, {
      x: 2.8, y, w: 0.4, h: 0.4, fontSize: 16, fontFace: FONT_H,
      color: C.darkBg, bold: true, align: "center", valign: "middle", margin: 0
    });
    s13.addText(ns.text, {
      x: 3.4, y, w: 5, h: 0.4, fontSize: 14, fontFace: FONT_B,
      color: C.lightText, valign: "middle", margin: 0
    });
  });

  // Contact placeholder
  s13.addShape(pres.shapes.RECTANGLE, { x: 2.5, y: 5.0, w: 5, h: 0.01, fill: { color: C.accentDim } });

  // Write file
  await pres.writeFile({ fileName: "/Users/ofer/work/llama/secure-ai-home-systems.pptx" });
  console.log("Presentation saved to ~/work/llama/secure-ai-home-systems.pptx");
}

main().catch(console.error);
