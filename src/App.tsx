import { useState } from "react";

type IconName =
  | "home"
  | "person"
  | "grid"
  | "diamond"
  | "heart"
  | "menu"
  | "close";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  if (name === "person") {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
        <circle cx="12" cy="7" r="3.4" fill="currentColor" />
        <path d="M5 21a7 7 0 0 1 14 0Z" fill="currentColor" />
      </svg>
    );
  }
  if (name === "grid") {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 0h7v7h-7z" />
      </svg>
    );
  }
  if (name === "diamond") {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="m12 2 10 10-10 10L2 12z" />
      </svg>
    );
  }
  if (name === "heart") {
    return (
      <svg
        viewBox="0 0 24 22"
        width={size}
        height={size}
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 21C5 16 1 12 1 7.5 1 4 3.6 1.5 6.8 1.5c2 0 3.9 1 5.2 2.6 1.3-1.6 3.2-2.6 5.2-2.6C20.4 1.5 23 4 23 7.5 23 12 19 16 12 21Z" />
      </svg>
    );
  }
  if (name === "menu" || name === "close") {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        aria-hidden="true"
      >
        {name === "menu" ? (
          <path d="M3 6h18M3 12h18M3 18h18" />
        ) : (
          <path d="m5 5 14 14M19 5 5 19" />
        )}
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="m12 2 2.9 6.26 6.85.72-5.1 4.62 1.44 6.7L12 17.6l-6.09 3.7 1.44-6.7-5.1-4.62 6.85-.72z" />
    </svg>
  );
}

function Socials({ large = false }: { large?: boolean }) {
  return (
    <div className="socials">
      <a
        className={`social facebook ${large ? "large" : ""}`}
        href="https://www.facebook.com/justkurbsss"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
      >
        <span>f</span>
      </a>
      <a
        className={`social linkedin ${large ? "large" : ""}`}
        href="https://www.linkedin.com/in/john-kurby-valencerina-17ba4141a/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <span>in</span>
      </a>
      <a
        className={`social instagram ${large ? "large" : ""}`}
        href="https://www.instagram.com/kurbsss_/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle
            cx="12"
            cy="12"
            r="3.4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle cx="17.4" cy="6.8" r="1" fill="currentColor" />
        </svg>
      </a>
      <a
        className={`social github ${large ? "large" : ""}`}
        href="https://github.com/kurby15"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.31-1.25-1.66-1.25-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.64 1.23 3.28.94.1-.73.4-1.23.72-1.51-2.5-.29-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.44.11-3 0 0 .95-.3 3.11 1.15a10.84 10.84 0 0 1 5.66 0c2.16-1.45 3.1-1.15 3.1-1.15.62 1.56.23 2.71.12 3 .72.79 1.15 1.8 1.15 3.03 0 4.33-2.63 5.28-5.14 5.56.4.35.76 1.02.76 2.06v3.13c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z"
          />
        </svg>
      </a>
    </div>
  );
}

const navItems: Array<[IconName, string, string]> = [
  ["home", "Home", "/"],
  ["person", "About", "/about"],
  ["grid", "Case Study", "/case-studies"],
  ["diamond", "Playground", "/playground"],
];

