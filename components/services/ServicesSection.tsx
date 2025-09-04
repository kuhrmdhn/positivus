import React from 'react'
import SectionHeading from '../ui/section-heading'
import ServicesList from './ServicesList'
import Divider from '../ui/divider'
import ServiceCTA from './ServiceCTA'

export default function ServicesSection() {
    return (
        <>
            <Divider />
            <div className='w-full min-h-dvh'>
                <SectionHeading title='Services' description='At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:' />
                <ServicesList />
                <Divider />
                <ServiceCTA />
            </div>
        </>
    )
}