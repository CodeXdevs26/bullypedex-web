import { CheckIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";


export default function Testimonials() {
    return (
        <section className="grid w-full grid-cols-1 gap-4 px-6 py-16 md:grid-cols-2 md:px-0 md:py-24 lg:px-[4%] xl:px-[6%]">
            <div className="flex w-full items-center bg-muted/20 p-4 md:p-0">
                <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-bold md:text-5xl">Your Complete <br />
                        Breeder Dashboard</h2>
                    <p className="text-muted-foreground">Manage your dogs, pedigrees and registrations in one place.</p>
                    <ul className="space-y-3 mt-4">
                        <li className="flex items-center gap-2 text-sm font-semibold"> <div className="size-5 rounded-full bg-primary text-background flex items-center justify-center ">
                            <CheckIcon className="size-3" />
                        </div>
                            Manage every dog
                        </li>
                        <li className="flex items-center gap-2 text-sm font-semibold"> <div className="size-5 rounded-full bg-primary text-background flex items-center justify-center ">
                            <CheckIcon className="size-3" />
                        </div>
                            Track every application
                        </li>
                        <li className="flex items-center gap-2 text-sm font-semibold"> <div className="size-5 rounded-full bg-primary text-background flex items-center justify-center ">
                            <CheckIcon className="size-3" />
                        </div>
                            Access certificates
                        </li>
                    </ul>
                    <Button className="px-6 py-5 rounded-full">Learn About Our App  →</Button>
                </div>
                <Image src="/db.webp" height={1536} width={1024} alt="dashboard_mockup" className="h-56 w-auto md:h-74 lg:h-96" />
            </div>
            <div className="flex w-full items-center bg-cover bg-center px-4 py-6" style={{ backgroundImage: "url('/deliver.webp')" }}>
                <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-bold md:text-5xl">Fast, Trackable <br />Delivery</h2>
                    <p className="text-muted-foreground">Manage your dogs, pedigrees and registrations in one place.</p>
                    <ul className="space-y-3 mt-4">
                        <li className="flex items-center gap-2 text-sm font-semibold"> <div className="size-5 rounded-full bg-primary text-background flex items-center justify-center ">
                            <CheckIcon className="size-3" />
                        </div>
                            Manage every dog
                        </li>
                        <li className="flex items-center gap-2 text-sm font-semibold"> <div className="size-5 rounded-full bg-primary text-background flex items-center justify-center ">
                            <CheckIcon className="size-3" />
                        </div>
                            Track every application
                        </li>
                        <li className="flex items-center gap-2 text-sm font-semibold"> <div className="size-5 rounded-full bg-primary text-background flex items-center justify-center ">
                            <CheckIcon className="size-3" />
                        </div>
                            Access certificates
                        </li>
                    </ul>
                    <Button className="px-6 py-5 rounded-full">Learn About Our App  →</Button>
                </div>
            </div>
        </section>
    )
}
