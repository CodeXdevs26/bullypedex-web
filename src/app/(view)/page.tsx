import { Button } from '@/components/ui/button'
import { ArrowDownLeftIcon, ArrowUpRight, DownloadIcon, SearchIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <>
      <header className="min-h-dvh py-24 grid grid-cols-2 gap-0 px-4 lg:px-[4%] xl:px-[6%] inset-0 -z-10 bg-[linear-gradient(to_right,rgba(229,231,235,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,231,235,0.4)_1px,transparent_1px),radial-gradient(circle_500px_at_10%_100%,rgba(139,92,246,0.2),transparent)] bg-size-[48px_48px,48px_48px,100%_100%,100%_100%]">
        <div className="min-h-[90dvh] w-full flex flex-col justify-center items-start gap-4 ">
          <p className="text-xs border-2 text-[#8F43E2] w-min text-nowrap font-semibold border-primary rounded-full p-2">THE OFFICIAL DIGITAL PEDIGREE REGISTRY</p>
          <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold font-antonio">Register Your Dog.  <br />
            <span className="text-primary">Preserve Their Legacy.</span>
          </h1>
          <p className="text-muted-foreground mt-2">Register your dog with Bully Pedex and create a permaneent pedigree record in our searchable global database</p>
          <div className="flex items-center gap-6">
            <Button size="lg" className="rounded-full px-6 relative">Register a Dog <div className="absolute -right-2 p-1 rounded-full top-1/2 z-10 -translate-y-1/2 bg-foreground"><ArrowUpRight /></div></Button>
            <Button size="lg" className="rounded-full px-4 gap-4 relative" variant="ghost"> <SearchIcon />Search Database <div className="rounded-full p-1 bg-primary text-background"><ArrowUpRight className="size-3" /></div></Button>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-end pr-4 ">
          <div className="w-[70%] aspect-square rounded-[10%] overflow-hidden rotate-3">
            <Image
              src="/doge-1.webp"
              alt="Pitbull"
              width={1280}
              height={1280}
              className="w-full h-full object-cover scale-107 -rotate-5"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full col-span-2">
          <div className="flex items-center gap-4">
            <Image src="/mobile-mockup.webp" height={448} width={448} alt="Mobile Mockup" className="h-[30dvh] w-min  object-contain" />
            <div className="h-full space-y-4">
              <h4 className="text-4xl font-bold">GET THE BULLY PEDEX APP</h4>
              <p className="text-muted-foreground">Manage registrations and access your dogs anywhere.</p>
              <div className="flex items-center gap-4 ">
                <div className="rounded-full aspect-square w-min text-background bg-primary flex justify-center items-center p-3">
                  <DownloadIcon />
                </div>
                <div className="flex flex-col font-semibold">
                  <span className="text-lg">Download the</span>
                  <span className="text-2xl">App now!</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/** biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                <a href="#"><Image src="/download-android-app.svg" height={48} width={48 * 3.3} alt="Download Android App" /></a>
                {/** biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                <a href="#"><Image src="/download-ios-app.svg" height={48} width={48 * 3} alt="Download Ios App" /></a>

              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-1/3 right-0 flex items-center gap-2 text-primary">
              <ArrowDownLeftIcon />
              <p className="font-serif text-lg italic">
                Scan to<br />
                download
              </p>
            </div>
            <Image src="/qr.png" height={448} width={448} alt="Dog" className="h-50 w-50 object-contain" />
          </div>
        </div>
      </header>
      <main className="h-[300dvh] w-full"></main>
    </>)
}
