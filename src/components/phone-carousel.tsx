"use client";

import type React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Testimonial {
    quote: string;
    name: string;
    role: string;
    avatar: string;
    rating?: number;
}

interface TestimonialCarouselProps {
    testimonials: Testimonial[];
    className?: string;
    autoPlayMs?: number;
}

const Stars = ({ rating, active }: { rating: number; active: boolean }) => (
    <div
        className="flex items-center gap-1"
        role="img"
        aria-label={`${rating} out of 5 stars`}
    >
        {Array.from({ length: 5 }).map((_, i) => (
            <Star
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={i}
                className={cn(
                    "transition-all duration-500",
                    active ? "h-5 w-5" : "h-4 w-4",
                    i < rating
                        ? active
                            ? "fill-[#6C4FDB] text-[#6C4FDB]"
                            : "fill-[#C4B8F2] text-[#C4B8F2]"
                        : "fill-transparent text-[#D9D4F5]"
                )}
            />
        ))}
    </div>
);

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
    testimonials,
    className,
    autoPlayMs = 4000,
}) => {
    const total = testimonials.length;
    const [current, setCurrent] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        if (isHovering || total < 2) return;
        const id = setInterval(
            () => setCurrent((prev) => (prev + 1) % total),
            autoPlayMs
        );
        return () => clearInterval(id);
    }, [isHovering, total, autoPlayMs]);

    if (total === 0) return null;

    // Shortest circular distance from the active card: -1 = left, 0 = active, 1 = right
    const getOffset = (index: number) => {
        let diff = index - current;
        if (diff > total / 2) diff -= total;
        if (diff < -total / 2) diff += total;
        return diff;
    };

    return (
        <section
            className={cn("relative w-full py-10", className)}
            aria-roledescription="carousel"
            aria-label="Customer testimonials"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="relative mx-auto h-[300px] w-full overflow-hidden md:overflow-visible">
                {testimonials.map((t, index) => {
                    const offset = getOffset(index);
                    const isActive = offset === 0;
                    const isVisible = Math.abs(offset) <= 1;
                    const rating = t.rating ?? 5;

                    return (
                        // biome-ignore lint/a11y/useSemanticElements: <explanation>
                        <div
                            key={`${t.name}-${index}`}
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`${index + 1} of ${total}`}
                            aria-hidden={!isActive}
                            onClick={() => !isActive && setCurrent(index)}
                            className={cn(
                                "absolute left-1/2 top-12 w-[88%]  max-w-[40dvw]  md:w-[40dvw]!",
                                "transition-all duration-700 ease-in-out",
                                isVisible ? "pointer-events-auto" : "pointer-events-none",
                                !isActive && isVisible && "cursor-pointer"
                            )}
                            style={{
                                transform: `translateX(calc(-50% + ${offset * 62}%)) scale(${isActive ? 1 : 0.9
                                    })`,
                                opacity: isActive ? 1 : isVisible ? 0.7 : 0,
                                zIndex: isActive ? 30 : isVisible ? 10 : 0,
                            }}
                        >
                            {/* Quote badge overhanging the active card */}
                            <div
                                className={cn(
                                    "absolute -top-6 left-8 z-10 flex h-12 w-12 items-center justify-center",
                                    "rounded-full bg-[#6C4FDB] shadow-lg shadow-[#6C4FDB]/30",
                                    "transition-all duration-500",
                                    isActive ? "scale-100 opacity-100" : "scale-50 opacity-0"
                                )}
                            >
                                <Quote
                                    className="h-5 w-5 fill-white text-white"
                                    aria-hidden="true"
                                />
                            </div>

                            <div
                                className={cn(
                                    "rounded-2xl bg-white transition-all duration-700",
                                    isActive
                                        ? "px-6 pb-6 pt-7 shadow-[0_20px_60px_-15px_rgba(108,79,219,0.35)]"
                                        : "px-5 pb-5 pt-6 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] border border-neutral-100"
                                )}
                            >
                                <p
                                    className={cn(
                                        "leading-snug transition-all duration-500",
                                        isActive
                                            ? "text-[17px] font-normal text-neutral-900"
                                            : "text-sm text-neutral-400"
                                    )}
                                >
                                    {t.quote}
                                </p>

                                <div
                                    className={cn(
                                        "flex items-center justify-between gap-3",
                                        isActive ? "mt-8" : "mt-6"
                                    )}
                                >
                                    <div className="flex min-w-0 items-center gap-3">
                                        <div
                                            className={cn(
                                                "relative shrink-0 overflow-hidden rounded-full transition-all duration-500",
                                                isActive ? "h-14 w-14" : "h-11 w-11"
                                            )}
                                        >
                                            <Image
                                                src={t.avatar || "/placeholder.svg"}
                                                alt={t.name}
                                                fill
                                                sizes="56px"
                                                className="object-cover"
                                                unoptimized
                                            />
                                        </div>
                                        <div className="min-w-0">
                                            <p
                                                className={cn(
                                                    "truncate font-semibold transition-all duration-500",
                                                    isActive
                                                        ? "text-base text-neutral-950"
                                                        : "text-sm text-neutral-500"
                                                )}
                                            >
                                                {t.name}
                                            </p>
                                            <p
                                                className={cn(
                                                    "truncate transition-all duration-500",
                                                    isActive
                                                        ? "text-xs text-neutral-500"
                                                        : "text-[11px] text-neutral-400"
                                                )}
                                            >
                                                {t.role}
                                            </p>
                                        </div>
                                    </div>
                                    <Stars rating={rating} active={isActive} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Pagination dots */}
            <div
                className="mt-6 flex items-center justify-center gap-2"
                role="tablist"
                aria-label="Choose testimonial"
            >
                {testimonials.map((t, index) => (
                    <button
                        key={`dot-${// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                            index}`}
                        type="button"
                        role="tab"
                        aria-selected={index === current}
                        aria-label={`Show testimonial from ${t.name}`}
                        onClick={() => setCurrent(index)}
                        className={cn(
                            "h-2.5 w-2.5 rounded-full transition-all duration-300",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C4FDB] focus-visible:ring-offset-2",
                            index === current
                                ? "bg-[#6C4FDB]"
                                : "bg-[#DDD8F5] hover:bg-[#C4B8F2]"
                        )}
                    />
                ))}
            </div>
        </section>
    );
};

/* ---------- Usage ----------

import { TestimonialCarousel } from "@/components/testimonial-carousel";

const testimonials = [
    {
        quote: "The most reliable I've used. Their verification system is top-notch and gives my buyers full confidence.",
        name: "Stephen Brekke",
        role: "German Shepherd Breeder",
        avatar: "/avatars/stephen.jpg",
        rating: 5,
    },
    {
        quote: "The most reliable I've used. Their verification system is top-notch and gives my buyers full confidence.",
        name: "Wade Warren",
        role: "Legacy Integration Producer",
        avatar: "/avatars/wade.jpg",
        rating: 5,
    },
    {
        quote: "The most reliable I've used. Their verification system is top-notch and gives my buyers full confidence.",
        name: "Marlene Robertson",
        role: "Legacy Integration Producer",
        avatar: "/avatars/marlene.jpg",
        rating: 5,
    },
];

<TestimonialCarousel testimonials={testimonials} />

*/