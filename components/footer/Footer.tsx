import LinkUnderline from '../ui/link-underline'
import { Separator } from '../ui/separator'
import FooterContactInformation from './FooterContactInformation'
import FooterHeading from './FooterHeading'
import FooterSubscription from './FooterSubscription'

export default function Footer() {
    return (
        <footer className='bg-secondary flex flex-col justify-between h-[900px] lg:h-[450px] font-light lg:rounded-t-4xl -mx-10 lg:m-0 pt-10 px-14 text-white'>
            <div className='h-[35%] lg:h-20'>
                <FooterHeading />
            </div>
            <div className='flex flex-col lg:flex-row gap-7 lg:gap-0 lg:justify-between items-center w-full lg:h-3/5'>
                <FooterContactInformation />
                <FooterSubscription />
            </div>
            <div className='flex justify-center items-center lg:hidden h-20'>
                <FooterHeading.ContactInformationLogo />
            </div>
            <Separator />
            <div className='h-28 lg:h-20 flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-5'>
                <h6>© 2023 Positivus. All Rights Reserved.</h6>
                <h6 className='inline-flex gap-1'>
                    Design by
                    <LinkUnderline className='before:bg-white hover:before:w-full before:bottom-0 font-semibold' href="https://www.figma.com/@olgaaverchenko">@olgaaverchenko</LinkUnderline>
                    on
                    <LinkUnderline className='before:bg-white hover:before:w-full before:bottom-0 font-semibold' href="https://www.figma.com/community/file/1230604708032389430">Figma</LinkUnderline>
                </h6>
            </div>
        </footer>
    )
}
