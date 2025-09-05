import React from 'react'
import { Button } from '../ui/button'
import Slide from '../motion/Slide'

function HeroHeading() {
    return (
        <div className='w-4/5 h-fit flex flex-col gap-10'>
            <Header />
            <Description />
            <CTAButton />
        </div >
    )
}

function Header() {
    return (
        <Slide transition={{ delay: 1, duration: 1 }}>
            <h1 className='font-pt-sans text-4xl sm:text-5xl lg:text-6xl'>
                Navigating the
                <br />digital landscape
                <br /> for success
            </h1>
        </Slide>
    )
}

function Description() {
    return (
        <Slide transition={{ delay: 1.5, duration: 1 }}>
            <p className='text-base lg:text-lg font-light'>
                Our digital marketing agency helps businesses
                <br /> grow and succeed online through a range of
                <br /> services including SEO, PPC, social media marketing,
                <br />and content creation.
            </p>
        </Slide>
    )
}

function CTAButton() {
    return (
        <Slide transition={{ delay: 2, duration: 1 }}>
            <Button className='bg-secondary hover:bg-secondary/90 h-12 w-[calc(100dvw-3rem)] md:w-46'>
                Book a consultation
            </Button>
        </Slide>
    )
}

HeroHeading.Header = Header
HeroHeading.Description = Description
HeroHeading.CTAButton = CTAButton
export default HeroHeading