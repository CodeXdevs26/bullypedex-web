"use client"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeftIcon, ArrowRightIcon, CameraIcon, CheckIcon, ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
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
                Upload Dog Photos
            </h1>

            <p className="text-sm text-muted-foreground mt-2">
                This is a mandatory three-photo requirement. Customer must upload all three before continuing.
            </p>

            <div className="rounded-lg p-2 border border-broder mt-4 flex gap-4">
                <div className="p-2 text-primary bg-primary/5 rounded-lg">
                    <CameraIcon />
                </div>
                <div className="">
                    <div className="flex items-center gap-2">
                        <h3 className="font-bold">Add 3 Required Dog Photos</h3> <Badge className="bg-primary/20 text-primary">0 of 3 Completed</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Add clear photos of your dog from each required position. All 3 positions must be uploaded to proceed.
                    </p>
                </div>
            </div>

            <div className="w-full grid grid-cols-3 gap-6 mt-4">
                <Card>
                    <CardHeader className="flex justify-between items-center gap-2">
                        <div className="flex items-center gap-2">
                            <Badge className="bg-primary/20 text-primary text-sm">01</Badge><CardTitle className="font-semibold">Front View</CardTitle>
                        </div>
                        <div>
                            <Badge className="bg-primary/20 text-primary text-xs"><div className="size-2 rounded-full bg-primary" /> Required</Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center w-full">
                        <div className="rounded-lg border-2 border-border border-dashed p-4 w-full flex flex-col justify-center items-center">
                            <Image src="/upload-1.png" alt="Front View" width={200} height={200} className="mx-auto" />
                            <span className="text-sm text-muted-foreground text-center">[ Dog position sample: Direct Front View ]</span>
                            <Button className="bg-primary/10! text-primary mt-4">
                                + Upload Photo
                            </Button>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex justify-between items-center gap-2">
                        <div className="flex items-center gap-2">
                            <Badge className="bg-primary/20 text-primary text-sm">02</Badge><CardTitle className="font-semibold">Full Side Profile</CardTitle>
                        </div>
                        <div>
                            <Badge className="bg-primary/20 text-primary text-xs"><div className="size-2 rounded-full bg-primary" /> Required</Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center w-full">
                        <div className="rounded-lg border-2 border-border border-dashed p-4 w-full flex flex-col justify-center items-center">
                            <Image src="/upload-2.png" alt="Front View" width={200} height={200} className="mx-auto" />
                            <span className="text-sm text-muted-foreground text-center">[ Dog position sample: Standing Full Side Profile ]</span>
                            <Button className="bg-primary/10! text-primary mt-4">
                                + Upload Photo
                            </Button>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex justify-between items-center gap-2">
                        <div className="flex items-center gap-2">
                            <Badge className="bg-primary/20 text-primary text-sm">03</Badge><CardTitle className="font-semibold">Rear View</CardTitle>
                        </div>
                        <div>
                            <Badge className="bg-primary/20 text-primary text-xs"><div className="size-2 rounded-full bg-primary" /> Required</Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center w-full">
                        <div className="rounded-lg border-2 border-border border-dashed p-4 w-full flex flex-col justify-center items-center">
                            <Image src="/upload-3.png" alt="Rear View" width={200} height={200} className="mx-auto" />
                            <span className="text-sm text-muted-foreground text-center">[ Dog position sample: Direct Rear / Hocks View ]</span>
                            <Button className="bg-primary/10! text-primary mt-4">
                                + Upload Photo
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <div className="">
                    <Button>Continue <ChevronRightIcon /></Button>
                </div>
            </div>


        </main >
    )
}
