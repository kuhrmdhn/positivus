import React from 'react'
import Divider from '../ui/divider'
import SectionHeading from '../ui/section-heading'
import ContactForm from './ContactForm'

export default function ContactSection() {
    return (
        <>
            <Divider />
            <div>
                <SectionHeading title='Contact Us' description="Connect with Us: Let's Discuss Your Digital Marketing Needs" />
                <ContactForm />
            </div>
        </>
    )
}
