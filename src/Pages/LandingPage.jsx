import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import profileImage from "../assets/images/Profile.webp";
import Flower from "../assets/images/Flower.webp";
import Heart from "../assets/images/Heart.webp";
import Sparkle from "../assets/images/Sparkle.webp";
import dockeriteImage from "../assets/images/Dockerite.webp";
import summerImage from "../assets/images/Summer.webp";
import uxrayImage from "../assets/images/UXRay.webp";
import resumePdf from "../assets/Ahamed Meyan.pdf";

const projects = {
  dockerite: {
    name: "Dockerite",
    url: "https://github.com/Ahamed1846/Dockerite",
    status: "Public",
    language: "JavaScript",
    description:
      "Modern Docker management dashboard with real-time stats, logs, image handling, and container lifecycle control.",
    tags: ["Docker", "Dashboard", "Infrastructure"],
    image: dockeriteImage,
    color: "#2D6FFF",
  },
  summer: {
    name: "Summer",
    url: "https://github.com/Ahamed1846/Summer",
    status: "Public",
    language: "JavaScript",
    description:
      "High-performance HTTP server, router, load balancer, and reverse proxy built from scratch.",
    tags: ["HTTP", "Networking", "Performance"],
    image: summerImage,
    color: "#FF6B00",
  },
  uxray: {
    name: "UXRay",
    url: "https://github.com/Ahamed1846/UXRay",
    status: "Public",
    language: "TypeScript",
    description:
      "Open-source tool for finding usability, accessibility, and UX issues in websites.",
    tags: ["Accessibility", "UX", "Open Source"],
    image: uxrayImage,
    color: "#00C853",
  },
};

const skills = [
  "Python",
  "★",
  "JavaScript",
  "★",
  "C++",
  "★",
  "Java",
  "★",
  "React",
  "★",
  "Nuxt.js",
  "★",
  "Vue.js",
  "★",
  "Tailwind CSS",
  "★",
  "Figma",
  "★",
  "Node.js",
  "★",
  "Express.js",
  "★",
  "MongoDB",
  "★",
  "Supabase",
  "★",
  "IndexedDB",
  "★",
  "Linux",
  "★",
  "Git",
  "★",
  "GitHub",
  "★",
  "Postman",
  "★",
  "Docker",
  "★",
  "Auth0",
  "★",
  "JWT",
  "★",
  "REST APIs",
  "★",
  "Mongoose",
  "★",
  "Vite",
  "★",
];

const navLinks = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Open Source", "#experience"],
];

function DecorImage({ src, alt, className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`select-none object-contain ${className}`}
      draggable="false"
    />
  );
}

