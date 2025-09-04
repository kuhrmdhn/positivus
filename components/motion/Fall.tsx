"use client"
import React from 'react'
import { motion } from "motion/react"

type Props = React.ComponentProps<typeof motion.div> & {
    delay?: number,
    children: React.ReactNode
}

export default function Fall({ children, delay }: Props) {
    const variants = {
        initial: { y: "-100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
    }

    return (
        <motion.div variants={variants} viewport={{ once: true }} whileInView="animate" initial="initial" transition={{ duration: 0.7, delay: delay || 0 }}>
            {children}
        </motion.div>
    )
}
