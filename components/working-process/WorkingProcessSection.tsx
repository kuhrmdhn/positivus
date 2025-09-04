import React from 'react'
import SectionHeading from '../ui/section-heading'
import ProcessList from './ProcessList'
import Divider from '../ui/divider'

export default function WorkingProcessSection() {
    return (
        <>
            <Divider />
            <div>
                <SectionHeading title="Our Working Process" description='Step-by-Step Guide to Achieving Your Business Goals' />
                <ProcessList />
            </div>
        </>
    )
}
