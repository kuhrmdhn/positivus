import React from 'react'
import Navigations from '../navbar/Navigations'
import { Facebook, Linkedin, Twitter } from 'lucide-react'
import Logo from '../ui/logo'

function FooterHeading() {
    return (
        <section className='h-full flex flex-col lg:flex-row justify-evenly lg:justify-between items-center'>
            <span className='size-fit' >
                <Logo color='white' />
            </span>
            <ul className='flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-10 justify-center w-3/5' >
                <Navigations.NavigationLists textColor='white' underlineStyle='before:bg-white' />
            </ul>
            <span className='hidden lg:block'>
            <ContactInformationLogo />
            </span>
        </section>
    )
}



function ContactInformationLogo() {
    return (
        <div className='flex gap-3 text-secondary' >
            <Linkedin className='bg-white size-8 rounded-full p-1' />
            <Facebook className='bg-white size-8 rounded-full p-1' />
            <Twitter className='bg-white size-8 rounded-full p-1' />
        </div>
    )
}

FooterHeading.ContactInformationLogo = ContactInformationLogo
export default FooterHeading