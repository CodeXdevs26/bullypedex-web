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
        <main className="py-24 px-4 lg:px-[4%] xl:px-[6%]">
            <section className="grid grid-cols-2 gap-4">
                <div className="mt-24 space-y-8">
                    <p className="text-xs border-2 text-[#8F43E2] w-min text-nowrap font-semibold border-primary rounded-full p-2 px-4">
                        Database
                    </p>
                    <AnimatedTabMotion tabs={tabs} />

                    <h1 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold font-antonio">Search the Bully<br />
                        Pedigree Database</h1>
                    <p className="text-muted-foreground">Find registered dogs, explore bloodlines, and verify
                        pedigree information.</p>
                </div>
                <div className="w-full relative">
                    <Image src="/doge-3.webp" height={960} width={1109} alt="doge-3" className="h-[60dvh] object-contain object-bottom" draggable={false} />
                    <div className="absolute h-full w-full bg-linear-to-b from-transparent via-transparent to-background z-10 top-0 left-0"></div>
                </div>

            </section>
            <section>
                <div className="col-span-2 mt-4 bg-background shadow-sm p-2 rounded-lg border border-border/50 flex items-center justify-between gap-2">
                    <InputGroup className="shadow-none outline-none! border-0! ring-0! gap-2 ">
                        <InputGroupInput placeholder="Search by dog name, BPKC ID or bloodline..." />
                        <InputGroupAddon>
                            <SearchIcon />
                        </InputGroupAddon>
                    </InputGroup>
                    <div className="flex items-center gap-2">
                        <Select>
                            <SelectTrigger className="">
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
                            <SelectTrigger className="">
                                <SelectValue placeholder="Sex" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="">
                                <SelectValue placeholder="Registration status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="registered">Registered</SelectItem>
                                <SelectItem value="unregistered">Unregistered</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button size="lg" className="px-6">Search</Button>
                    </div>
                </div>
                <p className="text-sm text-muted-foreground mt-18">
                    125 Dogs Found
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
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
                                    <AuthGuard>
                                        <Button variant="ghost" size="icon" className="rounded-full">
                                            <ArrowUpRight className="size-5" />
                                        </Button>
                                    </AuthGuard>
                                </div>
                                <CardDescription>
                                    {doggo.reg}
                                </CardDescription>
                                <CardDescription>
                                    {doggo.desc}
                                </CardDescription>
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
        </main >
    )
}
