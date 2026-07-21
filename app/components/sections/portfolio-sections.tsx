"use client";

import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, Code2, Cpu, Rocket, Sparkles, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { SectionShell } from "@/app/components/shared/section-shell";

const skillGroups = [
    {
        title: "Backend",
        items: [
            { name: "PHP", value: 92 },
            { name: "Laravel", value: 90 },
            { name: "Node.js", value: 88 },
            { name: "REST APIs", value: 91 },
            { name: "PostgreSQL", value: 84 },
        ],
    },
    {
        title: "Python & Automation",
        items: [
            { name: "Python", value: 88 },
            { name: "Flask", value: 78 },
            { name: "Automation", value: 95 },
            { name: "AI Integrations", value: 90 },
            { name: "n8n", value: 93 },
        ],
    },
    {
        title: "Business & Strategy",
        items: [
            { name: "Business Plans", value: 88 },
            { name: "Pitch Decks", value: 85 },
            { name: "Product Strategy", value: 90 },
            { name: "Market Validation", value: 82 },
            { name: "Startup Models", value: 87 },
        ],
    },
];

const services = [
    {
        title: "Scalable Backend Systems",
        description: "Designing resilient APIs, data pipelines, and high-availability services that scale with your product.",
        icon: Code2,
    },
    {
        title: "Automation & AI Workflows",
        description: "Connecting tools, automating operations, and embedding AI agents into everyday workflows.",
        icon: Cpu,
    },
    {
        title: "Business Product Strategy",
        description: "Translating complex ideas into clear go-to-market plans, roadmaps, and growth strategies.",
        icon: TrendingUp,
    },
];

const projects = [
    {
        title: "Fintech Ops Automation Platform",
        description: "A multi-tenant automation suite that connected banking workflows, webhooks, and customer onboarding with real-time monitoring.",
        stack: ["Laravel", "PostgreSQL", "n8n", "AI Agents"],
        link: "#contact",
    },
    {
        title: "Solana Product MVP",
        description: "A wallet-first experience for tokenized rewards with Anchor smart contracts, SPL support, and seamless onboarding.",
        stack: ["Rust", "Anchor", "Solana", "Wallet Integration"],
        link: "#contact",
    },
    {
        title: "Startup Growth Intelligence Suite",
        description: "A data-driven business planning tool that helped founders validate product-market fit and present investor-ready narratives.",
        stack: ["Python", "Flask", "Automation", "Strategy"],
        link: "#contact",
    },
];

const timeline = [
    {
        title: "Senior Software Engineer",
        period: "2023 — Present",
        description: "Leading backend architecture, automation pipelines, and AI-enabled product experiences for fast-moving startups.",
    },
    {
        title: "Automation & Strategy Consultant",
        period: "2021 — 2023",
        description: "Built workflow engines, API integrations, and business strategies for founders seeking operational leverage.",
    },
    {
        title: "Full-Stack Builder",
        period: "2018 — 2021",
        description: "Delivered custom web applications, SaaS products, and data-driven internal tools used across teams.",
    },
];

const technologies = [
    "PHP",
    "Laravel",
    "Node.js",
    "Express",
    "REST APIs",
    "MySQL",
    "PostgreSQL",
    "SQLite",
    "Python",
    "Flask",
    "n8n",
    "Webhooks",
    "Solana",
    "Rust",
    "Anchor",
    "Smart Contracts",
];

const journey = [
    {
        title: "Solana",
        description: "Deepening expertise in high-performance chains, wallet onboarding, and tokenized ecosystems.",
    },
    {
        title: "Rust",
        description: "Building safer, faster systems with a strong focus on performance-oriented backend logic.",
    },
    {
        title: "Anchor",
        description: "Creating structured on-chain programs and improving deployment practices for modern dApps.",
    },
];

const testimonials = [
    {
        quote: "Gabriel brings a rare mix of engineering rigor and strategic clarity. Every system he shaped felt thoughtful and scalable.",
        name: "Alicia M.",
        role: "Founder, Northstar Labs",
    },
    {
        quote: "He transformed messy operations into elegant automations and helped us move from idea to execution fast.",
        name: "Daniel K.",
        role: "Product Lead, Vantage AI",
    },
];

