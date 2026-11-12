import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageLoader } from "@/components/ui/PageLoader";
import { portfolio } from "@/data/portfolio";
import portrait from "@/assets/vaishnav-portrait.png";
import drivenetCarImage from "@/assets/DIY Robotic Car Platform with Colorful Wiring.png";
import drivenetWorkflowImage from "@/assets/drivenet-workflow-neatly-arranged.svg";
import microgridWorkflowImage from "@/assets/microgrid-rag-workflow-high-resolution.svg";
import industrialFaultImage from "@/assets/industrial-fault-diagnosis-rag.svg";
import redisStoreImage from "@/assets/redis-kv-store-minimal.svg";
import solarEnergyImage from "@/assets/solar energy.png";
import {
  siC,
  siCplusplus,
  siPython,
  siJavascript,
  siTypescript,
  siReact,
  siNodedotjs,
  siGit,
  siGithub,
  siTensorflow,
  siScikitlearn,
  siMongodb,
  siMysql,
  siN8n,
} from "simple-icons";

const simpleIconMap = {
  siC,
  siCplusplus,
  siPython,
  siJavascript,
  siTypescript,
  siReact,
  siNodedotjs,
  siGit,
  siGithub,
  siTensorflow,
  siScikitlearn,
  siMongodb,
  siMysql,
  siN8n,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vaishnav K | Software Engineer & AI/ML Developer" },
      { name: "description", content: "Portfolio of Vaishnav K — software engineering, backend systems, AI/ML, and data science projects." },
      { property: "og:title", content: "Vaishnav K | Software Engineer & AI/ML Developer" },
      { property: "og:description", content: "Building intelligent software and exploring systems, backend engineering, and machine learning." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PortfolioPage,
});

/**
 * Each project becomes a "problem" tab, like the "What's your problem?" panel on redis.io.
 * Keys must match `title` in portfolio.projects. Unknown titles fall back to the title itself.
 */
const projectMeta: Record<string, { tab: string; headline: string }> = {
  "C++ Redis-Style In-Memory Key-Value Store": {
    tab: "Slow data access",
    headline: "Keep hot data in memory, right where it's needed.",
  },
  "Industrial Fault Diagnosis via Explainable RAG": {
    tab: "Silent machine faults",
    headline: "Turn sensor noise into a diagnosis you can trust.",
  },
  "Drive.Net — Intelligent V2V/V2I Safety Network": {
    tab: "Blind mountain roads",
    headline: "Warn drivers before the fog does.",
  },
  "AI-Powered Smart Grid Monitoring & Self-Healing System": {
    tab: "Unstable rural grids",
    headline: "Spot faults early. Respond automatically.",
  },
  "AI-Based Electronic Device Classifier": {
    tab: "Manual device sorting",
    headline: "Tell a BJT from a FET in one look.",
  },
  "VASNOVA — Smart EV Solar Charging & Energy Monitoring": {
    tab: "Wasted solar energy",
    headline: "Charge smarter with the sun you already have.",
  },
};

/* Marquee: only technologies that have a simple-icons logo (typed so `simpleIcon` is always present) */
const marqueeTechnologies = portfolio.technologies.flatMap((technology) =>
  "simpleIcon" in technology ? [technology] : [],
);

/* Desktop bar: five links fit the 1400px row. "Home" is the logo and "Contact" is the button;
   both stay in the mobile menu. */
const desktopNav = portfolio.navigation.filter(({ id }) => id !== "home" && id !== "contact");

