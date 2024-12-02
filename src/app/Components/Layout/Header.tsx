import { CloudArrowDownIcon } from "@heroicons/react/24/outline";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu"
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { FilmIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";

interface Item {
    title: string;
    link: string;
    icon?: JSX.Element;
}

const menuItems: Item[] = [
    {
        title: "فیلم معرفی",
        link: "/",
        icon: <FilmIcon className="stroke-black w-8 aspect-square lg:w-5" />
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
        icon: <CloudArrowDownIcon className="stroke-black w-8 aspect-square lg:w-5" />
    },
    {
        title: " سبد سفارش",
        link: "/",
        icon: <ShoppingCartIcon className="stroke-black w-8 aspect-square lg:w-5" />
    },
    {
        title: "ورود|ثبت نام",
        link: "/",
        icon: <UserCircleIcon className="stroke-black w-8 aspect-square lg:w-5" />
    },

]


const Header = ({

}) => {
    return <header className="shadow-lg shadow-secondary-400 h-fit p-4 flex w-full justify-between max-w-7xl mx-auto">
        <div className="flex gap-3 items-center text-xl">
            <div className="w-10 aspect-square bg-primary-900" />
            <strong>لدیما</strong>
        </div>
        <MobileMenu menuItems={menuItems} />
        <DesktopMenu menuItems={menuItems} />
    </header>
}

export default Header