export function PortfolioSections() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name || "a new contact"}`);
        const body = encodeURIComponent(`Hi Gabriel,\n\n${formData.message}\n\nReply to: ${formData.email}`);
        window.location.href = `mailto:hello@nchunggabriel.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className="relative overflow-hidden">
            <section id="home" className="scroll-mt-24 px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pt-16">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-2 text-sm font-medium text-muted-foreground shadow-sm">
                            <Sparkles className="h-4 w-4 text-foreground" />
                            Available for select collaborations
                        </div>
                        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                            Backend Engineer • Automation Engineer • Business Strategist
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
                            Building scalable software, intelligent automations, and business solutions that create real impact.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <a href="#contact" className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition hover:bg-primary/80">
                                Hire Me <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                            <a href="#projects" className="inline-flex h-10 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-medium text-foreground transition hover:bg-muted">
                                View Projects
                            </a>
                            <a href="/resume/gabriel-resume.pdf" download className="inline-flex h-10 items-center justify-center rounded-full bg-secondary px-6 text-sm font-medium text-secondary-foreground transition hover:bg-secondary/80">
                                Download Resume
                            </a>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted-foreground">
                            {[
                                "Laravel",
                                "Node.js",
                                "Automation",
                                "Solana",
                                "Rust",
                                "Business Strategy",
                            ].map((tag) => (
                                <span key={tag} className="rounded-full border border-border/70 bg-background/70 px-3 py-1">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/15 via-transparent to-foreground/10 blur-3xl" />
                        <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card p-3 shadow-[0_40px_120px_rgba(15,23,42,0.16)]">
                            <Image
                                src="/images/gabi1.png"
                                alt="Portrait of Gabriel Nchung"
                                width={900}
                                height={1100}
                                priority
                                className="h-[540px] w-full rounded-[1.5rem] object-cover object-center"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            <SectionShell id="about" eyebrow="About me" title="Quietly building the infrastructure behind modern products." description="I blend backend engineering, automation design, and strategic thinking to create software that is elegant, reliable, and commercially useful.">
                <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="rounded-3xl border border-border/70 bg-card/70 p-8 shadow-sm">
                        <p className="text-lg leading-8 text-muted-foreground">
                            I help founders and teams translate ambitious ideas into dependable systems. That means strong APIs, thoughtful automations, product strategy, and clear execution — all shaped to make an impact quickly.
                        </p>
                        <p className="mt-4 text-lg leading-8 text-muted-foreground">
                            My work spans server-side architecture, workflow intelligence, and strategy, with a focus on practical delivery and long-term maintainability.
                        </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {[
                            { label: "Years building", value: "8+" },
                            { label: "Products shipped", value: "20+" },
                            { label: "Automation stacks", value: "50+" },
                            { label: "Countries worked with", value: "4" },
                        ].map((item) => (
                            <div key={item.label} className="rounded-3xl border border-border/70 bg-background/70 p-6 shadow-sm">
                                <div className="text-3xl font-semibold text-foreground">{item.value}</div>
                                <div className="mt-2 text-sm text-muted-foreground">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionShell>

            <SectionShell id="skills" eyebrow="Skills" title="A modern toolkit spanning systems, automation, and business thinking." description="My strength lies in connecting technical execution with the strategic decisions that shape growth.">
                <div className="grid gap-6 lg:grid-cols-3">
                    {skillGroups.map((group) => (
                        <div key={group.title} className="rounded-3xl border border-border/70 bg-card/70 p-6 shadow-sm">
                            <h3 className="text-xl font-semibold text-foreground">{group.title}</h3>
                            <div className="mt-6 space-y-4">
                                {group.items.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="mb-2 flex items-center justify-between text-sm">
                                            <span className="text-muted-foreground">{skill.name}</span>
                                            <span className="font-medium text-foreground">{skill.value}%</span>
                                        </div>
                                        <div className="h-2 rounded-full bg-muted">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.value}%` }}
                                                viewport={{ once: true, amount: 0.6 }}
                                                transition={{ duration: 0.7 }}
                                                className="h-2 rounded-full bg-gradient-to-r from-foreground to-muted-foreground"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </SectionShell>

            <SectionShell id="services" eyebrow="Services" title="Practical service design for ambitious builders." description="I create solutions that are useful now and durable over time.">
                <div className="grid gap-6 md:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.45 }}
                                className="rounded-3xl border border-border/70 bg-background/70 p-7 shadow-sm"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/10 text-foreground">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <h3 className="mt-5 text-xl font-semibold text-foreground">{service.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </SectionShell>

            <SectionShell id="projects" eyebrow="Featured projects" title="Selected work that blends technical depth with business value." description="Each project is designed for lasting impact, strong UX, and clear outcomes.">
                <div className="grid gap-6 lg:grid-cols-3">
                    {projects.map((project) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.4 }}
                            className="flex h-full flex-col rounded-3xl border border-border/70 bg-card/70 p-7 shadow-sm"
                        >
                            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-foreground/10 text-foreground">
                                <Rocket className="h-5 w-5" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                            <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{project.description}</p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.stack.map((item) => (
                                    <span key={item} className="rounded-full border border-border/70 bg-background/70 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <a href={project.link} className="mt-6 inline-flex items-center justify-start px-0 text-sm font-medium text-foreground transition hover:text-muted-foreground">
                                See the approach →
                            </a>
                        </motion.article>
                    ))}
                </div>
            </SectionShell>

            <SectionShell id="experience" eyebrow="Experience timeline" title="A track record of building, optimizing, and guiding growth." description="My background combines product thinking, systems design, and hands-on execution.">
                <div className="space-y-5">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -12 : 12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.4 }}
                            className="rounded-3xl border border-border/70 bg-background/70 p-6 shadow-sm"
                        >
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                                </div>
                                <span className="text-sm font-medium text-muted-foreground">{item.period}</span>
                            </div>
                            <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </SectionShell>

            <SectionShell id="technologies" eyebrow="Technologies" title="Core tools and platforms I rely on to ship with confidence." description="The stack changes with the problem, but the principles stay consistent: clarity, reliability, and speed.">
                <div className="flex flex-wrap gap-3">
                    {technologies.map((item) => (
                        <span key={item} className="rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm font-medium text-foreground shadow-sm">
                            {item}
                        </span>
                    ))}
                </div>
            </SectionShell>

            <SectionShell id="journey" eyebrow="Learning journey" title="Exploring the next frontier: Solana, Rust, and Anchor." description="I’m continuously expanding into blockchain-native development and the programs that power it.">
                <div className="grid gap-6 md:grid-cols-3">
                    {journey.map((item) => (
                        <div key={item.title} className="rounded-3xl border border-border/70 bg-card/70 p-7 shadow-sm">
                            <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </SectionShell>

            <SectionShell id="testimonials" eyebrow="Testimonials" title="Trusted by founders who value thoughtful execution." description="The best work often comes from teams that need both technical depth and strategic perspective.">
                <div className="grid gap-6 lg:grid-cols-2">
                    {testimonials.map((item) => (
                        <blockquote key={item.name} className="rounded-3xl border border-border/70 bg-background/70 p-7 shadow-sm">
                            <p className="text-lg leading-8 text-foreground">“{item.quote}”</p>
                            <footer className="mt-5">
                                <div className="font-semibold text-foreground">{item.name}</div>
                                <div className="text-sm text-muted-foreground">{item.role}</div>
                            </footer>
                        </blockquote>
                    ))}
                </div>
            </SectionShell>

            <SectionShell id="contact" eyebrow="Contact" title="Let’s build something meaningful together." description="Whether you need a robust backend, an automation system, or a strategic product launch, I’d love to hear about it.">
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="rounded-3xl border border-border/70 bg-card/70 p-7 shadow-sm">
                        <h3 className="text-xl font-semibold text-foreground">Available for select engagements</h3>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">
                            I’m currently open to freelance, consulting, and short-term product collaborations.
                        </p>
                        <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                            <a href="mailto:hello@nchunggabriel.com" className="flex items-center gap-3 rounded-2xl border border-border/70 bg-background/70 px-4 py-3 hover:bg-muted">
                                <span className="font-medium text-foreground">Email</span>
                                <span>hello@nchunggabriel.com</span>
                            </a>
                            <a href="https://github.com/Gabii2178" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-border/70 bg-background/70 px-4 py-3 hover:bg-muted">
                                <span className="font-medium text-foreground">GitHub</span>
                                <span>github.com/Gabii2178</span>
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-border/70 bg-background/70 px-4 py-3 hover:bg-muted">
                                <span className="font-medium text-foreground">LinkedIn</span>
                                <span>linkedin.com/in/gabriel-nchung</span>
                            </a>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="rounded-3xl border border-border/70 bg-background/70 p-7 shadow-sm">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <label className="text-sm font-medium text-foreground">
                                <span className="mb-2 block">Name</span>
                                <input
                                    required
                                    value={formData.name}
                                    onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                                    className="w-full rounded-2xl border border-border/70 bg-background px-4 py-3 text-sm outline-none ring-0"
                                    placeholder="Your name"
                                />
                            </label>
                            <label className="text-sm font-medium text-foreground">
                                <span className="mb-2 block">Email</span>
                                <input
                                    required
                                    type="email"
                                    value={formData.email}
                                    onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                                    className="w-full rounded-2xl border border-border/70 bg-background px-4 py-3 text-sm outline-none ring-0"
                                    placeholder="you@example.com"
                                />
                            </label>
                        </div>
                        <label className="mt-4 block text-sm font-medium text-foreground">
                            <span className="mb-2 block">Project details</span>
                            <textarea
                                required
                                rows={5}
                                value={formData.message}
                                onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                                className="w-full rounded-2xl border border-border/70 bg-background px-4 py-3 text-sm outline-none ring-0"
                                placeholder="Tell me a bit about the product, timeline, or challenge."
                            />
                        </label>
                        <Button type="submit" size="lg" className="mt-6 rounded-full px-6">
                            Send Inquiry
                        </Button>
                    </form>
                </div>
            </SectionShell>

            <footer className="border-t border-border/60 px-4 py-10 sm:px-6 lg:px-8">
                <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-muted-foreground">© 2026 Nchung Gabriel. Crafted with care and intention.</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <a href="#home" className="hover:text-foreground">Home</a>
                        <a href="#projects" className="hover:text-foreground">Projects</a>
                        <a href="#contact" className="hover:text-foreground">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
