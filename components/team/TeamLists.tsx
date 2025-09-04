import React from 'react'
import TeamCard from './TeamCard'
import ShowUp from '../motion/ShowUp'

export default function TeamLists() {
    return (
        <div className='w-full h-fit grid grid-cols-1 lg:grid-cols-3 gap-y-5'>
            {
                teams.map((team, index) => (
                    <ShowUp key={index} transition={{ duration: 0.7, delay: (index + 1) * 0.2 }}>
                        <TeamCard
                            teamName={team.name}
                            teamPhoto={`/images/${team.photo}.png`}
                            teamPosition={team.position}
                            description={team.description}
                        />
                    </ShowUp>
                ))
            }
        </div>
    )
}

const teams = [
    {
        name: "John Smith",
        photo: "john-smith",
        position: "CEO and Founder",
        description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
    },
    {
        name: "Jane Doe",
        photo: "jane-doe",
        position: "Director of Operations",
        description: "7+ years of experience in project management and team leadership. Strong organizational and communication skills"
    },
    {
        name: "Michael Brown",
        photo: "michael-brown",
        position: "Senior SEO Specialist",
        description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
    },
    {
        name: "Emily Johnson",
        photo: "emily-johnson",
        position: "PPC Manager",
        description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
    },
    {
        name: "Brian Williams",
        photo: "brian-williams",
        position: "Social Media Specialist",
        description: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
    },
    {
        name: "Sarah Kim",
        photo: "sarah-kim",
        position: "Content Creator",
        description: "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries"
    },
]