function LandingPage() {
  const [activeProject, setActiveProject] = useState("dockerite");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href) => {
    const shouldWaitForMenu = isMobileMenuOpen;

    setIsMobileMenuOpen(false);
    window.history.pushState(null, "", href);

    window.setTimeout(() => {
      const target = document.querySelector(href);

      if (!target) return;

      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, shouldWaitForMenu ? 220 : 0);
  };

  const handleNavClick = (event, href) => {
    event.preventDefault();
    scrollToSection(href);
  };

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const kolkataTime = time.toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#2D6FFF] text-[#111]">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b-[4px] border-[#111] bg-[#2D6FFF]">
        <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-6 lg:px-8">
          <button
            type="button"
            onClick={scrollToTop}
            className="pixel-font bg-transparent text-[18px] text-[#FFD600] [text-shadow:3px_3px_0_#111]"
          >
            AM
          </button>

          <div className="hidden items-center md:flex">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={(event) => handleNavClick(event, href)}
                className="pixel-font border-l-2 border-white/20 px-4 py-2 text-[8px] text-white no-underline transition hover:bg-[#FFD600] hover:text-[#111]"
              >
                {label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={(event) => handleNavClick(event, "#contact")}
              className="pixel-font ml-3 inline-grid grid-flow-col items-center gap-3 border-[3px] border-[#111] bg-[#FF2D78] px-4 py-2 text-[8px] text-white no-underline shadow-[4px_4px_0_#111] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-[#FFD600] hover:text-[#111] hover:shadow-[2px_2px_0_#111]"
            >
              <span>Contact</span>
              <span className="font-sans text-[12px] font-black">→</span>
            </a>
          </div>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="pixel-font inline-flex h-10 w-10 items-center justify-center border-[3px] border-[#111] bg-[#FFD600] text-[16px] leading-none text-[#111] shadow-[3px_3px_0_#111] md:hidden"
          >
            {isMobileMenuOpen ? "×" : "≡"}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="overflow-hidden border-t-[3px] border-[#111] bg-[#2D6FFF] md:hidden"
            >
              <div className="grid grid-cols-2 gap-3 px-6 py-4">
                {navLinks.map(([label, href]) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => scrollToSection(href)}
                    className="pixel-font border-[3px] border-[#111] bg-white px-3 py-3 text-center text-[7px] text-[#111] shadow-[3px_3px_0_#111]"
                  >
                    {label}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => scrollToSection("#contact")}
                  className="pixel-font col-span-2 border-[3px] border-[#111] bg-[#FF2D78] px-3 py-3 text-center text-[7px] text-white shadow-[3px_3px_0_#111]"
                >
                  Contact
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <section className="relative min-h-screen overflow-hidden bg-[#2D6FFF] pt-16">
        <div className="pixel-grid absolute inset-0" />

        <div className="pointer-events-none absolute left-[6%] top-[16%] float-a hidden md:block">
          <DecorImage src={Sparkle} alt="" className="h-[100px] w-[100px]" />
        </div>

        <div className="pointer-events-none absolute right-[2%] top-[8%] float-b hidden md:block">
          <DecorImage src={Heart} alt="" className="h-[200px] w-[200px]" />
        </div>

        <div className="pointer-events-none absolute bottom-[4%] right-[2%] float-a hidden md:block">
          <DecorImage src={Flower} alt="" className="h-[200px] w-[200px]" />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-64px)] max-w-[1180px] grid-cols-1 items-center gap-14 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="pixel-font mb-7 inline-flex items-center bg-[#111] px-4 py-2 text-[9px] text-[#FFD600]">
              <span className="mx-3">Software Engineer</span>
            </div>

            <h1 className="pixel-font text-[clamp(2.4rem,6vw,4.8rem)] leading-[1.15] text-white [text-shadow:6px_6px_0_#111]">
              Ahamed
              <br />
              <span className="text-[#FFD600]">Meyan</span>
            </h1>

            <p className="mt-7 max-w-[500px] text-[15px] leading-[1.9] text-white/80">
              Software Engineer with a bias toward backend engineering, building
              clean systems, scalable software, and thoughtful products.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="pixel-font flex items-center gap-2 border-[3px] border-[#111] bg-[#FFD600] px-6 py-4 text-[10px] text-[#111] no-underline shadow-[6px_6px_0_#111] transition hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_#111]"
              >
                <span>SEE MY WORK</span>
                <span className="font-sans text-[14px] font-black leading-none">
                  ➜
                </span>
              </a>

              <a
                href={resumePdf}
                download="Ahamed-Meyan-Resume.pdf"
                className="pixel-font flex items-center gap-2 border-[3px] border-[#111] bg-white px-6 py-4 text-[10px] text-[#111] no-underline shadow-[6px_6px_0_#111] transition hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_#111]"
              >
                <span>RESUME</span>
                <span className="font-sans text-[14px] font-black leading-none">
                  ↓
                </span>
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://github.com/Ahamed1846"
                target="_blank"
                rel="noreferrer"
                className="pixel-font flex items-center gap-2 border-2 border-[#111] bg-white px-4 py-2 text-[7px] text-[#111] no-underline shadow-[3px_3px_0_#111] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-[#FFD600] hover:shadow-[1px_1px_0_#111]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.5v-1.75c-2.78.62-3.37-1.38-3.37-1.38-.45-1.2-1.1-1.52-1.1-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.39 9.39 0 0 1 12 6.9c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9v2.84c0 .28.18.6.69.5A10.06 10.06 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
                </svg>
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ahamedmeyan/"
                target="_blank"
                rel="noreferrer"
                className="pixel-font flex items-center gap-2 border-2 border-[#111] bg-white px-4 py-2 text-[7px] text-[#111] no-underline shadow-[3px_3px_0_#111] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-[#FFD600] hover:shadow-[1px_1px_0_#111]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ahamed1062005@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="pixel-font flex items-center gap-2 border-2 border-[#111] bg-white px-4 py-2 text-[7px] text-[#111] no-underline shadow-[3px_3px_0_#111] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-[#FFD600] hover:shadow-[1px_1px_0_#111]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
                Email
              </a>
            </div>
          </div>

          <div className="relative hidden justify-center lg:flex">
            <div className="relative">
              <img
                src={profileImage}
                alt="Ahamed Meyan"
                width="840"
                height="1050"
                fetchPriority="high"
                decoding="async"
                className="w-[420px] border-[5px] border-[#111] bg-white shadow-[14px_14px_0_#111]"
              />

              <div className="pixel-font absolute -bottom-5 -left-6 border-[3px] border-[#111] bg-[#00C853] px-4 py-3 text-[7px] leading-none text-[#111] shadow-[5px_5px_0_#111]">
                <div className="flex items-center gap-2">
                  <span className="blink-square h-[7px] w-[7px] bg-[#111]" />
                  <span className="leading-none">Based in Chennai</span>
                </div>

                <span className="mt-2 block pl-[15px] leading-none text-[#2D6FFF]">
                  Open to work
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y-[4px] border-[#111] bg-[#FFD600] py-4">
        <div className="ticker-track items-center whitespace-nowrap">
          {[...skills, ...skills].map((item, i) =>
            item === "★" ? (
              <span key={i} className="mx-4 inline-flex h-6 items-center text-[16px] leading-none text-[#2D6FFF]">
                ★
              </span>
            ) : (
              <span key={i} className="pixel-font mx-8 inline-flex h-6 items-center text-[9px] leading-none text-[#111]">
                {item}
              </span>
            )
          )}
        </div>
      </section>

      <section
        id="about"
        className="relative overflow-hidden border-y-[5px] border-[#111] bg-[#FFD600] py-20 md:py-[110px]"
      >
        <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
          <div className="relative">
            <div className="grid max-w-[1040px] gap-10 md:grid-cols-[0.42fr_1fr] md:gap-14">
              <div>
                <h2 className="pixel-font text-[clamp(24px,4vw,42px)] leading-[1.25] text-[#111] [text-shadow:4px_4px_0_rgba(255,255,255,0.7)]">
                  About Me
                </h2>
              </div>

              <div className="grid gap-8">
                <p className="text-[17px] font-bold leading-[2] text-[#111]">
                  I&apos;m a software engineer focused on building reliable software
                  and solving real-world problems. I enjoy working on backend
                  systems, improving architecture, and turning ideas into
                  products people can use.
                </p>

                <p className="text-[16px] leading-[2] text-[#333]">
                  I&apos;m currently studying Computer Science while building
                  projects, contributing to open source, and gaining hands-on
                  experience through internships. Most of what I know comes from
                  building, shipping, and improving through practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="border-y-[5px] border-[#111] bg-[#F5F2FF] py-20 md:py-[100px]"
      >
        <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
          <div className="pixel-font mb-5 inline-block border-2 border-[#111] bg-[#FFD600] px-4 py-2 text-[9px] uppercase tracking-widest text-[#111] shadow-[3px_3px_0_#111]">
            Projects
          </div>

          <h2 className="pixel-font mb-16 text-[clamp(24px,5vw,48px)] leading-[1.3] text-[#111] [text-shadow:4px_4px_0_rgba(0,0,0,0.15)]">
            Things I&apos;ve Built
          </h2>

          <div>
            {Object.entries(projects).map(([key, project], index) => {
              const isActive = activeProject === key;

              return (
                <div
                  key={key}
                  className="mb-5 overflow-hidden border-[4px] border-[#111] bg-white shadow-[5px_5px_0_#111] transition hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[8px_8px_0_#111] md:shadow-[8px_8px_0_#111] md:hover:shadow-[11px_11px_0_#111]"
                  style={{
                    borderColor: isActive ? project.color : "#111",
                    boxShadow: isActive
                      ? `8px 8px 0 ${project.color}`
                      : undefined,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => !isActive && setActiveProject(key)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 bg-transparent px-7 py-6 text-left"
                  >
                    <div className="flex items-center gap-5">
                      <span className="pixel-font w-7 shrink-0 text-[9px] text-black/25">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <h3 className="pixel-font text-[clamp(14px,2.5vw,22px)] leading-[1.3] text-[#111]">
                          {project.name}
                        </h3>

                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <span
                            className="pixel-font border-2 border-[#111] px-[10px] py-[5px] text-[6px] uppercase text-white"
                            style={{ background: project.color }}
                          >
                            {project.language}
                          </span>

                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="pixel-font border-2 border-[#111] bg-[#F0EEFF] px-[10px] py-[5px] text-[6px] uppercase text-[#111]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <span
                      className="pixel-font shrink-0 text-[20px] font-black transition-transform duration-300"
                      style={{
                        transform: isActive ? "rotate(90deg)" : "rotate(0deg)",
                        color: isActive ? project.color : "#111",
                      }}
                    >
                      →
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="grid border-t-[4px] border-[#111] lg:grid-cols-[1.3fr_0.7fr]">
                          <div className="border-b-[4px] border-[#111] bg-[#f5f5f5] p-4 lg:border-b-0 lg:border-r-[4px]">
                            <img
                              src={project.image}
                              alt={project.name}
                              loading="lazy"
                              decoding="async"
                              className="block w-full border-[3px] border-[#111]"
                            />
                          </div>

                          <div className="flex flex-col justify-between gap-6 p-8">
                            <div>
                              <div className="pixel-font mb-4 inline-block border-2 border-[#111] bg-[#00C853] px-3 py-2 text-[7px] text-[#111] shadow-[3px_3px_0_#111]">
                                {project.status}
                              </div>

                              <h3 className="pixel-font mb-4 text-[clamp(16px,2.5vw,28px)] leading-[1.3] text-[#111]">
                                {project.name}
                              </h3>

                              <p className="mb-5 text-[13px] leading-[2] text-[#333]">
                                {project.description}
                              </p>

                              <div className="mb-6 flex flex-wrap items-center gap-2">
                                <span
                                  className="pixel-font border-2 border-[#111] px-[10px] py-[5px] text-[6px] uppercase text-white"
                                  style={{ background: project.color }}
                                >
                                  {project.language}
                                </span>

                                {project.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="pixel-font border-2 border-[#111] bg-[#F0EEFF] px-[10px] py-[5px] text-[6px] uppercase text-[#111]"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <a
                              href={project.url}
                              target="_blank"
                              rel="noreferrer"
                              className="pixel-font inline-flex w-fit items-center gap-2 border-[3px] border-[#111] px-6 py-4 text-[10px] text-white no-underline shadow-[5px_5px_0_#111] transition hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_#111]"
                              style={{ background: project.color }}
                            >
                              View Project →
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section
        id="experience"
        className="border-b-[5px] border-[#111] bg-[#FF2D78] py-20 md:py-[100px]"
      >
        <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
          <div className="grid items-stretch gap-8 lg:grid-cols-2">
            {/* Experience */}
            <div className="flex h-full min-w-0 flex-col">
              <div className="pixel-font mb-5 inline-block w-fit border-2 border-[#111] bg-white px-3 py-[6px] text-[8px] uppercase tracking-widest text-[#FF2D78] shadow-[3px_3px_0_#111]">
                Experience
              </div>

              <h2 className="pixel-font mb-10 max-w-full text-[clamp(17px,6vw,32px)] leading-[1.35] text-white [text-shadow:4px_4px_0_#111] md:mb-12 lg:h-[84px]">
                Where I&apos;ve Worked
              </h2>

              <div className="flex flex-1 flex-col border-[4px] border-[#111] bg-white p-6 shadow-[5px_5px_0_#111] sm:p-8 md:shadow-[8px_8px_0_#111]">
                <div className="pixel-font mb-2 text-[16px] text-[#111]">
                  Economize
                </div>

                <div className="pixel-font mb-1 text-[8px] text-[#2D6FFF]">
                  Software Engineer Intern
                </div>

                <div className="mb-6 text-[11px] italic text-[#666]">
                  Sep 2023 – Jun 2024
                </div>

                <div className="space-y-[14px]">
                  {[
                    "Migrated 10,000+ lines of Nuxt.js code from Options API to Composition API",
                    "Implemented 25+ components and pages during a full site revamp",
                    "Built backend features for dynamic cost-savings recommendations",
                    "Contributed to 5+ cloud cost tools including AWS and GCP calculators",
                    "Upgraded and refactored the Resources site to Nuxt 3.",
                  ].map((item) => (
                    <div key={item} className="flex min-w-0 gap-3">
                      <span className="mt-[6px] h-[10px] w-[10px] shrink-0 border-2 border-[#111] bg-[#FF2D78]" />
                      <p className="min-w-0 text-[12px] leading-[1.9] text-[#333]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Open Source */}
            <div id="opensource" className="flex h-full min-w-0 flex-col">
              <div className="pixel-font mb-5 inline-block w-fit border-2 border-[#111] bg-white px-3 py-[6px] text-[8px] uppercase tracking-widest text-[#FF2D78] shadow-[3px_3px_0_#111]">
                Open Source
              </div>

              <h2 className="pixel-font mb-10 max-w-full text-[clamp(17px,6vw,32px)] leading-[1.35] text-white [text-shadow:4px_4px_0_#111] md:mb-12 lg:h-[84px]">
                Contributions
              </h2>

              <div className="grid flex-1 grid-rows-4 overflow-hidden border-[4px] border-[#111] bg-white shadow-[5px_5px_0_#111] md:shadow-[8px_8px_0_#111]">
                {[
                  {
                    name: "tldr-pages/tldr",
                    desc: "Community-driven command line docs.",
                    prs: 10,
                    stars: "62.8k",
                  },
                  {
                    name: "mathesar-foundation/mathesar",
                    desc: "Open source data exploration platform.",
                    prs: 5,
                    stars: "5.0k",
                  },
                  {
                    name: "gohugoio/hugo",
                    desc: "Fast and modern static site generator.",
                    prs: 2,
                    stars: "88.5k",
                  },
                  {
                    name: "portainer/portainer",
                    desc: "Container management for Docker & K8s.",
                    prs: 2,
                    stars: "37.7k",
                  },
                ].map((item, index, arr) => (
                  <div
                    key={item.name}
                    className={`grid min-h-0 grid-cols-[minmax(0,1fr)_64px_82px] sm:grid-cols-[minmax(0,1fr)_80px_104px] lg:grid-cols-[minmax(0,1fr)_90px_120px] ${index !== arr.length - 1 ? "border-b-[3px] border-[#111]" : ""
                      }`}
                  >
                    <div className="flex min-w-0 flex-col justify-center px-4 sm:px-6">
                      <div className="pixel-font mb-[8px] min-w-0 break-words text-[6px] leading-[1.7] text-[#111] sm:text-[8px]">
                        {item.name}
                      </div>

                      <div className="min-w-0 text-[10px] leading-[1.65] text-[#555] sm:text-[11px]">
                        {item.desc}
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center border-l-[3px] border-[#111]">
                      <span className="pixel-font text-[13px] text-[#111] sm:text-[16px]">
                        {item.prs}
                      </span>

                      <span className="mt-2 text-[7px] uppercase tracking-[0.12em] text-[#888] sm:text-[8px]">
                        PRs
                      </span>
                    </div>

                    <div className="flex flex-col items-center justify-center border-l-[3px] border-[#111]">
                      <span className="pixel-font text-[13px] text-[#111] sm:text-[16px]">
                        {item.stars}
                      </span>

                      <span className="mt-2 text-[7px] uppercase tracking-[0.12em] text-[#888] sm:text-[8px]">
                        Stars
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="border-t-[5px] border-[#111] bg-[#111] py-20 md:py-[100px]"
      >
        <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
          <div className="pixel-font mb-6 inline-block bg-[#FFD600] px-3 py-[6px] text-[8px] uppercase tracking-widest text-[#111]">
            Contact
          </div>

          <h2 className="pixel-font mb-6 text-[clamp(28px,5vw,60px)] leading-[1.25] text-[#FFD600] [text-shadow:6px_6px_0_#2D6FFF]">
            Let&apos;s Build
            <br />
            Something
            <br />
            Useful.
          </h2>

          <p className="mb-10 max-w-[560px] text-[15px] leading-[2] text-white/65">
            Interested in software engineering, open source, or building products?
            Feel free to reach out.
          </p>

          <div className="mb-20 flex flex-wrap gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ahamed1062005@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="pixel-font inline-flex items-center gap-2 border-[3px] border-[#111] bg-[#FFD600] px-6 py-4 text-[10px] text-[#111] no-underline transition hover:translate-x-[3px] hover:translate-y-[3px]"
            >
              <span>EMAIL ME</span>
              <span className="font-sans text-[12px] leading-none">
                ➜
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/ahamedmeyan/"
              target="_blank"
              rel="noreferrer"
              className="pixel-font inline-flex items-center gap-2 border-[3px] border-[#111] bg-[#2D6FFF] px-6 py-4 text-[10px] text-white no-underline transition hover:translate-x-[3px] hover:translate-y-[3px]"
            >
              LINKEDIN
            </a>
          </div>

          <div className="flex flex-wrap items-start justify-between gap-6 border-t-[3px] border-white/10 pt-8 sm:items-end">
            <div className="pixel-font text-[8px] leading-[2] text-white/40">
              © 2026 Ahamed Meyan
              <br />
              <span className="text-white/25">
                Chennai, India
              </span>
            </div>

            <div className="text-left sm:text-right">
              <div className="pixel-font mb-2 text-[7px] uppercase tracking-[0.15em] text-white/30">
                Local Time
              </div>

              <div className="pixel-font text-[13px] text-[#FFD600]">
                {kolkataTime}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
