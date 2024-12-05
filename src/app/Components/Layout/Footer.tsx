const footerItems = {
    about: {
        title: "لدیما؛دستیار آنلاین فروش مبتنی بر سفارش",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    },
    quickAccess: {
        title: "دسترسی سریع",
        items: [
            {
                title: "انواع چاپ",
                link: "/"
            },
            {
                title: "هدایای تبلیغاتی",
                link: "/"
            },
            {
                title: "طراحی تخصصی",
                link: "/"
            },
            {
                title: "چندرسانه ای",
                link: "/"
            }
        ]
    },
    contact: {
        title: "اطلاعات تماس",
        address: "آدرس؛تهران-پردیس-کدپستی۱۵۱۵-۸۷۸۷۸",
        phone: "تلفن پشتیبانی:۰۲۱-۱۲۳۴۵۶۷۸۹",
    },
    copyright: "ارائه شده توسط لیدما.@۲۰۲۴"
}

const Footer = () => {
    return (<footer className="bg-primary-900 text-white px-8 pb-20 pt-10 relative w-full h-fit overflow-hidden">
        <aside className="flex max-w-7xl mx-auto gap-10 justify-between mb-6">
            <article className="basis-2/5">
                <h3 className="text-2xl mb-6 font-bold">
                    {footerItems.about.title}
                </h3>
                <p className="text-justify font-medium text-lg">
                    {footerItems.about.description}
                </p>
            </article>
            <article className="basis-1/4">
                <h3 className="text-2xl mb-6 font-bold">
                    {footerItems.quickAccess.title}
                </h3>
                <ul className="font-medium text-lg flex flex-col gap-3">
                    {
                        footerItems.quickAccess.items.map((item, index) => <li key={index}>
                            <a
                                aria-label={item.title}
                                href={item.link}
                            >
                                {item.title}
                            </a>
                        </li>)
                    }
                </ul>
            </article>
            <article className="basis-1/4">
                <h3 className="text-2xl mb-6 font-bold">
                    {footerItems.contact.title}
                </h3>
                <ul className="font-medium text-lg flex flex-col gap-3 list-disc">
                    <li>{footerItems.contact.address}</li>
                    <li>{footerItems.contact.phone}</li>
                </ul>
            </article>
        </aside>
        <hr className="max-w-7xl mx-auto" />
        <aside className="mt-3 max-w-7xl mx-auto">
            <span>{footerItems.copyright}</span>
        </aside>
        <div className="border-b-primary-600/20 border-b-[68vw] border-r-[50vw] border-r-transparent w-2/3 h-full absolute top-0 end-0 before:absolute before:w-28 before:aspect-[1/13] before:-top-40 before:-start-[120%] before:2xl:-start-3/4 before:bg-primary-600/70 before:rotate-[-35deg]"></div>
    </footer>
    )
}
export default Footer
