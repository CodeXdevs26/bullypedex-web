import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { ArrowRight, CogIcon, MonitorIcon, SearchIcon, SettingsIcon } from 'lucide-react'
import Link from 'next/link'
import { BiDollarCircle } from 'react-icons/bi'


export default function AboutUs() {
    return (
        <section className="relative isolate hidden grid-cols-1 gap-y-2 overflow-hidden px-4 pb-2 pt-20 md:grid md:gap-y-10 md:pb-6 md:pt-28 lg:grid-cols-2 lg:gap-0 lg:px-[4%] lg:py-24 xl:px-[6%]">
            {/* Copy */}
            <div className="flex w-full flex-col md:items-center justify-center gap-2 md:gap-4 md:text-center lg:items-start lg:text-left px-4 md:px-0">

                <h1 className=" text-3xl tracking-tight md:text-4xl font-black md:font-bold  xl:text-6xl text-background md:text-foreground">
                    Your Dog Deserves <br />
                    <span className="text-primary">Official Paperwork!</span> <br />
                    Not a Subscription
                </h1>
                <p className="md:mt-2 max-w-md text-background md:text-muted-foreground lg:max-w-none text-xs md:text-lg">
                    Register your dog with Bully Pedex and get <span className="font-bold text-foreground">FREE online pedigree access.</span>
                </p>
                <p className="md:mt-2 max-w-md text-background md:text-muted-foreground lg:max-w-none text-xs md:text-lg">
                    No separate membership fees. No complicated paperwork. Our
                    registration specialists build your dog’s pedigree and handle all the
                    work for you.
                </p>

                {/* DESKTOP: */}
                <Button size="lg" asChild>
                    <Link href="/registry" className="flex items-center px-6 py-6">
                        You Register. We Do the Rest
                    </Link>
                </Button>
            </div>

            {/* Hero image */}
            <div className="flex h-full flex-col items-center">
                <div className="flex flex-col gap-6">
                    <div className="py-4 flex items-center gap-4">
                        <div className="p-4 rounded-full bg-secondary aspect-square w-min text-primary">
                            <BiDollarCircle className="size-8" />
                        </div>
                        <div className="">
                            <h4 className="font-semibold text-4xl text-primary">$0</h4>
                            <p className="">Membership Fees</p>
                        </div>
                    </div>
                    <div className="py-4 flex items-center gap-4">
                        <div className="p-4 rounded-full bg-secondary aspect-square w-min text-primary">
                            <MonitorIcon className="size-8" />
                        </div>
                        <div className="">
                            <h4 className="font-semibold text-4xl text-primary">FREE</h4>
                            <p className="">Online Pedigree Access</p>
                        </div>
                    </div>
                    <div className="py-4 flex items-center gap-4">
                        <div className="p-4 rounded-full bg-secondary aspect-square w-min text-primary">
                            <SettingsIcon className="size-8" />
                        </div>
                        <div className="">
                            <h4 className="font-semibold text-4xl text-primary">DONE FOR YOU</h4>
                            <p className="">We Build Your Pedigree</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}