"use client"
import React from 'react'
import { motion } from "motion/react"

type Direction = "toRight" | "toLeft"

type Props = React.ComponentProps<typeof motion.div> & {
    children: React.ReactNode
    direction?: Direction
}

export default function Slide({ children, direction = "toRight", ...props }: Props) {
    const slideVariants = {
        toRight: {
            initial: { x: -100, opacity: 0 },
            animate: { x: 0, opacity: 1 },
        },
        toLeft: {
            initial: { x: 100, opacity: 0 },
            animate: { x: 0, opacity: 1 },
        },
    }

    const { animate, initial } = slideVariants[direction]

    return (
        <motion.div
            initial={initial}
            whileInView={animate}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            {...props}
        >
            {children}
        </motion.div>
    )
}
