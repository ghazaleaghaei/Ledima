import React from "react"

interface Item {
    title: string;
    link: string;
    icon?: JSX.Element;
}
interface ItemProps {
    item: Item;
}

const SingleMenu: React.FC<ItemProps> = ({ item }) => {
    return (<li className="*:flex *:w-fit *:gap-x-4 *:items-center">
        <a href={item.link} aria-label={item.title}>
            {item.icon}
            {item.title}
        </a>
    </li>)
}
export default SingleMenu
