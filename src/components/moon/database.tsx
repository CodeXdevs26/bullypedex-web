import React from 'react'
import { Input } from '../ui/input'
import { Select, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../ui/input-group'
import { ArrowUpRight, CheckIcon, SearchIcon } from 'lucide-react'
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { Badge } from '../ui/badge'

const dogos = [
    {
        image: "/doggo-1.jpg",
        name: "MAX",
        desc: "American Bully • Male",
        reg: "Reg: BPKC-009821",
        verified: true
    },
    {
        image: "/doggo-2.jpg",
        name: "MAX",
        desc: "American Bully • Male",
        reg: "Reg: BPKC-009821",
        verified: true
    },
    {
        image: "/doggo-3.jpg",
        name: "MAX",
        desc: "American Bully • Male",
        reg: "Reg: BPKC-009821",
        verified: true
    }
]

export default function Database() {
    return (
        <section className="bg-primary/10 py-16 lg:py-24">
            <div className="flex flex-col gap-4 px-4 lg:px-[4%] xl:px-[6%]">
                <h2 className="text-center text-3xl font-bold">Database</h2>
                <p className="text-center text-muted-foreground">Search registered dogs and explore documented pedigrees.</p>

                {/* Search bar: stacked on mobile, single row from sm */}
                <div className="mx-auto flex w-full flex-col gap-2 rounded-xl border border-border bg-background p-2 sm:flex-row sm:items-center lg:w-2/3">
                    <InputGroup className="min-w-0 gap-2 border-0! shadow-none ring-0! outline-0! sm:flex-1">
                        <InputGroupInput placeholder="Search by dog name, registration number..." />
                        <InputGroupAddon>
                            <SearchIcon />
                        </InputGroupAddon>
                    </InputGroup>
                    <Select>
                        <SelectTrigger className="w-full sm:w-auto">
                            <SelectValue placeholder="All Breeds" />
                        </SelectTrigger>
                    </Select>
                    <Button className="w-full rounded-full sm:w-auto">
                        Search Pedigree
                    </Button>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {dogos.map((doggo) => (
                        <Card key={doggo.image}>
                            <CardHeader>
                                <Image
                                    src={doggo.image}
                                    alt={doggo.name}
                                    height={240 * 6}
                                    width={200 * 6}
                                    className="aspect-video w-full rounded-xl object-cover"
                                />
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <CardTitle>{doggo.name}</CardTitle>
                                    <Button variant="ghost" size="icon" className="rounded-full" aria-label={`View ${doggo.name}`}>
                                        <ArrowUpRight className="size-5" />
                                    </Button>
                                </div>
                                <CardDescription>{doggo.desc}</CardDescription>
                                <CardDescription>{doggo.reg}</CardDescription>
                                <CardAction>
                                    <Badge className="border border-green-600 bg-green-300/20 text-green-700">
                                        <CheckIcon /> Verified Pedigree
                                    </Badge>
                                </CardAction>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-8 flex items-center justify-center lg:mt-12">
                    <Button variant="outline" size="lg" className="gap-2 rounded-full border border-muted-foreground bg-transparent px-4">
                        View More <ArrowUpRight />
                    </Button>
                </div>
            </div>
        </section>
    )
}