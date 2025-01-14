import { TypographyPropTypes } from "types/typographyPropTypes";

export default function H3({ children, className }: TypographyPropTypes) {

    return (
        <h3 className={`text-darkblue text-h3 uppercase font-black ${className}`}>{children}</h3>
    )

}