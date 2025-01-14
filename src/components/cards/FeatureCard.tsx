import H3 from "components/typography/H3"
import P from "components/typography/P"
import { FeatureCardPropTypes } from "types/featureCardPropTypes"

export default function FeatureCard({ children, imageSrc, imageAlt, title }: FeatureCardPropTypes) {

    return (
        <div className="text-center w-80 md:text-left md:w-[31ch] lg:w-40 xl:w-64">
            <div className="mx-auto md:mx-0 md:mr-auto mb-12 rounded-2xl bg-darkorange w-16 h-16 flex justify-center items-center">
                <img src={imageSrc} alt={imageAlt} />
            </div>
            <H3 className="mb-6 md:w-[13ch]">{title}</H3>
            <P>{children}</P>
        </div>
    )

}