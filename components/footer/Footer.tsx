import FadeIn from '../motion/FadeIn'
import LinkUnderline from '../ui/link-underline'
import { Separator } from '../ui/separator'
import FooterContactInformation from './FooterContactInformation'
import FooterHeading from './FooterHeading'
import FooterSubscription from './FooterSubscription'

export default function Footer() {
    return (
        <FadeIn>
            <footer className='bg-secondary flex flex-col justify-between h-[900px] md:h-[400px] lg:h-[450px] font-light md:rounded-t-4xl -mx-10 md:m-0 pt-10 md:pt-5 lg:pt-10 px-14 md:px-7 lg:px-14 text-white'>
                <div className='h-[35%] md:h-20'>
                    <FooterHeading />
                </div>
                <div className='flex flex-col md:flex-row gap-7 md:gap-0 md:justify-between items-center w-full md:h-3/5'>
                    <FooterContactInformation />
                    <FooterSubscription />
                </div>
                <div className='flex justify-center items-center md:hidden h-12 sm:h-20'>
                    <FooterHeading.ContactInformationLogo />
                </div>
                <Separator />
                <div className='h-fit sm:h-28 md:h-20 flex flex-col md:flex-row justify-center md:justify-start items-center gap-5'>
                    <h6>© 2023 Positivus. All Rights Reserved.</h6>
                    <h6 className='inline-flex gap-1'>
                        Design by
                        <LinkUnderline className='before:bg-white hover:before:w-full before:bottom-0 font-semibold' href="https://www.figma.com/@omdaaverchenko">@omdaaverchenko</LinkUnderline>
                        on
                        <LinkUnderline className='before:bg-white hover:before:w-full before:bottom-0 font-semibold' href="https://www.figma.com/community/file/1230604708032389430">Figma</LinkUnderline>
                    </h6>
                </div>
            </footer>
        </FadeIn>
    )
}
