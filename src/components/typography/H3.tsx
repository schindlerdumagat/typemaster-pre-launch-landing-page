import { TypographyPropTypes } from "types/typographyPropTypes";

export default function H3({ children }: TypographyPropTypes) {

    return (
        <h3 className="text-darkblue text-h23 uppercase font-black">{children}</h3>
    )

}