function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [activeProject, setActiveProject] = useState(0);
  const reduceMotion = useReducedMotion();
  useHeroGridReveal();

  const project = portfolio.projects[activeProject] ?? portfolio.projects[0];

  /* active nav link */
  useEffect(() => {
    const sections = portfolio.navigation
      .map(({ id }) => document.getElementById(id))
      .filter((item): item is HTMLElement => item !== null);
    const observers = sections.map((section) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) setActiveSection(section.id);
        },
        { rootMargin: "-32% 0px -58% 0px" },
      );
      observer.observe(section);
      return observer;
    });
    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  /* mobile menu: lock page scroll, close on Escape or when the screen becomes wide */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1200) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const navigateFromMenu = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    event.preventDefault();

    // 1. close the menu and release the page lock BEFORE scrolling
    setMenuOpen(false);
    document.body.style.overflow = "";

    // 2. where to land: the section's top, just under the sticky header
    const headerHeight = document.querySelector<HTMLElement>(".rd-header")?.offsetHeight ?? 0;
    const destination = () =>
      id === "home" ? 0 : Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerHeight);

    // 3. scroll after the browser has laid the page out again (two frames)
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        const startY = window.scrollY;
        window.scrollTo({ top: destination(), behavior: reduceMotion ? "auto" : "smooth" });

        // 4. safety net: if nothing moved, jump there instantly
        window.setTimeout(() => {
          if (Math.abs(window.scrollY - startY) < 2 && Math.abs(window.scrollY - destination()) > 8) {
            window.scrollTo({ top: destination(), behavior: "instant" as ScrollBehavior });
          }
        }, 400);
      }),
    );
  };

  return (
    <div className="min-h-screen bg-rd-bg text-white">
      <PageLoader
        assets={[
          portrait,
          drivenetCarImage,
          drivenetWorkflowImage,
          microgridWorkflowImage,
          industrialFaultImage,
          redisStoreImage,
          solarEnergyImage,
        ]}
      />
      {/* ───────── Announcement banner ───────── */}
      <aside className="rd-banner" aria-label="Status notice">
        <span className="rd-dot" />
        <span>Open to software engineering and AI/ML internships and roles.</span>
      </aside>

      {/* ───────── Header ───────── */}
      <header className="rd-header">
        <nav className="rd-container rd-nav" aria-label="Main navigation">
          <a className="rd-logo" href="#home" aria-label={`${portfolio.personal.name}, home`}>
            vaishnav
          </a>

          <a className="rd-pill" href="#projects">
            <span className="rd-dot" /> Portfolio
          </a>

          <div className="rd-nav-links">
            {desktopNav.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`rd-nav-link ${activeSection === id ? "rd-nav-link-active" : ""}`}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="rd-nav-right">
            <a className="rd-icon-btn" href={portfolio.personal.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github className="h-[18px] w-[18px]" />
            </a>
            <a className="rd-icon-btn" href={portfolio.personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-[18px] w-[18px]" />
            </a>
            <a className="rd-btn rd-btn-red rd-btn-nav" href="#contact">
              Get in touch
            </a>
          </div>

          <button
            type="button"
            className="rd-menubtn"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span className="rd-menubtn-label">Menu</span>
            <span className="rd-menubtn-icon" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </span>
          </button>
        </nav>
      </header>

      {/* ───────── Full-screen mobile menu ───────── */}
      <div
        className={`rd-menu ${menuOpen ? "rd-menu-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!menuOpen}
      >
        <div className="rd-menu-top">
          <a className="rd-logo" href="#home" onClick={(event) => navigateFromMenu(event, "home")}>
            vaishnav
          </a>
          <button type="button" className="rd-menubtn rd-menubtn-close" aria-label="Close menu" onClick={closeMenu}>
            <span className="rd-menubtn-label">Close</span>
            <span className="rd-menubtn-icon rd-menubtn-icon-x" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </span>
          </button>
        </div>

        <nav className="rd-menu-links">
          {portfolio.navigation.map(({ id, label }, index) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(event) => navigateFromMenu(event, id)}
              style={{ transitionDelay: menuOpen ? `${80 + index * 45}ms` : "0ms" }}
              className={`rd-menu-link ${activeSection === id ? "rd-menu-link-active" : ""}`}
            >
              <span className="flex-1">{label}</span>
              <ArrowUpRight className="h-5 w-5" />
            </a>
          ))}
        </nav>

        <div className="rd-menu-foot">
          <a href="#contact" onClick={(event) => navigateFromMenu(event, "contact")} className="rd-btn rd-btn-red">
            Get in touch
          </a>
          <a href={portfolio.personal.resumePath} download={portfolio.personal.resumeFilename} className="rd-btn rd-btn-dark">
            <Download className="h-4 w-4" /> Download résumé
          </a>
          <div className="rd-menu-social">
            <a className="rd-icon-btn" href={portfolio.personal.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github className="h-[18px] w-[18px]" />
            </a>
            <a className="rd-icon-btn" href={portfolio.personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>
      </div>

      {/* ───────── Hero ───────── */}
      <section className="rd-hero" id="home">
        {/* desktop (1024px+): portrait rises in from the bottom and fades into the hero. Hidden below 1024px by CSS. */}
        <div className="rd-hero-art">
          <div className="rd-hero-art-inner">
            <div className="rd-hero-art-glow" />
            <div className="rd-hero-art-photo">
              <img
                className="rd-hero-art-img"
                src={portrait}
                alt={portfolio.personal.name}
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>

        <div className="rd-container flex flex-col items-center pb-20 pt-20 text-center md:pb-28 md:pt-28">
          {/* below 1024px: the About portrait is hidden there, so the photo introduces the page here */}
          <motion.figure
            className="rd-portrait lg:hidden"
            initial={reduceMotion ? false : { opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="rd-portrait-float">
              <img
                className="rd-portrait-img"
                src={portrait}
                alt={portfolio.personal.name}
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </motion.figure>

          <motion.h1
            className="rd-headline"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Building intelligent software.
            <br />
            Engineering real-world impact.
          </motion.h1>

          <motion.p
            className="rd-hero-sub mt-8"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            I'm {portfolio.personal.name}. I build fast backend systems and AI pipelines that work in the real world, not just in a notebook.
          </motion.p>

          <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-5"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
          >
            <a href="#projects" className="rd-btn rd-btn-red">
              Explore projects
            </a>
            <a href={portfolio.personal.resumePath} download={portfolio.personal.resumeFilename} className="rd-btn rd-btn-dark">
              <Download className="h-4 w-4" /> Download résumé
            </a>
          </motion.div>
        </div>
      </section>

      {/* ───────── Tech strip (logo row) ───────── */}
      <section className="pb-16 pt-4 md:pb-20" aria-label="Technologies and tools">
        <div className="rd-marquee-mask">
          <div className="rd-marquee-track">
            {[0, 1].map((copy) => (
              <div className="rd-marquee-group" key={copy} aria-hidden={copy > 0}>
                {marqueeTechnologies.map((technology) => (
                  <div className="rd-marquee-item" key={`${copy}-${technology.name}`}>
                    <SimpleLogo iconName={technology.simpleIcon} />
                    <span>{technology.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-10 text-center text-base text-rd-sub">Built with the tools fast engineering teams rely on</p>
      </section>

      {/* ───────── Projects: "What's your problem?" ───────── */}
      <section className="pb-16 md:pb-24" id="projects">
        <div className="rd-container">
          <SectionHeading>
            What's your <span className="text-rd-lime">problem</span>?
          </SectionHeading>

          <div className="rd-panel hidden md:block">
            <div className="rd-tabs" role="tablist" aria-label="Projects">
              {portfolio.projects.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={activeProject === index}
                  onClick={() => setActiveProject(index)}
                  className={`rd-tab ${activeProject === index ? "rd-tab-active" : ""}`}
                >
                  {projectMeta[item.title]?.tab ?? item.title}
                </button>
              ))}
            </div>

            {project && <ProjectPanel key={project.title} project={project} index={activeProject} />}
          </div>

          <ProblemStack />
        </div>
      </section>

      {/* ───────── About ───────── */}
      <section className="bg-rd-deep py-16 md:py-24" id="about">
        <div className="rd-container grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="rd-label">About</span>
            <h2 className="mt-4 text-4xl md:text-[48px] md:leading-[1.1]">
              Learn by building. <span className="text-rd-red">Ship what matters.</span>
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div className="max-w-[640px] space-y-5">
              {portfolio.about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-[18px]">
                  {paragraph}
                </p>
              ))}
            </div>

            <dl className="rd-facts">
              <div>
                <dt className="rd-label rd-label-mute">Degree</dt>
                <dd>{portfolio.about.academic.course}</dd>
              </div>
              <div>
                <dt className="rd-label rd-label-mute">Years</dt>
                <dd className="font-mono">{portfolio.about.academic.years}</dd>
              </div>
              <div>
                <dt className="rd-label rd-label-mute">CGPA</dt>
                <dd className="font-mono">{portfolio.about.academic.cgpa} / 10</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ───────── Experience ───────── */}
      <section className="py-16 md:py-24" id="experience">
        <div className="rd-container">
          <SectionHeading>
            Proven in <span className="text-rd-lime">production</span>.
          </SectionHeading>

          <div className="grid gap-6 lg:grid-cols-2">
            {portfolio.experience.map((item) => (
              <article
                key={item.company}
                className={`rd-card rd-experience-card flex flex-col p-8 md:p-10 ${item.company.toLowerCase().includes("beau roi") ? "rd-experience-card-beau-roi" : ""
                  }`}
              >
                <div className="mb-6 flex flex-wrap items-baseline justify-between gap-4">
                  <span className="rd-label text-rd-red">{item.company}</span>
                  <span className="font-mono text-xs tracking-wider text-rd-lime">{item.status}</span>
                </div>
                <h3 className="text-2xl leading-tight">{item.role}</h3>
                <p className="mb-5 mt-2 text-[16px] text-rd-mute">{item.location}</p>
                <p className="mb-4 text-[16px] text-white">{item.project}</p>

                <ul className="rd-points mb-8 text-rd-sub">
                  {item.contributions.map((contribution) => (
                    <li key={contribution}>{contribution}</li>
                  ))}
                </ul>

                <p className="rd-stack mt-auto border-t border-rd-line pt-6">{item.technologies.join(" · ")}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Skills ───────── */}
      <section className="bg-rd-deep py-16 md:py-24" id="skills">
        <div className="rd-container">
          <SectionHeading className="mb-4">
            The tools behind the <span className="text-rd-lime">thinking</span>.
          </SectionHeading>
          <p className="mb-12 max-w-2xl text-[18px]">
            From memory management in C and C++ to deep learning pipelines in TensorFlow and automated workflows in n8n.
          </p>

          <div className="rd-skill-rows">
            {portfolio.skills.map((group) => (
              <div key={group.title} className="rd-skill-row">
                <h3 className="rd-skill-title">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="rd-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Certifications ───────── */}
      <section className="py-16 md:py-24" id="certifications">
        <div className="rd-container">
          <SectionHeading>Credentials</SectionHeading>

          <ul className="rd-ledger">
            {portfolio.certifications.map((cert) => (
              <li key={cert.name} className="rd-ledger-row">
                <div>
                  <h3 className="text-lg">{cert.name}</h3>
                  <p className="mt-1 text-[15px] text-rd-mute">{cert.issuer}</p>
                </div>
                {cert.date && <span className="whitespace-nowrap font-mono text-xs text-rd-mute">{cert.date}</span>}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── Contact ───────── */}
      <section className="bg-rd-deep py-20 md:py-28" id="contact">
        <div className="rd-container text-center">
          <h2 className="font-sans text-[clamp(34px,5.4vw,80px)] font-bold uppercase leading-[1.02] tracking-[-0.03em]">
            Let's build something meaningful.
          </h2>
          <p className="mx-auto mb-10 mt-6 max-w-xl text-[19px] text-white">
            Have an engineering problem, an AI system to scale, or an opportunity to explore? I'd like to hear about it.
          </p>

          <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
            <a href={`mailto:${portfolio.personal.email}`} className="rd-btn rd-btn-red">
              <Mail className="h-4 w-4" /> Start a conversation
            </a>
            <a href={portfolio.personal.resumePath} download={portfolio.personal.resumeFilename} className="rd-btn rd-btn-dark">
              <Download className="h-4 w-4" /> Download résumé
            </a>
          </div>

          <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-rd-line pt-8 text-[15px] text-rd-sub">
            <a href={`mailto:${portfolio.personal.email}`} className="transition-colors hover:text-white">{portfolio.personal.email}</a>
            <a href={`tel:+91${portfolio.personal.phone}`} className="transition-colors hover:text-white">+91 {portfolio.personal.phone}</a>
            <a href={portfolio.personal.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">GitHub</a>
            <a href={portfolio.personal.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* ───────── Footer ───────── */}
      <footer className="border-t border-rd-line-soft bg-[#050f15] px-6 py-8 text-sm text-rd-mute">
        <div className="rd-container flex flex-col items-center justify-between gap-4 px-0 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="font-logo text-2xl text-rd-red">vaishnav</span>
            <span>Engineered with intention and speed</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#home" className="transition-colors hover:text-white">Back to top ↑</a>
            <span>© {new Date().getFullYear()} {portfolio.personal.name}</span>
          </div>
        </div>
      </footer>

      {/* ───────── Floating chat pill ───────── */}
      <ChatPill href={`mailto:${portfolio.personal.email}?subject=Hi%20Vaishnav%2C%20let’s%20connect`} />
    </div>
  );
}


/* Project artwork: use the supplied project assets, not the generic red hub illustration.
   Drive.Net is the only two-frame hover sequence; the solar image links to the VASNOVA site. */
const projectArtwork: Record<string, { images: string[]; href?: string; alt: string }> = {
  "C++ Redis-Style In-Memory Key-Value Store": {
    images: [redisStoreImage],
    alt: "Redis-style in-memory key-value store architecture",
  },
  "Industrial Fault Diagnosis via Explainable RAG": {
    images: [industrialFaultImage],
    alt: "Industrial fault diagnosis and explainable RAG architecture",
  },
  "Drive.Net — Intelligent V2V/V2I Safety Network": {
    images: [drivenetCarImage, drivenetWorkflowImage],
    alt: "Drive.Net rover platform and V2V/V2I safety workflow",
  },
  "AI-Powered Smart Grid Monitoring & Self-Healing System": {
    images: [microgridWorkflowImage],
    alt: "Microgrid RAG monitoring workflow",
  },
  "VASNOVA — Smart EV Solar Charging & Energy Monitoring": {
    images: [solarEnergyImage],
    href: "https://vasnova-delta.vercel.app/",
    alt: "VASNOVA solar-powered electric vehicle charging concept",
  },
};

function ProjectVisual({ projectTitle, compact = false }: { projectTitle: string; compact?: boolean }) {
  const artwork = projectArtwork[projectTitle];

  // Keep the existing BJT/FET visual unchanged, as requested.
  if (!artwork) return null;

  const visual = (
    <span
      className={`rd-project-visual${compact ? " rd-project-visual-compact" : ""}${artwork.images.length > 1 ? " rd-project-visual-slideshow" : ""}`}
      data-image-count={artwork.images.length}
    >
      {artwork.images.map((src, imageIndex) => (
        <img
          key={src}
          src={src}
          alt={imageIndex === 0 ? artwork.alt : `${artwork.alt} — alternate view`}
          className={`rd-project-visual-img rd-project-visual-img-${imageIndex + 1}`}
          loading="lazy"
          decoding="async"
        />
      ))}
    </span>
  );

  return artwork.href ? (
    <a
      className="rd-project-visual-link"
      href={artwork.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${projectTitle} website`}
    >
      {visual}
    </a>
  ) : visual;
}

/* ───────────────────────────── Project panel ───────────────────────────── */

function ProjectPanel({ project, index }: { project: (typeof portfolio.projects)[number]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const meta = projectMeta[project.title];

  return (
    <div role="tabpanel">
      <div className="grid items-center gap-10 px-6 pb-12 pt-10 md:px-11 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <span className="rd-label">
            {project.category}
            {project.badge ? ` · ${project.badge}` : ""}
          </span>

          <h3 className="mt-6 max-w-[520px] text-[34px] leading-[1.12] md:text-[40px]">
            {meta?.headline ?? project.title}
          </h3>
          <p className="mt-3 text-[15px] text-rd-mute">{project.title}</p>

          <p className="mt-5 max-w-[540px] text-[18px] text-white">{project.description}</p>

          <div className="mt-8">
            <button type="button" className="rd-learn" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded}>
              {expanded ? "Close case study" : "Learn more"}
              <ArrowRight className={`h-4 w-4 transition-transform ${expanded ? "-rotate-90" : ""}`} />
            </button>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ProjectVisual projectTitle={project.title} />
          {!projectArtwork[project.title] && <IsoHub seed={index} />}
        </div>
      </div>

      {/* Bottom strip: highlights + stack */}
      <div className="grid border-t border-rd-line md:grid-cols-2">
        <div className="p-8 md:px-11">
          <span className="rd-label rd-label-mute">Highlights</span>
          <ul className="rd-points mt-4">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
        <div className="p-8 md:px-11">
          <span className="rd-label rd-label-mute">Built with</span>
          <p className="rd-stack mt-4">{project.technologies.join(" · ")}</p>
        </div>
      </div>

      {expanded && (
        <div className="grid gap-8 border-t border-rd-line p-8 md:grid-cols-2 md:px-11 animate-in fade-in slide-in-from-top-2 duration-300">
          <div>
            <span className="rd-label text-rd-red">The problem</span>
            <p className="mt-3 text-[16px]">{project.problem}</p>
          </div>
          <div>
            <span className="rd-label text-rd-lime">The architecture</span>
            <p className="mt-3 text-[16px]">{project.architecture}</p>
          </div>

          {"currentStatus" in project && project.currentStatus && (
            <div className="md:col-span-2">
              <span className="rd-label rd-label-mute">Status</span>
              <p className="mt-2 text-[15px]">{project.currentStatus}</p>
            </div>
          )}

          {project.repository && (
            <div className="md:col-span-2">
              <a
                href={project.repository}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-medium text-rd-red hover:underline"
              >
                <Github className="h-4 w-4" /> View GitHub repository <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ───────────────────── Isometric hub illustration (red line-art) ───────────────────── */

const RED = "#ff4438";
const RED_FILL = "#8f2622";

function Glyph({ kind, x, y, s = 1 }: { kind: number; x: number; y: number; s?: number }) {
  const k = ((kind % 4) + 4) % 4;
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill="none" stroke={RED} strokeWidth="1.5" strokeLinejoin="round">
      {k === 0 && (
        <>
          <polygon points="0,-26 18,0 0,26 -18,0" fill={RED_FILL} />
          <path d="M-18 0H18M0 -26V26" />
        </>
      )}
      {k === 1 && <circle r="20" fill={RED_FILL} />}
      {k === 2 && (
        <>
          <polygon points="0,-24 21,-12 21,12 0,24 -21,12 -21,-12" fill={RED_FILL} />
          <path d="M0 0V24M0 0L-21 -12M0 0L21 -12" />
        </>
      )}
      {k === 3 && (
        <>
          <polygon points="0,-24 23,-8 14,20 -14,20 -23,-8" fill={RED_FILL} />
          <path d="M0 -24L-14 20M0 -24L14 20M-23 -8H23" />
        </>
      )}
    </g>
  );
}

function Satellite({ cx, cy, kind }: { cx: number; cy: number; kind: number }) {
  return (
    <g>
      <path d={`M${cx - 62} ${cy + 64}v10a62 21 0 0 0 124 0v-10`} fill="#3a1a1f" stroke={RED} strokeWidth="1.5" />
      <ellipse cx={cx} cy={cy + 64} rx="62" ry="21" fill="#0b1d27" stroke={RED} strokeWidth="1.5" />
      <ellipse cx={cx} cy={cy + 64} rx="38" ry="13" fill="none" stroke={RED} strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r="52" fill="#0d212c" stroke={RED} strokeWidth="1.5" />
      <Glyph kind={kind} x={cx} y={cy} />
    </g>
  );
}

function IsoHub({ seed }: { seed: number }) {
  return (
    <svg viewBox="0 0 600 440" className="mx-auto h-auto w-full max-w-[560px]" role="img" aria-hidden="true">
      {/* connecting lines */}
      <g stroke={RED} strokeWidth="1.2" fill="none" className="rd-iso-flow" opacity="0.8">
        <path d="M150 120L240 215" />
        <path d="M450 120L360 215" />
        <path d="M150 312L240 290" />
        <path d="M450 312L360 290" />
      </g>

      {/* central platform */}
      <g>
        <path d="M150 300v26a150 54 0 0 0 300 0v-26" fill="#3a1a1f" stroke={RED} strokeWidth="1.5" />
        <ellipse cx="300" cy="300" rx="150" ry="54" fill="#0b1d27" stroke={RED} strokeWidth="1.5" />
        <ellipse cx="300" cy="300" rx="14" ry="6" fill="none" stroke={RED} strokeWidth="1.5" />
        <ellipse cx="190" cy="305" rx="12" ry="5" fill="none" stroke={RED} strokeWidth="1.5" />
        <ellipse cx="410" cy="305" rx="12" ry="5" fill="none" stroke={RED} strokeWidth="1.5" />
        <rect x="222" y="168" width="156" height="140" rx="70" fill={RED_FILL} stroke={RED} strokeWidth="1.5" />
        <Glyph kind={seed} x={268} y={218} s={0.8} />
        <Glyph kind={seed + 2} x={336} y={226} s={0.9} />
        <circle cx="262" cy="278" r="22" fill="#4a1816" stroke={RED} strokeWidth="1.5" />
        <Glyph kind={seed + 3} x={338} y={282} s={0.8} />
      </g>

      {/* satellites */}
      <Satellite cx={110} cy={70} kind={seed} />
      <Satellite cx={490} cy={70} kind={seed + 1} />
      <Satellite cx={90} cy={318} kind={seed + 2} />
      <Satellite cx={510} cy={318} kind={seed + 3} />
    </svg>
  );
}

function SimpleLogo({ iconName }: { iconName: string }) {
  const icon = simpleIconMap[iconName as keyof typeof simpleIconMap];

  if (!icon) return null;

  return (
    <svg className="h-7 w-7 fill-current" role="img" aria-label={`${icon.title} logo`} viewBox="0 0 24 24">
      <path d={icon.path} />
    </svg>
  );
}

function SectionHeading({ children, className = "mb-12" }: { children: ReactNode; className?: string }) {
  return <h2 className={`${className} text-4xl md:text-[48px] md:leading-[1.1]`}>{children}</h2>;
}

/* Floating pill: open at the top of the page (phones included), tucks into the script-v circle after
   scrolling, and re-opens on mouse hover or keyboard focus. */
function ChatPill({ href }: { href: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const open = !scrolled || hovered;
  const ease = "cubic-bezier(0.16, 1, 0.3, 1)";
  const dur = reduceMotion ? "0s" : "0.5s";

  return (
    <a
      href={href}
      aria-label="Email Vaishnav"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
      onFocus={(event) => {
        if (event.currentTarget.matches(":focus-visible")) setHovered(true);
      }}
      onBlur={() => setHovered(false)}
      style={{
        position: "fixed",
        right: "clamp(14px, 2vw, 24px)",
        bottom: "calc(clamp(14px, 2vw, 24px) + env(safe-area-inset-bottom, 0px))",
        zIndex: 60,
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        height: 60,
        padding: open ? "10px 28px 10px 10px" : "10px",
        borderRadius: 9999,
        background: "#ffffff",
        color: "#091a23",
        fontSize: 16,
        fontWeight: 500,
        textDecoration: "none",
        boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
        transition: `padding ${dur} ${ease}`,
      }}
    >
      {/* script "v", same as the navbar logo font */}
      <span
        aria-hidden="true"
        style={{
          flex: "none",
          display: "grid",
          placeItems: "center",
          width: 40,
          height: 40,
          borderRadius: 9999,
          background: "#ff4438",
          color: "#ffffff",
          fontFamily: '"Lobster", "Pacifico", cursive',
          fontSize: 24,
          fontWeight: 400,
          lineHeight: 1,
          textTransform: "none",
          paddingBottom: 3,
        }}
      >
        v
      </span>
      <span
        style={{
          display: "inline-block",
          overflow: "hidden",
          whiteSpace: "nowrap",
          maxWidth: open ? 180 : 0,
          marginLeft: open ? 14 : 0,
          opacity: open ? 1 : 0,
          transition: `max-width ${dur} ${ease}, margin-left ${dur} ${ease}, opacity 0.25s ease`,
        }}
      >
        Ask Vaishnav
      </span>
    </a>
  );
}

/* Writes the pointer position into --mouse-x / --mouse-y on .rd-hero. All visuals live in CSS. */
function useHeroGridReveal() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".rd-hero");
    if (!hero) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    let frame = 0;
    let snapFrame1 = 0;
    let snapFrame2 = 0;
    let x = 0;
    let y = 0;

    // Limit DOM writes to one per animation frame.
    const paint = () => {
      frame = 0;
      hero.style.setProperty("--mouse-x", `${x}px`);
      hero.style.setProperty("--mouse-y", `${y}px`);
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const rect = hero.getBoundingClientRect();
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;

      // On first entry, place the reveal at the cursor immediately instead of sweeping in.
      if (hero.getAttribute("data-grid-active") !== "true") {
        hero.setAttribute("data-grid-snap", "true");
        hero.style.setProperty("--mouse-x", `${x}px`);
        hero.style.setProperty("--mouse-y", `${y}px`);
        hero.setAttribute("data-grid-active", "true");

        snapFrame1 = requestAnimationFrame(() => {
          snapFrame2 = requestAnimationFrame(() => {
            hero.removeAttribute("data-grid-snap");
          });
        });
        return;
      }

      if (!frame) frame = requestAnimationFrame(paint);
    };

    const onLeave = () => {
      hero.setAttribute("data-grid-active", "false");
    };

    hero.addEventListener("pointermove", onMove, { passive: true });
    hero.addEventListener("pointerleave", onLeave);
    hero.addEventListener("pointercancel", onLeave);

    return () => {
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
      hero.removeEventListener("pointercancel", onLeave);

      if (frame) cancelAnimationFrame(frame);
      if (snapFrame1) cancelAnimationFrame(snapFrame1);
      if (snapFrame2) cancelAnimationFrame(snapFrame2);

      hero.removeAttribute("data-grid-active");
      hero.removeAttribute("data-grid-snap");
      hero.style.removeProperty("--mouse-x");
      hero.style.removeProperty("--mouse-y");
    };
  }, []);
}

/* Phones only (hidden from 768px up): projects as a scroll timeline. The card near the middle of the screen is "active". */
function ProblemStack() {
  const listRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const cards = Array.from(listRef.current?.querySelectorAll<HTMLElement>("[data-problem-card]") ?? []);
    if (!cards.length) return;

    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      cards.forEach((card) => card.setAttribute("data-seen", "true"));
      return;
    }

    const seen = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-seen", "true");
          seen.unobserve(entry.target);
        }),
      { threshold: 0.1 },
    );
    const focus = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number(entry.target.getAttribute("data-index")));
        }),
      { rootMargin: "-45% 0px -45% 0px" },
    );

    cards.forEach((card) => {
      seen.observe(card);
      focus.observe(card);
    });
    return () => {
      seen.disconnect();
      focus.disconnect();
    };
  }, [reduceMotion]);

  return (
    <div className="rd-problems md:hidden">
      <ol className="rd-problem-list" ref={listRef}>
        {portfolio.projects.map((item, index) => {
          const meta = projectMeta[item.title];
          return (
            <li
              key={item.title}
              className="rd-problem"
              data-problem-card
              data-index={index}
              data-active={active === index}
              data-passed={index <= active}
              data-line={index < active}
            >
              <span className="rd-problem-dot" aria-hidden="true" />
              <article className="rd-problem-card">
                <span className="rd-label">
                  {item.category}
                  {item.badge ? ` · ${item.badge}` : ""}
                </span>

                <h3 className="rd-problem-title">{meta?.headline ?? item.title}</h3>
                <p className="rd-problem-name">{item.title}</p>
                <ProjectVisual projectTitle={item.title} compact />
                <p className="rd-problem-desc">{item.description}</p>

                <ul className="rd-points rd-problem-points">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <p className="rd-stack">{item.technologies.join(" · ")}</p>

                <details className="rd-problem-more">
                  <summary>
                    Learn more <ArrowRight className="h-4 w-4" />
                  </summary>
                  <div className="rd-problem-more-body">
                    <span className="rd-label text-rd-red">The problem</span>
                    <p>{item.problem}</p>
                    <span className="rd-label text-rd-lime">The architecture</span>
                    <p>{item.architecture}</p>
                    {"currentStatus" in item && item.currentStatus && (
                      <>
                        <span className="rd-label">Status</span>
                        <p>{item.currentStatus}</p>
                      </>
                    )}
                  </div>
                </details>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}