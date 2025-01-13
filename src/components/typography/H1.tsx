import { TypographyPropTypes } from "types/typographyPropTypes";

export default function H1({ children }: TypographyPropTypes) {

    return (
        <h1 className="text-darkblue text-h1 uppercase font-black">{children}</h1>
    )

}