import { CheckIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";


export default function Testimonials() {
    return (
        <section className="py-24 w-full px-0 lg:px-[4%] xl:px-[6%] gap-4 grid grid-cols-2">
            <div className="w-full flex items-center">
                <div className="flex-1 space-y-4">
                    <h2 className="text-5xl font-bold">Your Complete <br />
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
                <Image src="/db.webp" height={1536} width={1024} alt="dashboard_mockup" className="h-74 lg:h-96 w-min" />
            </div>
            <div className="w-full flex items-center py-6" style={{ backgroundImage: "url('/deliver.webp')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="flex-1 space-y-4">
                    <h2 className="text-5xl font-bold">Your Complete <br />
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
            </div>
        </section>
    )
}
