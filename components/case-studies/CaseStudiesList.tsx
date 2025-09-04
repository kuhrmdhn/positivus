import React from 'react'
import { Separator } from '../ui/separator'
import CaseStudyCard from './CaseStudyCard'
import ShowUp from '../motion/ShowUp'

export default function CaseStudiesList() {
    return (
        <ShowUp className='lg:bg-secondary h-fit lg:h-[310px] w-full overflow-y-hidden overflow-x-scroll lg:overflow-x-hidden lg:rounded-2xl lg:px-10 flex gap-10 lg:gap-0 lg:snap-none snap-x snap-center snap-mandatory lg:justify-between items-center'>
            {
                cases.map((item, index) => (
                    <React.Fragment key={index}>
                        <CaseStudyCard delay={(index + 1) * 0.3}>
                            {item}
                        </CaseStudyCard>

                        {
                            index !== 2 && (
                                <Separator orientation='vertical' className='hidden lg:block data-[orientation=vertical]:h-1/2' />
                            )
                        }
                    </React.Fragment>
                ))
            }
        </ShowUp>
    )
}

const cases = [
    "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
]
