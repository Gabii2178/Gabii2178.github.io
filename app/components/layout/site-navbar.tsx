"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/app/components/shared/theme-toggle";

const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
];

export function SiteNavbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const sectionIds = links.map((link) => link.href.replace("#", ""));
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (visibleEntry) {
                    setActiveSection(visibleEntry.target.id);
                }
            },
            { threshold: [0.2, 0.5, 0.8] },
        );

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const handleNavigate = (href: string) => {
        setMobileOpen(false);
        const id = href.replace("#", "");
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                <button
                    type="button"
                    onClick={() => handleNavigate("#home")}
                    className="flex items-center gap-3 rounded-full border border-border/70 bg-background/70 px-3 py-2 text-sm font-semibold text-foreground shadow-sm"
                >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background">
                        NG
                    </span>
                    <span className="hidden sm:inline">Nchung Gabriel</span>
                </button>

                <div className="hidden items-center gap-2 md:flex">
                    {links.map((link) => {
                        const id = link.href.replace("#", "");
                        const isActive = activeSection === id;
                        return (
                            <button
                                key={link.href}
                                type="button"
                                onClick={() => handleNavigate(link.href)}
                                className={`rounded-full px-3 py-2 text-sm transition ${isActive ? "bg-foreground text-background" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
                            >
                                {link.label}
                            </button>
                        );
                    })}
                    <ThemeToggle />
                </div>

                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full" onClick={() => setMobileOpen((prev) => !prev)} aria-label="Toggle navigation">
                        {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    </Button>
                </div>
            </nav>

            <AnimatePresence>
                {mobileOpen ? (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="border-t border-border/60 bg-background/95 px-4 py-4 md:hidden"
                    >
                        <div className="flex flex-col gap-2">
                            {links.map((link) => {
                                const id = link.href.replace("#", "");
                                const isActive = activeSection === id;
                                return (
                                    <button
                                        key={link.href}
                                        type="button"
                                        onClick={() => handleNavigate(link.href)}
                                        className={`rounded-2xl px-3 py-3 text-left text-sm font-medium ${isActive ? "bg-foreground text-background" : "bg-muted/70 text-foreground"}`}
                                    >
                                        {link.label}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </header>
    );
}
