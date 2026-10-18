import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaTelegramPlane } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Separator } from '../ui/separator'

const links = [
    {
        title: "Short links",
        items: [
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about" },
            { label: "Testimonials", href: "/testimonials" },
            { label: "Register a Dog", href: "/registry" },
            { label: "Faq", href: "/faq" }
        ]
    },
    {
        title: "Other pages",
        items: [
            { label: "Search Pedigree", href: "/database" },
            { label: "Marketplace", href: "/marketplace" },
            { label: "Event", href: "/events" },
            { label: "Resources", href: "/resources" },
            { label: "Contact Us", href: "/contact" }
        ]
    }
]

export default function Footer() {
    return (
        <footer className="bg-[#10031E] pt-24 pb-18 px-4 lg:px-[4%] xl:px-[6%] relative overflow-hidden">
            {/* Background Glow Elements - Placed at the bottom layer */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-[250%] aspect-square z-0 bg-radial from-muted/10 via-transparent to-transparent rounded-full pointer-events-none" />
            <div className="absolute top-0 right-0 translate-x-[90%] -translate-y-1/2 h-[250%] aspect-square z-0 bg-radial from-muted/10 via-transparent to-transparent rounded-full pointer-events-none" />

            {/* Main Footer Content */}
            <div className="relative z-10 mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
                {/* Brand & Socials */}
                <div className="space-y-4 flex flex-col justify-start items-start max-w-md">
                    <Image
                        src="/icon-whites.webp"
                        alt="Icon"
                        height={2000 / 5}
                        width={1333 / 5}
                        className="h-20 w-auto object-contain"
                    />
                    <p className="text-background leading-relaxed tracking-wide">
                        Register, verify and discover pedigrees with a <br className="hidden sm:inline" />
                        permanent digital record built for responsible breeders <br className="hidden sm:inline" />
                        and dog owners worldwide.
                    </p>
                    <div className="flex items-center justify-start gap-6 pt-6">
                        <a href="#s" aria-label="Telegram" className="hover:opacity-80 transition-opacity">
                            <FaTelegramPlane className="text-background size-6" />
                        </a>
                        <a href="#s" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                            <FaInstagram className="text-background size-6" />
                        </a>
                        <a href="#s" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
                            <FaFacebook className="text-background size-6" />
                        </a>
                        <a href="#s" aria-label="X (Twitter)" className="hover:opacity-80 transition-opacity">
                            <FaXTwitter className="text-background size-6" />
                        </a>
                    </div>
                </div>

                {/* Navigation Link Groups */}
                <div className="grid grid-cols-2 gap-8 lg:w-1/3 w-full">
                    {links.map((linkGroup, index) => (
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        <div key={index}>
                            <h3 className="text-background mb-4 text-xl font-medium">{linkGroup.title}</h3>
                            <ul className="space-y-3">
                                {linkGroup.items.map((item, itemIndex) => (
                                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                    <li key={itemIndex}>
                                        <a href={item.href} className="text-background/70 hover:text-background transition-colors">
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Separator & Copyright */}
            <div className="relative z-10 ">
                <Separator className="mt-16 mb-6 border-[#8F43E2] bg-[#8F43E2]" />
                <p className="text-center text-background/70 text-sm">
                    © Copyright 2026, All Rights Reserved by Bully Pedex
                </p>
            </div>
        </footer>
    )
}