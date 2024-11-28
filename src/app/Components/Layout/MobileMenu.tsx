"use client"

import { Bars4Icon, FilmIcon, FolderArrowDownIcon, ShoppingCartIcon, UserCircleIcon, XCircleIcon } from "@heroicons/react/16/solid"
import React, { useState } from "react"
import Backdrop from "./Backdrop"
import SingleMenu from "./SingleMenu"

interface Item {
    title: string;
    link: string;
    icon?: JSX.Element;
}
interface ItemProps {
    item: Item;
}
const menuItems: Item[] = [
    {
        title: "فیلم معرفی",
        link: "/",
        icon: <FilmIcon className="fill-black w-8 aspect-square" />
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
        icon: <FolderArrowDownIcon className="fill-black w-8 aspect-square" />
    },
    {
        title: " سبد سفارش",
        link: "/",
        icon: <ShoppingCartIcon className="fill-black w-8 aspect-square" />
    },
    {
        title: "ورود|ثبت نام",
        link: "/",
        icon: <UserCircleIcon className="fill-black w-8 aspect-square" />
    },

]

const MobileMenu: React.FC = () => {
    const [isOpenDrawer, setIsOpenDrawer] = useState(false)

    const toggleMenu = () => {
        setIsOpenDrawer(!isOpenDrawer)
    }

    return (<>

        <button onClick={toggleMenu}>
            <Bars4Icon className="fill-black w-10 aspect-square" />
        </button>

        {isOpenDrawer && <Backdrop click={toggleMenu} />}

        <nav className={`lg:hidden w-[90%] max-w-[300px] fixed overflow-y-scroll bg-primary-500 top-0 end-0 h-[100vh] z-50 transition duration-300 divide-y-[.5px] divide-secondary-200 divide-opacity-2 ${isOpenDrawer ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="flex flex-col items-center justify-between bg-secondary-200 p-4">
                <div
                    className="me-auto cursor-pointer"
                    onClick={toggleMenu}
                >
                    <XCircleIcon className="w-7 h-7 stroke-red-500 fill-none" />
                </div>
            </div>
            <ul className="flex flex-col gap-4 p-4 divide-y justify-center *:p-2">
                {
                    menuItems?.map((item, index) => <SingleMenu
                        item={item}
                        key={index}
                    />
                    )
                }
            </ul>
        </nav>
    </>)
}
export default MobileMenu
