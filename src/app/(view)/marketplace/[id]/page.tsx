// app/listings/[id]/page.tsx  (or wherever you want it)
// Requires: Tailwind CSS + lucide-react
// Put the image at /public/doge-1.png (change DOGE if the extension differs)

import AuthGuard from "@/components/extra/auth-guard";
import { Button } from "@/components/ui/button";
import {
    ArrowLeft,
    CheckCircle2,
    Download,
    FileText,
    Heart,
    MapPin,
    MessageSquare,
    Play,
    Star,
} from "lucide-react";
import Image from "next/image";

const DOGE = "/doge-1.webp";

const details = [
    { label: "Breed", value: "American Bully" },
    { label: "Sex", value: "Male (Stud)" },
    { label: "Age", value: "2 Years, 4 Months" },
    { label: "Date of Birth", value: "12 Jan 2026" },
    { label: "Color", value: "Lilac" },
    { label: "Pattern", value: "Tri-Color" },
];

export default function ListingPage() {
    return (
        <main className="min-h-screen bg-white text-slate-900 px-4  lg:px-[4%] xl:px-[6%] py-24">
            <div className="mx-auto  ">
                <a
                    href="/marketplace"
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-indigo-600 hover:text-indigo-800"
                >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Back to Marketplace
                </a>

                <div className="mt-6 grid gap-8 md:grid-cols-2">
                    {/* Gallery */}
                    <section aria-label="Photos">
                        <Image
                            src={DOGE}
                            alt="Kingston, a lilac tri-color American Bully"
                            className="aspect-[445/392] w-full rounded-2xl object-cover"
                            width={800}
                            height={800}
                        />

                        <div className="mt-3 grid grid-cols-5 gap-3">
                            <button
                                type="button"
                                className="aspect-square overflow-hidden rounded-lg border-2 border-indigo-700 p-0.5"
                                aria-label="Photo 1"
                            >
                                <img src={DOGE} alt="" className="h-full w-full rounded-md object-cover" />
                            </button>
                            <button
                                type="button"
                                className="aspect-square overflow-hidden rounded-lg border border-slate-200"
                                aria-label="Photo 2"
                            >
                                <img src={DOGE} alt="" className="h-full w-full object-cover" />
                            </button>
                            <button
                                type="button"
                                className="aspect-square overflow-hidden rounded-lg border border-slate-200"
                                aria-label="Photo 3"
                            >
                                <img src={DOGE} alt="" className="h-full w-full object-cover" />
                            </button>
                            <button
                                type="button"
                                className="flex aspect-square items-center justify-center rounded-lg border border-slate-200 bg-slate-50"
                                aria-label="Play video"
                            >
                                <span className="flex h-7 w-7 items-center justify-center rounded-full border-[1.5px] border-slate-500 text-slate-500">
                                    <Play className="h-3 w-3 fill-current" />
                                </span>
                            </button>
                            <button
                                type="button"
                                className="relative aspect-square overflow-hidden rounded-lg border border-slate-200"
                                aria-label="View 3 more photos"
                            >
                                <img src={DOGE} alt="" className="h-full w-full object-cover" />
                                <span className="absolute inset-0 flex items-center justify-center bg-white/60 text-xs font-medium text-slate-700">
                                    +3
                                </span>
                            </button>
                        </div>
                    </section>

                    {/* Info */}
                    <section className="flex flex-col">
                        <div className="flex items-start justify-between">
                            <div>
                                <div className="flex flex-wrap items-center gap-2">
                                    <h1 className="text-[28px] font-bold leading-tight tracking-tight">Kingston</h1>
                                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                                        Verified Stud
                                    </span>
                                </div>
                                <p className="mt-1 text-[32px] font-extrabold leading-none text-indigo-600">$4,500</p>
                            </div>
                            <button
                                type="button"
                                className="mt-1 inline-flex items-center gap-1.5 text-[13px] font-medium text-indigo-700 hover:text-indigo-900"
                            >
                                <Heart className="h-3.5 w-3.5" />
                                Add to favorite
                            </button>
                        </div>

                        <span className="mt-3 w-fit rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold text-indigo-700">
                            #BPKC-009821
                        </span>

                        <p className="mt-3 flex items-center gap-1.5 text-sm text-slate-600">
                            <MapPin className="h-4 w-4 text-slate-500" />
                            Miami, Florida
                        </p>

                        <button
                            type="button"
                            className="mt-3 w-fit text-[13px] font-medium text-red-700 hover:underline"
                        >
                            Report this listing
                        </button>

                        {/* About */}
                        <h2 className="mt-4 border-b border-slate-100 pb-2 text-lg font-semibold">
                            About King Kobra
                        </h2>
                        <div className="mt-3 space-y-3 text-[13px] leading-relaxed text-slate-600">
                            <p>
                                King Kobra is an exceptional Lilac Tri American Bully, representing the pinnacle of
                                our breeding program at ABC Bully Kennel. He boasts incredibly correct structure,
                                massive bone density, and a perfectly blocky head type, all wrapped in a stunning
                                and rare lilac tri-color coat.
                            </p>
                            <p>
                                He is fully health tested and cleared for genetic markers. Kobra is a proven
                                producer, passing down his structural integrity and calm, confident temperament to
                                his offspring. We are offering limited stud services to approved females only.
                            </p>
                        </div>

                        {/* Details */}
                        <h2 className="mt-6 border-b border-slate-100 pb-2 text-lg font-semibold">
                            Dog Details
                        </h2>
                        <dl className="mt-3 grid grid-cols-3 gap-x-4 gap-y-5">
                            {details.map((d) => (
                                <div key={d.label}>
                                    <dt className="text-[11px] text-slate-500">{d.label}</dt>
                                    <dd className="mt-1 text-[13px] font-medium text-slate-700">{d.value}</dd>
                                </div>
                            ))}
                        </dl>

                        {/* Health report */}
                        <h2 className="mt-6 border-b border-slate-100 pb-2 text-lg font-semibold">
                            Health Report
                        </h2>
                        <div className="mt-3 flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3">
                            <div className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-md border border-indigo-200 bg-indigo-50 text-indigo-600">
                                <span className="text-[7px] font-bold leading-none">PDF</span>
                                <FileText className="h-3.5 w-3.5" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-xs font-semibold">Embark DNA Genetic Panel.pdf</p>
                                <p className="text-[10px] text-slate-500">
                                    Embark Veterinary • Verified Aug 2026
                                </p>
                                <p className="text-[10px] text-slate-400">2.4 MB • 210+ Variants Screened</p>
                            </div>
                            <button
                                type="button"
                                aria-label="Download report"
                                className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 text-slate-500 hover:bg-slate-200"
                            >
                                <Download className="h-3.5 w-3.5" />
                            </button>
                        </div>

                        {/* Seller */}
                        <div className="mt-3 flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-900 text-[11px] font-semibold text-white">
                                JK
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-xs font-semibold">John&apos;s Bully Kennel</p>
                                <p className="mt-0.5 flex items-center gap-1.5 text-[10px] text-slate-600">
                                    <Star className="h-3 w-3 fill-violet-400 text-violet-400" />
                                    <span className="font-semibold">4.9</span>
                                    <span>(28)</span>
                                    <span className="text-slate-300">•</span>
                                    <span className="inline-flex items-center gap-1 font-medium text-emerald-700">
                                        <CheckCircle2 className="h-3 w-3" />
                                        Verified Seller
                                    </span>
                                </p>
                            </div>
                            <a href="/sellers/johns-bully-kennel" className="text-[11px] font-medium text-indigo-700 hover:underline">
                                View Profile
                            </a>
                        </div>

                        {/* Actions */}
                        <div className="mt-2 grid grid-cols-2 gap-3">
                            <AuthGuard>
                                <Button
                                    className="rounded-full"
                                    size="lg"
                                    variant="secondary"
                                >
                                    <MessageSquare className="h-4 w-4" />
                                    Message
                                </Button>
                            </AuthGuard>
                            <AuthGuard>
                                <Button
                                    size="lg"
                                    className="rounded-full"
                                >
                                    Send Inquiry
                                </Button>
                            </AuthGuard>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}