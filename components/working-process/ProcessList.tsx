import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { Separator } from '../ui/separator'
import ShowUp from '../motion/ShowUp'

export default function ProcessList() {
    return (
        <Accordion className='flex flex-col gap-3 font-pt-sans' type='single' collapsible defaultValue='Process-1'>
            {
                processes.map((process, index) => (
                    <ShowUp key={index} className='pb-3'>
                        <AccordionItem className='py-5 px-10 rounded-4xl border !border-b-10 data-[state=open]:!border-b border-secondary data-[state=closed]:bg-tertiary data-[state=open]:bg-primary duration-500' value={`Process-${index + 1}`}>
                            <AccordionTrigger className='hover:no-underline'>
                                <h1 className='inline-flex gap-3 text-base lg:text-xl items-center'>
                                    <span className='text-2xl lg:text-4xl'>
                                        0{index + 1}
                                    </span>
                                    {process.title}
                                </h1>
                            </AccordionTrigger>
                            <AccordionContent>
                                <Separator className='bg-secondary mb-5' />
                                <p className='text-lg'>
                                    {process.description}
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </ShowUp>
                ))
            }
        </Accordion>
    )
}

const processes = [
    {
        title: "Consultation",
        description:
            "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
        title: "Research and Strategy Development",
        description:
            "We conduct in-depth research into your industry, competitors, and market trends. Based on these insights, we create a tailored strategy designed to help you achieve measurable results.",
    },
    {
        title: "Implementation",
        description:
            "Our team executes the strategy by launching campaigns, creating content, and applying the tools needed to reach your target audience effectively.",
    },
    {
        title: "Monitoring and Optimization",
        description:
            "We continuously track performance metrics and analyze data to ensure the strategy is working as intended. Adjustments are made to improve efficiency and maximize results.",
    },
    {
        title: "Reporting and Communication",
        description:
            "You will receive regular reports that provide clear insights into campaign progress, key metrics, and outcomes. Open communication ensures transparency at every step.",
    },
    {
        title: "Continual Improvement",
        description:
            "We don’t stop at results. Feedback, data, and evolving market trends are used to refine strategies, ensuring long-term growth and sustained success.",
    },
]
