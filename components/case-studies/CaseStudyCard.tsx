import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import ShowUp from '../motion/ShowUp'
import LinkUnderline from '../ui/link-underline'

type Props = {
  children: React.ReactNode
  delay?: number
}

export default function CaseStudyCard({ children, delay }: Props) {
  return (
    <ShowUp transition={{ duration: 0.5, delay: delay }} className='h-[200px] lg:h-1/2 w-5/6 md:w-3/5 lg:w-[30%] px-5 lg:px-0 py-3 bg-secondary lg:bg-transparent shrink-0 snap-center lg:snap-none rounded-2xl lg:rounded-none'>
      <section className='h-full text-tertiary flex flex-col justify-center gap-5 lg:gap-0 lg:justify-between'>
        {children}
        <span className='text-primary flex gap-2 group'>
          <LinkUnderline className='before:bg-primary' href="/">
            Learn More
          </LinkUnderline>
          <ArrowUpRight className='-translate-x-[200%] opacity-0 duration-300 group-hover:opacity-100 group-hover:translate-x-0' />
        </span>
      </section>
    </ShowUp>
  )
}
