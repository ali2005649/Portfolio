import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Database,
  FileDown,
  Film,
  Mail,
  Monitor,
  Smartphone,
} from "lucide-react";
import MeshBackground from "./components/MeshBackground";
import KineticName from "./components/KineticName";
import MagneticButton from "./components/MagneticButton";
import GlowCard from "./components/GlowCard";
import ScrollMarquee from "./components/ScrollMarquee";

const EASE = [0.16, 1, 0.3, 1];
const RESUME_PDF = "/ALI_BASIM_SALMAN_CV.pdf";

const projects = [
  {
    title: "CampusSync",
    category: "Graduation Project · Mobile & Web",
    description:
      "An intelligent campus facility OS — lecture hall reservations, conflict-free scheduling, and resource allocation that behaves like infrastructure, not a form.",
    tags: ["Flutter", "Dart", "Mobile UI", "Real-time DB"],
    featured: true,
    status: "In Development · 70%",
    statusClass: "text-amber-300 bg-amber-400/10 border-amber-400/20",
    href: "#",
    icon: Smartphone,
  },
  {
    title: "Nozom",
    category: "Desktop Architecture",
    description:
      "Standalone academic tooling with custom admin inputs, high-precision Excel reporting, and packaged installers.",
    tags: ["Desktop", "Database", "Excel", "Inno Setup"],
    featured: false,
    status: "Completed",
    statusClass: "text-emerald-300 bg-emerald-400/10 border-emerald-400/20",
    href: "https://github.com/ali2005649/Nozom",
    icon: Monitor,
  },
  {
    title: "Movies",
    category: "Web & Mobile Ecosystem",
    description:
      "Movie logging and discovery with live APIs, tactile watchlists, and a local workflow tuned for speed.",
    tags: ["React", "REST APIs", "Tailwind", "Mobile"],
    featured: false,
    status: "Live",
    statusClass: "text-sky-300 bg-sky-400/10 border-sky-400/20",
    href: "https://github.com/ali2005649/Movies-2",
    liveHref: "https://movies-one-virid.vercel.app/",
    icon: Film,
  },
];

const skillGroups = [
  {
    title: "Frontend & Mobile",
    copy: "Interfaces that feel instantaneous — from React surfaces to Flutter on device.",
    icon: Smartphone,
    iconClass: "text-cyan-400",
    skills: ["React", "React Native", "Flutter", "JavaScript", "Tailwind CSS"],
    span: "md:col-span-2 lg:col-span-4",
  },
  {
    title: "Core Systems",
    copy: "Logic, data, and the metal underneath the UI.",
    icon: Database,
    iconClass: "text-emerald-400",
    skills: ["Dart", "C++", "Supabase"],
    span: "lg:col-span-2",
  },
  {
    title: "Environments",
    copy: "The benches I actually ship from.",
    icon: Code2,
    iconClass: "text-indigo-400",
    skills: ["Git & GitHub", "VS Code", "Android Studio", "Cursor AI"],
    span: "lg:col-span-3",
  },
];

