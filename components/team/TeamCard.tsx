import React from 'react'
import TeamMaskImage from './TeamMaskImage'
import { Linkedin } from 'lucide-react'
import { Separator } from '../ui/separator'
import Card from '../ui/card'

type Props = {
    teamName: string
    teamPhoto: string
    teamPosition: string
    description: string
}

export default function TeamCard({ teamName, teamPhoto, teamPosition, description }: Props) {
    return (
        <Card className='w-[95%] h-[200px] lg:h-[250px] p-4 lg:p-5 font-pt-sans flex flex-col gap-2 lg:gap-3'>
            <section className='flex justify-between'>
                <TeamMaskImage src={teamPhoto} alt={`${teamName} Photo`} />
                <div className='self-end'>
                    <h3 className='font-semibold text-base lg:text-lg'>{teamName}</h3>
                    <h4>{teamPosition}</h4>
                </div>
                <span className='bg-secondary text-primary size-8 flex justify-center items-center rounded-full'>
                    <Linkedin />
                </span>
            </section>
            <Separator className='bg-secondary' />
            <section>
                <p className='text-sm lg:text-base line-clamp-4'>{description}</p>
            </section>
        </Card>
    )
}
