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
            className="relative flex w-full flex-col items-center gap-4 bg-transparent px-6 py-16 lg:px-[4%] lg:py-36 xl:px-[6%]"
        >
            <h2 className="text-center text-xl font-bold sm:text-3xl lg:text-4xl">Choose the Right Registration.</h2>


            <div className="z-20 grid w-full max-w-none grid-cols-3 gap-2 pt-6 lg:mt-0 lg:gap-4 lg:pt-12">
                {packages.map((pkg) => (
                    <Card
                        key={pkg.id}
                        className={cn(
                            "rounded-xl border-0! outline-0 ring-0 shadow-lg lg:rounded-4xl",
                        )}
                    >
                        <CardContent className="gap-1 px-2 py-2 md:gap-3 md:px-6 md:py-6">
                            <CardTitle className="text-[0.55rem] font-bold leading-tight md:text-xl">{pkg.label}</CardTitle>
                            <p className="text-sm font-semibold md:text-4xl">{pkg.amount}  <sub className="text-[0.4rem] font-semibold text-muted-foreground italic md:text-sm">+ shipping</sub></p>
                            <p className="text-[0.4rem] leading-tight text-muted-foreground md:text-base">{pkg.description}</p>
                            <ul className="mt-2 space-y-2 md:mt-4 md:space-y-6">
                                {pkg.items.map((item, index) => (
                                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                    <li key={index} className="flex items-start gap-1 text-[0.4rem] leading-tight md:items-center md:gap-2 md:text-base">
                                        <CheckIcon className="mt-0.5 size-2 shrink-0 text-primary md:mt-0 md:size-4" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter className="px-2 pb-2 md:px-6 md:pb-6">
                            <AuthGuard withApp>
                                <Button className="h-5 w-full rounded-md px-1 text-[0.4rem] md:h-auto md:rounded-xl md:py-5 md:text-base">
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