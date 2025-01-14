import Button from "components/buttons/Button"
import logo from "/shared/logo.svg"

export default function Header() {

    return (
        <header className="sticky overflow-hidden top-0 z-10 bg-white w-full flex justify-between items-center pt-6 px-6 mb-10 max-w-screen-xl sm:mb-16 md:px-10 lg:px-24 xl:px-40">
            <img src={logo} alt="logo" />
            <Button className="bg-verylightblue text-darkblue hover:bg-darkblue hover:text-white">PRE-ORDER NOW</Button>
        </header>
    )

}