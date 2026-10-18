import AnimatedTabMotion from '@/components/extra/animated-tabs'
import AuthGuard from '@/components/extra/auth-guard'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Label } from '@/components/ui/label'
import { Select, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { ArrowDown, ArrowRightIcon, ArrowUpRightIcon, BookmarkIcon, MapPinIcon, SearchIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


const dogos = [
    {
        image: "/doge-1.webp",
        name: "MAX",
        desc: "American Bully",
        reg: "BPKC-009821",
        sex: "Male",
        verified: true
    },
    {
        image: "/doge-1.webp",
        name: "MAX",
        desc: "American Bully",
        reg: "BPKC-009821",
        sex: "Male",
        verified: true
    },
    {
        image: "/doge-1.webp",
        name: "MAX",
        desc: "American Bully",
        reg: "BPKC-009821",
        sex: "Male",
        verified: true
    }
]

const availableBreeds = [
    "Pedigree",
    "Registration",
    "Care",
    "Health",
    "Breeding",
]

export default function Page() {
    return (
        <main className="py-24 px-4 lg:px-[4%] xl:px-[6%]">
            <section className="grid grid-cols-2 gap-4">
                <div className="mt-24 space-y-8">
                    <p className="text-xs border-2 text-[#8F43E2] w-min text-nowrap font-semibold border-primary rounded-full p-2 px-4">
                        Resources
                    </p>

                    <h1 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold font-antonio">Resources & Guides</h1>
                    <p className="text-muted-foreground">Discover expert knowledge on pedigree tracking, responsible breeding practices, and comprehensive care guides for the Bully community.</p>
                </div>

            </section>
            <section className="mt-12">
                <div className="col-span-2  bg-background shadow-sm p-2 rounded-lg border border-border/50 flex items-center justify-between gap-2">
                    <InputGroup className="shadow-none outline-none! border-0! ring-0! gap-2 ">
                        <InputGroupInput placeholder="Search resources, articles, and guides..." />
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
                        </div>
                        <div className="mt-2">
                            <div className="space-y-4 ">
                                {availableBreeds.map((breed) => (
                                    <div className="flex items-center gap-2" key={breed}>
                                        <Checkbox id={breed} className="border border-border" /> <Label htmlFor={breed}>{breed}</Label>
                                    </div>
                                ))}
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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                            {dogos.map((doggo, index) => (
                                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                <Card key={index} className="py-4 pt-0">
                                    <CardHeader className="px-0 relative">
                                        <Link href={`/resources/${doggo.reg}`} >
                                            <Image src={doggo.image} alt={doggo.name} height={240 * 6} width={200 * 6} className="rounded-xl rounded-b-none w-full aspect-video object-cover" />
                                        </Link>
                                    </CardHeader>
                                    <CardContent className="px-4">
                                        <div className="flex items-center justify-between">
                                            <Link href={`/resources/${doggo.reg}`} className="flex items-center justify-between gap-2 w-full">
                                                <CardTitle className="text-lg font-semibold">
                                                    Understanding Bloodlines
                                                </CardTitle>
                                                <Button size="icon" variant="ghost"><ArrowUpRightIcon /></Button>
                                            </Link>
                                        </div>
                                        <CardDescription>
                                            A comprehensive guide to interpreting complex pedigree
                                            structures and identifying key…
                                        </CardDescription>
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
