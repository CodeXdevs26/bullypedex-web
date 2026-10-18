import AnimatedTabMotion from '@/components/extra/animated-tabs'
import AuthGuard from '@/components/extra/auth-guard'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { ArrowDown, ArrowRightIcon, HeartIcon, MapPin, MapPinIcon, SearchIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { SlidersHorizontalIcon } from 'lucide-react'  // or merge into your existing lucide import
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'

const dogos = [
    {
        image: "/doggo-1.jpg",
        name: "MAX",
        desc: "French Bulldog Puppy",
        reg: "BPKC-009821",
        sex: "Male",
        verified: true
    },
    {
        image: "/doggo-2.jpg",
        name: "MAX",
        desc: "French Bulldog Puppy",
        reg: "BPKC-009821",
        sex: "Male",
        verified: true
    },
    {
        image: "/doggo-3.jpg",
        name: "MAX",
        desc: "French Bulldog Puppy",
        reg: "BPKC-009821",
        sex: "Male",
        verified: true
    },
    {
        image: "/doggo-1.jpg",
        name: "MAX",
        desc: "American Bully",
        reg: "BPKC-009821",
        sex: "Male",
        verified: true
    },
    {
        image: "/doggo-2.jpg",
        name: "MAX",
        desc: "American Bully",
        reg: "BPKC-009821",
        sex: "Male",
        verified: true
    },
    {
        image: "/doggo-3.jpg",
        name: "MAX",
        desc: "American Bully",
        reg: "BPKC-009821",
        sex: "Male",
        verified: true
    },
    {
        image: "/doggo-2.jpg",
        name: "MAX",
        desc: "French Bulldog Puppy",
        reg: "BPKC-009821",
        sex: "Male",
        verified: true
    },
    {
        image: "/doggo-3.jpg",
        name: "MAX",
        desc: "French Bulldog Puppy",
        reg: "BPKC-009821",
        sex: "Male",
        verified: true
    },
    {
        image: "/doggo-1.jpg",
        name: "MAX",
        desc: "American Bully",
        reg: "BPKC-009821",
        sex: "Male",
        verified: true
    },
    {
        image: "/doggo-2.jpg",
        name: "MAX",
        desc: "American Bully",
        reg: "BPKC-009821",
        sex: "Male",
        verified: true
    },
    {
        image: "/doggo-3.jpg",
        name: "MAX",
        desc: "American Bully",
        reg: "BPKC-009821",
        sex: "Male",
        verified: true
    }
]

const availableBreeds = [
    "American Bully",
    "English Bulldog",
    "French Bulldog",
    "Olde English Bulldogge",
    "Continental Bulldog",
    "Alapaha Blue - Blood Bulldog",
    "Boerboel",
    "Goldendoodle"
]


function FiltersPanel({ idPrefix, inSheet = false }: { idPrefix: string; inSheet?: boolean }) {
    // Unique, whitespace-free ids per instance so labels target the right control
    const id = (s: string) => `${idPrefix}-${s.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`

    return (
        <div>
            <div className={`flex items-start ${inSheet ? "justify-end" : "justify-between"}`}>
                {!inSheet && <h3 className="text-lg font-semibold">Filters</h3>}
                <Button variant="link">Clear All</Button>
            </div>

            <div className="mt-4 space-y-4">
                <p>Breed</p>
                {availableBreeds.map((breed) => (
                    <div className="flex items-center gap-2" key={breed}>
                        <Checkbox id={id(breed)} className="border border-border" />
                        <Label htmlFor={id(breed)}>{breed}</Label>
                    </div>
                ))}
            </div>

            <div className="mt-8 space-y-4">
                <p>Price Range</p>
                <div className="flex items-center justify-between gap-2">
                    <InputGroup>
                        <InputGroupInput placeholder="Min" />
                        <InputGroupAddon>$</InputGroupAddon>
                    </InputGroup>
                    <p>-</p>
                    <InputGroup>
                        <InputGroupInput placeholder="Max" />
                        <InputGroupAddon>$</InputGroupAddon>
                    </InputGroup>
                </div>
            </div>

            <div className="mt-8 space-y-4">
                <p>Age</p>
                <Select>
                    <SelectTrigger className="w-full border border-border px-4">
                        <SelectValue placeholder="Select Age" />
                    </SelectTrigger>
                </Select>
            </div>

            <div className="mt-8 space-y-4">
                <p>Location</p>
                <Select>
                    <SelectTrigger className="w-full border border-border">
                        <SelectValue placeholder={<><MapPin /> Select Location</>} />
                    </SelectTrigger>
                </Select>
            </div>

            <div className="mt-8 space-y-4">
                <p>Sex</p>
                <RadioGroup defaultValue="male" className="flex flex-row" orientation="horizontal">
                    <div className="flex items-center gap-3">
                        <RadioGroupItem value="male" id={id("male")} />
                        <Label htmlFor={id("male")}>Male</Label>
                    </div>
                    <div className="flex items-center gap-3">
                        <RadioGroupItem value="female" id={id("female")} />
                        <Label htmlFor={id("female")}>Female</Label>
                    </div>
                </RadioGroup>
            </div>

            {/* In the drawer, Apply lives in the sticky footer instead */}
            {!inSheet && (
                <>
                    <Separator className="mt-8 mb-4" />
                    <Button className="w-full" size="lg">
                        Apply Filters
                    </Button>
                </>
            )}
        </div>
    )
}

export default function Page() {
    return (
        <main className="px-4 py-24 lg:px-[4%] xl:px-[6%]">
            <section className="grid grid-cols-1 gap-4 lg:min-h-[60dvh] lg:grid-cols-2">
                <div className="mt-8 space-y-6 text-center lg:mt-24 lg:space-y-8 lg:text-left">
                    <p className="mx-auto w-min rounded-full border-2 border-primary p-2 px-4 text-xs font-semibold text-nowrap text-[#8F43E2] lg:mx-0">
                        Marketplace
                    </p>
                    <h1 className="font-antonio text-3xl font-bold sm:text-4xl xl:text-5xl">
                        Search the Bully<br className="hidden lg:block" />{" "}
                        Pedigree Database
                    </h1>
                    <p className="mx-auto max-w-md text-muted-foreground lg:mx-0 lg:max-w-none">
                        Find registered dogs, explore bloodlines, and verify pedigree information.
                    </p>
                    <Button size="lg" className="bg-linear-to-r from-primary! to-[#9333EA]">
                        View Breeder Plans <ArrowRightIcon className="size-4" />
                    </Button>
                </div>
            </section>

            <section>
                <div className="mt-4 flex items-center justify-between gap-2 rounded-lg border border-border/50 bg-background p-2 shadow-sm">
                    <InputGroup className="min-w-0 gap-2 border-0! shadow-none ring-0! outline-none!">
                        <InputGroupInput placeholder="Search by dog name, BPKC ID or bloodline..." />
                        <InputGroupAddon>
                            <SearchIcon />
                        </InputGroupAddon>
                    </InputGroup>
                    <Button size="lg" className="shrink-0 px-6">Search</Button>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 lg:mt-12 lg:grid-cols-7">
                    {/* Desktop sidebar */}
                    <aside className="hidden lg:col-span-2 lg:block">
                        <FiltersPanel idPrefix="desktop" />
                    </aside>

                    <div className="min-w-0 lg:col-span-5">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-lg font-semibold sm:text-xl">24 Available Listings</p>
                            <div className="flex items-center gap-2">
                                {/* Mobile/tablet filters drawer */}
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button variant="outline" className="shrink-0 rounded-full px-4 lg:hidden">
                                            <SlidersHorizontalIcon /> Filters
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent side="left" className="flex w-[85%] flex-col sm:max-w-sm">
                                        <SheetHeader>
                                            <SheetTitle>Filters</SheetTitle>
                                            <SheetDescription className="sr-only">Filter marketplace listings</SheetDescription>
                                        </SheetHeader>
                                        <div className="flex-1 overflow-y-auto px-4 pb-4">
                                            <FiltersPanel idPrefix="mobile" inSheet />
                                        </div>
                                        <SheetFooter>
                                            <SheetClose asChild>
                                                <Button size="lg" className="w-full">Apply Filters</Button>
                                            </SheetClose>
                                        </SheetFooter>
                                    </SheetContent>
                                </Sheet>

                                <Select>
                                    <SelectTrigger className="min-w-0 flex-1 rounded-full border border-border px-4 sm:flex-none">
                                        <SelectValue placeholder="Sort by: Featured Listed" />
                                    </SelectTrigger>
                                </Select>
                            </div>
                        </div>

                        <div className="mt-4 flex flex-wrap items-center justify-start gap-2">
                            <Button className="rounded-full text-xs">All</Button>
                            <Button className="rounded-full text-xs" variant="outline">Dogs & Puppies</Button>
                            <Button className="rounded-full text-xs" variant="outline">Stud Service</Button>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                            {dogos.map((doggo, index) => (
                                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                <Card key={index} className="py-4">
                                    <CardHeader className="relative px-4">
                                        <Button size="icon" variant="ghost" className="absolute top-2 right-6 rounded-full text-background" aria-label="Save listing">
                                            <HeartIcon />
                                        </Button>
                                        <Link href={`/marketplace/${doggo.reg}`}>
                                            <Image
                                                src={doggo.image}
                                                alt={doggo.name}
                                                height={240 * 6}
                                                width={200 * 6}
                                                className="aspect-video w-full rounded-xl object-cover"
                                            />
                                        </Link>
                                    </CardHeader>
                                    <CardContent className="px-4">
                                        <div className="flex items-center justify-between">
                                            <Link href={`/marketplace/${doggo.reg}`}>
                                                <CardTitle className="hover:underline">{doggo.name}</CardTitle>
                                            </Link>
                                        </div>
                                        <CardDescription>{doggo.desc}</CardDescription>
                                        <div className="flex items-center justify-between">
                                            <CardDescription className="flex items-center gap-2">
                                                <MapPinIcon className="size-4" />Dallas, TX
                                            </CardDescription>
                                            <span className="text-lg font-bold text-primary">$4,200</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="mt-8 flex w-full items-center justify-center">
                            <Button size="lg" className="bg-primary/20 font-semibold text-primary">
                                <ArrowDown /> Load more
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}