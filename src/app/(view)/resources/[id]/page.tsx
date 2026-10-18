// app/resources/[slug]/page.tsx  (or wherever you want it)
// Requires: Tailwind CSS + lucide-react + next/font
// Put the image at /public/doge-1.png (change DOGE if the extension differs)

import { Anton } from "next/font/google";
import { ArrowLeft, Heart, Share2 } from "lucide-react";

const display = Anton({ subsets: ["latin"], weight: "400" });

const DOGE = "/doge-1.webp";

const sections = [
    {
        id: "what-is-a-pedigree",
        title: "What Is a Pedigree?",
        toc: "What Is a Pedigree?",
        paragraphs: [
            "A pedigree is more than just a family tree; it's a comprehensive genetic roadmap. For professional breeders and serious enthusiasts, understanding this document is crucial for predicting traits, ensuring health, and maintaining breed standards.",
            "It records the lineage of a dog, detailing its ancestors over several generations. This information helps in identifying the origin of specific physical characteristics, temperament traits, and potential genetic health conditions.",
        ],
    },
    {
        id: "understanding-the-3-gen",
        title: "Understanding the 3-Generation Pedigree",
        toc: "Understanding the 3-Gen",
        paragraphs: [
            "The standard pedigree chart visually represents three generations. It reads from left to right, starting with the subject dog and expanding outward to parents (Sire and Dam), grandparents, and great-grandparents.",
            "The standard pedigree chart visually represents three generations. It reads from left to right, starting with the subject dog and expanding outward to parents (Sire and Dam), grandparents, and great-grandparents.",
            "The standard pedigree chart visually represents three generations. It reads from left to right, starting with the subject dog and expanding outward to parents (Sire and Dam), grandparents, and great-grandparents.",
        ],
    },
    {
        id: "decoding-abbreviations",
        title: "Decoding Abbreviations",
        toc: "Decoding Abbreviations",
        paragraphs: ["Placeholder: explain common title and registry abbreviations here."],
    },
    {
        id: "spotting-linebreeding",
        title: "Spotting Linebreeding",
        toc: "Spotting Linebreeding",
        paragraphs: ["Placeholder: explain how to spot repeated ancestors here."],
    },
];

export default function ResourcePage() {
    return (
        <div className="min-h-screen pt-34 pb-24">
            <div className=" px-2 lg:px-[4%] xl:px-[6%]">
                <nav aria-label="Breadcrumb">
                    <a
                        href="/resources"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-700 hover:text-indigo-900"
                    >
                        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                        Back to Resources List
                    </a>
                </nav>

                <main className="mt-4 border-t border-slate-100 pt-4">
                    <article>
                        <header>
                            <h1
                                className={`${display.className} text-[28px] leading-tight tracking-wide text-slate-900 sm:text-[32px]`}
                            >
                                How to Read a Bully Pedigree
                            </h1>
                        </header>

                        <figure className="mt-3">
                            <img
                                src={DOGE}
                                alt="A gray American Bully lying on a paved path with its tongue out"
                                className="aspect-[760/325] w-full object-cover"
                            />
                        </figure>

                        {/** biome-ignore lint/a11y/useSemanticElements: <explanation> */}
                        <div className="mt-4 flex gap-3" role="group" aria-label="Article actions">
                            <button
                                type="button"
                                className="inline-flex h-8 items-center gap-1.5 rounded-md border border-indigo-300 px-4 text-[11px] font-medium text-indigo-700 hover:bg-indigo-50"
                            >
                                <Heart className="h-3 w-3" aria-hidden="true" />
                                Save
                            </button>
                            <button
                                type="button"
                                className="inline-flex h-8 items-center gap-1.5 rounded-md border border-indigo-300 px-4 text-[11px] font-medium text-indigo-700 hover:bg-indigo-50"
                            >
                                <Share2 className="h-3 w-3" aria-hidden="true" />
                                Share
                            </button>
                        </div>

                        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_20dvw]">
                            <div className="min-w-0 space-y-6">
                                {sections.map((s) => (
                                    <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="scroll-mt-4">
                                        <h2 id={`${s.id}-title`} className="text-[15px] font-semibold">
                                            {s.title}
                                        </h2>
                                        <div className="mt-3 space-y-3 text-xs leading-relaxed text-slate-600">
                                            {s.paragraphs.map((p, i) => (
                                                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                                <p key={i}>{p}</p>
                                            ))}
                                        </div>
                                    </section>
                                ))}
                            </div>

                            <aside aria-labelledby="toc-title" className="md:sticky md:top-24 md:self-start">
                                <nav
                                    aria-labelledby="toc-title"
                                    className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-4"
                                >
                                    <h2
                                        id="toc-title"
                                        className="text-[10px] font-semibold tracking-wide text-slate-800"
                                    >
                                        IN THIS GUIDE
                                    </h2>
                                    <ul className="mt-3 space-y-3">
                                        {sections.map((s, i) => (
                                            <li key={s.id}>
                                                <a
                                                    href={`#${s.id}`}
                                                    aria-current={i === 0 ? "location" : undefined}
                                                    className={`text-[11px] ${i === 0
                                                        ? "font-medium text-indigo-700"
                                                        : "text-slate-600 hover:text-indigo-700"
                                                        }`}
                                                >
                                                    {s.toc}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </aside>
                        </div>
                    </article>
                </main>
            </div>
        </div>
    );
}