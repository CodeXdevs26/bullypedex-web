import { CheckCircleIcon, ChevronRight, FileTextIcon, TruckIcon } from 'lucide-react'
import React from 'react'

export default function RegisterProcess() {
    return (
        <section className="py-24 px-0 md:px-6 lg:px-[4%] xl:px-[6%]">
            <h2 className="text-center text-4xl font-bold">Register in Three Simple Steps</h2>
            <div className="grid grid-cols-3 gap-6 pt-12">
                <div className="flex items-center gap-4">
                    <div className="p-4 bg-primary/5 aspect-square! size-16 flex items-center justify-center rounded-full font-bold text-xl text-primary">1</div>
                    <div className="p-4 bg-primary/5 aspect-square! size-16 flex items-center justify-center rounded-full font-bold text-xl text-primary">
                        <FileTextIcon />
                    </div>
                    <div className="">
                        <h3 className="font-bold text-lg">Complete Registration</h3>
                        <p className="text-muted-foreground">
                            Provide your dog's information and
                            upload the required details.</p>
                    </div>
                    <ChevronRight className="text-muted-foreground size-8" />
                </div>
                <div className="flex items-center gap-4">
                    <div className="p-4 bg-primary/5 aspect-square! size-16 flex items-center justify-center rounded-full font-bold text-xl text-primary">2</div>
                    <div className="p-4 bg-primary/5 aspect-square! size-16 flex items-center justify-center rounded-full font-bold text-xl text-primary">
                        <CheckCircleIcon />
                    </div>
                    <div className="">
                        <h3 className="font-bold text-lg">We Review Your
                            Application</h3>
                        <p className="text-muted-foreground">
                            Provide your dog's information and
                            upload the required details.</p>
                    </div>
                    <ChevronRight className="text-muted-foreground size-8" />
                </div>
                <div className="flex items-center gap-4">
                    <div className="p-4 bg-primary/5 aspect-square! size-16 flex items-center justify-center rounded-full font-bold text-xl text-primary">3</div>
                    <div className="p-4 bg-primary/5 aspect-square! size-16 flex items-center justify-center rounded-full font-bold text-xl text-primary">
                        <TruckIcon />
                    </div>
                    <div className="">
                        <h3 className="font-bold text-lg">We Prepare & Ship</h3>
                        <p className="text-muted-foreground">
                            After approval, we prepare your
                            registration paperwork and ship
                            within 5 business days.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
