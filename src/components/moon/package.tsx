"use client"
import React from 'react'
import { Card, CardContent, CardFooter, CardTitle } from '../ui/card'
import { ArrowUpRight, CheckIcon, } from 'lucide-react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import AuthGuard from '../extra/auth-guard'

const packages = [
    {
        id: 1,
        label: "Permanent Registration",
        amount: "$40",
        description: "Three generation pedigree with official registration paperwork.",
        premium: false,
        items: [
            "Official Bully Pedex registration",
            "Three generation pedigree",
            "Professionally prepared paperwork",
            "Mailed to you"
        ]
    },
    {
        id: 2,
        label: "Litter Registration",
        amount: "$60",
        description: "Register an entire litter with one application.",
        premium: false,
        items: [
            "Litter pedigree registration",
            "Multiple puppies on one application",
            "Professionally prepared paperwork",
            "Mailed to you"
        ]
    },
    {
        id: 3,
        label: "Single Registration",
        amount: "$149",
        description: "For dogs without available lineage information.",
        premium: true,
        items: [
            "Single dog registration",
            "Perfect for pets or unknown lineage",
            "Professionally prepared paperwork",
            "Mailed to you"
        ]
    }
]

const containerRef = React.createRef<HTMLDivElement | null>();

export default function Package() {
    const containerRef = React.useRef<HTMLDivElement>(null)

    return (
        <section
            ref={containerRef}
            className="relative flex w-full flex-col items-center gap-4 bg-transparent px-4 py-20 lg:px-[4%] lg:py-36 xl:px-[6%]"
        >
            <h2 className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">Choose the Right Registration.</h2>


            <div className="z-20 pt-12 grid w-full max-w-md grid-cols-1 gap-4 lg:mt-0 lg:max-w-none lg:grid-cols-3">
                {packages.map((pkg) => (
                    <Card
                        key={pkg.id}
                        className={cn(
                            "rounded-4xl border-0! outline-0 ring-0 shadow-lg",
                        )}
                    >
                        <CardContent>
                            <CardTitle className="text-xl font-bold">{pkg.label}</CardTitle>
                            <p className="text-4xl font-semibold ">{pkg.amount}  <sub className="text-sm font-semibold text-muted-foreground italic">+ shipping</sub></p>
                            <p className="text-muted-foreground">{pkg.description}</p>
                            <ul className="mt-4 space-y-6">
                                {pkg.items.map((item, index) => (
                                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                    <li key={index} className="flex items-center gap-2">
                                        <CheckIcon className="size-4 text-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <AuthGuard withApp>
                                <Button className="w-full py-5 rounded-xl">
                                    Register Now <ArrowUpRight />
                                </Button>
                            </AuthGuard>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section >
    )
}