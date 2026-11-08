"use client"
import AboutUs from '@/components/moon/about-us'
import { Button } from '@/components/ui/button'
import { Check, DatabaseIcon, FileTextIcon, Monitor, ShieldCheck, TruckIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
export default function Page() {
    return (
        <main className="py-36">
            <p className="flex items-center gap-2 text-sm font-semibold text-primary px-4 lg:px-[4%] xl:px-[6%]"><div className="h-1 w-5 bg-primary rounded-full" /> ABOUT BULLY PEDEX</p>
            <section className=" py-6 px-4 lg:px-[4%] xl:px-[6%] space-y-6 grid grid-cols-2 gap-6">
                <div className="space-y-4">
                    <p className="py-2 text-sm font-semibold bg-primary w-fit px-4 rounded-full text-background">ESTABLISHED 2015</p>
                    <h1 className="text-4xl font-bold">Over One Million <br />
                        Pedigrees.<br />
                        <span className="text-primary">Now a Full Dog Registry.</span></h1>
                    <p>Established in 2015, Bully Pedex began as a dog pedigree database
                        and has grown to maintain records for over 1,000,000 dog
                        pedigrees. <br /> <br />
                        Today, we're expanding into a full dog registry, bringing pedigree research,
                        official registration paperwork, and free online pedigree access together
                        in one place for breeders and dog owners.</p>
                </div>
                <Image src="/cert1.webp" alt="Certificate 1" width={500 * 2} height={300 * 2} className="w-full h-full object-cover" />
            </section>

            <div className="px-0 md:px-6 lg:px-[4%] xl:px-[6%]">
                <section className="py-4 px-4 bg-primary/10 rounded-xl border-primary/30 border flex items-center divide-x gap-4">
                    <Monitor className="size-14 text-primary pr-4" />
                    <div className="flex-1">
                        <h4 className="font-bold">Free Database Access for Registered Breeders</h4>
                        <p className="text-sm">Our online pedigree database, which was once a paid service, is now <Link href="/register" className="text-primary font-semibold">FREE</Link> for all breeders who register <b>at least one (1) dog</b>  with Bully Pedex each year.</p>
                    </div>
                </section>

                <div className="py-24 flex flex-col justify-center items-center gap-4">
                    <p className="flex items-center gap-2 font-semibold text-primary"><div className="h-1 w-5 bg-primary rounded-full" /> OUR COMMITMENT <div className="h-1 w-5 bg-primary rounded-full" /></p>
                    <h1 className="text-3xl font-bold">No Delays. No Excuses. <span className="text-primary">We Deliver Results.</span></h1>
                    <p className="text-muted-foreground">From pedigree research to official registration paperwork, we handle the process and
                        deliver your dog's paperwork directly to your door.</p>
                    <div className="grid grid-cols-4 gap-4 w-full divide-x py-6">
                        <div className="p-4 flex flex-col items-center justify-center gap-2">
                            <TruckIcon className="size-10 text-primary" />
                            <h3 className="font-bold">Fast Processing</h3>
                            <p className="text-sm text-muted-foreground text-center">Paperwork ships within <br />
                                5 business days</p>
                        </div>
                        <div className="p-4 flex flex-col items-center justify-center gap-2">
                            <FileTextIcon className="size-10 text-primary" />
                            <h3 className="font-bold">Official Paperwork</h3>
                            <p className="text-sm text-muted-foreground text-center">Certified registration <br />
                                and 3-generation pedigrees</p>
                        </div>
                        <div className="p-4 flex flex-col items-center justify-center gap-2">
                            <DatabaseIcon className="size-10 text-primary" />
                            <h3 className="font-bold">Reliable Records</h3>
                            <p className="text-sm text-muted-foreground text-center">Over 1,000,000+ <br />
                                pedigrees and growing</p>
                        </div>
                        <div className="p-4 flex flex-col items-center justify-center gap-2">
                            <ShieldCheck className="size-10 text-primary" />
                            <h3 className="font-bold">Trusted by Breeders</h3>
                            <p className="text-sm text-muted-foreground text-center">A registered and <br />
                                verified registry</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <Button className="py-6 px-6 rounded-xl">Register Your Dog</Button>
                </div>
            </div>
        </main >
    )
}
