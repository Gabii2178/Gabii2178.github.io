import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionShellProps = {
    id: string;
    eyebrow: string;
    title: string;
    description?: string;
    children: ReactNode;
    align?: "left" | "center";
};

export function SectionShell({
    id,
    eyebrow,
    title,
    description,
    children,
    align = "left",
}: SectionShellProps) {
    return (
        <section id={id} className="scroll-mt-24 py-20 sm:py-24">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className={`mx-auto flex max-w-6xl flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
            >
                <span className="mb-3 inline-flex items-center rounded-full border border-border/70 bg-background/80 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground shadow-sm">
                    {eyebrow}
                </span>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    {title}
                </h2>
                {description ? (
                    <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                        {description}
                    </p>
                ) : null}
                <div className="mt-10 w-full">{children}</div>
            </motion.div>
        </section>
    );
}
