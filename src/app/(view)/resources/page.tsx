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
import { SlidersHorizontalIcon } from 'lucide-react'
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


function FiltersPanel({ idPrefix, inSheet = false }: { idPrefix: string; inSheet?: boolean }) {
    // Unique ids per instance so each label targets the right checkbox
    const id = (s: string) => `${idPrefix}-${s.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`

    return (
        <div>
            {!inSheet && <h3 className="text-lg font-semibold">Filters</h3>}
            <div className={inSheet ? "" : "mt-2"}>
                <div className="space-y-4">
                    {availableBreeds.map((breed) => (
                        <div className="flex items-center gap-2" key={breed}>
                            <Checkbox id={id(breed)} className="border border-border" />
                            <Label htmlFor={id(breed)}>{breed}</Label>
                        </div>
                    ))}
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
        </div>
    )
}

export default function Page() {
    return (
        <main className="px-4 py-24 lg:px-[4%] xl:px-[6%]">
            <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="mt-8 space-y-6 text-center lg:mt-24 lg:space-y-8 lg:text-left">
                    <p className="mx-auto w-min rounded-full border-2 border-primary p-2 px-4 text-xs font-semibold text-nowrap text-[#8F43E2] lg:mx-0">
                        Resources
                    </p>
                    <h1 className="font-antonio text-3xl font-bold sm:text-4xl xl:text-5xl">Resources & Guides</h1>
                    <p className="mx-auto max-w-md text-muted-foreground lg:mx-0 lg:max-w-none">
                        Discover expert knowledge on pedigree tracking, responsible breeding practices, and comprehensive care guides for the Bully community.
                    </p>
                </div>
            </section>

            <section className="mt-8 lg:mt-12">
                <div className="flex items-center justify-between gap-2 rounded-lg border border-border/50 bg-background p-2 shadow-sm">
                    <InputGroup className="min-w-0 gap-2 border-0! shadow-none ring-0! outline-none!">
                        <InputGroupInput placeholder="Search resources, articles, and guides..." />
                        <InputGroupAddon>
                            <SearchIcon />
                        </InputGroupAddon>
                    </InputGroup>
                    <Button size="lg" className="shrink-0 px-6">Search</Button>
                </div>
            </section>

            <section>
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
                                            <SheetDescription className="sr-only">Filter resources by topic</SheetDescription>
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

                        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                            {dogos.map((doggo, index) => (
                                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                <Card key={index} className="py-4 pt-0">
                                    <CardHeader className="relative px-0">
                                        <Link href={`/resources/${doggo.reg}`}>
                                            <Image
                                                src={doggo.image}
                                                alt={doggo.name}
                                                height={240 * 6}
                                                width={200 * 6}
                                                className="aspect-video w-full rounded-xl rounded-b-none object-cover"
                                            />
                                        </Link>
                                    </CardHeader>
                                    <CardContent className="px-4">
                                        <div className="flex items-center justify-between">
                                            <Link href={`/resources/${doggo.reg}`} className="flex w-full items-center justify-between gap-2">
                                                <CardTitle className="text-lg font-semibold">
                                                    Understanding Bloodlines
                                                </CardTitle>
                                                <Button size="icon" variant="ghost" className="shrink-0"><ArrowUpRightIcon /></Button>
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