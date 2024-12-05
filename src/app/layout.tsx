import type { Metadata } from "next";
import "./globals.css";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";


export const metadata: Metadata = {
    title: "لدیما",
    description: "لدیما|طراحی سایت",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" dir="rtl">
            <body className="flex flex-col min-h-screen">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
