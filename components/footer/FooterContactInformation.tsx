import React from 'react'
import SectionHeading from '../ui/section-heading'

export default function FooterContactInformation() {
    return (
        <div className='w-full lg:w-2/5 h-fit flex items-center lg:items-start flex-col gap-5'>
            <SectionHeading.Title title='Contact us:' className='text-xl text-secondary' />
            <ul className='flex text-center flex-col gap-5 text-white'>
                <li className='list-none'>Email: info@positivus.com</li>
                <li className='list-none'>Phone: 555-567-8901</li>
                <li className='list-none'>Address: 1234 Main St Moonstone City, <br />Stardust State 12345</li>
            </ul>
        </div>
    )
}
