"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
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
                Registration Application
            </h1>

            <p className="text-sm text-muted-foreground mt-2">
                Fill in the details for the dog
            </p>

            <h4 className="text-lg font-semibold mt-4">Dog Information</h4>

            <form className="mt-4 flex flex-col gap-4" onSubmit={(e) => {
                e.preventDefault()
                navig.push('/registry/apply/photos')

            }}>
                <Label>Registered Dog Name</Label>
                <Input placeholder="e.g. Ironclads King Titan" />
                <Label>Breed</Label>
                <Input placeholder="e.g. American Bully" />
                <Label>BIOLOGICAL Sex</Label>
                <Tabs defaultValue='male' className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value='male' className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                            Male
                        </TabsTrigger>
                        <TabsTrigger value='female' className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                            Female
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
                <Label>Date of Birth</Label>
                <Input type="date" />
                <Label>Primary Color & Pattern</Label>
                <Input placeholder="e.g. Blue Fawn / White MarkingsBlack and White" />
                <Label>MICROCHIP IDENTIFICATION</Label>
                <Input placeholder="e.g. 1234567890" />

                <Button className="w-fit">Continue <ArrowRightIcon /></Button>
            </form>

        </main >
    )
}
