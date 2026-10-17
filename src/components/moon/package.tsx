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
    return (
        <section ref={containerRef} className="relative py-36 w-full px-0 lg:px-[4%] xl:px-[6%] flex flex-col items-center gap-4 bg-transparent">
            <Blocks
                activeDivsClass='dark:bg-[#131212] bg-primary/10'
                divClass='dark:border-[#131212] border-muted-foreground/5'
                classname='w-full bg-transparent! opacity-60'
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
            <p className="text-xs border-2 px-4 text-[#8F43E2] w-min text-nowrap font-semibold border-primary rounded-full p-2">💸 Registration Packages</p>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center">Choose the Perfect Package</h2>
            <p className=" text-muted-foreground text-center">All pakages include official paperwork, verification and our team support</p>
            <div className="grid grid-cols-3 gap-4 w-full z-20">
                {packages.map((pkg) => (
                    <Card key={pkg.id} className={cn("rounded-4xl", pkg.premium ? "bg-foreground text-background" : "bg-linear-to-br from-[#6A54E5] via-[#6A54E5] to-[#8F43E2] text-background")} >
                        <CardContent >
                            <CardTitle className="text-2xl xl:text-3xl font-bold">{pkg.label}</CardTitle>
                            <p className="text-lg">{pkg.amount}</p>
                            <p>{pkg.description}</p>
                            <p className="text-sm flex items-center gap-2"><InfoIcon className="size-4" /> How it works</p>
                        </CardContent>
                        <CardFooter>
                            <AuthGuard withApp>
                                <Button className="w-full bg-foreground! text-background! p-6 rounded-full">Start Registration <ArrowUpRight /></Button>
                            </AuthGuard>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}
