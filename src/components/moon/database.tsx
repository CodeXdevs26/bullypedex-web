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
        <section className="py-24 bg-primary/10">
            <div className=" px-0 lg:px-[4%] xl:px-[6%] flex flex-col gap-4">
                <h2 className="text-3xl font-bold text-center">Database</h2>
                <p className="text-muted-foreground text-center">Search registered dogs and explore documented pedigrees.</p>
                <div className="p-2 bg-background border border-border rounded-xl flex items-center gap-2 lg:w-2/3 mx-auto">
                    <InputGroup className="shadow-none ring-0! outline-0! border-0! gap-2">
                        <InputGroupInput placeholder="Search by dog name, registration number..." />
                        <InputGroupAddon>
                            <SearchIcon />
                        </InputGroupAddon>
                    </InputGroup>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="All Breeds" />
                        </SelectTrigger>
                    </Select>
                    <Button className="rounded-full">
                        Search Pedigree
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dogos.map((doggo) => (
                        <Card key={doggo.image}>
                            <CardHeader>
                                <Image src={doggo.image} alt={doggo.name} height={240 * 6} width={200 * 6} className="rounded-xl w-full aspect-video object-cover" />
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <CardTitle>
                                        {doggo.name}
                                    </CardTitle>
                                    <Button variant="ghost" size="icon" className="rounded-full">
                                        <ArrowUpRight className="size-5" />
                                    </Button>
                                </div>
                                <CardDescription>
                                    {doggo.desc}
                                </CardDescription>
                                <CardDescription>
                                    {doggo.reg}
                                </CardDescription>
                                <CardAction>
                                    <Badge className="bg-green-300/20 border border-green-600 text-green-700">
                                        <CheckIcon />   Verified Pedigree
                                    </Badge>
                                </CardAction>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="flex items-center justify-center mt-12">
                    <Button variant="outline" size="lg" className="px-4 rounded-full gap-2 bg-transparent border border-muted-foreground">
                        View More <ArrowUpRight />
                    </Button>
                </div>
            </div >
        </section >
    )
}
