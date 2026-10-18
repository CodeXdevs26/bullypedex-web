"use client"
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { ArrowLeftIcon, ArrowUpRight, InfoIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import Blocks from '../ui/blocks'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import AuthGuard from '../extra/auth-guard'

const packages = [
    {
        id: 1,
        label: "Single Registration",
        amount: "$149 + shipping",
        description: "For a dog with no existing registry history",
        premium: false
    },
    {
        id: 2,
        label: "Single Registration",
        amount: "$149 + shipping",
        description: "For a dog with no existing registry history",
        premium: false
    },
    {
        id: 3,
        label: "Single Registration",
        amount: "$149 + shipping",
        description: "For a dog with no existing registry history",
        premium: true
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
            <Blocks
                activeDivsClass="dark:bg-[#131212] bg-primary/10"
                divClass="dark:border-[#131212] border-muted-foreground/5"
                classname="w-full bg-transparent! opacity-60"
                containerRef={containerRef}
                activeDivs={{
                    0: new Set([2, 4, 6]),
                    1: new Set([0, 8]),
                    2: new Set([1, 3, 5]),
                    4: new Set([0, 5, 8]),
                    5: new Set([2, 4]),
                    7: new Set([2, 6, 9]),
                    8: new Set([0, 4]),
                    9: new Set([5]),
                    10: new Set([3, 6]),
                    11: new Set([1, 5]),
                    12: new Set([7]),
                    13: new Set([2, 4]),
                    14: new Set([5]),
                    15: new Set([1, 6]),
                }}
            />
            <p className="w-min rounded-full border-2 border-primary p-2 px-4 text-xs font-semibold text-nowrap text-[#8F43E2]">
                💸 Registration Packages
            </p>
            <h2 className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">Choose the Perfect Package</h2>
            <p className="max-w-md text-center text-muted-foreground lg:max-w-none">
                All packages include official paperwork, verification and our team support
            </p>

            <div className="z-20 mt-4 grid w-full max-w-md grid-cols-1 gap-4 lg:mt-0 lg:max-w-none lg:grid-cols-3">
                {packages.map((pkg) => (
                    <Card
                        key={pkg.id}
                        className={cn(
                            "rounded-4xl",
                            pkg.premium
                                ? "bg-foreground text-background"
                                : "bg-linear-to-br from-[#6A54E5] via-[#6A54E5] to-[#8F43E2] text-background"
                        )}
                    >
                        <CardContent>
                            <CardTitle className="text-2xl font-bold xl:text-3xl">{pkg.label}</CardTitle>
                            <p className="text-lg">{pkg.amount}</p>
                            <p>{pkg.description}</p>
                            <p className="flex items-center gap-2 text-sm">
                                <InfoIcon className="size-4" /> How it works
                            </p>
                        </CardContent>
                        <CardFooter>
                            <AuthGuard withApp>
                                <Button className="w-full rounded-full bg-foreground! p-6 text-background!">
                                    Start Registration <ArrowUpRight />
                                </Button>
                            </AuthGuard>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}