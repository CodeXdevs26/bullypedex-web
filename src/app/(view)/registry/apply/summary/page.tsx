import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function Page() {
    return (
        <main className="flex-1 py-24">
            <section className="min-h-[60dvh] flex flex-col justify-center items-center gap-2">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">Order Summary</h1>
                <p className="text-sm text-muted-foreground">
                    Your registration application has been successfully
                    submitted.</p>

                <div className="rounded-xl divide-y w-full max-w-2xl border overflow-hidden mt-4">
                    <div className="flex items-center justify-between p-4 bg-muted">
                        <p className="text-muted-foreground">Registration Fee</p>
                        <p>$40.00</p>
                    </div>
                    <div className="flex items-center justify-between p-4">
                        <p className="text-muted-foreground">Insured Parchment Shipping</p>
                        <p>$15.00</p>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted">
                        <p className="text-muted-foreground">Estimated Tax</p>
                        <p>$3.30</p>
                    </div>
                    <div className="flex items-center justify-between p-4">
                        <p className="text-muted-foreground">Total Due USD</p>
                        <p>$149</p>
                    </div>
                </div>
                <Button className="mt-6 w-full max-w-2xl" size="lg" asChild>
                    <Link href="/registry/apply/summary/checkout">Check Out</Link>
                </Button>
            </section>
        </main>
    )
}
