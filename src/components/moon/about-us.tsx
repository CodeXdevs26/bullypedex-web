import { DogIcon, FileChartLineIcon, GitForkIcon, GlobeIcon, HardDriveIcon, SearchIcon, UserRoundGroupIcon, UserRoundIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

const CARDS = [
    {
        icon: <FileChartLineIcon />,
        title: "Official Registration",
        description: "Register your dog and establish an official digital record."
    },
    {
        icon: <SearchIcon />,
        title: "Searchable Profile",
        description: "Find registered dogs using name, ID or bloodline."
    },
    {
        icon: <GitForkIcon />,
        title: "Verified Pedigree",
        description: "View verified lineage and parent information."
    },
    {
        icon: <HardDriveIcon />,
        title: "Permanent Record",
        description: "Keep registration information securely accessible."
    }
]

const STATS = [
    {
        icon: <DogIcon />,
        value: "25,000+",
        label: "Dogs Registered"
    },
    {
        icon: <UserRoundGroupIcon />,
        value: "3,500+",
        label: "Breeders"
    },
    {
        icon: <UserRoundIcon />,
        value: "12,000+",
        label: "Members"
    },
    {
        icon: <GlobeIcon />,
        value: "40+",
        label: "Countries"
    },
]
export default function AboutUs() {
    return (
        <section className="px-4 py-16 lg:px-[4%] lg:py-24 xl:px-[6%]">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-0">
                <Image
                    src="/doge-2.webp"
                    height={720}
                    width={720}
                    alt="pitbull-2"
                    className="aspect-4/3 w-full rounded-[3%] object-cover object-top sm:aspect-video lg:aspect-square"
                />
                <div className="flex flex-col items-center justify-center gap-6 text-center lg:items-start lg:text-left">
                    <p className="w-min rounded-full border-2 border-primary p-2 px-4 text-xs font-semibold text-nowrap text-[#8F43E2]">About Us</p>
                    <h2 className="font-antonio text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl">
                        Everything You Need to Protect <br className="hidden lg:block" />
                        a Pedigree
                    </h2>
                    <p className="text-muted-foreground">OUR CORE FEATURES</p>
                    <div className="grid w-full grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:gap-6">
                        {CARDS.map((card) => (
                            <Card key={card.title} className="bg-[#F2F0FD]">
                                <CardHeader>
                                    <div className="w-min rounded-full bg-background p-3 text-primary">
                                        {card.icon}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <CardTitle className="text-xl font-semibold">
                                        {card.title}
                                    </CardTitle>
                                    <CardDescription className="text-base text-muted-foreground">
                                        {card.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 lg:mt-24 lg:grid-cols-4">
                {STATS.map((stat) => (
                    <div className="flex items-center gap-2" key={stat.label}>
                        <div className="shrink-0 items-center justify-center rounded-full bg-muted p-3 text-primary">
                            {stat.icon}
                        </div>
                        <div>
                            <h5 className="font-antonio text-xl font-bold sm:text-2xl">{stat.value}</h5>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}