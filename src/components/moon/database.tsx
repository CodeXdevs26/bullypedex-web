import { ClockIcon, FileTextIcon, TruckIcon } from "lucide-react";
import Image from "next/image";

export default function Database() {
    return (
        <section className="py-16 lg:py-24 grid grid-cols-2 gap-6 px-0 md:px-4 lg:px-[4%] xl:px-[6%] pb-[50dvh]!">
            <div className="space-y-6">
                <p className="text-primary font-bold">THE BULLY PEDEX DIFFERENCE</p>
                <h1 className=" text-3xl tracking-tight md:text-4xl font-black md:font-bold  xl:text-6xl text-background md:text-foreground">
                    No Delays. No Excuses. <br />
                    <span className="text-primary">We Deliver Results.</span>
                </h1>
                <p className="text-muted-foreground">
                    We collect all required information before approval, <br />
                    then prepare and ship your paperwork within 5<br />
                    business days after approval.
                </p>
                <div className="w-full grid grid-cols-3 gap-6">
                    <div className="space-y-4">
                        <div className="p-4 bg-primary text-background rounded-full aspect-square w-min">
                            <FileTextIcon className="size-8" />
                        </div>
                        <p className="font-semibold">
                            Information <br />
                            reviewed before <br />
                            approval
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="p-4 bg-primary text-background rounded-full aspect-square w-min">
                            <ClockIcon className="size-8" />
                        </div>
                        <p className="font-semibold">
                            Clear status <br />
                            updates
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="p-4 bg-primary text-background rounded-full aspect-square w-min">
                            <TruckIcon className="size-8" />
                        </div>
                        <p className="font-semibold">
                            Trackable shipping
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full relative">
                <Image src="/cert1.webp" alt="Certificate 1" width={500 * 2} height={300 * 2} className="w-full h-full object-cover" />
                <div className="">
                    <Image src="/cert2.webp" alt="Certificate 2" width={500 * 2} height={300 * 2} className="w-4/5 h-full object-contain object-top-left absolute bottom-[-95%] left-[-5%]" />
                </div>
            </div>
        </section>
    )
}