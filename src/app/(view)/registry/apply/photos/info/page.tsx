"use client"
import { Alert, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeftIcon, ArrowRightIcon, CameraIcon, CheckIcon, ChevronRightIcon, InfoIcon } from 'lucide-react'
import Image from 'next/image'
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
                Registration Application
            </h1>

            <p className="text-sm text-muted-foreground mt-2">
                Fill in the details for the dog
            </p>

            <div className="flex items-center justify-between mt-4">
                <div className="">
                    <h3 className="text-muted-foreground">REGISTRATION PACKAGE</h3>
                    <p className="font-semibold">Single Package <span className="text-primary">$149</span></p>
                </div>
                <Button variant="link">
                    Edit
                </Button>
            </div>
            <div className="flex items-center justify-between mt-4">
                <div className="">
                    <h3 className="text-muted-foreground">DOG INFORMATION</h3>
                    <p className=" font-normal">Kingston <span className="text-muted-foreground">American Bully</span></p>
                </div>
                <Button variant="link">
                    Edit
                </Button>
            </div>
            <div className="flex items-center justify-between mt-4">
                <div className="">
                    <h3 className="text-muted-foreground">DOG PHOTOS</h3>
                    <p className="font-semibold">3 photos uploaded</p>
                </div>
                <Button variant="link">
                    Edit
                </Button>
            </div>



            <h2 className="mt-12 text-xl font-bold md:text-2xl lg:text-3xl">
                Owner Information
            </h2>

            <p className="text-sm text-muted-foreground mt-2">
                Your contact and mailing details.
            </p>


            <p className="font-semibold mt-4">
                Address
            </p>

            <FieldGroup className="mt-4">
                <form className="space-y-4">
                    <Field>
                        <FieldLabel>Country *</FieldLabel>
                        <Input placeholder="e.g. United States" />
                    </Field>
                    <Field>
                        <FieldLabel>State / Province *</FieldLabel>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a state" />
                            </SelectTrigger>
                        </Select>
                    </Field>
                    <Field>
                        <FieldLabel>City *</FieldLabel>
                        <Input placeholder="e.g. New York" />
                    </Field>
                    <Field>
                        <FieldLabel>Street Address *</FieldLabel>
                        <Input placeholder="e.g. 123 Main Street" />
                    </Field>
                    <Field>
                        <FieldLabel>ZIP / Postal Code *</FieldLabel>
                        <Input placeholder="" />
                    </Field>
                </form>
            </FieldGroup>

            <Alert className="bg-primary/5 text-muted-foreground">
                <InfoIcon className="text-primary!" />
                <AlertTitle>Your mailing address is required because Bully Pedex sends premium physical paperwork to the owner.</AlertTitle>
            </Alert>

            <Button className="mt-6" asChild>
                <Link href="/registry/apply/summary">
                    Continue <ChevronRightIcon /></Link>
            </Button>

        </main >
    )
}
