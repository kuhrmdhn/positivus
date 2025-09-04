import HeroHeading from './HeroHeading'
import HeroImage from './HeroImage'

export default function HeroSection() {
    return (
        <section className='h-[800px] lg:h-[calc(100dvh-5rem)] w-full flex flex-col justify-between lg:justify-start lg:flex-row overflow-hidden'>
            <div className='w-full lg:w-1/2 h-fit lg:h-full flex items-center'>
                <span className='hidden lg:block lg:w-full'>
                    <HeroHeading />
                </span>
                <span className='block lg:hidden'>
                    <HeroHeading.Header />
                </span>
            </div>
            <div className='w-full lg:w-1/2 h-1/2 lg:h-full'>
                <HeroImage />
            </div>
            <div className='w-full h-fit flex flex-col justify-center items-center gap-5 lg:hidden'>
                <HeroHeading.Description />
                <HeroHeading.CTAButton />
            </div>
        </section>
    )
}
