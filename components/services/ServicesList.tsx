import React from 'react'
import ServicesCard from './ServicesCard'
import ShowUp from '../motion/ShowUp'

export default function ServicesList() {
    function getCardVariant(index: number): "bgGray" | "bgPrimary" | "bgDark" {
        const id = index + 1
        if (id % 3 === 1) {
            return "bgGray"
        } else if (id % 3 === 2) {
            return "bgPrimary"
        } else {
            return "bgDark"
        }
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10'>
            {
                services.map((service, index) => (
                    <ShowUp className='pb-3' transition={{ duration: 0.8, delay: index % 2 === 0 ? 0 : 0.3 }} key={index}>
                        <ServicesCard
                            icon={service.icon}
                            title={service.title}
                            variants={getCardVariant(index)}
                        />
                    </ShowUp>
                ))
            }
        </div>
    )
}


const services = [
    {
        title: {
            firstLine: "Search engine",
            secondLine: "optimization"
        },
        icon: "seo"
    },
    {
        title: {
            firstLine: "Pay-per-click",
            secondLine: "advertising"
        },
        icon: "pay-per-click-advertising"
    },
    {
        title: {
            firstLine: "Social media",
            secondLine: "marketing"
        },
        icon: "social-media-marketing"
    },
    {
        title: {
            firstLine: "Email",
            secondLine: "marketing"
        },
        icon: "email-marketing"
    },
    {
        title: {
            firstLine: "Content",
            secondLine: "creation"
        },
        icon: "content-creation"
    },
    {
        title: {
            firstLine: "Analytics and",
            secondLine: "tracking"
        },
        icon: "analytics-and-tracking"
    },
]