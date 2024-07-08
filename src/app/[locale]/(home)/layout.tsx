import React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { useTranslations } from "next-intl"
import { Fonts } from "@/utils/fonts"

export const metadata: Metadata = {
    title: {
        template: "%s - Time Logging",
        default: "Time Logging",
    },
    description: "Designed By Time Logging",
    keywords: [
        "Web development",
        "ios app development",
        "android app development",
        "wordpress development",
        "software development",
        "Time Logging",
    ],
}

import { AOSInit } from "@/components/wrappers/aos"
import CursorFollower from "@/components/wrappers/cursor/page"
import Header from "@/components/header/page"
import Footer from "@/components/footer/page"

interface RootLayoutProps {
    children: React.ReactNode
    params: { locale: string }
}


const RootLayout = ({ children, params: { locale } }: RootLayoutProps) => {


    const t = useTranslations("Home")

    const localeHeader = {
        author: t('author'),
        home: t(`home`),
        contact: t(`contact`),
        login: t(`login`),
        signup: t(`signup`),
    }


    return (
        <html lang={locale}>
            <body className={`${Fonts.epilogue} ${Fonts.impact} bg-white text-primary`}>
                <AOSInit />
                <CursorFollower />
                <Header localeHeader={localeHeader} />
                <div className="pt-[50px] min-h-[100vh]">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout
