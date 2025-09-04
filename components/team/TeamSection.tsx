import React from 'react'
import SectionHeading from '../ui/section-heading'
import TeamLists from './TeamLists'
import Divider from '../ui/divider'

export default function TeamSection() {
    return (
        <>
            <Divider />
            <div>
                <SectionHeading title='Team' description='Meet the skilled and experienced team behind our successful digital marketing strategies' />
                <TeamLists />
            </div>
        </>
    )
}
