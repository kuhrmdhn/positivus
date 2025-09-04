"use client"
import { motion } from 'motion/react'
import React from 'react'

type Props = React.ComponentProps<typeof motion.div> & {
  children: React.ReactNode
}

export default function ShowUp({ children, ...props }: Props) {
  const variants = {
    show: { y: 0, opacity: 1 },
    initial: { y: 100, opacity: 0 }
  }
  return (
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        {...props}
      >
        {children}
      </motion.div>
  )
}
