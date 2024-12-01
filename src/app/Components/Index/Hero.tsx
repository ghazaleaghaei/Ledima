import { PhotoIcon } from "@heroicons/react/24/outline"
import { VideoCameraIcon } from "@heroicons/react/24/outline"
import { GifIcon } from "@heroicons/react/24/outline"
import { NewspaperIcon } from "@heroicons/react/24/outline"

const hero = {
    title: "هر چیز که در جستن آنی ... آنی",
    subTitle: "کانون تبلیغات آریا",
    link: "/",
    categories: [
        {
            title: "انواع چاپ",
            icon: <NewspaperIcon className="w-8 aspect-square stroke-primary-700" />,
            link: "/",
        },
        {
            title: "هدایای تبلیغاتی",
            icon: <GifIcon className="w-8 aspect-square stroke-primary-700" />,
            link: "/",
        },
        {
            title: "طراحی تخصصی",
            icon: <PhotoIcon className="w-8 aspect-square stroke-primary-700" />,
            link: "/",
        },
        {
            title: "چندرسانه ای",
            icon: <VideoCameraIcon className="w-8 aspect-square stroke-primary-700" />,
            link: "/",
        },
    ]
}

const Hero = () => {
    return (<section className="mt-10 mb-20 relative flex justify-center">
        <div className="w-full bg-primary-900 aspect-[5/2] flex flex-col justify-center content-between items-center gap-8 relative overflow-hidden">
            <h1 className="text-white text-4xl font-bold">
                {hero.title}
            </h1>
            <p className="bg-orange-400 px-5 py-1 rounded-full font-bold">
                <a>
                    {hero.subTitle}
                </a>
            </p>
            <div className="bg-red-300 w-full h-[calc(100%+100px)] absolute -top-12 -end-[54vw] rotate-[50deg] bg-primary-600/20 after:w-full after:h-32 after:bg-primary-600/70 after:absolute after:top-32 after:start-0 z-40"></div>
        </div>
        <div className="absolute w-full max-w-5xl mx-auto -bottom-10 bg-white px-10 py-8 rounded shadow-xl z-40">
            <ul className="grid grid-cols-4 divide-x-2 w-full">
                {hero.categories.map((item, index) => <li key={index}>
                    <a
                        aria-label={item.title}
                        href={item.link}
                        className="flex gap-10 items-center"
                    >
                        {item.icon}
                        {item.title}
                    </a>
                </li>)}
            </ul>
        </div>
        <div className="bg-primary-500/40 h-24 w-full absolute -bottom-14 start-28 z-0 max-w-5xl mx-auto"></div>
    </section>
    )
}
export default Hero
