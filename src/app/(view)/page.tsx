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
      <header className="relative isolate grid grid-cols-[1.08fr_.92fr] items-center gap-3 overflow-hidden px-6 pb-6 pt-24 md:grid-cols-1 md:gap-y-10 md:px-4 md:pb-6 md:pt-28 lg:grid-cols-2 lg:gap-0 lg:px-[4%] lg:py-24 xl:px-[6%]">
        {/* Copy */}
        <div className="flex w-full flex-col justify-center gap-2 md:items-center md:gap-4 md:px-0 md:text-center lg:items-start lg:text-left">

          <h1 className="text-[1.35rem] font-black leading-[1.05] tracking-tight md:text-4xl md:font-bold xl:text-6xl">
            Register Your Dog. <br />
            <span className="text-primary">Preserve Their Legacy.</span>
          </h1>
          <p className="max-w-md text-[0.55rem] leading-relaxed text-muted-foreground md:mt-2 md:text-lg lg:max-w-none">
            Document your dog's pedigree and receive professionally prepared registration paperwork from Bully Pedex.
          </p>

          <div className="z-30 flex flex-wrap items-start gap-2 md:flex-row md:items-center md:justify-center md:gap-6 lg:justify-start">
            <Button size="sm" className="h-7 px-2 text-[0.55rem] md:h-auto md:px-6 md:py-6 md:text-base" asChild>
              <Link href="/registry" className="flex items-center">
                Register a Dog <ArrowRight />
              </Link>
            </Button>
            <Button size="sm" className="relative h-7 gap-1 border-primary px-2 text-[0.55rem] text-primary md:h-auto md:gap-4 md:px-6 md:py-6 md:text-base" variant="outline" asChild>
              <Link href="/database" className="flex items-center gap-1 bg-background! lg:gap-4 lg:bg-transparent!">
                <SearchIcon />
                Search Database
              </Link>
            </Button>
          </div>
          <p className="text-[0.55rem] font-semibold text-muted-foreground md:text-base">Join Our New App</p>
          <div className="flex flex-wrap items-center justify-start gap-1 md:justify-start md:gap-2">
            {/** biome-ignore lint/a11y/useValidAnchor: <explanation> */}
            <a href="#">
              <Image src="/download-android-app.svg" height={30} width={99} alt="Download Android App" className="h-5 w-auto md:h-12" />
            </a>
            {/** biome-ignore lint/a11y/useValidAnchor: <explanation> */}
            <a href="#">
              <Image src="/download-ios-app.svg" height={30} width={90} alt="Download Ios App" className="h-5 w-auto md:h-12" />
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="flex h-full w-full items-center justify-end lg:pr-4">
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
      <section className="hidden grid-cols-3 px-4 py-6 md:grid md:px-6 lg:px-[4%] xl:px-[6%]">
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
      <section className="grid grid-cols-1 items-center gap-8 px-6 py-16 md:grid-cols-2 md:px-6 md:py-24 lg:px-[4%] xl:px-[6%]">
        <div className="space-y-4">
          <h2 className="text-center text-2xl font-bold md:text-left md:text-4xl">Breeds We Register</h2>
          <p className="flex items-center justify-center text-center text-xs text-muted-foreground md:justify-start md:text-left md:text-base">
            <InfoIcon className="mr-2 size-3 shrink-0 md:size-5" /> Select your dog breed to view registration requirements
          </p>
          <div className="flex justify-center md:justify-start">
            <Button className="p-3 text-xs md:p-4 md:py-5 md:text-base">View Registered Dog <ArrowRightIcon className="ml-2" /></Button>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-end">
          <Image src="/breeds.webp" alt="mockup_reg" className="h-64 w-auto object-contain md:h-96" height={800} width={300} />
        </div>
      </section>
      <section className="space-y-4 px-6 py-16 md:space-y-6 md:px-4 md:py-24 lg:px-[4%] xl:px-[6%]">
        <h2 className="text-center text-2xl font-bold md:text-4xl">Be Part of a Stronger Future <br />
          for the Breed
        </h2>
        <p className="text-center text-xs md:text-base">Register your dog today and receive official registration paperwork from Bully Pedex</p>
      </section>
      {/* <HereToHelp /> */}
    </>)
}