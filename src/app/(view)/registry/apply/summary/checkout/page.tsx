"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, LockIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Page() {
    const navig = useRouter();
    return (
        <main className="py-36 px-0 lg:px-[4%] xl:px-[6%]">

            <Button variant="ghost">
                <ArrowLeftIcon /> Back
            </Button>

            <h1 className="mt-4 text-2xl font-bold md:text-3xl lg:text-4xl">
                Payment
            </h1>

            <p className="text-sm text-muted-foreground mt-2">
                Complete your payment to submit the registration.
            </p>

            <div className="py-24 flex items-center w-full justify-center text-muted-foreground text-sm">
                PAYEMENT FORM GOES HERE
            </div>

            <div className="w-full flex justify-between items-center mt-12">
                <Button className="w-fit" variant="outline"><ChevronLeftIcon /> Previous</Button>
                <Button className="w-fit" asChild>
                    <Link href="/registry/apply/summary/checkout/success">
                        <LockIcon />Pay $100.00 & Submit</Link>
                </Button>
            </div>

        </main >
    )
}
