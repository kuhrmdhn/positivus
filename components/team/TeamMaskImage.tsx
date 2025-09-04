import Image from 'next/image'
import React from 'react'

type Props = {
    src: string
    alt: string
}

export default function TeamMaskImage({ src, alt }: Props) {
    return (
        <div
            className="size-16 lg:size-20"
            style={{
                maskImage: "url(/images/team-mask.svg)",
                WebkitMaskImage: "url(/images/team-mask.svg)",
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskSize: 'cover',
                WebkitMaskSize: 'cover'
            }}
        >
            <Image
                src={src}
                alt={alt}
                width={1080}
                height={1080}
                className="w-full aspect-square"
            />
        </div>
    )
}
