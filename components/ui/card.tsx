import React from "react"

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
}

export default function Card({ children, className,...props }: Props) {
  return (
    <div
      className={`border border-secondary border-b-10 hover:border-b rounded-4xl hover:translate-y-2 duration-500 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
