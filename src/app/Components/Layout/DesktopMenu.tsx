import React from "react"

interface Item {
    title: string;
    link: string;
    icon?: JSX.Element;
}
interface ItemProps {
    menuItems: Item[];
}

const DesktopMenu: React.FC<ItemProps> = ({ menuItems }) => {
    return (<nav className="hidden lg:flex w-full">
        <ul className="flex w-full justify-between">
            <div className="flex gap-8 items-center mx-auto">
                {
                    menuItems.slice(0, 3).map((item, index) => <li key={index}>
                        <a
                            aria-label={item.title}
                            className="flex gap-1 items-center"
                            href={item.link}
                        >
                            {item.icon}
                            {item.title}
                        </a>
                    </li>)
                }
            </div>
            <div className="flex gap-8 justify-between items-center">
                {
                    menuItems.slice(3, 7).map((item, index) => <li key={index}>
                        <a
                            aria-label={item.title}
                            className={`flex gap-1 items-center ${index === 0 && "w-full bg-secondary-400/50 py-2 px-5 rounded-sm"}`}
                            href={item.link}
                        >
                            {item.icon}
                            {item.title}
                        </a>
                    </li>
                    )
                }
            </div>
        </ul>
    </nav>
    )
}
export default DesktopMenu
