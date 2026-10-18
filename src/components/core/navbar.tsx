"use client"
import Image from "next/image"
import React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { DownloadIcon, MenuIcon } from "lucide-react"
import { useScrollPosition } from "react-haiku"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet"

const navs = [
    { label: "Homepage", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Registry", href: "/registry" },
    { label: "Database", href: "/database" },
    { label: "Marketplace", href: "/marketplace" },
    { label: "Events", href: "/events" },
    { label: "Resources", href: "/resources" },
]

export default function Navbar() {
    const path = usePathname()
    const [scroll] = useScrollPosition()
    const scrollY = typeof scroll === "function" ? 0 : scroll.y
    const scrolled = scrollY >= 200

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 z-50 flex w-full items-center justify-between px-4 transition-all md:px-[4%] xl:px-[6%]",
                scrolled ? "h-16 bg-background/20! backdrop-blur-sm" : "h-24"
            )}
        >
            {/* Logo */}
            <Link href="/" aria-label="Home" className="shrink-0">
                <Image
                    src="/icon.webp"
                    className={cn("w-auto object-contain transition-all", scrolled ? "h-10 md:h-12" : "h-12 md:h-18")}
                    height={54}
                    width={54 * 2}
                    alt="Logo"
                    priority
                />
            </Link>

            {/* Desktop links (xl+) */}
            <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 flex-nowrap space-x-0 whitespace-nowrap xl:flex 2xl:space-x-2">
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

            {/* Right side */}
            <div className="flex items-center gap-2">
                {/* Desktop/tablet actions (sm+) */}
                <div className="hidden items-center gap-2 sm:flex">
                    <Button variant="ghost" size="lg" onClick={() => toast.info("Under development!")}>
                        Sign in
                    </Button>
                    <Button size="lg" asChild>
                        <Link href="#">
                            <DownloadIcon />
                            Download App
                        </Link>
                    </Button>
                </div>

                {/* Mobile menu (below xl) */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="xl:hidden" aria-label="Open menu">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="flex w-[85%] flex-col sm:max-w-sm">
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                            <SheetDescription className="sr-only">Site navigation</SheetDescription>
                        </SheetHeader>

                        <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-4">
                            {navs.map((nav) => {
                                const active = nav.href === path
                                return (
                                    <SheetClose asChild key={nav.label}>
                                        <Button
                                            variant={active ? "secondary" : "ghost"}
                                            size="lg"
                                            className={cn("justify-start text-base", active && "font-semibold")}
                                            asChild
                                        >
                                            <Link href={nav.href} aria-current={active ? "page" : undefined}>
                                                {nav.label}
                                            </Link>
                                        </Button>
                                    </SheetClose>
                                )
                            })}
                        </div>

                        {/* Actions live in the drawer on very small screens */}
                        <SheetFooter className="sm:hidden">
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => toast.info("Under development!")}
                            >
                                Sign in
                            </Button>
                            <Button size="lg" asChild>
                                <Link href="#">
                                    <DownloadIcon />
                                    Download App
                                </Link>
                            </Button>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}