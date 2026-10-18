"use client";
import AuthGuard from "@/components/extra/auth-guard";
import {
    ArrowLeft,
    ArrowRight,
    CalendarDays,
    CheckCircle2,
    ClipboardList,
    Clock,
    Heart,
    MapPin,
    Share2,
    ShieldCheck,
    Tag,
    Trophy,
    Users,
} from "lucide-react";
import Image from "next/image";

const DOGE = "/event.jpg";

const rings = [
    {
        title: "Ring 1 · Pocket & Standard B",
        subtitle: "ABKC Conformation Class",
        time: "9:00 AM",
        tone: "bg-indigo-100 text-indigo-900 border-indigo-200",
    },
    {
        title: "Ring 2 · XL & Classic Bully",
        subtitle: "ABKC Conformation Class",
        time: "11:30 AM",
        tone: "bg-indigo-100 text-indigo-900 border-indigo-200",
    },
    {
        title: "Main Arena · Best in Show",
        subtitle: "Junior Showmanship & Finals",
        time: "2:00 PM",
        tone: "bg-emerald-300 text-emerald-950 border-emerald-400",
    },
];

const requirements = [
    "Official Bully Pedex Registration or certified ABKC permanent number.",
    "Up-to-date certified rabies and core vaccination records upon check-in.",
];

const info = [
    { icon: CalendarDays, label: "Date", value: "May 24 – May 25, 2025" },
    { icon: Clock, label: "Time", value: "10:00 AM – 6:00 PM" },
    {
        icon: MapPin,
        label: "Location",
        value: "Orange County Convention Center Orlando, Florida, USA",
    },
    { icon: Tag, label: "Event Type", value: "Dog Show" },
    { icon: Users, label: "Attendees", value: "256 going · 480 interested" },
];

export default function EventPage() {
    return (
        <main className="min-h-screen py-24 pt-38 ">
            <div className="px-4 lg:px-[4%] xl:px-[6%]">
                <a
                    href="/events"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-700 hover:text-indigo-900"
                >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Back to Event List
                </a>

                <hr className="mt-4 border-slate-100" />

                {/* Hero */}
                <section className="relative mt-2 h-[40dvh] overflow-hidden sm:h-[40dvh]">
                    <Image src={DOGE} alt="" height={250 * 3} width={800 * 3} className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-indigo-950/30 to-indigo-950/20" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h1 className="max-w-[220px] text-lg font-bold leading-tight sm:max-w-xs">
                            Bully Pedex National Specialty 2026
                        </h1>
                        <p className="mt-1 flex items-center gap-1.5 text-[11px] text-white/90">
                            <ShieldCheck className="h-3 w-3" />
                            Hosted by American Bully Kennel Club &amp; Bully Pedex
                        </p>
                    </div>
                </section>

                {/* Save / Share */}
                <div className="mt-4 flex gap-3">
                    <button
                        type="button"
                        className="inline-flex h-9 items-center gap-1.5 rounded-md border border-indigo-300 px-4 text-xs font-medium text-indigo-700 hover:bg-indigo-50"
                    >
                        <Heart className="h-3.5 w-3.5" />
                        Save
                    </button>
                    <button
                        type="button"
                        onClick={() => navigator.share({ title: "Bully Pedex National Specialty 2026", url: window.location.href })}
                        className="inline-flex h-9 items-center gap-1.5 rounded-md border border-indigo-300 px-4 text-xs font-medium text-indigo-700 hover:bg-indigo-50"
                    >
                        <Share2 className="h-3.5 w-3.5" />
                        Share
                    </button>
                </div>

                <div className="mt-6 grid gap-8 md:grid-cols-[1fr_20dvw]">
                    {/* Left column */}
                    <div className="min-w-0">
                        <h2 className="text-xl font-bold tracking-tight">About This Event</h2>
                        <p className="mt-3 text-[13px] leading-relaxed text-slate-600">
                            Bully Showdown 2025 is one of the biggest bully dog shows of the year! Join us for a
                            weekend full of competition, education, and community. Top bloodlines, professional
                            judges, amazing vendors, and fun for the whole family.
                        </p>

                        {/* Competition rings */}
                        <section className="mt-5 rounded-xl border border-slate-100 p-3 shadow-sm">
                            <div className="flex items-center justify-between">
                                <h3 className="flex items-center gap-2 text-[13px] font-semibold">
                                    <Trophy className="h-3.5 w-3.5 text-indigo-700" />
                                    Competition Rings
                                </h3>
                                <span className="text-[10px] font-medium text-slate-600">3 Rings</span>
                            </div>
                            <ul className="mt-3 space-y-2">
                                {rings.map((r) => (
                                    <li
                                        key={r.title}
                                        className="flex items-center justify-between rounded-lg bg-indigo-50 px-3 py-2.5"
                                    >
                                        <div>
                                            <p className="text-xs font-semibold">{r.title}</p>
                                            <p className="text-[10px] text-slate-500">{r.subtitle}</p>
                                        </div>
                                        <span
                                            className={`rounded border px-2 py-0.5 text-[10px] font-semibold ${r.tone}`}
                                        >
                                            {r.time}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Entry requirements */}
                        <section className="mt-6 rounded-xl border border-slate-100 p-3 shadow-sm">
                            <h3 className="flex items-center gap-2 text-[13px] font-semibold">
                                <ClipboardList className="h-3.5 w-3.5 text-indigo-700" />
                                Entry Requirements
                            </h3>
                            <ul className="mt-3 space-y-2.5">
                                {requirements.map((text) => (
                                    <li key={text} className="flex items-start gap-2 text-xs leading-snug text-slate-700">
                                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                                        <span className="max-w-[260px]">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Entry fee */}
                        <section className="mt-6 flex items-end justify-between rounded-xl border border-slate-100 p-3 shadow-sm">
                            <div>
                                <p className="text-[10px] text-slate-600">Standard Entry Fee</p>
                                <p className="text-xl font-bold text-indigo-800">$75.00</p>
                            </div>
                            <span className="mb-1 rounded-full bg-indigo-100 px-2.5 py-1 text-[10px] font-medium text-slate-700">
                                Per Dog / Class
                            </span>
                        </section>
                    </div>

                    {/* Right column */}
                    <aside className="md:sticky md:top-4 md:self-start">
                        <section className="rounded-xl border border-slate-200 p-4 shadow-sm">
                            <h3 className="text-sm font-semibold">Event Information</h3>
                            <dl className="mt-4 space-y-4">
                                {info.map(({ icon: Icon, label, value }) => (
                                    <div key={label} className="flex gap-3">
                                        <Icon className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                                        <div>
                                            <dt className="text-[11px] font-medium text-slate-700">{label}</dt>
                                            <dd className="mt-0.5 text-[11px] leading-snug text-slate-500">{value}</dd>
                                        </div>
                                    </div>
                                ))}
                            </dl>
                        </section>

                        <div className="mt-4 flex items-center justify-between gap-3">
                            <div>
                                <p className="text-base font-bold text-slate-900">
                                    $75 <span className="text-[10px] font-normal text-slate-500">/ class</span>
                                </p>
                                <p className="text-[10px] font-medium text-red-700">Entries close Oct 1</p>
                            </div>
                            <AuthGuard>
                                <button
                                    type="button"
                                    className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-500 text-[13px] font-semibold text-white shadow-md hover:from-indigo-700 hover:to-violet-600"
                                >
                                    Register Now
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </AuthGuard>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}