import AnimatedTabMotion from '@/components/extra/animated-tabs'
import AuthGuard from '@/components/extra/auth-guard'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Label } from '@/components/ui/label'
import { Select, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { ArrowDown, SearchIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


const dogos = [
    {
        image: "/event.jpg",
        name: "MAX",
        desc: "American Bully",
        reg: "BPKC-009821",
        sex: "Male",
        verified: true
    },
    {
        image: "/event.jpg",
        name: "MAX",
        desc: "American Bully",
        reg: "BPKC-009821",
        sex: "Male",
        verified: true
    },
    {
        image: "/event.jpg",
        name: "MAX",
        desc: "American Bully",
        reg: "BPKC-009821",
        sex: "Male",
        verified: true
    }
]

const availableBreeds = [
    "Dog Show",
    "Meet & Greet",
    "Championship",
]

export default function Page() {
    return (
        <main className="py-24 px-4 lg:px-[4%] xl:px-[6%]">
            <section className="grid grid-cols-2 gap-4">
                <div className="mt-24 space-y-8">
                    <p className="text-xs border-2 text-[#8F43E2] w-min text-nowrap font-semibold border-primary rounded-full p-2 px-4">
                        Events
                    </p>

                    <h1 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold font-antonio">Events</h1>
                    <p className="text-muted-foreground">Discover bully events, shows, meets and competitions around the world.</p>
                </div>
                <div className="w-full relative">
                    <Image src="/doges.webp" height={960} width={1109} alt="doge-3" className="h-[40dvh] object-contain object-bottom" draggable={false} />
                </div>

            </section>
            <section>
                <div className="col-span-2  bg-background shadow-sm p-2 rounded-lg border border-border/50 flex items-center justify-between gap-2">
                    <InputGroup className="shadow-none outline-none! border-0! ring-0! gap-2 ">
                        <InputGroupInput placeholder="Search events by name, location..." />
                        <InputGroupAddon>
                            <SearchIcon />
                        </InputGroupAddon>
                    </InputGroup>
                    <div className="flex items-center gap-2">
                        <Button size="lg" className="px-6">Search</Button>
                    </div>
                </div>

            </section>
            <section>

                <div className="grid grid-cols-7 mt-12 gap-6">
                    <div className="col-span-2 ">
                        <div className="flex justify-between items-start">
                            <h3 className="text-lg font-semibold">Filters</h3>
                            <Button variant="link">Clear All</Button>
                        </div>
                        <div className="">
                            <div className="space-y-4 mt-4">
                                <p>All Type</p>
                                {availableBreeds.map((breed) => (
                                    <div className="flex items-center gap-2" key={breed}>
                                        <Checkbox id={breed} className="border border-border" /> <Label htmlFor={breed}>{breed}</Label>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-4 mt-8">
                                <p>Date</p>
                                <Input type="date" placeholder="Select a date" />
                            </div>

                            <Separator className="mt-8 mb-4" />
                            <Button className="w-full" size="lg">
                                Apply Filters
                            </Button>
                        </div>
                    </div>
                    <div className="col-span-5">
                        <div className="flex items-center justify-between gap-2">
                            <p className="text-xl font-semibold">
                                24 Available Listings
                            </p>
                            <Select >
                                <SelectTrigger className="border border-border rounded-full px-4">
                                    <SelectValue placeholder="Sort by: Featured Listed" />
                                </SelectTrigger>
                            </Select>
                        </div>
                        <div className="flex items-center justify-start gap-2 mt-4">
                            <Button className="rounded-full text-xs">All</Button>
                            <Button className="rounded-full text-xs" variant="outline">Dogs & Puppies</Button>
                            <Button className="rounded-full text-xs" variant="outline">Stud Service</Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                            {dogos.map((doggo, index) => (
                                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                <Card key={index} className="py-4">
                                    <CardHeader className="px-4">
                                        <Link href={`/marketplace/${doggo.reg}`} >
                                            <Image src={doggo.image} alt={doggo.name} height={240 * 6} width={200 * 6} className="rounded-xl w-full aspect-video object-cover" />
                                        </Link>
                                    </CardHeader>
                                    <CardContent className="px-4">
                                        <div className="flex items-center justify-between">
                                            <Link href={`/marketplace/${doggo.reg}`} >
                                                <CardTitle className="hover:underline">
                                                    {doggo.name}
                                                </CardTitle>
                                            </Link>
                                        </div>
                                        <CardDescription>
                                            {doggo.desc}
                                        </CardDescription>
                                        <div className="flex items-center justify-between">
                                            <CardDescription className="items-center gap-2 flex">
                                                Dallas, TX
                                            </CardDescription>
                                            <span className="font-bold text-primary text-lg">$4,200</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <div className="w-full flex items-center justify-center mt-8 ">
                            <Button size="lg" className="bg-primary/20 text-primary font-semibold"> <ArrowDown /> Load more</Button>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}
