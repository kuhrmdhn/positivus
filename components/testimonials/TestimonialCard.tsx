import React from 'react'
import ShowUp from '../motion/ShowUp'

type Props = {
    name: string
    detail: string
    testimonial: string
}

export default function TestimonialCard({ name, detail, testimonial }: Props) {
    return (
        <ShowUp viewport={{ once: false }} className='selection:underline selection:bg-transparent selection:text-white selection:decoration-primary selection:underline-offset-1 flex flex-col gap-14 text-white cursor-grab active:cursor-grabbing'>
            <section className='h-[230px] md:h-[200px] lg:h-[230px] w-full p-7 relative border border-primary rounded-4xl before:content-[""] before:absolute before:-bottom-4 sm:before:-bottom-7 before:left-8 sm:before:left-16 before:size-8 sm:before:size-14 before:bg-secondary before:border-r before:border-b before:border-primary before:rotate-45'>
                <p className='line-clamp-6 text-justify'>{testimonial}</p>
            </section>
            <section className='translate-x-5 sm:translate-x-20'>
                <h4 className="sm:text-lg text-primary">{name}</h4>
                <h5>{detail}</h5>
            </section>
        </ShowUp>
    )
}
