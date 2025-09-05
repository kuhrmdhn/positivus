import HeroHeading from './HeroHeading'
import HeroImage from './HeroImage'

export default function HeroSection() {
    return (
        <section className='h-[800px] md:h-fit xl:h-[calc(100dvh-5rem)] w-full relative flex flex-col justify-between xl:justify-start md:flex-col-reverse xl:flex-row md:items-center xl:items-start overflow-hidden'>
            <div className='w-full xl:w-1/2 h-fit xl:h-full flex items-center'>
                <span className='hidden md:block md:w-full'>
                    <HeroHeading />
                </span>
                <span className='block md:hidden'>
                    <HeroHeading.Header />
                </span>
            </div>
            <div className='w-full md:w-1/2 h-1/2 md:h-full md:absolute md:right-0 md:top-0 xl:static'>
                <HeroImage />
            </div>
            <div className='w-full h-fit flex flex-col justify-center items-center gap-5 md:hidden'>
                <HeroHeading.Description />
                <HeroHeading.CTAButton />
            </div>
        </section>
    )
}
