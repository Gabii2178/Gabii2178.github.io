"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowRight,
    BadgeCheck,
    BrainCircuit,
    BriefcaseBusiness,
    CheckCircle2,
    Code2,
    Cpu,
    Database,
    Globe,
    Mail,
    MapPin,
    Phone,
    Play,
    Rocket,
    Send,
    Sparkles,
    TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState, type FormEvent } from "react";

import { SectionShell } from "@/app/components/shared/section-shell";

const skillGroups = [
    {
        title: "Programming Languages",
        items: ["PHP", "JavaScript", "TypeScript", "Python", "SQL"],
    },
    {
        title: "Frontend",
        items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
    },
    {
        title: "Backend & Data",
        items: ["PHP", "Node.js", "Express", "Flask", "REST APIs", "Authentication", "Database Design"],
    },
    {
        title: "Automation",
        items: ["n8n", "AI Agents", "API Integration", "Webhooks", "CRM Automation", "Workflow Automation"],
    },
    {
        title: "Business",
        items: ["Business Plans", "Pitch Decks", "Startup Consulting", "Business Models", "Market Research", "Product Validation", "MVP Planning"],
    },
    {
        title: "Blockchain (Currently Learning)",
        items: ["Solana", "Rust", "Anchor", "SPL Tokens", "Wallet Integration", "Smart Contracts"],
    },
];

const services = [
    { title: "Full Stack Development", description: "Premium web products built from idea to launch with maintainable architecture and elegant UX.", icon: Code2 },
    { title: "Backend Development", description: "Reliable APIs, services, and database systems crafted for speed, security, and scale.", icon: Database },
    { title: "Frontend Development", description: "Thoughtful interfaces with strong visual systems, polished interactions, and conversion focus.", icon: Sparkles },
    { title: "API Development", description: "Integrations and platform APIs that connect product experiences to real business processes.", icon: Cpu },
    { title: "Automation Engineering", description: "Complex workflows, CRM flows, and AI-enabled automations that remove friction from day-to-day execution.", icon: BrainCircuit },
    { title: "Business Strategy", description: "Product positioning, business planning, and startup consulting rooted in clarity and execution.", icon: TrendingUp },
];

