import { TypographyPropTypes } from "types/typographyPropTypes";

export default function H1({ children }: TypographyPropTypes) {

    return (
        <h1 className="text-darkblue text-4xl sm:text-5xl md:text-h1 uppercase font-black">{children}</h1>
    )
}