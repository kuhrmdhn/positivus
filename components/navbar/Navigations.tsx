import { Button } from '@/components/ui/button'
import React from 'react'
import LinkUnderline from '../ui/link-underline'
import Fall from '../motion/Fall'

function Navigations() {
    const navigations = ["About us", "Services", "Use Cases", "Pricing", "Blog"]
    return (
        <ul className='flex flex-col sm:flex-row gap-12 sm:gap-5 xl:gap-12 items-center justify-end'>
            <NavigationLists />
            <li>
                <Fall delay={(navigations.length + 1) / 10}>
                    <Button variant={"outline"} className='hover:bg-transparent h-12 border-foreground'>Request a Quote</Button>
                </Fall>
            </li>
        </ul>
    )
}


type Props = {
    textColor?: string
    underlineStyle?: string
}

function NavigationLists({ textColor, underlineStyle }: Props) {
    const navigations = ["About us", "Services", "Use Cases", "Pricing", "Blog"]

    return (
        <>
            {
                navigations.map((nav, i) => (
                    <li className='cursor-pointer list-none' key={i} style={{ color: textColor }}>
                        <Fall delay={(i + 2) / 10}>
                            <LinkUnderline href="/" className={underlineStyle} >
                                {nav}
                            </LinkUnderline>
                        </Fall>
                    </li>
                ))
            }
        </>
    )
}

Navigations.NavigationLists = NavigationLists
export default Navigations