const projects = [
    {
        category: "Web Applications",
        title: "Growth Intelligence Platform",
        description: "A modern product analytics and growth workspace designed to help teams make rapid product decisions.",
        stack: ["Next.js", "TypeScript", "PostgreSQL", "n8n"],
        github: "https://github.com/Gabii2178",
        demo: "#contact",
        image: "/images/gabi.png",
    },
    {
        category: "Automation Projects",
        title: "AI Workflow Orchestrator",
        description: "An intelligent automation layer that connected CRM, email, and webhook-based tasks into one cohesive system.",
        stack: ["Node.js", "Python", "Flask", "AI Agents"],
        github: "https://github.com/Gabii2178",
        demo: "#contact",
        image: "/images/gabi1.png",
    },
    {
        category: "Business Websites",
        title: "Founder Story Website",
        description: "A premium multi-page brand experience with storytelling, conversion-focused messaging, and smooth motion.",
        stack: ["React", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/Gabii2178",
        demo: "#contact",
        image: "/images/gabi.png",
    },
    {
        category: "Future Blockchain Projects",
        title: "Solana Product MVP",
        description: "A wallet-first experience exploring tokenized incentives, SPL flows, and modern Web3 onboarding.",
        stack: ["Rust", "Anchor", "Solana", "Wallet Integration"],
        github: "https://github.com/Gabii2178",
        demo: "#contact",
        image: "/images/gabi1.png",
    },
];

const technologies = ["PHP", "Node.js", "Python", "Flask", "Next.js", "React", "TypeScript", "Tailwind CSS", "MySQL", "PostgreSQL", "SQLite", "n8n", "Git", "GitHub", "Docker", "Linux", "Solana", "Rust"];

const timeline = [
    { title: "Started Programming", period: "2018", description: "Built early web products and experimented with systems thinking and product design." },
    { title: "Frontend Development", period: "2019 — 2021", description: "Crafted polished interfaces, marketing experiences, and modern web products." },
    { title: "Backend Development", period: "2021 — 2023", description: "Shaped scalable APIs, databases, and reliable server-side architecture." },
    { title: "Full Stack Development", period: "2023 — 2024", description: "Delivered end-to-end products combining engineering, UX, and business value." },
    { title: "Automation Engineering", period: "2024 — Present", description: "Built intelligent workflows, AI automations, and operational systems for startup teams." },
    { title: "Learning Solana", period: "2025 — Present", description: "Expanding into blockchain development with Rust, Anchor, and Web3 product thinking." },
];

const stats = [
    { value: 30, suffix: "+", label: "Projects" },
    { value: 10, suffix: "+", label: "Business Ideas" },
    { value: 15, suffix: "+", label: "Automations" },
    { value: 5, suffix: "+", label: "Technologies Mastered" },
    { value: 100, suffix: "%", label: "Passion" },
];

const reasons = [
    "Software Engineering",
    "Business Strategy",
    "Automation",
    "Problem Solving",
    "Startup Thinking",
    "Scalable Architecture",
];

const learning = [
    { title: "Solana", description: "Building blockchain-native thinking around wallets, tokens, and decentralized experiences." },
    { title: "Rust", description: "Developing a deeper understanding of performant systems and secure application design." },
    { title: "Anchor", description: "Learning structured on-chain programs with strong developer workflow and testing discipline." },
];

const testimonials = [
    { quote: "Gabriel has an exceptional ability to turn abstract ideas into products that feel polished, fast, and commercially smart.", name: "Alicia M.", role: "Founder, Northstar Labs" },
    { quote: "He bridges engineering and business in a way that feels rare. Every solution he delivered was both practical and ambitious.", name: "Daniel K.", role: "Product Lead, Vantage AI" },
    { quote: "From backend systems to automation flows, he brings clarity and confidence to the entire product process.", name: "Sofia R.", role: "Startup Advisor" },
];

const articles = [
    { title: "Building reliable backend systems for startups", category: "Backend Development" },
    { title: "Designing AI-powered workflows that actually scale", category: "Automation" },
    { title: "From idea to MVP: how product strategy shapes engineering", category: "Business" },
    { title: "Why Solana matters for the next generation of products", category: "Solana" },
];

const socialLinks = [
    { label: "GitHub", href: "https://github.com/Gabii2178", icon: Globe },
    { label: "LinkedIn", href: "https://www.linkedin.com", icon: BadgeCheck },
    { label: "Facebook", href: "https://www.facebook.com", icon: Globe },
    { label: "Instagram", href: "https://www.instagram.com", icon: Sparkles },
    { label: "TikTok", href: "https://www.tiktok.com", icon: Play },
    { label: "YouTube", href: "https://www.youtube.com", icon: Play },
    { label: "X", href: "https://twitter.com", icon: Send },
    { label: "Email", href: "mailto:hello@nchunggabriel.com", icon: Mail },
];

function TypingHeadline() {
    const [currentWord, setCurrentWord] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const words = ["Full Stack Software Engineer", "Automation Engineer", "Business Strategist", "Future Solana Developer"];
        const timeout = window.setTimeout(() => {
            const word = words[currentWord];
            if (!deleting) {
                const next = word.slice(0, displayed.length + 1);
                setDisplayed(next);
                if (next === word) {
                    window.setTimeout(() => setDeleting(true), 1200);
                }
            } else {
                const next = word.slice(0, displayed.length - 1);
                setDisplayed(next);
                if (!next) {
                    setDeleting(false);
                    setCurrentWord((prev) => (prev + 1) % words.length);
                }
            }
        }, deleting ? 60 : 100);

        return () => window.clearTimeout(timeout);
    }, [currentWord, deleting, displayed]);

    return <span className="block text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text">{displayed}|</span>;
}

function AnimatedCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let frame = 0;
        const duration = 1000;
        const start = performance.now();
        const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.round(progress * value));
            if (progress < 1) {
                frame = window.requestAnimationFrame(animate);
            }
        };

        frame = window.requestAnimationFrame(animate);
        return () => window.cancelAnimationFrame(frame);
    }, [value]);

    return (
        <div className="rounded-3xl border border-border/70 bg-card/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <div className="text-4xl font-semibold text-foreground">{count}{suffix}</div>
            <div className="mt-2 text-sm uppercase tracking-[0.24em] text-muted-foreground">{label}</div>
        </div>
    );
}

function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const ratio = height > 0 ? scrollTop / height : 0;
            setProgress(ratio * 100);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent"><div className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-200" style={{ width: `${progress}%` }} /></div>;
}

function CursorGlow() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const onMove = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("pointermove", onMove);
        return () => window.removeEventListener("pointermove", onMove);
    }, []);

    return <div className="pointer-events-none fixed inset-0 z-0 hidden lg:block" aria-hidden="true"><div className="absolute h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" style={{ left: position.x, top: position.y }} /></div>;
}

export function PortfolioSections() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => window.clearInterval(interval);
    }, []);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name || "a new contact"}`);
        const body = encodeURIComponent(`Hi Gabriel,\n\n${formData.message}\n\nReply to: ${formData.email}`);
        window.location.href = `mailto:hello@nchunggabriel.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className="relative overflow-hidden">
            <ScrollProgress />
            <CursorGlow />

            <section id="home" className="relative scroll-mt-24 px-4 pb-24 pt-10 sm:px-6 lg:px-8 lg:pt-16">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute left-0 top-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
                    <div className="absolute right-10 top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
                    <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-secondary/20 blur-3xl" />
                </div>

                <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm">
                            <Sparkles className="h-4 w-4 text-primary" />
                            Available for select collaborations and product partnerships
                        </div>
                        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                            NCHUNG GABRIEL
                        </h1>
                        <div className="mt-4 text-2xl font-medium text-muted-foreground sm:text-3xl">
                            <TypingHeadline />
                        </div>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                            Building scalable software, intelligent automations, and startup-ready digital products.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary via-secondary to-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(37,99,235,0.25)] transition hover:scale-[1.01]">
                                Hire Me <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                            <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-border/70 bg-background/70 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:bg-muted">
                                View Projects
                            </a>
                            <a href="/resume/gabriel-resume.pdf" download className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/20">
                                Download Resume
                            </a>
                            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-border/70 bg-background/70 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent/40 hover:bg-muted">
                                Contact Me
                            </a>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-3">
                            {socialLinks.slice(0, 6).map((item) => {
                                const Icon = item.icon;
                                return (
                                    <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label} className="rounded-full border border-border/70 bg-background/70 p-3 text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary">
                                        <Icon className="h-4 w-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
                        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/15 blur-3xl" />
                        <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/80 p-3 shadow-[0_40px_120px_rgba(15,23,42,0.18)]">
                            <Image src="/images/gabi1.png" alt="Portrait of Gabriel Nchung" width={900} height={1100} priority className="h-[560px] w-full rounded-[1.4rem] object-cover object-center" />
                        </div>
                        <motion.div animate={{ y: [0, -8, 0], rotate: [0, -2, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-4 top-8 rounded-2xl border border-border/70 bg-background/90 p-4 shadow-xl backdrop-blur">
                            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Focus</div>
                            <div className="mt-2 text-sm font-semibold text-foreground">Scalable Systems</div>
                        </motion.div>
                        <motion.div animate={{ y: [0, 10, 0], rotate: [0, 2, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-4 right-4 rounded-2xl border border-border/70 bg-background/90 p-4 shadow-xl backdrop-blur">
                            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Next frontier</div>
                            <div className="mt-2 text-sm font-semibold text-foreground">Solana + AI</div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <SectionShell id="about" eyebrow="About" title="A builder who unites engineering, strategy, and product intuition." description="I design systems that are both technically strong and commercially meaningful, helping ideas become dependable digital products.">
                <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className="rounded-[2rem] border border-border/70 bg-gradient-to-br from-primary/10 via-background/80 to-accent/10 p-8 shadow-[0_20px_60px_rgba(37,99,235,0.08)]">
                        <p className="text-lg leading-8 text-muted-foreground">
                            I’m a Full Stack Software Engineer passionate about building scalable applications, intelligent automations, and business solutions. I combine software engineering with business strategy to help startups and organizations build impactful digital products.
                        </p>
                        <p className="mt-4 text-lg leading-8 text-muted-foreground">
                            My work spans full stack development, backend engineering, frontend design, workflow automation using n8n, startup consulting, and future-focused Web3 development.
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: 0.08 }} className="grid gap-4 sm:grid-cols-2">
                        {[
                            { label: "Full Stack Development", icon: Code2 },
                            { label: "Backend Engineering", icon: Database },
                            { label: "Frontend Development", icon: Sparkles },
                            { label: "Automation", icon: BrainCircuit },
                            { label: "Business Strategy", icon: BriefcaseBusiness },
                            { label: "Future Web3 Development", icon: Rocket },
                        ].map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.label} className="rounded-[1.6rem] border border-border/70 bg-card/70 p-6 shadow-sm">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div>
                                    <div className="mt-4 text-base font-semibold text-foreground">{item.label}</div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </SectionShell>

            <SectionShell id="skills" eyebrow="Skills" title="A multidisciplinary toolkit built for modern products." description="I blend architecture, product thinking, and execution to create solutions that feel premium and perform exceptionally well.">
                <div className="grid gap-6 lg:grid-cols-3">
                    {skillGroups.map((group, index) => (
                        <motion.div key={group.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.05 }} className="rounded-[1.8rem] border border-border/70 bg-card/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
                            <h3 className="text-xl font-semibold text-foreground">{group.title}</h3>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {group.items.map((skill) => (
                                    <span key={skill} className="rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-sm text-muted-foreground">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SectionShell>

            <SectionShell id="services" eyebrow="Services" title="Services designed for founders, teams, and ambitious brands." description="Whether you need a scaled platform, a polished marketing website, or intelligent automation, I build with strategy in mind.">
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.article key={service.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.04 }} className="rounded-[1.8rem] border border-border/70 bg-gradient-to-br from-background/80 to-card/70 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(37,99,235,0.12)]">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div>
                                <h3 className="mt-5 text-xl font-semibold text-foreground">{service.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
                            </motion.article>
                        );
                    })}
                </div>
            </SectionShell>

            <SectionShell id="projects" eyebrow="Featured Projects" title="A portfolio shaped by product thinking, craftsmanship, and modern execution." description="The work below spans web products, automation systems, and future-facing product experiences.">
                <div className="grid gap-6 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.article key={project.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.05 }} className="group overflow-hidden rounded-[1.8rem] border border-border/70 bg-card/70 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
                            <Image src={project.image} alt={project.title} width={900} height={600} loading="lazy" className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
                            <div className="p-7">
                                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{project.category}</div>
                                <h3 className="mt-3 text-2xl font-semibold text-foreground">{project.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.description}</p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.stack.map((item) => (
                                        <span key={item} className="rounded-full border border-border/70 bg-background/70 px-2.5 py-1 text-xs font-medium text-muted-foreground">{item}</span>
                                    ))}
                                </div>
                                <div className="mt-6 flex flex-wrap gap-3">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary">GitHub</a>
                                    <a href={project.demo} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-medium text-white transition hover:opacity-90">Live Demo</a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </SectionShell>

            <SectionShell id="technologies" eyebrow="Technologies" title="A stack that supports fast iteration and long-term growth." description="I work across modern product infrastructure, from frontend systems to automation layers and emerging blockchain tooling.">
                <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-card/70 py-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
                    <div className="marquee flex w-max gap-3 whitespace-nowrap">
                        {[...technologies, ...technologies].map((item, index) => (
                            <span key={`${item}-${index}`} className="rounded-full border border-border/70 bg-background/80 px-4 py-2 text-sm font-medium text-foreground">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </SectionShell>

            <SectionShell id="experience" eyebrow="Experience Timeline" title="A path shaped by curiosity, craft, and strategic execution." description="Every phase of my growth has strengthened how I build products and solve problems.">
                <div className="relative mt-8 space-y-6 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-primary before:via-secondary before:to-accent sm:before:left-1/2">
                    {timeline.map((item, index) => (
                        <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.35, delay: index * 0.04 }} className={`relative rounded-[1.6rem] border border-border/70 bg-card/70 p-6 shadow-sm sm:w-[calc(50%-1.5rem)] ${index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"}`}>
                            <div className="absolute left-[-0.9rem] top-7 h-4 w-4 rounded-full border-4 border-background bg-primary sm:left-auto sm:right-[-0.9rem]" />
                            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{item.period}</div>
                            <h3 className="mt-3 text-lg font-semibold text-foreground">{item.title}</h3>
                            <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </SectionShell>

            <SectionShell id="why-work-with-me" eyebrow="Why Work With Me" title="Because I bring more than implementation — I bring strategy, clarity, and momentum." description="I build products the way ambitious founders want them built: thoughtful, scalable, and ready for growth.">
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {reasons.map((reason) => (
                        <div key={reason} className="rounded-[1.6rem] border border-border/70 bg-background/70 p-6 shadow-sm">
                            <div className="flex items-center gap-3 text-foreground">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                <span className="font-semibold">{reason}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionShell>

            <SectionShell id="stats" eyebrow="Statistics" title="The combination of craft, depth, and ambition is reflected in the work." description="I’m driven by building meaningful products and solving problems that matter.">
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                    {stats.map((stat) => (
                        <AnimatedCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
                    ))}
                </div>
            </SectionShell>

            <SectionShell id="learning" eyebrow="Learning Journey" title="Continuously expanding into the next frontier of software and product innovation." description="My current learning focus is building deeper fluency in Solana, Rust, and modern Web3 development.">
                <div className="grid gap-6 md:grid-cols-3">
                    {learning.map((item) => (
                        <div key={item.title} className="rounded-[1.8rem] border border-border/70 bg-gradient-to-br from-background/80 to-primary/5 p-7 shadow-sm">
                            <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </SectionShell>

            <SectionShell id="testimonials" eyebrow="Testimonials" title="A reputation built on trust, quality, and thoughtful execution." description="The work speaks through the kind of relationships it creates.">
                <div className="rounded-[2rem] border border-border/70 bg-gradient-to-br from-primary/10 via-background/70 to-accent/10 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
                    <AnimatePresence mode="wait">
                        <motion.blockquote key={testimonials[activeTestimonial].name} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.35 }} className="max-w-3xl">
                            <p className="text-2xl leading-10 text-foreground">“{testimonials[activeTestimonial].quote}”</p>
                            <footer className="mt-6">
                                <div className="font-semibold text-foreground">{testimonials[activeTestimonial].name}</div>
                                <div className="text-sm text-muted-foreground">{testimonials[activeTestimonial].role}</div>
                            </footer>
                        </motion.blockquote>
                    </AnimatePresence>
                    <div className="mt-8 flex gap-2">
                        {testimonials.map((item, index) => (
                            <button key={item.name} type="button" onClick={() => setActiveTestimonial(index)} className={`h-2.5 rounded-full transition ${activeTestimonial === index ? "w-8 bg-primary" : "w-2.5 bg-border"}`} aria-label={`Show testimonial ${index + 1}`} />
                        ))}
                    </div>
                </div>
            </SectionShell>

            <SectionShell id="blog" eyebrow="Blog / Articles" title="Ideas, notes, and perspectives I’m sharing as I continue to grow." description="A space for deeper thinking on backend systems, automation, AI, business, and future product directions.">
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {articles.map((article) => (
                        <div key={article.title} className="rounded-[1.6rem] border border-border/70 bg-card/70 p-6 shadow-sm">
                            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{article.category}</div>
                            <h3 className="mt-3 text-lg font-semibold text-foreground">{article.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-muted-foreground">Coming soon — a deeper article will be published here soon.</p>
                        </div>
                    ))}
                </div>
            </SectionShell>

            <SectionShell id="contact" eyebrow="Contact" title="Let’s build something valuable and lasting together." description="I’m open to freelance work, product partnerships, consulting, and select startup conversations.">
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35 }} className="rounded-[2rem] border border-border/70 bg-gradient-to-br from-background/90 to-primary/5 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
                        <h3 className="text-2xl font-semibold text-foreground">Reach out</h3>
                        <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                            <a href="mailto:hello@nchunggabriel.com" className="flex items-center gap-3 rounded-2xl border border-border/70 bg-background/80 px-4 py-3 transition hover:border-primary/40 hover:text-primary">
                                <Mail className="h-4 w-4" /> hello@nchunggabriel.com
                            </a>
                            <a href="tel:+23700000000" className="flex items-center gap-3 rounded-2xl border border-border/70 bg-background/80 px-4 py-3 transition hover:border-primary/40 hover:text-primary">
                                <Phone className="h-4 w-4" /> +237 000 000 000
                            </a>
                            <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-background/80 px-4 py-3">
                                <MapPin className="h-4 w-4" /> Based in Africa, building globally
                            </div>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-3">
                            {socialLinks.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="rounded-full border border-border/70 bg-background/80 px-3 py-2 text-sm text-muted-foreground transition hover:border-primary/40 hover:text-primary">
                                        <span className="inline-flex items-center gap-2"><Icon className="h-4 w-4" /> {item.label}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.form initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35 }} onSubmit={handleSubmit} className="rounded-[2rem] border border-border/70 bg-card/70 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <label className="text-sm font-medium text-foreground">
                                <span className="mb-2 block">Name</span>
                                <input required value={formData.name} onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))} className="w-full rounded-2xl border border-border/70 bg-background px-4 py-3 text-sm outline-none" placeholder="Your name" />
                            </label>
                            <label className="text-sm font-medium text-foreground">
                                <span className="mb-2 block">Email</span>
                                <input required type="email" value={formData.email} onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))} className="w-full rounded-2xl border border-border/70 bg-background px-4 py-3 text-sm outline-none" placeholder="you@example.com" />
                            </label>
                        </div>
                        <label className="mt-4 block text-sm font-medium text-foreground">
                            <span className="mb-2 block">Project details</span>
                            <textarea required rows={6} value={formData.message} onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))} className="w-full rounded-2xl border border-border/70 bg-background px-4 py-3 text-sm outline-none" placeholder="Tell me about your idea, timeline, or challenge." />
                        </label>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary via-secondary to-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(37,99,235,0.25)] transition hover:opacity-90">Send Inquiry</button>
                            <a href="/resume/gabriel-resume.pdf" download className="inline-flex items-center justify-center rounded-full border border-border/70 bg-background/80 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary">Download Resume</a>
                        </div>
                    </motion.form>
                </div>
            </SectionShell>

            <footer className="border-t border-border/60 px-4 py-10 sm:px-6 lg:px-8">
                <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <div className="text-lg font-semibold text-foreground">Nchung Gabriel</div>
                        <p className="mt-2 text-sm text-muted-foreground">Full Stack Software Engineer • Automation Engineer • Business Strategist • Future Solana Developer</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <a href="#home" className="transition hover:text-foreground">Home</a>
                        <a href="#projects" className="transition hover:text-foreground">Projects</a>
                        <a href="#contact" className="transition hover:text-foreground">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

