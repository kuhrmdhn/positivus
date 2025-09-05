"use client"
import React, { useState } from 'react'
import Navigations from './Navigations'
import Fall from '../motion/Fall'
import { Button } from '../ui/button'
import { Menu, X } from 'lucide-react'
import Logo from '../ui/logo'

export default function Navbar() {
    const [showMobileNav, setShowMobileNav] = useState(false)
    function toggleNav() {
        setShowMobileNav(!showMobileNav)
    }

    return (
        <header className='h-18 lg:h-20 w-full px-3 sm:p-0 bg-background flex items-center justify-between fixed sm:sticky top-0 right-0 z-9999 sm:m-0 sm:translate-x-0'>
            <section className='w-1/3'>
                <Fall delay={0.1}>
                    <Logo />
                </Fall>
            </section>
            <section className='w-3/5 sm:w-5/6 lg:w-2/3 flex justify-end'>
                <div className='flex justify-end sm:hidden relative z-9999'>
                    <Fall delay={0.4}>
                        <Button onClick={toggleNav} variant={"ghost"} className='hover:bg-transparent !p-0 !h-fit'>
                            {showMobileNav ? <X size={48} /> : <Menu size={48} />}
                        </Button>
                    </Fall>
                </div>
                <div className={`h-dvh w-full z-999 sm:size-fit bg-white/10 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none border sm:border-none border-white/20 flex justify-center items-center fixed top-0 ${showMobileNav ? "left-0" : "left-[150%]"} duration-500 sm:relative sm:left-0`}>
                    <Navigations />
                </div>
            </section>
        </header>
    )
}
