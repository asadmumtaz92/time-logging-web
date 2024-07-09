import React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { useTranslations } from "next-intl"
import { Fonts } from "@/utils/fonts"

export const metadata: Metadata = {
    title: {
        template: "%s - Logged Fair",
        default: "Logged Fair",
    },
    description: "Designed By Logged Fair",
    keywords: [
        "Web development",
        "ios app development",
        "android app development",
        "wordpress development",
        "software development",
        "Time Logging",
        "Logged Fair"
    ],
}

import { AOSInit } from "@/components/wrappers/aos"
import Header from "@/components/header/header-dashboard"

interface RootLayoutProps {
    children: React.ReactNode
    params: { locale: string }
}


const RootLayout = ({ children, params: { locale } }: RootLayoutProps) => {


    const t = useTranslations("Home")

    const localeHeader = {
        author: t('author'),
        dashboard: t('dashboard'),
        registration: t('registration'),
        overview: t('overview'),
        add_user: t('add_user'),
        corporation: t('corporation'),
        logout: t(`logout`),
    }


    return (
        <html lang={locale}>
            <body className={`${Fonts.jost} bg-white text-primary`}>
                <AOSInit />
                <Header localeHeader={localeHeader} />
                <div className="pt-[50px] min-h-[100vh] !font-jost">
                    {children}
                </div>
            </body>
        </html>
    )
}

export default RootLayout
