import { ButtonPropTypes } from "types/buttonPropTypes"

export default function Button({ 
    children, className
}: ButtonPropTypes) {

    return <button className={`rounded-lg px-4 py-3 md:px-6 md:py-4 text-sm sm:text-p font-bold duration-200 ${className}`}>{children}</button>
}