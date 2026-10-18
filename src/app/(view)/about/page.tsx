"use client"
import AboutUs from '@/components/moon/about-us'
import HereToHelp from '@/components/moon/here-to-help';
import Blocks from '@/components/ui/blocks'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react'

export default function Page() {
    const containerRef = React.useRef<HTMLDivElement>(null);
    return (
        <main className="pt-24">
            <AboutUs />

            <section className="py-24 relative space-y-8" ref={containerRef}>
                <Blocks
                    activeDivsClass='dark:bg-[#131212] bg-primary/10'
                    divClass='dark:border-[#131212] border-muted-foreground/5'
                    classname='w-full bg-transparent! opacity-60 -z-10'
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


                <h1 className="text-5xl text-center font-antonio font-black">Who We Are</h1>
                <p className="text-center text-muted-foreground">At the BPKC registry, our pride is rooted in our commitment to maintaining the intergrity and authenticity of every dog <br /> predigree with community-driven approach to provide exceptional services that cater to your needs</p>
                <h2 className="text-5xl text-center font-antonio font-black">MEET THE <span className="text-primary"> TEAM</span></h2>
                <div className="grid lg:grid-cols-2 gap-6 lg:w-1/2 mx-auto">
                    <Card>
                        <CardHeader className="">
                            <Image className="w-full aspect-video object-cover rounded-xl" height={1024} width={920} alt="avatar" src="https://images.unsplash.com/photo-1734830203158-f7e65ce914b3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" unoptimized />
                        </CardHeader>
                        <CardContent>
                            <CardTitle>Jane Cooper</CardTitle>
                            <CardDescription>Cheif  Executive Officer</CardDescription>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="">
                            <Image className="w-full aspect-video object-cover rounded-xl" height={1024} width={920} alt="avatar" src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" unoptimized />
                        </CardHeader>
                        <CardContent>
                            <CardTitle>Jane Cooper</CardTitle>
                            <CardDescription>Cheif  Executive Officer</CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </section>
            <HereToHelp />
        </main>
    )
}
