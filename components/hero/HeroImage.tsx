"use client"
import Image from "next/image"
import React from "react"
import { motion } from "motion/react"
import FadeIn from "../motion/FadeIn"

export default function HeroImage() {
  return (
    <div className="h-full w-full relative flex justify-center items-center">
      <Megaphone />
      <Stars />
      <Circles />
      <Orbits />
      <AdditionalIcons />
    </div>
  )
}


type HeroIconProps = {
  src: string
  alt: string
  className?: string
}

function HeroIcon({ src, alt, className }: HeroIconProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1080}
      height={1080}
      className={className}
    />
  )
}

function Megaphone() {
  return (
    <FadeIn
      whileInView={{ opacity: [0, 1], scale: [1, 1, 1, 1, 0.8, 1.15, 1.1, 1] }}
      transition={{ duration: 1, delay: 1 }}
      className="size-[65%] relative -translate-y-[20%] z-100"
    >
      <motion.div
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <HeroIcon src="/images/megaphone.svg" alt="Megaphone Icon" />
      </motion.div>
    </FadeIn>
  )
}

function AdditionalIcons() {
  const additionalIconElements = [
    {
      icon: "love.svg",
      afterAnimation: {
        right: "15%",
        top: "5%"
      }
    },
    {
      icon: "share.svg",
      afterAnimation: {
        right: "5%",
        top: "10%"
      }
    },
    {
      icon: "play.svg",
      afterAnimation: {
        right: "5%",
        top: "25%"
      }
    },
    {
      icon: "location.svg",
      afterAnimation: {
        right: "7%",
        top: "40%"
      }
    },
  ]
  return (
    <>
      {
        additionalIconElements.map((el, index) => (
          <FadeIn
            key={index}
            initial={{ right: "40%", top: "30%", opacity: 0 }}
            whileInView={{ right: `${el.afterAnimation.right}`, top: `${el.afterAnimation.top}`, opacity: 1 }}
            transition={{ delay: 1.7 + (index * 0.1), duration: 0.3 }}
            className="size-12 lg:size-20 absolute"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 2 + index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <HeroIcon src={`/images/${el.icon}`} alt="Additional Icon" />
            </motion.div>
          </FadeIn>
        ))
      }
    </>
  )
}

function Stars() {
  const starElements = [
    {
      style: "size-5 lg:size-8 bottom-[7%] left-[45%]",
    },
    {
      style: "size-10 lg:size-14 bottom-[22%] left-[10%] rotate-45"
    }
  ]
  return (
    <>
      {
        starElements.map((el, index) => (
          <FadeIn
            key={index}
            transition={{ delay: 2.5 + (index * 0.5), duration: 0.5 }}
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                delay: 0.5 + (index * 0.5),
                repeat: Infinity,
                ease: "linear"
              }}
              className={`absolute ${el.style}`}
            >
              <HeroIcon src="/images/logo-icon.svg" alt="Small Star Icon" />
            </motion.span>
          </FadeIn>
        ))
      }
    </>
  )
}

function Orbits() {
  const orbits = [0, 1, 2]

  return (
    <>
      {
        orbits.map((_, index) => (
          <FadeIn
            key={index}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="w-5/6 absolute flex justify-center"
            style={{ left: `${10 - index * 5}%`, top: `${24 + index * 7}%` }}
          >
            <motion.div
              animate={
                index === 1 ? {} : { y: [0, index === 0 ? 5 : -5, 0] }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <HeroIcon src="/images/orbit.svg" alt={`Orbit ${index}`} />
            </motion.div>
          </FadeIn>
        ))
      }
    </>
  )
}

function Circles() {
  const circles = [
    { color: "primary", size: 28, top: "22%", left: "20%" },
    { color: "dark", size: 40, top: "12%", left: "10%" }
  ]

  return (
    <>
      {
        circles.map((circle, index) => (
          <FadeIn
            key={index}
            transition={{ duration: 0.8, delay: 3 + (index * 0.3) }}
            className="absolute rotate-45"
            style={{ top: circle.top, left: circle.left, width: circle.size, height: circle.size }}
          >
            <motion.div
              className="w-full h-full flex items-center justify-center"
              animate={{ scale: [1, 0.9, 1] }}
              transition={{
                duration: 3,
                delay: index * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <HeroIcon
                src={`/images/circle-${circle.color}.svg`}
                alt={`Small circle ${circle.color}`}
              />
            </motion.div>
          </FadeIn>
        ))
      }
    </>
  )
}