function ProjectTile({ project, delay }) {
  const Icon = project.icon;

  return (
    <GlowCard
      tilt
      delay={delay}
      className={project.featured ? "md:col-span-2" : ""}
      innerClassName="flex h-full flex-col p-5 sm:p-6 md:p-8"
    >
      <div className="relative z-[2] mb-6 flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80">
          <Icon size={20} className="text-sky-300" />
        </div>
        <div className="flex flex-col items-end gap-1.5">
          {project.featured && (
            <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-sky-300">
              Capstone
            </span>
          )}
          <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] ${project.statusClass}`}>
            {project.status}
          </span>
        </div>
      </div>

      <h3 className={`relative z-[2] font-semibold tracking-tight text-slate-50 ${project.featured ? "text-3xl md:text-4xl" : "text-xl"}`}>
        {project.title}
      </h3>
      <p className="relative z-[2] mt-1 font-mono text-xs text-slate-500">{project.category}</p>
      <p className={`relative z-[2] mt-4 leading-relaxed text-slate-400 ${project.featured ? "text-base md:text-lg" : "text-sm"}`}>
        {project.description}
      </p>

      <div className="relative z-[2] mt-auto flex flex-wrap gap-2 pt-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-white/10 bg-slate-950/70 px-2.5 py-1 font-mono text-[11px] text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="relative z-[2] mt-5 flex flex-wrap items-center gap-2">
        {project.href && project.href !== "#" && (
          <MagneticButton
            as="a"
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-sky-200 hover:border-sky-400/40 hover:text-sky-100"
          >
            View source
            <ArrowUpRight size={15} />
          </MagneticButton>
        )}
        {project.liveHref && (
          <MagneticButton
            as="a"
            href={project.liveHref}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-sky-200 hover:border-sky-400/40 hover:text-sky-100"
          >
            Visit Website
            <ArrowUpRight size={15} />
          </MagneticButton>
        )}
      </div>
    </GlowCard>
  );
}

export default function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans text-slate-200">
      <MeshBackground />
      <div className="pointer-events-none fixed inset-0 z-[1] bg-slate-950/35" />

      <header className="fixed inset-x-0 top-0 z-40 px-3 sm:px-4">
        <div className="mx-auto mt-4 flex h-14 max-w-6xl items-center justify-between gap-2 rounded-full border border-white/10 bg-slate-950/55 px-4 backdrop-blur-2xl sm:px-5 md:px-6">
          <MagneticButton
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer whitespace-nowrap text-sm font-semibold tracking-tight text-slate-100"
            strength={0.18}
          >
            <span className="sm:hidden">Ali Basim</span>
            <span className="hidden sm:inline">Ali Basim Salman / 2026</span>
          </MagneticButton>
          <nav className="flex items-center gap-0.5 text-[13px] text-slate-400 sm:gap-1 sm:text-sm">
            {[
              ["projects", "Work"],
              ["skills", "Stack"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <MagneticButton
                key={id}
                strength={0.22}
                onClick={() => scrollTo(id)}
                className="cursor-pointer rounded-full px-2.5 py-2 transition-colors sm:px-3 sm:py-1.5 hover:bg-white/5 hover:text-slate-100"
              >
                {label}
              </MagneticButton>
            ))}
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <section className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-5 pb-20 pt-28 sm:px-6 md:pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-3 py-1 font-mono text-xs text-sky-300"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
            Systems online · available
          </motion.div>

          <KineticName />

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: EASE }}
            className="mt-6 text-base font-medium text-slate-300 sm:text-lg md:text-xl"
          >
            Software & systems engineer in the making
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95, ease: EASE }}
            className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate-400 sm:text-base"
          >
            Senior computer engineering student building web, mobile, and desktop systems — architecture first, interface second, both treated as one machine.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.05, ease: EASE }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <MagneticButton
              onClick={() => scrollTo("projects")}
              className="cursor-pointer rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_32px_rgba(56,189,248,0.35)]"
            >
              Enter the lab
            </MagneticButton>
            <MagneticButton
              as="a"
              href={RESUME_PDF}
              download="Ali-Basim-Salman-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              type="application/pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 backdrop-blur-md"
            >
              <FileDown size={15} />
              Resume
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-10 flex flex-wrap justify-center gap-2 sm:mt-12"
          >
            {[
              { label: "React & Web", icon: Code2 },
              { label: "Flutter & Mobile", icon: Smartphone },
              { label: "C++ & Systems", icon: Cpu },
              
            ].map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/40 px-3 py-1.5 text-xs text-slate-300 backdrop-blur-md"
              >
                <Icon size={13} className="text-sky-400" />
                {label}
              </span>
            ))}
          </motion.div>
        </section>

        <section id="projects" className="relative px-4 py-20 sm:px-6 md:py-28">
          <ScrollMarquee text="Software · Systems · Engineering" />
          <div className="relative z-10 mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="mb-10 max-w-2xl md:mb-12"
            >
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-sky-400">01 — Selected work</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
                Systems, not slides
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-400">
                Hover or tap a card — it tracks you. The glare is the pointer. The tilt is the physics.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectTile key={project.title} project={project} delay={index * 0.08} />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="relative px-4 py-20 sm:px-6 md:py-28">
          <ScrollMarquee text="React · Flutter · C++ · Python" reverse />
          <div className="relative z-10 mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="mb-10 max-w-2xl md:mb-12"
            >
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-sky-400">02 — Stack</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
                Instruments, categorized
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-400">
                An asymmetric bento of the tools that actually ship — not a laundry list.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
              {skillGroups.map((group, index) => {
                const Icon = group.icon;
                return (
                  <GlowCard key={group.title} delay={index * 0.08} className={group.span} innerClassName="p-5 sm:p-6 md:p-7">
                    <div className="relative z-[2] mb-5 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-slate-900/80">
                        <Icon size={18} className={group.iconClass} />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-100">{group.title}</h3>
                    </div>
                    <p className="relative z-[2] mb-5 text-sm leading-relaxed text-slate-400">{group.copy}</p>
                    <div className="relative z-[2] flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-sm text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </GlowCard>
                );
              })}

              <GlowCard delay={0.24} className="md:col-span-2 lg:col-span-3" innerClassName="flex h-full flex-col justify-between p-5 sm:p-6 md:p-7">
                <div className="relative z-[2]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-sky-400">Signal</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-50">Remote-ready. Architecture-first.</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    Currently wiring CampusSync. Open to internships and teams that care about systems that hold under load.
                  </p>
                </div>
                <MagneticButton
                  onClick={() => scrollTo("contact")}
                  className="relative z-[2] mt-6 cursor-pointer self-start rounded-full bg-sky-400 px-5 py-2.5 text-sm font-semibold text-slate-950"
                >
                  Start a thread
                </MagneticButton>
              </GlowCard>
            </div>
          </div>
        </section>

        <section id="contact" className="relative px-4 pb-20 pt-8 sm:px-6 md:pb-28 md:pt-12">
          <div className="mx-auto max-w-6xl">
            <GlowCard delay={0.05} className="overflow-hidden" innerClassName="px-5 py-12 text-center sm:px-8 sm:py-14 md:px-16 md:py-16">
              <p className="relative z-[2] mb-3 font-mono text-xs uppercase tracking-[0.22em] text-sky-400">
                03 — Contact
              </p>
              <h2 className="relative z-[2] text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
                Let’s engineer the next one
              </h2>
              <p className="relative z-[2] mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400">
                Projects, internships, or a sharp conversation about software and systems. The channel is open.
              </p>
              <div className="relative z-[2] mt-8 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
                <MagneticButton
                  as="a"
                  href="mailto:wx22qzt@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_32px_rgba(56,189,248,0.3)]"
                >
                  <Mail size={16} />
                  Say hello
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="https://github.com/ali2005649"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-slate-200"
                >
                  GitHub
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="https://www.linkedin.com/in/ali-basim-004a81431/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-slate-200"
                >
                  LinkedIn
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href={RESUME_PDF}
                  download="Ali-Basim-Salman-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  type="application/pdf"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-slate-200"
                >
                  <FileDown size={14} />
                  Resume
                </MagneticButton>
              </div>
            </GlowCard>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-6 text-xs text-slate-500 sm:px-6">
          <span>Ali Basim Salman · cyber-glass lab</span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
