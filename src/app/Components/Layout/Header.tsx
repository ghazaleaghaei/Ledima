import Image from "next/image"
import MobileMenu from "./MobileMenu"

const Header = ({

}) => {
    return <header className="shadow-xl p-2 flex w-full justify-between">
        <div className="flex gap-4 items-center text-lg">
            <div className="w-10 aspect-square bg-primary-900" />
            <strong>لدیما</strong>
        </div>
        <MobileMenu />
    </header>
}

export default Header
