"use client"
import { useState, useEffect, } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"

import { Link } from "@/navigation"
import { LogOutIcon } from "lucide-react"


export default function Header({ localeHeader }: any) {


    const pathname = usePathname()
    const replaceLocaleInPathname = (newLocale: string) => {
        const parts = pathname.split("/")
        parts[1] = newLocale
        return `/${parts.slice(2).join("/")}`
    }
    const [isMobile, setIsMobile] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [prevScrollpos, setPrevScrollpos] = useState(0)
    const [scrollTimeout, setScrollTimeout] = useState<number | null>(null)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const handleLinkClick = () => {
        setIsMenuOpen(false)
    }
    const handleScroll = () => {
        const currentScrollPos = window.scrollY
        const navbar = document.getElementById("navbar")

        if (navbar) {
            navbar.style.top = "-60px"
            // if (currentScrollPos > prevScrollpos && currentScrollPos > 50) {
            //     navbar.style.top = window.screen?.width < 768 ? "-76px" : "-96px"
            // } else {
            //     navbar.style.top = window.screen?.width < 768 ? "-76px" : "-96px"
            // }
        }

        setPrevScrollpos(currentScrollPos)

        if (scrollTimeout) {
            clearTimeout(scrollTimeout)
        }

        setScrollTimeout(
            setTimeout(() => {
                const navbar = document.getElementById("navbar")
                if (navbar) {
                    navbar.style.transition = "all 0.3s ease-in-out"
                    navbar.style.top = "0"
                }
            }, 100) as unknown as number
        )
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("scroll", handleScroll)

            if (scrollTimeout) {
                clearTimeout(scrollTimeout)
            }
        }
    }, [prevScrollpos, scrollTimeout])

    const logoutHandler = () => {
        localStorage.clear()
        localStorage.removeItem('userInfo')
        localStorage.removeItem('token')
        setIsMenuOpen(false)
        window.location.href = '/'
    }


    return (
        <header id="navbar" className={`flex justify-between items-center w-full fixed z-[10] h-[50px]`}>
            <div data-aos="fade-down" className="flex justify-end md:justify-between items-center  bg-white text-desc h-[50px] border-b-[0.5px] w-full px-[20px] md:px-[50px] xl:px-[80px]">

                {isMobile
                    ? <>
                        <Image
                            data-aos="fade-down"
                            src="/icons/menu.svg" alt="Menu Logo" width={35} height={35}
                            className="cursor-pointer"
                            onClick={toggleMenu} priority
                        />
                        <div className={`flex flex-col justify-center items-center gap-y-[20px] fixed top-0 left-0 w-full min-h-[100vh] bg-white font-jost transform transition-transform duration-500 ease-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                            <Image
                                data-aos="fade-down"
                                src="/icons/close.svg" alt="Menu Logo" width={24} height={24}
                                className="absolute top-4 right-[20px] cursor-pointer"
                                onClick={toggleMenu} priority
                            />
                            <Link
                                onClick={handleLinkClick}
                                href="/dashboard"
                                className={`no-underline font-[500] text-[1.5rem] ${pathname.endsWith("/dashboard") ? "text-primary" : "text-desc"}`}
                            >
                                {localeHeader?.dashboard}
                            </Link>
                            <Link
                                onClick={handleLinkClick}
                                href="/dashboard/registration"
                                className={`no-underline font-[500] text-[1.5rem] ${pathname.endsWith("/registration") ? "text-primary" : "text-desc"}`}
                            >
                                {localeHeader?.registration}
                            </Link>
                            <Link
                                onClick={handleLinkClick}
                                href="/dashboard/overview"
                                className={`no-underline font-[500] text-[1.5rem] ${pathname.endsWith("/overview") ? "text-primary" : "text-desc"}`}
                            >
                                {localeHeader?.overview}
                            </Link>
                            <Link
                                onClick={handleLinkClick}
                                href="/dashboard/add_user"
                                className={`no-underline font-[500] text-[1.5rem] ${pathname.endsWith("/add_user") ? "text-primary" : "text-desc"}`}
                            >
                                {localeHeader?.add_user}
                            </Link>
                            <Link
                                onClick={handleLinkClick}
                                href="/dashboard/corporation"
                                className={`no-underline font-[500] text-[1.5rem] ${pathname.endsWith("/corporation") ? "text-primary" : "text-desc"}`}
                            >
                                {localeHeader?.corporation}
                            </Link>
                            <div
                                onClick={logoutHandler}
                                className={`font-[500] text-[1.5rem] leading-[1.5rem] cursor-pointer`}
                            >
                                {localeHeader?.logout}
                            </div>
                            <>
                                {/* <div className="hidden flex gap-x-[10px]">
                                    <Link
                                        locale="dk"
                                        href={replaceLocaleInPathname("dk")}
                                        className={`font-jost no-underline font-[500] ${pathname.startsWith("/dk") ? "text-primary" : "text-desc"}`}
                                    >
                                        DK
                                    </Link>
                                    <span>|</span>
                                    <Link
                                        locale="en"
                                        href={replaceLocaleInPathname("en")}
                                        className={`font-jost no-underline font-[500] ${pathname.startsWith("/en") ? "text-primary" : "text-desc"}`}
                                    >
                                        EN
                                    </Link>
                                </div> */}
                            </>
                        </div>
                    </>
                    : <div className="hidden sm:flex justify-between w-full" data-aos="fade-down">
                        <nav className="flex items-center h-[50px] md:gap-x-[1rem] font-jost text-[1.2rem] leading-[1.2rem] tracking-[-0.48px] font-[500] no-italic text-nowrap">
                            <Link
                                href="/dashboard/registration" data-aos="fade-down"
                                className={`flex items-center h-full no-underline pr-[13px] ${pathname.endsWith("/registration") ? "text-primary" : "text-desc"}`}
                            >
                                {localeHeader?.registration}
                            </Link>
                            <Link
                                href="/dashboard/overview" data-aos-duration="1200" data-aos="fade-down"
                                className={`flex items-center h-full no-underline px-[13px] ${pathname.endsWith("/overview") ? "text-primary" : "text-desc"}`}
                            >
                                {localeHeader?.overview}
                            </Link>
                            <Link
                                href="/dashboard/add_user" data-aos-duration="1400" data-aos="fade-down"
                                className={`flex items-center h-full no-underline px-[13px] ${pathname.endsWith("/add_user") ? "text-primary" : "text-desc"}`}
                            >
                                {localeHeader?.add_user}
                            </Link>
                            <Link
                                href="/dashboard/corporation" data-aos-duration="1400" data-aos="fade-down"
                                className={`flex items-center h-full no-underline px-[13px] ${pathname.endsWith("/corporation") ? "text-primary" : "text-desc"}`}
                            >
                                {localeHeader?.corporation}
                            </Link>
                        </nav>
                        <div className="">
                            <div data-aos="fade-down" data-aos-duration="1400" className="flex justify-center items-center h-full w-fit cursor-pointer group">
                                <p className="mr-2 text-[1rem] leading-[0.8rem] font-jost font-[500] h-[50px] flex flex-col justify-center">
                                    {`Username`}<br />
                                    <span className="text-[0.7rem] pl-1 leading-[0.6rem] mt-[3px]">Admin</span>
                                </p>
                                <Image src={'/icons/user.png'} priority className="w-[30px] h-[30px] rounded-[15px] border p-[4px]" width={12} height={12} alt="user photo" />
                                {/* DROPDOWN */}
                                <div className="absolute top-[50px] right-[0px] z-[2] bg-white rounded-b-[10px] border-primary px-[20px] py-[30px] shadow-md hidden group-hover:block w-[230px]">
                                    <div className="flex items-center border-b pb-2 text-primary font-[500] font-jost text-[1rem]" onClick={logoutHandler}>
                                        <LogOutIcon className="mr-2 text-red-500 rotate-[180deg]" size={17} /> {localeHeader.logout}
                                    </div>
                                    <>
                                        {/* <div className="hidden flex justify-between mt-4 pb-1">
                                            <Link
                                                data-aos-duration="1900" data-aos="fade-down"
                                                locale="en" href={replaceLocaleInPathname("en")}
                                                className={`ml-1 no-underline font-[500] ${pathname.startsWith("/en") ? "text-primary" : "text-desc"}`}
                                            >
                                                EN
                                            </Link>
                                            <span>|</span>
                                            <Link
                                                data-aos-duration="1700" data-aos="fade-down"
                                                locale="dk" href={replaceLocaleInPathname("dk")}
                                                className={`ml-1 no-underline font-[500] ${pathname.startsWith("/dk") ? "text-primary" : "text-desc"}`}
                                            >
                                                DK
                                            </Link>
                                        </div> */}
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </header>
    )
}
