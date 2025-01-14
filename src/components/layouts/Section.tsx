import { SectionPropTypes } from "types/sectionPropTypes";

export default function Section({ children, className }: SectionPropTypes) {

    return (
        <section className={`md:px-10 lg:px-24 xl:px-40 ${className}`}>
            {children}
        </section>
    )
}