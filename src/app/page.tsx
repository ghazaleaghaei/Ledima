import Hero from "./Components/Index/Hero";
import Main from "./Components/Index/Main";

export default function Home() {
    return (
        <main className="bg-secondary-50 h-fit flex-1 max-w-7xl mx-auto w-full">
            <Hero />
            <Main />
        </main>
    );
}
