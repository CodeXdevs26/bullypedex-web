import AboutUs from '@/components/moon/about-us'
import Database from '@/components/moon/database'
import FAQ from '@/components/moon/faq'
import HereToHelp from '@/components/moon/here-to-help'
import Package from '@/components/moon/package'
import Testimonials from '@/components/moon/testimonials'
import { Button } from '@/components/ui/button'
import { ArrowDownLeftIcon, ArrowUpRight, DownloadIcon, SearchIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header className="relative isolate grid min-h-dvh grid-cols-1 gap-y-10 overflow-x-clip px-4 pt-28 pb-12 lg:grid-cols-2 lg:gap-0 lg:px-[4%] lg:py-24 xl:px-[6%] bg-[linear-gradient(to_right,rgba(229,231,235,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,231,235,0.4)_1px,transparent_1px),radial-gradient(circle_500px_at_10%_100%,rgba(139,92,246,0.2),transparent)] bg-size-[48px_48px,48px_48px,100%_100%,100%_100%]">
        {/* Copy */}
        <div className="flex w-full flex-col items-center justify-center gap-4 text-center lg:min-h-[90dvh] lg:items-start lg:text-left">
          <p className="w-min rounded-full border-2 border-primary p-2 text-[10px] font-semibold text-nowrap text-[#8F43E2] sm:text-xs">
            THE OFFICIAL DIGITAL PEDIGREE REGISTRY
          </p>
          <h1 className="font-antonio text-4xl font-bold sm:text-5xl xl:text-6xl">
            Register Your Dog. <br />
            <span className="text-primary">Preserve Their Legacy.</span>
          </h1>
          <p className="mt-2 max-w-md text-muted-foreground lg:max-w-none">
            Register your dog with Bully Pedex and create a permanent pedigree record in our searchable global database
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:justify-start z-30">
            <Button size="lg" className="relative rounded-full px-6" asChild>
              <Link href="/registry" className="flex items-center gap-4">
                Register a Dog
                <div className="absolute top-1/2 -right-2 z-10 -translate-y-1/2 rounded-full bg-foreground p-1">
                  <ArrowUpRight />
                </div>
              </Link>
            </Button>
            <Button size="lg" className="relative gap-4 rounded-full px-4" variant="ghost" asChild>
              <Link href="/database" className="flex items-center gap-4">
                <SearchIcon />
                Search Database
                <div className="rounded-full bg-primary p-1 text-background">
                  <ArrowUpRight className="size-3" />
                </div>
              </Link>
            </Button>
          </div>
        </div>

        {/* Hero image */}
        <div className="sm:flex h-full w-full items-center justify-center lg:justify-end lg:pr-4 hidden">
          <div className="aspect-square w-[75%] rotate-3 overflow-hidden rounded-[10%] sm:w-[55%] lg:w-[70%]">
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
        <div className="flex w-full flex-col items-center justify-between gap-8 lg:col-span-2 lg:flex-row">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <Image
              src="/mobile-mockup.webp"
              height={448}
              width={448}
              alt="Mobile Mockup"
              className="h-64 w-min object-contain sm:h-[30dvh]"
            />
            <div className="h-full space-y-4">
              <h4 className="text-2xl font-bold sm:text-4xl">GET THE BULLY PEDEX APP</h4>
              <p className="text-muted-foreground">Manage registrations and access your dogs anywhere.</p>
              <div className="flex items-center justify-center gap-4 sm:justify-start">
                <div className="flex aspect-square w-min items-center justify-center rounded-full bg-primary p-3 text-background">
                  <DownloadIcon />
                </div>
                <div className="flex flex-col text-left font-semibold">
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
          className="absolute right-0 bottom-0 -z-10 h-[60dvh] w-auto object-contain opacity-10 lg:h-[90dvh]"
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
