"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { DownloadIcon, User2Icon, UserIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useScrollPosition } from 'react-haiku'
import { toast } from 'sonner'

const navs = [
    {
        label: "Homepage",
        href: "/",
    },
    {
        label: "About Us",
        href: "/about",
    },
    {
        label: "Registry",
        href: "/registry",
    },
    {
        label: "Database",
        href: "/database",
    },
    {
        label: "Marketplace",
        href: "/marketplace",
    },
    {
        label: "Events",
        href: "/events",
    },
    {
        label: "Resources",
        href: "/resources",
    },
]

export default function Navbar() {
    const path = usePathname()
    const [scroll] = useScrollPosition();
    const scrollY = typeof scroll === "function" ? 0 : scroll.y;
    return (
        <nav className={cn("fixed z-50 top-0 left-0 w-full px-4 lg:px-[4%] xl:px-[6%] flex items-center justify-between lg:bg-transparent transition-all", scrollY < 200 ? "h-24" : "h-16 bg-background/20! backdrop-blur-sm")}>
            <Image src="/icon.webp" className={cn("w-auto object-contain transition-all", scrollY < 200 ? "h-18" : "h-12")} height={54} width={54 * 2} alt="Logo" />
            <div className="absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:flex flex-nowrap whitespace-nowrap space-x-0 xl:space-x-2 2xl:space-x-4 ">
                {navs.map((nav) =>
                    nav.href === path ? (
                        <Button key={nav.label} variant="link">
                            {nav.label}
                        </Button>
                    ) : (
                        <Button key={nav.label} variant="ghost" asChild>
                            <Link href={nav.href}>{nav.label}</Link>
                        </Button>
                    )
                )}
            </div>
            <div className="flex items-center gap-2">
                {/* <Button variant="ghost" size="icon-lg" asChild><Link href="/profile"><User2Icon /></Link></Button> */}
                <Button variant="ghost" size="lg" onClick={() => {
                    toast.info("Under development!")
                }}>Sign in</Button>
                <Button size="lg" asChild><Link href="#"><DownloadIcon />Download App</Link></Button>
            </div>
        </nav>
    )
}
