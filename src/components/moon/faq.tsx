import React from 'react'
import Accordion from '../ui/accordion'


const items = [
    {
        id: "what-is",
        question: "What is the Mating Simulator?",
        answer: "The Mating Simulator helps breeders preview potential pairings using verified Bully Pedex pedigree data."
    },
    {
        id: "can-i-open",
        question: "Can I open a full pedigree from here?",
        answer: "Yes. Clicking on a dog’s name will open their full pedigree in a new tab."
    },
    {
        id: "registered",
        question: "Do both dogs need to be registered?",
        answer: "Yes. Both dogs need a verified Bully Pedex registration so the simulator can use their pedigree data."
    },
    {
        id: "how-accurate",
        question: "How accurate is the simulator?",
        answer: "The simulator uses verified pedigree data to provide accurate predictions of potential pairings."
    },
    {
        id: "can-i-save",
        question: "Can I save my pairings?",
        answer: "Yes. You can save your pairings for future reference and breeding decisions."
    }
]

export default function FAQ() {
    return (
        <section className="py-24 px-0 lg:px-[4%] xl:px-[6%] space-y-6">
            <p className="text-xs border px-4 text-[#8F43E2] w-min text-nowrap font-semibold border-primary rounded-full p-2">❓ FAQ</p>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold">Frequently Asked Question</h2>
            <p className="text-muted-foreground">Got questions? We’ve got answers. Here’s everything you need to know about our website.</p>
            <div className="grid grid-cols-2 gap-6 mt-12 items-start">
                <Accordion items={items} />
            </div>
        </section>
    )
}
