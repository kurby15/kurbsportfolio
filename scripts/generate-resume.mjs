import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = path.join(root, "public", "resume.pdf");
const pdf = await PDFDocument.create();
pdf.setTitle("John Kurby Dr. Valencerina - Resume");
pdf.setAuthor("John Kurby Dr. Valencerina");
pdf.setSubject("Software and Systems Specialist resume");

const regular = await pdf.embedFont(StandardFonts.Helvetica);
const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
const ink = rgb(0.12, 0.14, 0.16);
const muted = rgb(0.35, 0.39, 0.42);
const accent = rgb(0.07, 0.39, 0.43);
const rule = rgb(0.76, 0.8, 0.8);
const pageWidth = 595.28;
const pageHeight = 841.89;
const left = 42;
const right = pageWidth - 42;
const width = right - left;
const lineHeight = 10.5;

function drawText(page, text, x, y, font = regular, size = 9, color = ink) {
  page.drawText(text, { x, y, font, size, color });
}

function wrapText(text, font, size, maxWidth) {
  const lines = [];
  let line = "";
  for (const word of text.split(/\s+/)) {
    const candidate = line ? `${line} ${word}` : word;
    if (line && font.widthOfTextAtSize(candidate, size) > maxWidth) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function drawParagraph(page, text, x, y, maxWidth, options = {}) {
  const font = options.font ?? regular;
  const size = options.size ?? 8.6;
  const color = options.color ?? ink;
  const step = options.lineHeight ?? lineHeight;
  const lines = wrapText(text, font, size, maxWidth);
  for (const line of lines) {
    drawText(page, line, x, y, font, size, color);
    y -= step;
  }
  return y;
}

function drawSection(page, title, y) {
  drawText(page, title, left, y, bold, 12, accent);
  page.drawLine({
    start: { x: left, y: y - 6 },
    end: { x: right, y: y - 6 },
    thickness: 0.8,
    color: rule,
  });
  return y - 22;
}

function drawProject(page, project, y) {
  const titleSize = 9.4;
  const titleLines = wrapText(
    project.title.toUpperCase(),
    bold,
    titleSize,
    width,
  );
  for (const line of titleLines) {
    drawText(page, line, left, y, bold, titleSize, ink);
    y -= 11;
  }
  drawText(page, project.role, left, y, regular, 8.2, muted);
  const dateWidth = regular.widthOfTextAtSize(project.date, 8.2);
  drawText(page, project.date, right - dateWidth, y, regular, 8.2, muted);
  y -= 12;

  for (const bullet of project.bullets) {
    page.drawCircle({ x: left + 2.5, y: y + 2.5, size: 1.4, color: accent });
    y = drawParagraph(page, bullet, left + 11, y, width - 11, {
      size: 8.15,
      lineHeight: 9.5,
    });
    y -= 2;
  }
  return y - 6;
}

function drawFooter(page, number) {
  page.drawLine({
    start: { x: left, y: 30 },
    end: { x: right, y: 30 },
    thickness: 0.5,
    color: rule,
  });
  drawText(page, "JOHN KURBY DR. VALENCERINA", left, 18, regular, 7, muted);
  const label = `${number} / 2`;
  drawText(
    page,
    label,
    right - regular.widthOfTextAtSize(label, 7),
    18,
    regular,
    7,
    muted,
  );
}

const projects = [
  {
    title: "Sari-Sari Store Management System - (Tindahan)",
    role: "Personal Project | Main Developer",
    date: "Oct 05, 2026 - Present",
    bullets: [
      "Developed a store management web application using React, TypeScript, and Firebase.",
      "Built point-of-sale, inventory, customer, supplier, sales report, and utang tracking features.",
      "Implemented Firebase Authentication and Cloud Firestore, and created a companion Android app.",
    ],
  },
  {
    title: "PortJeep Mobile Application for Driver and PAO",
    role: "Capstone Project | Main Android Developer",
    date: "Aug 15, 2026 - Sep 28, 2026",
    bullets: [
      "Developed a specialized driver and PAO app using Java, Android Studio, and Material Design 3.",
      "Built real-time schedule management, financial remittance tracking, accident reporting, and dynamic status updates.",
      "Implemented biometric authentication, reCAPTCHA Enterprise, and AES-256 encryption for sensitive data.",
      "Integrated Firebase Auth, Firestore, FCM, and a Vercel REST API for synchronization and AlarmManager shift reminders.",
      "Integrated IoT hardware for possible collision detection.",
    ],
  },
  {
    title: "SmartGrow: AI-Based Plant Health Assessment",
    role: "Capstone Project | Support Developer",
    date: "Aug 10, 2026 - Oct 03, 2026",
    bullets: [
      "Engineered an AI plant scanner using Gemini and SambaNova (DeepSeek) vision models to identify species and diagnose plant health.",
      "Developed SproutAI, a botanical chatbot for plant care advice, pest management, and app walkthroughs.",
      "Migrated Firebase Realtime Database to Cloud Firestore for plant profiles, chat history, and user settings.",
      "Integrated Firebase Authentication and Firestore for secure sessions and persistent scan data and AI reports.",
      "Developed the Android app in Java with API integrations and client-side image processing.",
    ],
  },
  {
    title: "JollyIsland Management System",
    role: "Capstone Project | Support Developer",
    date: "May 16, 2026 - Sep 20, 2026",
    bullets: [
      "Designed the admin portal for dashboard, user, package, zone, RFID, and reporting workflows.",
      "Implemented Firebase Authentication and Cloud Firestore for admin management features.",
      "Built cashier workflows for registration, access validation, entry and exit logs, live monitoring, and playtime tracking.",
      "Developed the web application using React, TypeScript, and Firebase.",
    ],
  },
];

const page1 = pdf.addPage([pageWidth, pageHeight]);
const profile = await pdf.embedPng(
  await readFile(path.join(root, "public", "profile1.png")),
);
const profileScale = Math.min(112 / profile.width, 136 / profile.height);
page1.drawImage(profile, {
  x: left,
  y: 683,
  width: profile.width * profileScale,
  height: profile.height * profileScale,
});

const detailsX = 174;
drawText(page1, "JOHN KURBY DR. VALENCERINA", detailsX, 793, bold, 20, ink);
drawText(
  page1,
  "SOFTWARE & SYSTEMS SPECIALIST",
  detailsX,
  770,
  bold,
  10.5,
  accent,
);
page1.drawLine({
  start: { x: detailsX, y: 760 },
  end: { x: right, y: 760 },
  thickness: 1,
  color: ink,
});
[
  "+63 907 308 2501",
  "kurbyvalencerina@gmail.com",
  "https://kurbsportfolio.vercel.app/",
  "Blk 23, Lot 16 Area B Purok 4 Lower",
].forEach((line, index) =>
  drawText(page1, line, detailsX, 743 - index * 15, regular, 8.8, ink),
);

let y = drawSection(page1, "ABOUT ME", 650);
y = drawParagraph(
  page1,
  "Tech-driven Software & Systems Specialist combining full-stack web and mobile development skills (React, Android Studio, Firebase, SQL) with hands-on IT infrastructure experience (VMware, Active Directory, Cisco networking, hardware diagnostics). Passionate about building robust software solutions while maintaining optimal network and system performance.",
  left,
  y,
  width,
  { size: 8.6, lineHeight: 10.5 },
);
y = drawSection(page1, "PROJECTS", y - 7);
for (const project of projects) y = drawProject(page1, project, y);
drawFooter(page1, 1);

const page2 = pdf.addPage([pageWidth, pageHeight]);
drawText(page2, "JOHN KURBY DR. VALENCERINA", left, 795, bold, 18, ink);
drawText(page2, "SOFTWARE & SYSTEMS SPECIALIST", left, 775, bold, 9.5, accent);
page2.drawLine({
  start: { x: left, y: 765 },
  end: { x: right, y: 765 },
  thickness: 1,
  color: ink,
});

y = drawProject(
  page2,
  {
    title: "SMNHS Library Management System",
    role: "Commission | Main Developer",
    date: "Jan 2026, Mar 2026",
    bullets: [
      "Developed a React and TypeScript library portal with separate interfaces for students, teachers, and librarians.",
      "Built PHP API functionality for catalog management, borrowing and returns, reservations, accounts, announcements, and notifications.",
      "Connected the application to a MySQL database for library and account records.",
      "Integrated email notifications and an Ollama AI chatbot with optional Gemini API support.",
    ],
  },
  742,
);

y = drawSection(page2, "TECHNICAL SKILLS", y - 4);
const skills = [
  "Programming & Web Development: TypeScript, JavaScript (ES6+), React (TSX), HTML5, CSS3, Java, C#, PHP",
  "UI/UX & Design Tools: Figma, Adobe XD",
  "Databases & Cloud: MySQL, PostgreSQL, Firebase (Firestore, Realtime Database, Authentication)",
  "IDEs & Developer Tools: Android Studio, Visual Studio, Visual Studio Code, Apache NetBeans",
  "Networking & System Administration: VMware, Active Directory (AD DS), DNS, DHCP, Cisco Packet Tracer",
  "Hardware & IT Support: System diagnostics, PC and laptop repair, peripheral maintenance, printer servicing, printhead calibration",
];
for (const skill of skills) {
  page2.drawCircle({ x: left + 2.5, y: y + 2.5, size: 1.4, color: accent });
  y = drawParagraph(page2, skill, left + 11, y, width - 11, {
    size: 8.4,
    lineHeight: 10,
  });
  y -= 3;
}

y = drawSection(page2, "EDUCATION", y - 5);
const education = [
  [
    "Bulacan State University - Sarmiento Campus",
    "BS Information Technology | 2023 - 2027",
    "Dean's Lister (AY 2024 - 2025)",
  ],
  [
    "San Martin National High School",
    "Senior High School | 2021 - 2023",
    "With Honors",
  ],
  [
    "San Martin National High School",
    "Junior High School | 2016 - 2021",
    "With Honors",
  ],
  [
    "Bagong Buhay B. Integrated Elementary School",
    "Elementary School | 2010 - 2016",
    "With Honors",
  ],
];
for (const [school, program, award] of education) {
  drawText(page2, school, left, y, bold, 9, ink);
  y -= 12;
  drawText(page2, program, left, y, regular, 8.4, muted);
  y -= 11;
  drawText(page2, award, left + 10, y, regular, 8.1, muted);
  y -= 18;
}
drawFooter(page2, 2);

if (y < 42) throw new Error("Resume content exceeded the second page.");
await writeFile(outputPath, await pdf.save());
console.log(
  `Generated ${path.relative(root, outputPath)} (${pdf.getPageCount()} pages).`,
);
