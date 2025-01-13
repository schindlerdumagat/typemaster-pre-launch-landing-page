import { TypographyPropTypes } from "types/typographyPropTypes";

export default function H2({ children }: TypographyPropTypes) {

    return (
        <h2 className="text-darkblue text-h2 uppercase font-black">{children}</h2>
    )

}