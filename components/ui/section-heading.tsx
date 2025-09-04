import React from 'react'
import Slide from '../motion/Slide'
import Divider from './divider'

type Props = {
    title: string
    description: string
}

function SectionHeading({ title, description }: Props) {
    const transition = {
        duration: 0.8,
    }
    return (
        <>
            <div className='flex flex-col items-center lg:flex-row gap-5 w-full font-pt-sans'>
                <Slide transition={transition} className='px-6 flex items-center w-fit bg-primary text-3xl font-semibold rounded'>
                    <Title title={title} />
                </Slide>
                <Slide transition={{ ...transition, delay: 0.7 }} className='w-full text-center lg:text-start lg:w-2/5 lg:text-lg'>
                    <Description description={description} />
                </Slide>
            </div>
            <Divider />
        </>
    )
}

function Title({ title, className }: Partial<Props> & {className?:string}) {
    return <h1 className={`w-fit bg-primary text-3xl font-semibold rounded ${className}`}>{title}</h1>
}

function Description({ description }: Partial<Props>) {
    return <p>{description}</p>
}

SectionHeading.Title = Title
SectionHeading.Description = Description
export default SectionHeading