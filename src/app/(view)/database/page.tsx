"use client"
import AnimatedTabMotion from '@/components/extra/animated-tabs'
import AuthGuard from '@/components/extra/auth-guard'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowUpRight, CalendarIcon, FlaskConicalIcon, SearchIcon, User2Icon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Search from './search'
import Mating from './mating'



const tabs = [
    {
        title: <><SearchIcon className="size-4" /> Search</>,
        value: "search"

    }, {
        title: <><FlaskConicalIcon className="size-4" /> Mating Simulator</>,
        value: "mating"
    }
]


export default function Page() {
    const [value, setValue] = React.useState("search")
    return (
        <main className="px-4 py-24 lg:px-[4%] xl:px-[6%]">
            <section className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2">
                <div className="mt-8 space-y-6 text-center lg:mt-24 lg:space-y-8 lg:text-left">
                    <p className="mx-auto w-min rounded-full border-2 border-primary p-2 px-4 text-xs font-semibold text-nowrap text-[#8F43E2] lg:mx-0">
                        Database
                    </p>
                    <div className="flex justify-center lg:block">
                        <AnimatedTabMotion tabs={tabs} value={value} onChange={setValue} />
                    </div>

                    {value === "search" && (
                        <>
                            <h1 className="font-antonio text-3xl font-bold sm:text-4xl xl:text-5xl">
                                Search the Bully<br className="hidden lg:block" />{" "}
                                Pedigree Database
                            </h1>
                            <p className="mx-auto max-w-md text-muted-foreground lg:mx-0 lg:max-w-none">
                                Find registered dogs, explore bloodlines, and verify pedigree information.
                            </p></>)}
                </div>

                {value === "search" && (
                    <div className="relative w-full">
                        <Image
                            src="/doge-3.webp"
                            height={960}
                            width={1109}
                            alt="doge-3"
                            className="h-[40dvh] w-full object-contain object-bottom sm:h-[50dvh] lg:h-[60dvh] lg:w-auto"
                            draggable={false}
                        />
                        <div className="absolute top-0 left-0 z-10 h-full w-full bg-linear-to-b from-transparent via-transparent to-background" />
                    </div>
                )}
            </section>
            {value === "search" && <Search />}

            {value === "mating" && <Mating />}

        </main>
    )
}