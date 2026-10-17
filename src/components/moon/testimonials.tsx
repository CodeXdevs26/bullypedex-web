import { TestimonialCarousel, type Testimonial } from '../phone-carousel'


const items: Testimonial[] = [
    {
        "name": "Wade Warren",
        "rating": 5,
        "role": "Legacy Integration Producer",
        "avatar": "https://api.dicebear.com/10.x/adventurer-neutral/svg?seed=z0xocbjt",
        "quote": "The most reliable I’ve used. Theri verification system is top-notch and givers my buyer full confidences"
    },
    {
        "name": "Stephen Brekke",
        "rating": 5,
        "role": "German ShepherdBreeder",
        "avatar": "https://api.dicebear.com/10.x/adventurer-neutral/svg?seed=z0xocbjt",
        "quote": "The most reliable I’ve used. Theri verification system is top-notch and givers my buyer full confidences"
    },
    {
        "name": "Darlene Robertson",
        "rating": 5,
        "role": "Legacy Integration Producer",
        "avatar": "https://api.dicebear.com/10.x/adventurer-neutral/svg?seed=z0xocbjt",
        "quote": "The most reliable I’ve used. Theri verification system is top-notch and givers my buyer full confidences"
    },

]


export default function Testimonials() {
    return (
        <section className="py-24 w-full px-0 lg:px-[4%] xl:px-[6%] flex flex-col items-center gap-4 ">
            <p className="text-xs border-2 px-4 text-[#8F43E2] w-min text-nowrap font-semibold border-primary rounded-full p-2">⭐ Testimonials</p>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center">Hear From Our Users</h2>
            <p className=" text-muted-foreground text-center">See how our app has transformed financial lives—real stories, real results.</p>
            <div className="w-full">
                <TestimonialCarousel testimonials={items} />
            </div>
        </section>
    )
}