function Header() {
  const [open, setOpen] = useState(false);
  const path = window.location.pathname;
  const isActive = (href: string) =>
    href === "/" ? path === "/" : path === href || path.startsWith(`${href}/`);
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-left">
          <a
            className="face-logo"
            href="/"
            aria-label="John Kurby Dr. Valencerina"
          >
            <span className="eye eye-left" />
            <span className="eye eye-right" />
            <span className="smile" />
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map(([icon, label, href]) => (
              <a
                key={label}
                className={isActive(href) ? "active" : ""}
                href={href}
              >
                <Icon name={icon} />
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="header-actions">
          <Socials />
          <a className="contact-link" href="/contact">
            <Icon name="heart" size={16} />
            Contact
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          {navItems.map(([icon, label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>
              <Icon name={icon} />
              {label}
            </a>
          ))}
          <a href="/contact" onClick={() => setOpen(false)}>
            <Icon name="heart" />
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}

type AboutSection = "bio" | "story" | "projects" | "education" | "skills";

function SectionIcon({ type }: { type: AboutSection }) {
  if (type === "bio")
    return (
      <span className="target-icon">
        <i />
      </span>
    );
  if (type === "story" || type === "education")
    return <span className="diamond-icon" />;
  return <span className="spark-icon">✦</span>;
}

function SectionNav() {
  const items: Array<[AboutSection, string]> = [
    ["bio", "Main bio"],
    ["story", "Story"],
    ["projects", "Projects"],
    ["education", "Education"],
    ["skills", "Technical skills"],
  ];
  return (
    <>
      <nav className="side-nav" aria-label="About sections">
        {items.map(([type, label]) => (
          <a key={type} href={`#${type}`} className={type}>
            <SectionIcon type={type} />
            {label}
          </a>
        ))}
      </nav>
      <nav className="pill-nav" aria-label="About sections">
        {items.map(([type, label]) => (
          <a key={type} href={`#${type}`} className={type}>
            <SectionIcon type={type} />
            {label}
          </a>
        ))}
      </nav>
    </>
  );
}

function RoughLabel({
  children,
  color = "yellow",
}: {
  children: React.ReactNode;
  color?: "yellow" | "pink" | "blue";
}) {
  return <span className={`rough-label ${color}`}>{children}</span>;
}

function Tape({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`tape ${className}`} />;
}

function ProfilePolaroid() {
  return (
    <div className="profile-stack">
      <figure className="polaroid">
        <Tape className="tape-left blue-tape" />
        <Tape className="tape-right yellow-tape" />
        <img src="/profile1.png" alt="John Kurby Dr. Valencerina" />
      </figure>
      <div className="name-tag-wrap">
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <path d="M34 33C25 24 15 21 9 9M8 21 7 7l14 4" />
        </svg>
        <span>Kurbs</span>
      </div>
    </div>
  );
}

function Sparkle() {
  return (
    <svg
      className="inline-art sparkle-art"
      viewBox="0 0 42 30"
      aria-hidden="true"
    >
      <path d="M10 1c0 8-3 12-9 14 6 2 9 6 9 14 1-8 4-12 10-14C14 13 11 9 10 1Z" />
      <path d="M29 5c0 6-2 9-7 11 5 1 7 5 7 11 1-6 3-10 8-11-5-2-7-5-8-11Z" />
    </svg>
  );
}

function Palette() {
  return (
    <span className="inline-art palette-art" aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
    </span>
  );
}

const principles = [
  {
    title: "Build around the workflow",
    body: "I start with what people need to do, then shape the screens and data around that task. Whether it is a store sale or a driver shift, the flow should be clear from start to finish.",
    note: "make it useful",
    className: "cyan",
  },
  {
    title: "Keep the system dependable",
    body: "Good software depends on reliable data, secure access, and predictable behavior. I bring that mindset to app development as well as infrastructure and device troubleshooting.",
    note: "reliable by design",
    className: "tan",
  },
  {
    title: "Connect software and systems",
    body: "I enjoy working across the full stack: the interface, the application logic, cloud services, networks, and hardware. Seeing how those pieces interact helps me solve problems beyond the screen.",
    note: "look at the whole system",
    className: "mint",
  },
];

const resumeProjects = [
  {
    title: "Sari-Sari Store Management System (Tindahan)",
    role: "Personal project · Main Developer",
    timeline: "Oct 05, 2026 - Present",
    body: "Built a React, TypeScript, and Firebase store app for POS, inventory, customers, suppliers, sales reports, and utang tracking, plus a companion Android app.",
  },
  {
    title: "PortJeep for Drivers and PAOs",
    role: "Capstone project · Main Android Developer",
    timeline: "Aug 15, 2026 - Sep 28, 2026",
    body: "Developed a Java Android app for schedules, remittance tracking, and accident reports, with biometric authentication, encrypted data, Firebase sync, reminders, and IoT collision support.",
  },
  {
    title: "SmartGrow Plant Health Assessment",
    role: "Capstone project · Support Developer",
    timeline: "Aug 10, 2026 - Oct 03, 2026",
    body: "Built Android AI plant-scanning and care experiences using Gemini and SambaNova/DeepSeek vision, SproutAI guidance, and Cloud Firestore for persistent plant and chat data.",
  },
  {
    title: "JollyIsland Management System",
    role: "Capstone project · Support Developer",
    timeline: "May 16, 2026 - Sep 20, 2026",
    body: "Developed React and TypeScript admin and cashier workflows for guests, packages, zones, RFID access, registration, entry and exit, live monitoring, playtime, and reports.",
  },
];

const technicalSkillGroups = [
  {
    title: "Programming and web development",
    skills: [
      "TypeScript",
      "JavaScript (ES6+)",
      "React (TSX)",
      "HTML5",
      "CSS3",
      "Java",
      "C#",
      "PHP",
    ],
  },
  {
    title: "UI/UX and design tools",
    skills: ["Figma", "Adobe XD"],
  },
  {
    title: "Databases and cloud",
    skills: [
      "MySQL",
      "PostgreSQL",
      "Firebase Authentication",
      "Cloud Firestore",
      "Firebase Realtime Database",
    ],
  },
  {
    title: "IDEs and developer tools",
    skills: [
      "Android Studio",
      "Visual Studio",
      "Visual Studio Code",
      "Apache NetBeans",
      "REST APIs",
      "Vercel",
    ],
  },
  {
    title: "Networking and system administration",
    skills: [
      "VMware virtualization",
      "Active Directory Domain Services (AD DS)",
      "DNS",
      "DHCP",
      "Cisco Packet Tracer",
      "Network configuration",
    ],
  },
  {
    title: "Hardware and IT support",
    skills: [
      "System diagnostics",
      "PC/laptop hardware and software repair",
      "Peripheral maintenance",
      "Printer servicing",
      "Printhead calibration",
    ],
  },
];

const educationRecords = [
  {
    school: "Bulacan State University - Sarmiento Campus",
    program: "Bachelor of Science in Information Technology",
    years: "2023 - 2027",
    distinction: "Dean's Lister (Academic Year 2024 - 2025)",
  },
  {
    school: "San Martin National High School",
    program: "Senior High School",
    years: "2021 - 2023",
    distinction: "With Honors",
  },
  {
    school: "San Martin National High School",
    program: "Junior High School",
    years: "2016 - 2021",
    distinction: "With Honors",
  },
  {
    school: "Bagong Buhay B. Integrated Elementary School",
    program: "Elementary School",
    years: "2010 - 2016",
    distinction: "With Honors",
  },
];

function AboutScreenshotIntro() {
  return (
    <section className="about-screenshot-intro lined-page">
      <p className="hand section-kicker">about me!</p>
      <BasicPolaroid
        className="about-shot-photo about-shot-left"
        imageSrc="/profile1.png"
        alt="John Kurby Dr. Valencerina"
      />
      <BasicPolaroid
        className="about-shot-photo about-shot-right"
        imageSrc="/profile2.png"
        alt="John Kurby Dr. Valencerina working in a computer lab"
      />
      <div className="about-shot-center">
        <span className="doodle-box whats-up">what's up</span>
        <p className="hand">
          John Kurby Dr. Valencerina is a Software & Systems Specialist who
          <Sparkle /> builds web and mobile applications and keeps the systems
          behind them dependable. <Palette />
        </p>
        <div className="about-shot-mobile-photos">
          <BasicPolaroid
            className="tilt-left"
            imageSrc="/profile1.png"
            alt="John Kurby Dr. Valencerina"
          />
          <BasicPolaroid
            className="tilt-right"
            imageSrc="/profile2.png"
            alt="John Kurby Dr. Valencerina working in a computer lab"
          />
        </div>
        <div className="about-stickers" aria-hidden="true">
          <span className="paper-sticker yellow">
            <Sparkle />
          </span>
          <span className="paper-sticker green">
            <Palette />
          </span>
          <span className="paper-sticker pink">✦</span>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <>
      <main id="top" className="lined-page">
        <div className="about-shell">
          <h1 className="display about-title">ABOUT</h1>
          <SectionNav />

          <section id="bio" className="content-section bio-section">
            <RoughLabel>Main bio</RoughLabel>
            <div className="doodle-box bio-box">
              <div className="bio-copy">
                <p className="hand bio-lead">
                  John Kurby Dr. Valencerina is a Software & Systems Specialist
                  who <Sparkle /> builds web and mobile applications and keeps
                  the systems that support it dependable. <Palette />
                </p>
                <div className="body-copy">
                  <p>
                    I build web and mobile applications with React, TypeScript,
                    Java, Android Studio, Firebase, and SQL. My project work
                    spans store operations, employee mobility, AI-assisted plant
                    care, and RFID-based play-center management.
                  </p>
                  <p>
                    I also work with VMware, Active Directory, Cisco networking,
                    and hardware diagnostics. I care about building practical
                    software while keeping the systems that support it reliable.
                  </p>
                </div>
                <div className="paper-note callout">
                  <Tape />
                  Software development, Android apps, cloud data, and IT
                  infrastructure.
                </div>
                <div className="paper-note aside-note">
                  Passionate about building robust software and maintaining
                  dependable networks and systems.
                </div>
              </div>
              <ProfilePolaroid />
            </div>
          </section>

          <section id="story" className="content-section story-section">
            <RoughLabel color="pink">Story</RoughLabel>
            <div className="doodle-box story-box">
              <div className="principles">
                {principles.map((item, index) => (
                  <article className="principle-row" key={item.title}>
                    <div
                      className={`principle-card ${item.className} p${index + 1}`}
                    >
                      <Tape className={index === 1 ? "top-right" : ""} />
                      <Tape className="side-tape" />
                      <h2>{item.title}</h2>
                      <p>{item.body}</p>
                    </div>
                    <div className="principle-note">
                      <svg viewBox="0 0 48 24" aria-hidden="true">
                        <path d="M2 6c12 10 26 14 40 12M36 14l6 4-7 3" />
                      </svg>
                      <span className="hand">{item.note}</span>
                    </div>
                  </article>
                ))}
              </div>
              <span className="floating-tag">
                <svg viewBox="0 0 40 40" aria-hidden="true">
                  <path d="M34 33C25 24 15 21 9 9M8 21 7 7l14 4" />
                </svg>
                Story
              </span>
            </div>
          </section>

          <section id="projects" className="content-section work-section">
            <RoughLabel color="blue">Projects</RoughLabel>
            <div className="doodle-box work-box" aria-label="Projects">
              <div className="resume-work-list">
                {resumeProjects.map((project) => (
                  <article className="resume-work-item" key={project.title}>
                    <div className="resume-work-heading">
                      <div>
                        <h2>{project.title}</h2>
                        <span className="resume-work-role">{project.role}</span>
                      </div>
                      <span className="resume-work-dates">
                        {project.timeline}
                      </span>
                    </div>
                    <p>{project.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="education" className="content-section education-section">
            <RoughLabel color="pink">Education</RoughLabel>
            <div className="doodle-box education-box" aria-label="Education">
              <div className="education-records">
                {educationRecords.map((record) => (
                  <article className="education-record" key={record.program}>
                    <div className="education-record-heading">
                      <h2>{record.school}</h2>
                      <span>{record.years}</span>
                    </div>
                    <p>{record.program}</p>
                    <p className="education-distinction">
                      {record.distinction}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            id="skills"
            className="content-section technical-skills-section"
          >
            <RoughLabel color="blue">Technical skills</RoughLabel>
            <div
              className="doodle-box skills-box"
              aria-label="Technical skills"
            >
              <div className="technical-skill-groups">
                {technicalSkillGroups.map((group) => (
                  <section className="technical-skill-group" key={group.title}>
                    <h2>{group.title}</h2>
                    <ul>
                      {group.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

function UnderlineDoodle() {
  return (
    <svg className="underline-doodle" viewBox="0 0 64 12" aria-hidden="true">
      <path d="M3 4c18-3 40-3 58 0M9 9c14-2.5 32-2.5 46 0" />
    </svg>
  );
}

function Flower() {
  return (
    <svg className="word-art spin-art" viewBox="0 0 40 40" aria-hidden="true">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation) => (
        <ellipse
          key={rotation}
          cx="20"
          cy="8"
          rx="4.6"
          ry="8"
          transform={`rotate(${rotation} 20 20)`}
        />
      ))}
      <circle cx="20" cy="20" r="4" />
    </svg>
  );
}

function Target() {
  return (
    <svg
      className="word-art spin-art target-art"
      viewBox="0 0 40 40"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="18" />
      <circle cx="20" cy="20" r="11" />
      <circle cx="20" cy="20" r="5" />
      <circle cx="14" cy="9" r="2.4" />
    </svg>
  );
}

function BasicPolaroid({
  className = "",
  imageSrc = "/placeholder-image.svg",
  alt = "",
}: {
  className?: string;
  imageSrc?: string;
  alt?: string;
}) {
  return (
    <figure className={`basic-polaroid ${className}`}>
      <Tape className="tape-left blue-tape" />
      <Tape className="tape-right yellow-tape" />
      <img src={imageSrc} alt={alt} />
    </figure>
  );
}

function getProjectTitle(number: 1 | 2 | 3 | 4 | 5) {
  if (number === 1) return "Sari-Sari Store Management System";
  if (number === 2) return "PortJeep Mobile Application";
  if (number === 3) return "SmartGrow Application";
  if (number === 4) return "JollyIsland Management System";
  return `Project ${number}`;
}

function getProjectDescription(number: 1 | 2 | 3 | 4 | 5) {
  if (number === 1)
    return "An all-in-one retail system for inventory, sales, customers, suppliers, and daily store operations.";
  if (number === 2)
    return "Official Android mobility and logistics management app for SMMPC employees.";
  if (number === 3)
    return "Identify plants, track growth, and get expert AI care tips for your garden.";
  if (number === 4)
    return "A connected play-center operations system for guest registration, RFID entry, play sessions, packages, zones, and live monitoring.";
  return "";
}

function ProjectPanel({
  number,
  dark = false,
}: {
  number: 1 | 2 | 3 | 4 | 5;
  dark?: boolean;
}) {
  const projectHref = `/case-studies/project-${number}`;
  const projectImage =
    number === 1
      ? "/Tindahan.png"
      : number === 2
        ? "/portjeep.png"
        : number === 3
          ? "/SmartGrow.png"
          : number === 4
            ? "/jollyisland.png"
            : "/placeholder-image.svg";
  const projectDescription = getProjectDescription(number);

  return (
    <article className={`home-project ${dark ? "dark" : "blue"}`}>
      <div className="project-tab">✦ Project 0{number}</div>
      <div className="project-panel-inner">
        <div className="project-panel-copy">
          <div className="project-meta">
            <span className="project-bullet">
              <i />
            </span>
            {number === 1 && (
              <span className="project-date">October 5, 2026</span>
            )}
            {number === 2 && (
              <span className="project-date">September 28, 2026</span>
            )}
            {number === 3 && (
              <span className="project-date">October 3, 2026</span>
            )}
            {number === 4 && (
              <span className="project-date">September 20, 2026</span>
            )}
          </div>
          <h3>{getProjectTitle(number)}</h3>
          {projectDescription && (
            <p className="project-description">{projectDescription}</p>
          )}
          {number !== 5 && (
            <div className="facts-grid project-home-facts">
              <FactNote
                label="Role"
                value={
                  number === 1
                    ? "Main Dev"
                    : number === 2
                      ? "Main Android Developer"
                      : "Support Developer"
                }
                color="cyan"
                tilt="tilt-left"
              />
              <FactNote
                label="Timeline"
                value={
                  number === 1
                    ? "Oct 05, 2026 - Present"
                    : number === 2
                      ? "Aug 15, 2026 - Sep 28, 2026"
                      : number === 3
                        ? "Aug 10, 2026 - Oct 03, 2026"
                        : "May 16, 2026 - Sep 20, 2026"
                }
                color="tan"
                tilt="tilt-right"
              />
              <FactNote
                label="Team"
                value={
                  number === 1
                    ? "1 Developer, 1 UI/UX, Me"
                    : number === 2
                      ? "1 UI/UX, Me"
                      : number === 3
                        ? "3 Developers, 1 UI/UX, 1 PM, Me"
                        : "1 Developer, Me"
                }
                color="mint"
                tilt="tilt-left"
              />
              <FactNote
                label="Year"
                value="2026"
                color="cyan"
                tilt="tilt-soft"
              />
            </div>
          )}
          <a href={projectHref}>
            View project <ArrowUpRight />
          </a>
          {number === 1 && (
            <div className="project-tags" aria-label="Project categories">
              <span>Retail</span>
              <span>Management system</span>
            </div>
          )}
          {number === 2 && (
            <div className="project-tags" aria-label="Project categories">
              <span>Mobility</span>
              <span>Consumer app</span>
            </div>
          )}
          {number === 3 && (
            <div className="project-tags" aria-label="Project categories">
              <span>AI</span>
              <span>Consumer app</span>
            </div>
          )}
          {number === 4 && (
            <div className="project-tags" aria-label="Project categories">
              <span>Operations</span>
              <span>RFID system</span>
            </div>
          )}
        </div>
        <div
          className={`project-panel-image ${number === 1 || number === 2 || number === 3 || number === 4 ? "project-image-landscape" : ""}`}
        >
          <Tape className="banner-left" />
          <Tape className="banner-right" />
          <img src={projectImage} alt={getProjectTitle(number)} />
        </div>
      </div>
    </article>
  );
}

function HomePage() {
  return (
    <>
      <main className="home-page">
        <section className="home-hero lined-page">
          <span className="orange-orbit orbit-left" aria-hidden="true" />
          <span className="orange-orbit orbit-right" aria-hidden="true" />
          <div className="hero-center">
            <div className="hand hero-kicker">
              my name is
              <UnderlineDoodle />
            </div>
            <div className="hero-mobile-notes">
              <span>WebDev</span>
              <span>AppDev</span>
            </div>
            <div className="hero-name-wrap">
              <h1 className="display doodle-box">KURBS</h1>
              <span className="hero-note webdev">WebDev</span>
              <span className="hero-note appdev">AppDev</span>
              <span className="hand hero-sticky role-sticky">
                Software &amp; Systems Specialist
              </span>
              <span className="hand hero-sticky location-sticky">
                City of San Jose Del Monte Bulacan
              </span>
            </div>
            <p className="hero-status">
              <span />
              Open to opportunities
            </p>
            <div className="hero-mobile-stickies">
              <span className="hand">Software &amp; Systems Specialist</span>
              <span className="hand">City of San Jose Del Monte Bulacan</span>
            </div>
            <h2>
              I build software and systems that work. <Target /> <Flower />
            </h2>
            <a className="hero-cta" href="/contact">
              <span>
                <ArrowUpRight />
              </span>
              Contact me
            </a>
          </div>
        </section>

        <AboutScreenshotIntro />

        <section className="home-work lined-page">
          <div className="home-work-heading">
            <p className="hand">explore my work!</p>
            <UnderlineDoodle />
            <h2 className="display">FEATURED WORKS</h2>
            <span className="work-description">
              Work made with intention. Each project started with a real problem
              and ended with something that works.
            </span>
          </div>
          <div className="home-projects">
            <ProjectPanel number={1} />
            <ProjectPanel number={2} dark />
            <ProjectPanel number={3} />
            <ProjectPanel number={4} dark />
            <ProjectPanel number={5} />
          </div>
        </section>
      </main>
      <ContactSection />
      <Footer />
    </>
  );
}

function ProjectCard({ number }: { number: 1 | 2 | 3 | 4 | 5 }) {
  const projectImage =
    number === 1
      ? "/Tindahan.png"
      : number === 2
        ? "/portjeep.png"
        : number === 3
          ? "/SmartGrow.png"
          : number === 4
            ? "/jollyisland.png"
            : "/placeholder-image.svg";
  const projectDate =
    number === 1
      ? "OCT 5, 2026"
      : number === 2
        ? "SEP 28, 2026"
        : number === 3
          ? "OCT 3, 2026"
          : number === 4
            ? "SEP 20, 2026"
            : "";
  const projectDescription = getProjectDescription(number);

  return (
    <a className="project-card" href={`/case-studies/project-${number}`}>
      <span className="project-card-tab">
        <i />
        {projectDate && <span>{projectDate}</span>}
      </span>
      <div className="project-card-media">
        <img src={projectImage} alt={getProjectTitle(number)} />
        <span className="project-see">See</span>
      </div>
      <h2>{getProjectTitle(number)}</h2>
      {projectDescription && (
        <p className="project-card-description">{projectDescription}</p>
      )}
    </a>
  );
}

function CaseStudiesPage() {
  return (
    <>
      <main className="case-list lined-page">
        <div className="case-heading">
          <p className="hand">explore my work!</p>
          <h1 className="display">FEATURED WORKS</h1>
        </div>
        <div className="project-grid">
          <ProjectCard number={1} />
          <ProjectCard number={2} />
          <ProjectCard number={3} />
          <ProjectCard number={4} />
          <ProjectCard number={5} />
        </div>
      </main>
      <Footer />
    </>
  );
}

function FactNote({
  label,
  color,
  tilt,
  value,
}: {
  label: string;
  color: string;
  tilt: string;
  value?: string;
}) {
  return (
    <div className={`fact-note ${color} ${tilt}`}>
      <Tape />
      <strong>{label}</strong>
      {value ? <span>{value}</span> : <span>&nbsp;</span>}
    </div>
  );
}

function ProjectDetailPage({ number }: { number: 1 | 2 | 3 | 4 | 5 }) {
  const other = number === 5 ? 1 : ((number + 1) as 1 | 2 | 3 | 4 | 5);
  const projectImage =
    number === 1
      ? "/Tindahan.png"
      : number === 2
        ? "/portjeep.png"
        : number === 3
          ? "/SmartGrow.png"
          : number === 4
            ? "/jollyisland.png"
            : "/placeholder-image.svg";
  return (
    <>
      <main
        className={`project-detail lined-page ${number === 1 || number === 2 || number === 3 || number === 4 ? "project-detail-case-study" : ""}`}
      >
        <div className="detail-top">
          <div className="detail-heading">
            {number === 1 || number === 2 || number === 3 || number === 4 ? (
              <div className="detail-date">
                <span className="detail-dot" />
                <span className="project-date">
                  {number === 1
                    ? "October 5, 2026"
                    : number === 2
                      ? "September 28, 2026"
                      : number === 3
                        ? "October 3, 2026"
                        : "September 20, 2026"}
                </span>
              </div>
            ) : (
              <span className="detail-dot" />
            )}
            <h1 className="display">{getProjectTitle(number)}</h1>
            {(number === 1 || number === 2 || number === 3 || number === 4) && (
              <>
                <p className="detail-summary">
                  {number === 1
                    ? "An all-in-one retail system for inventory, sales, customers, suppliers, and daily store operations."
                    : number === 2
                      ? "Official Android mobility and logistics management app for SMMPC employees."
                      : number === 3
                        ? "Identify plants, track growth, and get expert AI care tips for your garden."
                        : "A connected play-center operations system for guest registration, RFID entry, play sessions, packages, zones, and live monitoring."}
                </p>
                <div
                  className="project-tags detail-tags"
                  aria-label="Project categories"
                >
                  {number === 1 ? (
                    <>
                      <span>Retail</span>
                      <span>Management system</span>
                    </>
                  ) : number === 2 ? (
                    <>
                      <span>Mobility</span>
                      <span>Consumer app</span>
                    </>
                  ) : number === 3 ? (
                    <>
                      <span>AI</span>
                      <span>Consumer app</span>
                    </>
                  ) : (
                    <>
                      <span>Operations</span>
                      <span>RFID system</span>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
          <div className="facts-grid">
            {number === 1 ? (
              <>
                <FactNote
                  label="Role"
                  value="Main Dev"
                  color="cyan"
                  tilt="tilt-left"
                />
                <FactNote
                  label="Timeline"
                  value="Oct 05, 2026 - Present"
                  color="tan"
                  tilt="tilt-right"
                />
                <FactNote
                  label="Team"
                  value="1 Developer, 1 UI/UX, Me"
                  color="mint"
                  tilt="tilt-left"
                />
                <FactNote
                  label="Year"
                  value="2026"
                  color="cyan"
                  tilt="tilt-soft"
                />
              </>
            ) : number === 2 ? (
              <>
                <FactNote
                  label="Role"
                  value="Main Android Developer"
                  color="cyan"
                  tilt="tilt-left"
                />
                <FactNote
                  label="Timeline"
                  value="Aug 15, 2026 - Sep 28, 2026"
                  color="tan"
                  tilt="tilt-right"
                />
                <FactNote
                  label="Team"
                  value="1 UI/UX, Me"
                  color="mint"
                  tilt="tilt-left"
                />
                <FactNote
                  label="Year"
                  value="2026"
                  color="cyan"
                  tilt="tilt-soft"
                />
              </>
            ) : number === 3 ? (
              <>
                <FactNote
                  label="Role"
                  value="Support Developer"
                  color="cyan"
                  tilt="tilt-left"
                />
                <FactNote
                  label="Timeline"
                  value="Aug 10, 2026 - Oct 03, 2026"
                  color="tan"
                  tilt="tilt-right"
                />
                <FactNote
                  label="Team"
                  value="3 Developers, 1 UI/UX, 1 PM, Me"
                  color="mint"
                  tilt="tilt-left"
                />
                <FactNote
                  label="Year"
                  value="2026"
                  color="cyan"
                  tilt="tilt-soft"
                />
              </>
            ) : number === 4 ? (
              <>
                <FactNote
                  label="Role"
                  value="Support Developer"
                  color="cyan"
                  tilt="tilt-left"
                />
                <FactNote
                  label="Timeline"
                  value="May 16, 2026 - Sep 20, 2026"
                  color="tan"
                  tilt="tilt-right"
                />
                <FactNote
                  label="Team"
                  value="1 Developer, Me"
                  color="mint"
                  tilt="tilt-left"
                />
                <FactNote
                  label="Year"
                  value="2026"
                  color="cyan"
                  tilt="tilt-soft"
                />
              </>
            ) : (
              <>
                <FactNote label="Role" color="cyan" tilt="tilt-left" />
                <FactNote label="Timeline" color="tan" tilt="tilt-right" />
                <FactNote label="Year" color="mint" tilt="tilt-soft" />
              </>
            )}
          </div>
        </div>
        <div
          className={`detail-hero ${number === 1 || number === 2 || number === 3 || number === 4 ? "project-image-landscape" : ""}`}
        >
          <Tape className="banner-left" />
          <Tape className="banner-right" />
          <img src={projectImage} alt={getProjectTitle(number)} />
        </div>
        <section className="story-placeholder">
          <h2 className="hand">the challenge</h2>
          {(number === 1 || number === 2 || number === 3 || number === 4) && (
            <p>
              {number === 1
                ? "Small-store operations depend on accurate stock, sales, and customer balances. When those records are managed separately, it takes extra effort to spot low inventory, review performance, or follow up on utang."
                : number === 2
                  ? "SMMPC employees need an official mobile experience for mobility and logistics work. The challenge is to make those work needs accessible in a dedicated Android app."
                  : number === 3
                    ? "Plant owners need to identify unfamiliar plants, follow their growth, and understand how to care for them. Keeping those questions disconnected can make it harder to turn identification into ongoing care."
                    : "Guest registration and playtime are separate events. Starting a session timer before a guest scans in can deduct paid time before they ever enter the play area."}
            </p>
          )}
        </section>
        <section className="story-placeholder">
          <h2 className="hand">my approach</h2>
          {(number === 1 || number === 2 || number === 3 || number === 4) && (
            <p>
              {number === 1
                ? "Connected a product catalog and stock thresholds to point-of-sale checkout, then brought sales, gross profit, low-stock counts, and outstanding utang into the dashboard. Dedicated customer, supplier, and reporting workflows support the rest of the store routine."
                : number === 2
                  ? "Built PortJeep as an official Android app for SMMPC employees, organizing the experience around the organization's mobility and logistics needs."
                  : number === 3
                    ? "Structured SmartGrow around a plant-care loop: identify a plant, track its growth, and use AI care tips to guide the next step."
                    : "The workflow keeps new registrations in a waiting state, starts the timer when RFID entry is validated, and completes the session on exit. Admin and cashier tools handle packages, zones, and guest operations, while device health and command acknowledgments are monitored centrally."}
            </p>
          )}
        </section>
        <section className="story-placeholder results">
          <h2 className="hand">the results</h2>
          <p>
            {number === 1
              ? "Inventory and checkout now connect in the same workflow: completing a sale updates product stock, while cash sales and utang balances are recorded for follow-up. The dashboard brings sales, stock alerts, and customer balances into one operational view without relying on unsupported performance estimates."
              : number === 2
                ? "PortJeep brings SMMPC employee mobility and logistics into a single official Android experience, giving the project a focused mobile home for those work needs."
                : number === 3
                  ? "SmartGrow brings plant identification, growth tracking, and AI care guidance together so gardeners can move from recognizing a plant to monitoring and caring for it in one app."
                  : number === 4
                    ? "Staff can follow a guest session from registration through entry and exit, while admins keep the center's packages, zones, and connected devices in view."
                    : "A short paragraph about what changed once the work shipped: the outcome, who felt it, and one number if you have it. Say what it meant for the people using it, not just the metrics."}
          </p>
          <div
            className={`result-notes ${number === 1 || number === 2 || number === 3 || number === 4 ? "project-case-notes" : ""}`}
          >
            {number === 1 ? (
              <>
                <span className="cyan">Stock updates at checkout</span>
                <span className="tan">Cash and utang sales</span>
                <span className="mint">Sales and stock overview</span>
              </>
            ) : number === 2 ? (
              <>
                <span className="cyan">Official Android app</span>
                <span className="tan">Mobility and logistics</span>
                <span className="mint">For SMMPC staff</span>
              </>
            ) : number === 3 ? (
              <>
                <span className="cyan">Plant identification</span>
                <span className="tan">Growth tracking</span>
                <span className="mint">AI care tips</span>
              </>
            ) : number === 4 ? (
              <>
                <span className="cyan">Timer starts at RFID entry</span>
                <span className="tan">Registration to session</span>
                <span className="mint">Live device health</span>
              </>
            ) : (
              <>
                <span className="cyan" />
                <span className="tan" />
                <span className="mint" />
              </>
            )}
          </div>
        </section>
        <section className="related-projects">
          <h2 className="hand">more projects</h2>
          <ProjectCard number={other} />
        </section>
      </main>
      <Footer />
    </>
  );
}

const playgroundItems = [
  { left: 3, top: 6, size: "large", tilt: "tilt-left", color: "tan" },
  { left: 56, top: 2, size: "medium", tilt: "tilt-right", color: "mint" },
  { left: 30, top: 26, size: "xlarge", tilt: "tilt-more", color: "cyan" },
  { left: 76, top: 24, size: "small", tilt: "tilt-soft-left", color: "tan" },
];

function PlaygroundItem({
  item,
  index,
}: {
  item: (typeof playgroundItems)[number];
  index: number;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [drag, setDrag] = useState<{ x: number; y: number } | null>(null);
  return (
    <div
      className={`play-item ${item.size} ${item.tilt}`}
      style={{
        left: `${item.left}%`,
        top: `${item.top}%`,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onPointerDown={(event) => {
        event.currentTarget.setPointerCapture(event.pointerId);
        setDrag({
          x: event.clientX - position.x,
          y: event.clientY - position.y,
        });
      }}
      onPointerMove={(event) => {
        if (drag)
          setPosition({ x: event.clientX - drag.x, y: event.clientY - drag.y });
      }}
      onPointerUp={() => setDrag(null)}
      onPointerCancel={() => setDrag(null)}
    >
      <img
        src="/placeholder-image.svg"
        alt={`Playground experiment ${index + 1}`}
      />
      <span className={`play-label ${item.color}`} />
    </div>
  );
}

function PlaygroundPage() {
  const [zoom, setZoom] = useState(1);
  return (
    <main className="playground-page lined-page">
      <div className="play-heading">
        <p className="hand">playground</p>
        <h1 className="display">JUST FOR FUN</h1>
      </div>
      <div className="play-canvas" style={{ transform: `scale(${zoom})` }}>
        {playgroundItems.map((item, index) => (
          <PlaygroundItem key={index} item={item} index={index} />
        ))}
      </div>
      <div className="zoom-controls">
        <button
          type="button"
          aria-label="Zoom in"
          onClick={() => setZoom((value) => Math.min(1.5, value + 0.1))}
        >
          +
        </button>
        <button
          type="button"
          aria-label="Zoom out"
          onClick={() => setZoom((value) => Math.max(0.6, value - 0.1))}
        >
          −
        </button>
      </div>
    </main>
  );
}

function ContactPage() {
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
  return (
    <main className="standalone-contact lined-page">
      <BasicPolaroid className="contact-photo contact-photo-left" />
      <BasicPolaroid className="contact-photo contact-photo-right" />
      <div className="contact-page-center">
        <div className="hand contact-kicker">
          say hi
          <UnderlineDoodle />
        </div>
        <h1 className="display contact-outline">CONTACT</h1>
        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            window.location.href = `mailto:kurbyvalencerina@gmail.com?subject=Portfolio inquiry&body=${encodeURIComponent(message)}`;
          }}
        >
          <strong>
            Got a project or just want to connect? Send me a message.
          </strong>
          {step === 1 ? (
            <>
              <textarea
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell me a story, or a project idea…"
                aria-label="Your message"
              />
              <button type="button" onClick={() => setStep(2)}>
                Next (1/2)
              </button>
            </>
          ) : (
            <>
              <label>
                Name
                <input name="name" placeholder="Jane Doe" autoComplete="name" />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="jane@example.com"
                  autoComplete="email"
                />
              </label>
              <div className="form-actions">
                <button
                  className="back-step"
                  type="button"
                  onClick={() => setStep(1)}
                  aria-label="Back to your note"
                >
                  ←
                </button>
                <button type="submit">Send (2/2)</button>
              </div>
            </>
          )}
        </form>
        <p className="hand availability">↳ Open to opportunities</p>
        <a className="contact-email" href="mailto:kurbyvalencerina@gmail.com">
          kurbyvalencerina@gmail.com
        </a>
        <Socials />
      </div>
    </main>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="lined-page contact-section">
      <div className="talk-intro">
        <svg className="smiley" viewBox="0 0 200 200" aria-hidden="true">
          <circle cx="100" cy="100" r="88" />
          <circle className="cheek" cx="56" cy="120" r="12" />
          <circle className="cheek" cx="144" cy="120" r="12" />
          <rect x="65" y="68" width="16" height="42" rx="8" />
          <rect x="119" y="68" width="16" height="42" rx="8" />
          <path d="M62 130q38 42 76 0" />
        </svg>
        <h2 className="display">Let's talk</h2>
        <p className="hand">
          Got a project or just want to connect? Send me a message.
        </p>
      </div>
      <div className="contact-banner-wrap">
        <a className="contact-banner doodle-box" href="/contact">
          <Tape className="banner-left" />
          <Tape className="banner-right" />
          <span className="hand banner-tagline">
            let's build something worth seeing
          </span>
          <strong className="display">CONTACT</strong>
          <span className="drop-line">
            drop a line
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="lined-page site-footer">
      <svg
        className="footer-curve"
        viewBox="0 0 1440 130"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M-10 120C420 10 1030 4 1450 80" />
      </svg>
      <div className="footer-inner">
        <div className="footer-main">
          <div>
            <p className="display footer-name">John Kurby Dr. Valencerina</p>
            <p className="role">
              <span />
              Software &amp; Systems Specialist
            </p>
          </div>
          <div className="footer-right">
            <nav aria-label="Footer navigation">
              <a href="/about">About</a>
              <a href="/case-studies">Case Study</a>
              <a href="/playground">Playground</a>
            </nav>
            <Socials large />
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 John Kurby Dr. Valencerina</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  let page: React.ReactNode;
  let showFooter = false;
  if (path === "/") page = <HomePage />;
  else if (path === "/about") {
    page = (
      <>
        <AboutPage />
        <ContactSection />
        <Footer />
      </>
    );
  } else if (path === "/case-studies" || path === "/case-study")
    page = <CaseStudiesPage />;
  else if (path === "/case-studies/project-1")
    page = <ProjectDetailPage number={1} />;
  else if (path === "/case-studies/project-2")
    page = <ProjectDetailPage number={2} />;
  else if (path === "/case-studies/project-3")
    page = <ProjectDetailPage number={3} />;
  else if (path === "/case-studies/project-4")
    page = <ProjectDetailPage number={4} />;
  else if (path === "/case-studies/project-5")
    page = <ProjectDetailPage number={5} />;
  else if (path === "/playground") page = <PlaygroundPage />;
  else if (path === "/contact") page = <ContactPage />;
  else {
    showFooter = true;
    page = (
      <main className="not-found lined-page">
        <p className="hand">nothing here</p>
        <h1 className="display">404</h1>
        <a href="/">Back home</a>
      </main>
    );
  }
  return (
    <div className="site">
      <div className="grain" aria-hidden="true" />
      <Header />
      {page}
      {showFooter && <Footer />}
    </div>
  );
}
