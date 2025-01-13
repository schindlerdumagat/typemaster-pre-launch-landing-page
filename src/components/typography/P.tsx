import { TypographyPropTypes } from "types/typographyPropTypes";

export default function P({ children }: TypographyPropTypes) {

    return (
        <p className="text-lightgray text-p font-medium">{children}</p>
    )

}