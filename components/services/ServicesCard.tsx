import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Card from '../ui/card'

type Props = {
  title: {
    firstLine: string,
    secondLine: string
  },
  icon: string,
  variants: "bgGray" | "bgPrimary" | "bgDark"
}

const cardVariants = {
  bgGray: {
    bgTitle: "bg-primary",
    bgCard: "bg-tertiary",
    iconColor: "text-primary",
    bgArrowIcon: "bg-secondary",
    ctaColor: "text-secondary"
  },
  bgPrimary: {
    bgTitle: "bg-tertiary",
    bgCard: "bg-primary",
    iconColor: "text-tertiary",
    bgArrowIcon: "bg-secondary",
    ctaColor: "text-secondary"
  },
  bgDark: {
    bgTitle: "bg-tertiary",
    bgCard: "bg-secondary",
    iconColor: "text-secondary",
    bgArrowIcon: "bg-tertiary",
    ctaColor: "text-tertiary"
  },
}

export default function ServicesCard({ title, icon, variants }: Props) {
  const { bgCard, bgTitle, iconColor, bgArrowIcon, ctaColor } = cardVariants[variants]
  return (
    <Card
      className={`${bgCard} h-[200px] lg:h-[310px] flex p-5 lg:p-10`}
    >
      <div className="w-1/2 h-full font-pt-sans flex flex-col justify-between">
        <section className='flex flex-col font-bold text-lg lg:text-2xl gap-0.5'>
          <h2 className={`${bgTitle} w-fit p-2 rounded-lg`}>
            {title.firstLine}
          </h2>
          <h3 className={`${bgTitle} w-fit p-2 rounded-lg`}>
            {title.secondLine}
          </h3>
        </section>
        <Link href="/" className='flex gap-3 w-fit items-center group text-sm lg:text-base'>
          <span className={`${bgArrowIcon} ${iconColor} group-hover:rotate-[405deg] group-hover:translate-x-[300%] duration-500 flex size-fit p-1 rounded-full`}>
            <ArrowUpRight />
          </span>
          <p className={`${ctaColor} group-hover:-translate-x-[50%] duration-500`}>Learn More</p>
        </Link>
      </div>
      <span className="w-1/2 h-full flex justify-center items-center">
        <Image
          className="size-3/4 aspect-auto"
          src={`./images/${icon}.svg`}
          alt="Services Card Icon"
          width={1080}
          height={1080}
        />
      </span>
    </Card>
  )
}
