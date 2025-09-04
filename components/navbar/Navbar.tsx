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
        <header className='h-18 lg:h-20 w-full bg-background flex items-center justify-between sticky top-0 z-9999'>
            <section className='w-1/3'>
                <Fall delay={0.1}>
                    <Logo />
                </Fall>
            </section>
            <section className='w-3/5 flex justify-end'>
                <div className='flex justify-end lg:hidden relative z-9999'>
                    <Fall delay={0.4}>
                        <Button onClick={toggleNav} variant={"ghost"} className='hover:bg-transparent !p-0 !h-fit'>
                            {showMobileNav ? <X size={48} /> : <Menu size={48} />}
                        </Button>
                    </Fall>
                </div>
                <div className={`h-dvh w-full z-999 lg:size-fit bg-white/10 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none border lg:border-none border-white/20 flex justify-center items-center fixed top-0 ${showMobileNav ? "left-0" : "left-full"} duration-500 lg:relative lg:left-0`}>
                    <Navigations />
                </div>
            </section>
        </header>
    )
}
