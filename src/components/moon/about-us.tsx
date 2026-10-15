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
        <section className=" px-0 lg:px-[4%] xl:px-[6%] py-24">
            <div className="grid grid-cols-2 ">
                <Image src="/doge-2.webp" height={720} width={720} alt='pitbull-2' className="object-cover aspect-square object-top rounded-[3%]" />
                <div className="flex flex-col justify-center items-start gap-6">
                    <p className="text-xs border-2 px-4 text-[#8F43E2] w-min text-nowrap font-semibold border-primary rounded-full p-2">About Us</p>
                    <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold font-antonio">
                        Everything You Need to Protect <br />
                        a Pedigree
                    </h2>
                    <p className="text-muted-foreground">OUR CORE FEATURES</p>
                    <div className="w-full grid grid-cols-2 gap-6">
                        {
                            CARDS.map((card) => (
                                <Card key={card.title} className="bg-[#F2F0FD]">
                                    <CardHeader>
                                        <div className="p-3 rounded-full bg-background w-min text-primary">
                                            {card.icon}
                                        </div>
                                    </CardHeader>
                                    <CardContent >
                                        <CardTitle className="text-xl font-semibold">
                                            {card.title}
                                        </CardTitle>
                                        <CardDescription className="text-muted-foreground text-base ">
                                            {card.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-24">
                {
                    STATS.map((stat) => (
                        <div className="flex items-center gap-2" key={stat.label}>
                            <div className="bg-muted justify-center items-center p-3 rounded-full text-primary">
                                {stat.icon}
                            </div>
                            <div className="">
                                <h5 className="font-bold font-antonio text-2xl">{stat.value}</h5>
                                <p className="text-muted-foreground text-sm">{stat.label}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
