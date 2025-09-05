import Image from 'next/image'
import ShowUp from '../motion/ShowUp'
import { Button } from '../ui/button'

export default function ServiceCTA() {
    return (
            <ShowUp className='w-full h-[310px] px-7 lg:px-15 flex justify-between items-center rounded-3xl bg-tertiary'>
                <section className='h-fit w-full md:w-3/5 lg:w-2/5 flex flex-col gap-5'>
                    <h1 className='text-3xl font-semibold'>Let’s make things happen</h1>
                    <p className='text-lg font-light'>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                    <Button className='bg-secondary hover:bg-secondary/90 h-12 lg:w-52'>Get your free proposal</Button>
                </section>
                <section className='h-full md:w-1/3 lg:w-1/2 hidden md:block'>
                    <Image className='h-[120%] aspect-auto -translate-y-[10%]' src="./images/services-cta.svg" width={1080} height={1080} alt='Services CTA Illustration' />
                </section>
            </ShowUp>
    )
}
