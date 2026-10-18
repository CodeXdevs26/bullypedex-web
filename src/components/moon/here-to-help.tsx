import React from 'react'
import { Field, FieldGroup } from '../ui/field'
import { Input } from '../ui/input'
import { Select, SelectTrigger, SelectValue } from '../ui/select'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import Image from 'next/image'

export default function HereToHelp() {
    return (
        <section className="bg-linear-to-tl from-[#6a54e5ee] via-[#7a26e9] to-[#6a54e5ee] relative">
            <div
                className="relative before:absolute grid lg:grid-cols-2 gap-12 before:top-0 before:left-0 before:w-full w-full h-full py-24 px-4 lg:px-[8%] xl:px-[12%] 
                before:h-full before:content-[''] before:opacity-[0.03] before:z-10 before:pointer-events-none
                before:bg-[url('https://www.ui-layouts.com/noise.gif')]
               
                "
            >
                <div className=" order-2 lg:order-1">
                    <form>
                        <FieldGroup className="grid grid-cols-2 gap-6">
                            <Field>
                                <Input className="bg-background h-12 rounded-full px-4" placeholder="Name" />
                            </Field>
                            <Field>
                                <Input className="bg-background h-12 rounded-full px-4" placeholder="Email" />
                            </Field>
                            <Field className="col-span-2">
                                <Select>
                                    <SelectTrigger className="bg-background h-12! rounded-full px-4 w-full">
                                        <SelectValue placeholder="Business services consulting" />
                                    </SelectTrigger>
                                </Select>
                            </Field>
                            <Field className="col-span-2">
                                <Textarea className="h-50 bg-background rounded-4xl p-4" placeholder="Your message..." />
                            </Field>
                            <Button className="col-span-2 bg-foreground! text-white h-12 rounded-full px-4 w-full">CONTACT US</Button>
                        </FieldGroup>
                    </form>
                </div>
                <div className="space-y-4 order-1 lg:order-2">
                    <h4 className="text-5xl font-antonio font-black text-background">We’re Here to Help</h4>
                    <p className="text-[#E1E1E1]">Have a question about registration, pedigrees, or our services? <br />
                        Get in touch with our team and we’ll be happy to assist you.</p>
                </div>
            </div>
            <Image src="/icon-whites.webp" alt="Icon" height={2000} width={1333} className="h-[40dvh]  opacity-8 w-auto object-contain absolute top-0 lg:top-auto lg:bottom-0 right-0 " />
        </section >
    )
}
