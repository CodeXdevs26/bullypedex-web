import { CheckCircleIcon, ChevronRight, FileTextIcon, TruckIcon } from 'lucide-react'
import React from 'react'

export default function RegisterProcess() {
    return (
        <section className="px-6 py-16 md:px-6 md:py-24 lg:px-[4%] xl:px-[6%]">
            <h2 className="text-center text-xl font-bold md:text-4xl">Register in Three Simple Steps</h2>
            <div className="grid grid-cols-3 gap-2 pt-6 md:gap-6 md:pt-12">
                <div className="flex items-start gap-1 md:items-center md:gap-4">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/5 text-xs font-bold text-primary md:size-16 md:p-4 md:text-xl">1</div>
                    <div className="hidden size-16 shrink-0 items-center justify-center rounded-full bg-primary/5 p-4 font-bold text-xl text-primary md:flex">
                        <FileTextIcon />
                    </div>
                    <div>
                        <h3 className="text-[0.55rem] font-bold leading-tight md:text-lg">Complete Registration</h3>
                        <p className="text-[0.45rem] leading-tight text-muted-foreground md:text-base">
                            Provide your dog's information and
                            upload the required details.</p>
                    </div>
                    <ChevronRight className="hidden text-muted-foreground md:block md:size-8" />
                </div>
                <div className="flex items-start gap-1 md:items-center md:gap-4">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/5 text-xs font-bold text-primary md:size-16 md:p-4 md:text-xl">2</div>
                    <div className="hidden size-16 shrink-0 items-center justify-center rounded-full bg-primary/5 p-4 font-bold text-xl text-primary md:flex">
                        <CheckCircleIcon />
                    </div>
                    <div>
                        <h3 className="text-[0.55rem] font-bold leading-tight md:text-lg">We Review Your
                            Application</h3>
                        <p className="text-[0.45rem] leading-tight text-muted-foreground md:text-base">
                            Provide your dog's information and
                            upload the required details.</p>
                    </div>
                    <ChevronRight className="hidden text-muted-foreground md:block md:size-8" />
                </div>
                <div className="flex items-start gap-1 md:items-center md:gap-4">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/5 text-xs font-bold text-primary md:size-16 md:p-4 md:text-xl">3</div>
                    <div className="hidden size-16 shrink-0 items-center justify-center rounded-full bg-primary/5 p-4 font-bold text-xl text-primary md:flex">
                        <TruckIcon />
                    </div>
                    <div>
                        <h3 className="text-[0.55rem] font-bold leading-tight md:text-lg">We Prepare & Ship</h3>
                        <p className="text-[0.45rem] leading-tight text-muted-foreground md:text-base">
                            After approval, we prepare your
                            registration paperwork and ship
                            within 5 business days.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
