import AnimatedTabMotion from '@/components/extra/animated-tabs'
import AuthGuard from '@/components/extra/auth-guard'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowUpRight, CalendarIcon, FlaskConicalIcon, SearchIcon, User2Icon } from 'lucide-react'
import Image from 'next/image'



const tabs = [
    {
        title: <><SearchIcon className="size-4" /> Search</>,
        value: "search"

    }, {
        title: <><FlaskConicalIcon className="size-4" /> Mating Simulator</>,
        value: "mating"
    }
]

const dogos = [
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


export default function Page() {
    return (
        <main className="px-4 py-24 lg:px-[4%] xl:px-[6%]">
            <section className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2">
                <div className="mt-8 space-y-6 text-center lg:mt-24 lg:space-y-8 lg:text-left">
                    <p className="mx-auto w-min rounded-full border-2 border-primary p-2 px-4 text-xs font-semibold text-nowrap text-[#8F43E2] lg:mx-0">
                        Database
                    </p>
                    <div className="flex justify-center lg:block">
                        <AnimatedTabMotion tabs={tabs} />
                    </div>

                    <h1 className="font-antonio text-3xl font-bold sm:text-4xl xl:text-5xl">
                        Search the Bully<br className="hidden lg:block" />{" "}
                        Pedigree Database
                    </h1>
                    <p className="mx-auto max-w-md text-muted-foreground lg:mx-0 lg:max-w-none">
                        Find registered dogs, explore bloodlines, and verify pedigree information.
                    </p>
                </div>

                <div className="relative w-full">
                    <Image
                        src="/doge-3.webp"
                        height={960}
                        width={1109}
                        alt="doge-3"
                        className="h-[40dvh] w-full object-contain object-bottom sm:h-[50dvh] lg:h-[60dvh] lg:w-auto"
                        draggable={false}
                    />
                    <div className="absolute top-0 left-0 z-10 h-full w-full bg-linear-to-b from-transparent via-transparent to-background" />
                </div>
            </section>

            <section>
                {/* Search bar: stacked on mobile, one row from lg */}
                <div className="mt-4 flex flex-col gap-2 rounded-lg border border-border/50 bg-background p-2 shadow-sm lg:flex-row lg:items-center lg:justify-between">
                    <InputGroup className="gap-2 border-0! shadow-none ring-0! outline-none!">
                        <InputGroupInput placeholder="Search by dog name, BPKC ID or bloodline..." />
                        <InputGroupAddon>
                            <SearchIcon />
                        </InputGroupAddon>
                    </InputGroup>

                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:flex lg:items-center">
                        <Select>
                            <SelectTrigger className="w-full lg:w-auto">
                                <SelectValue placeholder="Breed" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="american-bully">American Bully</SelectItem>
                                <SelectItem value="american-pit-bull-terrier">American Pit Bull Terrier</SelectItem>
                                <SelectItem value="american-staffordshire-terrier">American Staffordshire Terrier</SelectItem>
                                <SelectItem value="staffordshire-bull-terrier">Staffordshire Bull Terrier</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="w-full lg:w-auto">
                                <SelectValue placeholder="Sex" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="col-span-2 sm:col-span-1 lg:col-auto">
                            <Select>
                                <SelectTrigger className="w-full lg:w-auto">
                                    <SelectValue placeholder="Registration status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="registered">Registered</SelectItem>
                                    <SelectItem value="unregistered">Unregistered</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button size="lg" className="col-span-2 w-full px-6 sm:col-span-3 lg:w-auto">
                            Search
                        </Button>
                    </div>
                </div>

                <p className="mt-10 text-sm text-muted-foreground lg:mt-18">125 Dogs Found</p>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                                    <AuthGuard>
                                        <Button variant="ghost" size="icon" className="rounded-full" aria-label={`View ${doggo.name}`}>
                                            <ArrowUpRight className="size-5" />
                                        </Button>
                                    </AuthGuard>
                                </div>
                                <CardDescription>{doggo.reg}</CardDescription>
                                <CardDescription>{doggo.desc}</CardDescription>
                                <CardDescription className="flex items-center gap-4">
                                    <span className="flex items-center gap-2">
                                        <User2Icon className="size-4" /> {doggo.sex}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <CalendarIcon className="size-4" /> 12 Mar 2026
                                    </span>
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </main>
    )
}