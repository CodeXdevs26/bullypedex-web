"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, LockIcon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Page() {
    const navig = useRouter();
    return (
        <main className="py-36 px-0 lg:px-[4%] xl:px-[6%] flex flex-col justify-center items-center">

            <Image src="/check.png" alt="Check" className="mx-auto size-42" height={248} width={248} />
            <h1 className="mt-4 text-2xl font-bold md:text-3xl lg:text-4xl text-center">
                Payment Successful
            </h1>

            <p className="text-sm text-muted-foreground mt-2 text-center">
                Your payment has been received.
            </p>

            <div className="py-24 flex items-center w-full justify-center text-muted-foreground text-sm">
                INFORMATION
            </div>

            <Button className="w-full max-w-2xl mx-auto">Continue</Button>

        </main >
    )
}
