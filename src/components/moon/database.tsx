import { ClockIcon, FileTextIcon, TruckIcon } from "lucide-react";
import Image from "next/image";

export default function Database() {
  return (
    <section className="grid grid-cols-1 gap-x-3 gap-y-8 px-6 py-16 md:grid-cols-2 md:gap-6 md:px-4 md:py-16 pb-[20dvh] md:pb-[50dvh] lg:gap-x-6 lg:py-24 lg:px-[4%] lg:pb-[60dvh] xl:px-[6%]">
      <div className="flex flex-col items-center space-y-4 pb-24 text-center md:items-start md:space-y-6 md:text-left lg:pt-0">
        <p className="text-[0.55rem] font-bold text-primary md:text-base">
          THE BULLY PEDEX DIFFERENCE
        </p>
        <h1 className="text-2xl font-black leading-tight tracking-tight md:text-4xl md:font-bold xl:text-6xl">
          No Delays. No Excuses. <br />
          <span className="text-primary">We Deliver Results.</span>
        </h1>
        <p className="text-[0.6rem] leading-relaxed text-muted-foreground md:text-base">
          We collect all required information before approval, then prepare and
          ship your paperwork within 5 business days after approval.
        </p>
        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3 md:gap-6">
          <div className="flex items-center justify-center gap-3 text-left md:block md:space-y-4">
            <div className="w-min rounded-full bg-primary p-2 text-background md:p-4">
              <FileTextIcon className="size-4 md:size-8" />
            </div>
            <p className="text-xs font-semibold md:text-base">
              Official Bully Pedex registration
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 text-left md:block md:space-y-4">
            <div className="w-min rounded-full bg-primary p-2 text-background md:p-4">
              <ClockIcon className="size-4 md:size-8" />
            </div>
            <p className="text-xs font-semibold md:text-base">
              Three generation pedigree
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 text-left md:block md:space-y-4">
            <div className="w-min rounded-full bg-primary p-2 text-background md:p-4">
              <TruckIcon className="size-4 md:size-8" />
            </div>
            <p className="text-xs font-semibold md:text-base">
              Professionally prepared paperwork
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex w-full max-w-[24rem] flex-col items-center justify-self-center self-start md:row-auto md:h-full md:max-w-none md:items-start md:justify-self-auto">
        <Image
          src="/cert1.webp"
          alt="Certificate 1"
          width={500 * 2}
          height={300 * 2}
          className="h-auto w-full object-cover md:h-full"
        />
        <div className="">
          <Image
            src="/cert2.webp"
            alt="Certificate 2"
            width={500 * 2}
            height={300 * 2}
            className="absolute -bottom-[55%] left-1/2 h-auto w-4/5 -translate-x-1/2 object-contain object-top-left md:-bottom-[95%] md:left-[-5%] md:translate-x-0 md:h-full"
          />
        </div>
      </div>
    </section>
  );
}
