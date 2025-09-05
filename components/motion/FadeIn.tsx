"use client"
import React from 'react'
import { motion } from "motion/react"

type Props = React.ComponentProps<typeof motion.div> & {
    children: React.ReactNode
}

export default function FadeIn({ children, ...props }: Props) {
    return (
        <motion.div transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} {...props}>
            {children}
        </motion.div>
    )
}
