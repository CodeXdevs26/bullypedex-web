import Image from 'next/image'
import React from 'react'

export default function Layout({ children, }: { children: React.ReactNode }) {
    return (
        <main className="h-dvh w-dvw bg-primary grid grid-cols-4">
            <div className="w-full h-full py-24 px-12 space-y-12 relative">
                <div className="w-[150%] aspect-square absolute -top-1/3 -left-3/4 bg-radial from-background/50 via-transparent to-transparent"></div>
                <Image src="/icon.png" alt="Logo" width={108} height={108} />
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold text-background font-antonio">
                        Access Your Bully
                        Pedex Account
                    </h2>
                    <p className="text-background">Manage records, review registrations, and continue building your dog's paperwork profile.</p>
                </div>
            </div>
            <section className="col-span-3 bg-background bg-cover bg-no-repeat h-full w-full flex items-center justify-center" style={{
                backgroundImage: "url('/doge-1.webp')",
            }}>{children}</section>
        </main>
    )
}
