import Image from "next/image"
import FadeIn from "../motion/FadeIn"
import Divider from "../ui/divider"

export default function CompanyMarquee() {
    const companyLogos = ["amazon", "dribble", "hubspot", "notion", "netflix", "zoom"]

    return (
        <>
            <Divider />
            <FadeIn transition={{ duration: 1, delay: 0.7 }}>
                <div className="w-full h-10 lg:h-20 flex overflow-hidden relative mask-marquee">
                    <div className="flex items-center animate-marquee">
                        {
                            [...companyLogos, ...companyLogos].map((logo, index) => (
                                <div
                                    className="w-[75px] lg:w-[150px] flex-shrink-0 mx-8"
                                    key={index}
                                >
                                    <Image
                                        className="w-full grayscale"
                                        src={`/images/${logo}.svg`}
                                        alt={`${logo} logo`}
                                        height={80}
                                        width={150}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </FadeIn>
        </>
    )
}
