import AboutUs from '@/components/moon/about-us'
import Database from '@/components/moon/database'
import FAQ from '@/components/moon/faq'
import HereToHelp from '@/components/moon/here-to-help'
import Package from '@/components/moon/package'
import Testimonials from '@/components/moon/testimonials'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowDownLeftIcon, ArrowUpRight, DownloadIcon, SearchIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header className="relative isolate grid md:min-h-dvh grid-cols-1 gap-y-2 md:gap-y-10 overflow-x-clip sm:px-4 pt-20 sm:pt-28 pb-2 md:pb-6 sm:pb-12 lg:grid-cols-2 lg:gap-0 lg:px-[4%] lg:py-24 xl:px-[6%] bg-[linear-gradient(to_right,rgba(229,231,235,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,231,235,0.4)_1px,transparent_1px),radial-gradient(circle_500px_at_10%_100%,rgba(139,92,246,0.2),transparent)] bg-size-[48px_48px,48px_48px,100%_100%,100%_100%]">
        {/* Copy */}
        <Image fill src="/header.webp" alt="Pitbull" className="object-cover top-0 inset-0 -z-10 mix-blend-darken sm:hidden" />
        <div className="flex w-full flex-col md:items-center justify-center gap-2 md:gap-4 sm:text-center lg:min-h-[90dvh] lg:items-start lg:text-left px-4 sm:px-0">
          <p className="w-min rounded-full border-2 border-primary p-2 text-[10px] font-semibold text-nowrap text-[#8F43E2] text-xs hidden sm:block">
            THE OFFICIAL DIGITAL PEDIGREE REGISTRY
          </p>
          <h1 className="lg:font-antonio text-3xl tracking-tight md:text-4xl lg:w-1/2 font-black md:font-bold sm:text-5xl xl:text-6xl text-background sm:text-foreground">
            Register <br className="md:hidden block" />Your Dog. <br />
            <span className="text-primary">Preserve  <br className="md:hidden block" />Their Legacy.</span>
          </h1>
          <p className="sm:mt-2 max-w-md text-background sm:text-muted-foreground lg:max-w-none text-xs md:text-base">
            Register your dog with Bully Pedex <br className="md:hidden block" /> and create a permanent pedigree <br className="md:hidden block" /> record in our searchable <br className="md:hidden block" /> global database
          </p>

          {/* DESKTOP: */}
          <div className="hidden md:flex flex-wrap flex-col md:flex-row items-start sm:items-center justify-start sm:justify-center gap-1 sm:gap-6 lg:justify-start z-30">
            <Button size="lg" className="relative rounded-full px-6" asChild>
              <Link href="/registry" className="flex items-center gap-4">
                Register a Dog
                <div className="hidden md:block absolute top-1/2 -right-2 z-10 -translate-y-1/2 rounded-full bg-foreground p-1">
                  <ArrowUpRight />
                </div>
              </Link>
            </Button>
            <Button size="lg" className="relative gap-4 rounded-full px-4" variant="ghost" asChild>
              <Link href="/database" className="flex items-center gap-4 bg-background! lg:bg-transparent!">
                <SearchIcon />
                Search Database
                <div className="rounded-full bg-primary p-1 text-background">
                  <ArrowUpRight className="size-3" />
                </div>
              </Link>
            </Button>
          </div>
          {/* MOBILE: */}
          <div className="grid grid-cols-2 gap-2 items-end md:hidden w-full z-30">
            <div className="space-y-1">
              <Button size="lg" className="relative px-6 w-full" asChild>
                <Link href="/registry" className="flex items-center gap-4">
                  Register a Dog
                  <div className="hidden md:block absolute top-1/2 -right-2 z-10 -translate-y-1/2 rounded-full bg-foreground p-1">
                    <ArrowUpRight />
                  </div>
                </Link>
              </Button>
              <Button size="lg" className="relative gap-4 bg-foreground! text-background! border border-primary w-full px-4" variant="ghost" asChild>
                <Link href="/database" className="flex items-center gap-4 bg-background! lg:bg-transparent!">
                  Explore Database
                </Link>
              </Button>
            </div>
            <div className="flex items-end justify-end">
              <div className="relative py-2 px-4 w-min text-center bg-foreground text-background! rounded-xl border border-primary">
                <div className="absolute -top-4.5 left-1/2 -translate-x-1/2 text-nowrap px-1 pt-0.5 rounded-t-lg tracking-normal text-[10px] bg-primary">
                  FEATURED DOG
                </div>
                <h3 className="font-black">DEEBO</h3>
                <p className="text-xs text-nowrap">American Bully</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="sm:flex h-full w-full items-center justify-center lg:justify-end lg:pr-4 hidden">
          <div className="aspect-square w-full rotate-3 overflow-hidden rounded-[10%] sm:w-[55%] lg:w-[70%]">
            <Image
              src="/doge-1.webp"
              alt="Pitbull"
              width={1280}
              height={1280}
              priority
              className="h-full w-full -rotate-5 scale-107 object-cover"
            />
          </div>
        </div>

        {/* App promo */}
        <div className="flex w-full flex-col items-center justify-between gap-8 lg:col-span-2 lg:flex-row px-4 sm:p-0">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left bg-background sm:bg-transparent w-full py-4  rounded-lg">
            <Image
              src="/mobile-mockup.webp"
              height={448}
              width={448}
              alt="Mobile Mockup"
              className="h-64 w-min object-contain sm:h-[30dvh] hidden sm:block"
            />
            <div className="h-full space-y-2 md:space-y-4 ">
              <h4 className="text-base font-black sm:font-bold sm:text-4xl flex items-center gap-2 w-fit mx-auto"><Badge className="sm:hidden">NEW</Badge> GET THE BULLY PEDEX APP</h4>
              <p className="text-muted-foreground hidden sm:block">Manage registrations and access your dogs anywhere.</p>
              <div className="hidden sm:flex items-center justify-center gap-4 sm:justify-start">
                <div className="flex aspect-square w-min items-center justify-center rounded-full bg-primary p-3 text-background">
                  <DownloadIcon />
                </div>
                <div className=" flex-col text-left font-semibold ">
                  <span className="text-lg">Download the</span>
                  <span className="text-2xl">App now!</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
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
          </div>

          {/* QR only makes sense on desktop: you can't scan your own phone screen */}
          <div className="relative hidden lg:block">
            <div className="absolute -top-1/3 right-0 z-10 flex items-center gap-2 text-primary">
              <ArrowDownLeftIcon />
              <p className="font-serif text-lg italic">
                Scan to<br />
                download
              </p>
            </div>
            <Image src="/qr.png" height={448} width={448} alt="QR code to download the app" className="h-50 w-50 object-contain" />
          </div>
        </div>

        <Image
          src="/icon.webp"
          alt=""
          aria-hidden
          height={2000}
          width={1333}
          className="absolute right-0 bottom-0 -z-10 h-[60dvh] w-auto object-contain opacity-10 lg:h-[90dvh] hidden md:block"
        />
      </header>
      <main className=" w-full">
        <AboutUs />
        <Database />
        <Package />
        <Testimonials />
        <FAQ />
      </main>
      <HereToHelp />
    </>)
}