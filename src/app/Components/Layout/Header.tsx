import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu"
import { FilmIcon, FolderArrowDownIcon, ShoppingCartIcon, UserCircleIcon, } from "@heroicons/react/16/solid"

interface Item {
    title: string;
    link: string;
    icon?: JSX.Element;
}

const menuItems: Item[] = [
    {
        title: "فیلم معرفی",
        link: "/",
        icon: <FilmIcon className="fill-black w-8 aspect-square lg:w-5" />
    },
    {
        title: "محصولات و خدمات",
        link: "/",
    },
    {
        title: "تماس با ما",
        link: "/",
    },
    {
        title: "دانلود اپلیکیشن",
        link: "/",
        icon: <FolderArrowDownIcon className="fill-black w-8 aspect-square lg:w-5" />
    },
    {
        title: " سبد سفارش",
        link: "/",
        icon: <ShoppingCartIcon className="fill-black w-8 aspect-square lg:w-5" />
    },
    {
        title: "ورود|ثبت نام",
        link: "/",
        icon: <UserCircleIcon className="fill-black w-8 aspect-square lg:w-5" />
    },

]


const Header = ({

}) => {
    return <header className="shadow-xl p-4 flex w-full justify-between max-w-7xl mx-auto">
        <div className="flex gap-3 items-center text-xl">
            <div className="w-10 aspect-square bg-primary-900" />
            <strong>لدیما</strong>
        </div>
        <MobileMenu menuItems={menuItems} />
        <DesktopMenu menuItems={menuItems} />
    </header>
}

export default Header
