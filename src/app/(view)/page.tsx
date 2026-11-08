import AboutUs from '@/components/moon/about-us'
import Database from '@/components/moon/database'
import FAQ from '@/components/moon/faq'
import HereToHelp from '@/components/moon/here-to-help'
import Package from '@/components/moon/package'
import RegisterProcess from '@/components/moon/register-process'
import Testimonials from '@/components/moon/testimonials'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowDownLeftIcon, ArrowRight, ArrowRightIcon, ArrowUpRight, DownloadIcon, InfoIcon, SearchIcon, ShieldIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header className="relative isolate grid  grid-cols-1 gap-y-2 md:gap-y-10 overflow-x-clip md:px-4 overflow-hidden pt-20 md:pt-28 pb-2 md:pb-6 lg:grid-cols-2 lg:gap-0 lg:px-[4%] lg:py-24 xl:px-[6%] ">
        {/* Copy */}
        <Image fill src="/header.webp" alt="Pitbull" className="object-cover object-top mt-16 top-0 inset-0 -z-10 mix-blend-darken md:hidden" />
        <div className="flex w-full flex-col md:items-center justify-center gap-2 md:gap-4 md:text-center lg:items-start lg:text-left px-4 md:px-0">

          <h1 className=" text-3xl tracking-tight md:text-4xl font-black md:font-bold  xl:text-6xl text-background md:text-foreground">
            Register Your Dog. <br />
            <span className="text-primary">Preserve  <br className="md:hidden block" />Their Legacy.</span>
          </h1>
          <p className="md:mt-2 max-w-md text-background md:text-muted-foreground lg:max-w-none text-xs md:text-lg">
            Document your dog's pedigree and receive professionally <br />
            prepared registration paperwork from Bully Pedex.
          </p>

          {/* DESKTOP: */}
          <div className="hidden md:flex flex-wrap flex-col md:flex-row items-start md:items-center justify-start md:justify-center gap-1 md:gap-6 lg:justify-start z-30">
            <Button size="lg" asChild>
              <Link href="/registry" className="flex items-center px-6 py-6">
                Register a Dog <ArrowRight />
              </Link>
            </Button>
            <Button size="lg" className="relative gap-4 px-6 py-6 text-primary border-primary" variant="outline" asChild>
              <Link href="/database" className="flex items-center gap-4 bg-background! lg:bg-transparent!">
                <SearchIcon />
                Search Database
              </Link>
            </Button>
          </div>
          <p className="font-semibold text-muted-foreground">Join Our New App</p>
          <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
            {/** biome-ignore lint/a11y/useValidAnchor: <explanation> */}
            <a href="#">
              <Image src="/download-android-app.svg" height={48} width={48 * 3.3} alt="Download Android App" />
            </a>
            {/** biome-ignore lint/a11y/useValidAnchor: <explanation> */}
            <a href="#">
              <Image src="/download-ios-app.svg" height={48} width={48 * 3} alt="Download Ios App" />
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="md:flex h-full w-full items-center justify-center lg:justify-end lg:pr-4 hidden">
          <div className="aspect-square w-full overflow-hidden rounded-[10%] md:w-[55%] lg:w-[70%]">
            <Image
              src="/doggo.webp"
              alt="Pitbull"
              width={1280}
              height={1280}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </header>
      <section className="py-6 grid grid-cols-3 px-4 md:px-6 lg:px-[4%] xl:px-[6%]">
        <div className="border-t py-4 flex items-center gap-2">
          <div className="p-3 rounded-full bg-secondary aspect-square w-min text-primary">
            <ShieldIcon />
          </div>
          <div className="">
            <h4 className="font-semibold text-sm">Official Registry</h4>
            <p className="text-xs text-muted-foreground">Three generation pedigrees</p>
          </div>
        </div>
        <div className="border-t py-4 flex items-center gap-2">
          <div className="p-3 rounded-full bg-secondary aspect-square w-min text-primary">
            <ShieldIcon />
          </div>
          <div className="">
            <h4 className="font-semibold text-sm">Official Registry</h4>
            <p className="text-xs text-muted-foreground">Three generation pedigrees</p>
          </div>
        </div>
        <div className="border-t py-4 flex items-center gap-2">
          <div className="p-3 rounded-full bg-secondary aspect-square w-min text-primary">
            <ShieldIcon />
          </div>
          <div className="">
            <h4 className="font-semibold text-sm">Official Registry</h4>
            <p className="text-xs text-muted-foreground">Three generation pedigrees</p>
          </div>
        </div>
      </section>
      <main className=" w-full">
        <AboutUs />
        <Database />
        <RegisterProcess />
        <Package />
        <Testimonials />
        <FAQ />
      </main>
      <section className="grid grid-cols-2 gap-6 px-0 md:px-6 lg:px-[4%] xl:px-[6%] py-24 items-center">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">Breeds We Register</h2>
          <p className="text-muted-foreground flex items-center">
            <InfoIcon className="mr-2" /> Select your dog breed to view registration requirments
          </p>
          <Button className="p-4 py-5">View Registered Dog <ArrowRightIcon className="ml-2" /></Button>
        </div>
        <div className="flex items-center justify-end">
          <Image src="/breeds.webp" alt="mockup_reg" className="object-contain h-96" height={800} width={300} />
        </div>
      </section>
      <section className="py-24 px-4 lg:px-[4%] xl:px-[6%] space-y-6">
        <h2 className="text-4xl text-center font-bold">Be Part of a Stronger Future <br />
          for the Breed
        </h2>
        <p className="text-center">Register ypur dog today and receive official registration paperwork from Bully pedex</p>
      </section>
      {/* <HereToHelp /> */}
    </>)
}