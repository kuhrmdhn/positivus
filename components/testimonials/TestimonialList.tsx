"use client"
import React, { useEffect, useState } from 'react'
import AutoPlay from "embla-carousel-autoplay"
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Button } from '../ui/button'
import CarouselDot from './CarouselDot'
import TestimonialCard from './TestimonialCard'

export default function TestimonialList() {
    const [api, setApi] = useState<CarouselApi>()
    const [currentIndex, setCurrentIndex] = useState(0)

    function onDocClick(index: number) {
        api?.scrollTo(index)
        setCurrentIndex(index)
    }

    useEffect(() => {
        if (!api) return

        api.on("select", () => {
            setCurrentIndex(api.selectedScrollSnap())
        })
    }, [api])

    return (
        <div className='bg-secondary rounded-4xl lg:h-[calc(100dvh-6rem)] overflow-hidden flex items-center py-7'>
            <Carousel
                opts={{ loop: true, align: "center" }} plugins={[
                    AutoPlay({ delay: 10000 }),
                ]}
                setApi={setApi}
                className="w-full flex flex-col items-center gap-7"
            >
                <CarouselContent className='py-10'>
                    {
                        testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="basis-2/5">
                                <TestimonialCard
                                    name={testimonial.name}
                                    detail={testimonial.detail}
                                    testimonial={testimonial.testimonial}
                                />
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <div className='w-fit h-fit flex items-center gap-7'>
                    <CarouselPrevious className='translate-y-0 bg-transparent text-white border-transparent hidden lg:flex'/>
                    <section className='flex gap-0.5'>
                        {
                            testimonials.map((e, i) => (
                                <Button variant={"ghost"} className="p-0 !size-fit !w-1 hover:bg-transparent active:bg-transparent" onClick={() => onDocClick(i)} key={i}>
                                    <CarouselDot isSelected={i === currentIndex} />
                                </Button>
                            ))
                        }
                    </section>
                    <CarouselNext className='translate-y-0 bg-transparent text-white border-transparent hidden lg:flex'/>
                </div>
            </Carousel>
        </div>
    )
}

const testimonials = [
    {
        name: "John Smith",
        detail: "Marketing Director at XYZ Corp",
        testimonial: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
    },
    {
        name: "Emily Johnson",
        detail: "CEO at BrightStart Consulting",
        testimonial: "Thanks to Positivus, our brand visibility has grown tremendously. Their SEO strategies and targeted campaigns have helped us connect with the right audience and convert leads more effectively."
    },
    {
        name: "Michael Chen",
        detail: "Founder of GreenTech Solutions",
        testimonial: "Working with Positivus has been a game-changer. Their social media marketing approach boosted our engagement rates, and we’ve built a stronger online community than ever before."
    },
    {
        name: "Sofia Martinez",
        detail: "E-commerce Manager at TrendyWear",
        testimonial: "Positivus delivered outstanding results for our online store. From PPC to content creation, every campaign they ran exceeded expectations and drove measurable sales growth."
    },
    {
        name: "David Lee",
        detail: "Head of Operations at InnovateHub",
        testimonial: "The Positivus team is highly skilled and always proactive. Their data-driven insights gave us clarity on where to invest our marketing budget, and the ROI has been fantastic."
    },
    {
        name: "Aisha Khan",
        detail: "Marketing Coordinator at GlobalReach",
        testimonial: "Positivus helped us reimagine our digital marketing strategy. Their dedication and creativity have been instrumental in expanding our reach across multiple online channels."
    },
]
