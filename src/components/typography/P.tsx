import { TypographyPropTypes } from "types/typographyPropTypes";

export default function P({ children, className }: TypographyPropTypes) {

    return (
        <p className={`text-lightgray text-p font-medium ${className}`}>{children}</p>
    )

}