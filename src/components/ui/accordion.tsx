"use client"
import { useState } from "react";

const ITEMS = [
    {
        id: "what-is",
        question: "What is the Mating Simulator?",
        answer:
            "The Mating Simulator helps breeders preview potential pairings using verified Bully Pedex pedigree data.",
    },
    {
        id: "registered",
        question: "Do both dogs need to be registered?",
        answer:
            "Yes. Both dogs need a verified Bully Pedex registration so the simulator can use their pedigree data.",
    },
];

function Icon({ open }: { open: boolean }) {
    return (
        <span className="relative block h-3.5 w-3.5" aria-hidden="true">
            {/* horizontal bar (always visible) */}
            <span className="absolute left-0 top-1/2 h-[2.5px] w-full -translate-y-1/2 rounded-full bg-current" />
            {/* vertical bar (rotates + fades out when open => minus) */}
            <span
                className={`absolute left-1/2 top-0 h-full w-[2.5px] -translate-x-1/2 rounded-full bg-current transition-all duration-300 ease-out ${open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                    }`}
            />
        </span>
    );
}


export default function Accordion({ items = ITEMS }: { items?: typeof ITEMS }) {
    const [openId, setOpenId] = useState<string | null>(null);

    return (

        items.map((item) => {
            const open = openId === item.id;
            const panelId = `${item.id}-panel`;
            const buttonId = `${item.id}-button`;

            return (
                <div
                    key={item.id}
                    className={`rounded-2xl px-6 py-5 transition-all duration-300 ease-out ${open
                        ? "bg-[#5B4DE3] text-white shadow-[0_18px_40px_-12px_rgba(91,77,227,0.55)]"
                        : "bg-white text-[#1B1740] shadow-[0_8px_24px_-10px_rgba(27,23,64,0.18)] border border-border/50"
                        }`}
                >
                    <button
                        id={buttonId}
                        type="button"
                        aria-expanded={open}
                        aria-controls={panelId}
                        onClick={() => setOpenId(open ? null : item.id)}
                        className="flex w-full items-center justify-between gap-4 text-left focus-visible:outline-none"
                    >
                        <span className="text-[18px] font-semibold leading-snug tracking-tight">
                            {item.question}
                        </span>
                        <span
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${open
                                ? "bg-[#F1EFFD] text-[#5B4DE3]"
                                : "bg-[#EEEBFC] text-[#5B4DE3]"
                                }`}
                        >
                            <Icon open={open} />
                        </span>
                    </button>

                    {/* smooth height animation: 0fr -> 1fr */}
                    {/** biome-ignore lint/a11y/useSemanticElements: <explanation> */}
                    <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                            }`}
                    >
                        <div className="overflow-hidden">
                            <p className="pt-3 text-[14px] leading-relaxed text-white/90">
                                {item.answer}
                            </p>
                        </div>
                    </div>
                </div>
            );
        })
    );
}