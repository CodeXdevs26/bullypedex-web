"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Tab = {
    title: any;
    value: string;
    content?: React.ReactNode;
};

type TabsProps = {
    tabs: Tab[];
    containerClassName?: string;
    activeTabClassName?: string;
    tabClassName?: string;
    contentClassName?: string;
};

const Tabs = ({
    tabs,
    containerClassName,
    activeTabClassName,
    tabClassName,
}: TabsProps) => {
    const [activeIdx, setActiveIdx] = useState(0);


    const handleSelect = (idx: number) => {
        setActiveIdx(idx);
    };


    return (
        <div
            className={cn(
                "flex flex-row items-center justify-start relative overflow-auto sm:overflow-visible no-visible-scrollbar w-full",
                containerClassName,
            )}
        >
            {tabs.map((tab, idx) => {
                const isActive = idx === activeIdx;
                return (
                    <button
                        type="button"
                        key={tab.value}
                        onClick={() => handleSelect(idx)}
                        className={cn("relative px-4 py-2 rounded-full w-full", tabClassName)}
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="clickedbutton"
                                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                className={cn(
                                    "absolute inset-0 bg-primary rounded-full",
                                    activeTabClassName,
                                )}
                            />
                        )}
                        <span
                            className={cn(
                                "relative text-sm flex items-center justify-center gap-2",
                                isActive ? "text-background" : "text-foreground",
                            )}
                        >
                            {tab.title}
                        </span>
                    </button>
                );
            })}
        </div>
    );
};
export default function AnimatedTabMotion({ tabs }: {
    tabs: {
        title: any;
        value: string;
    }[]
}) {
    return (
        <div className="w-full mx-auto items-start justify-start bg-accent p-1 rounded-full">
            <Tabs tabs={tabs} />
        </div>
    );
}
