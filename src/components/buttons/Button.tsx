import { ButtonPropTypes } from "types/buttonPropTypes"

export default function Button({ 
    children, className
}: ButtonPropTypes) {

    return <button className={`rounded-lg px-6 py-4 text-p font-bold duration-200 ${className}`}>{children}</button>
}