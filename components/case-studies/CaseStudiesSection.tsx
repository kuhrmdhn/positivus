import React from 'react'
import SectionHeading from '../ui/section-heading'
import CaseStudiesList from './CaseStudiesList'
import Divider from '../ui/divider'

export default function CaseStudiesSection() {
    return (
        <>
            <Divider />
            <div>
                <SectionHeading title="Case Studies" description='Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies' />
                <CaseStudiesList />
            </div>
        </>
    )
}
