"use client"
import { useState, useEffect, } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"

import { Link } from "@/navigation"


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


    return (
        <header id="navbar" className={`flex justify-between items-center w-full fixed z-[10] h-[50px]`}>
            <div data-aos="fade-down" className="flex justify-between items-center bg-white text-desc h-[50px] border-b-[0.5px] w-full px-[20px] md:px-[50px] xl:px-[80px]">
                <Link href="/" data-aos="fade-down" className="flex items-center mr-2">
                    <Image src={'/logo.svg'} priority className="w-full max-h-[50px]" width={12} height={12} alt="logged fair time logging time tracking" />
                </Link>
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
                                href="/"
                                className={`no-underline font-[500] text-[1.5rem] ${pathname.endsWith("/en") || pathname.endsWith("/dk") ? "text-primary" : "text-desc"}`}
                            >
                                {localeHeader?.home}
                            </Link>
                            <Link
                                onClick={handleLinkClick}
                                href="/contact"
                                className={`no-underline font-[500] text-[1.5rem] ${pathname.endsWith("/contact") ? "text-primary" : "text-desc"}`}
                            >
                                {localeHeader?.contact}
                            </Link>
                            <Link
                                onClick={handleLinkClick}
                                href="/login"
                                className={`no-underline font-[500] text-[1.5rem] ${pathname.endsWith("/login") ? "text-primary" : "text-desc"}`}
                            >
                                {localeHeader?.login}
                            </Link>
                            <Link
                                onClick={handleLinkClick}
                                href="/signup"
                                className={`no-underline font-[500] text-[1.5rem] ${pathname.endsWith("/signup") ? "text-primary" : "text-desc"}`}
                            >
                                {localeHeader?.signup}
                            </Link>
                            <>
                                {/* <div className="hidden flex mt-10 gap-x-[10px]">
                                    <Link
                                        locale="dk"
                                        href={replaceLocaleInPathname("dk")}
                                        className={`!font-epilogue no-underline font-[500] ${pathname.startsWith("/dk") ? "text-primary" : "text-desc"}`}
                                    >
                                        DK
                                    </Link>
                                    <span>|</span>
                                    <Link
                                        locale="en"
                                        href={replaceLocaleInPathname("en")}
                                        className={`!font-epilogue no-underline font-[500] ${pathname.startsWith("/en") ? "text-primary" : "text-desc"}`}
                                    >
                                        EN
                                    </Link>
                                </div> */}
                            </>
                        </div>
                    </>
                    : <div className="hidden sm:block" data-aos="fade-down">
                        <nav className="flex items-center h-[50px] md:gap-x-[1rem] xl:gap-x-[1.5rem] font-jost text-[1.2rem] leading-[1.2rem] tracking-[-0.48px] font-[500] no-italic text-nowrap">
                            <Link
                                href="/contact" data-aos="fade-down"
                                className={`flex items-center h-full no-underline px-[13px] ${pathname.endsWith("/contact") ? "text-primary" : "text-desc"}`}
                            >
                                {localeHeader?.contact}
                            </Link>
                            <Link
                                href="/login" data-aos-duration="1200" data-aos="fade-down"
                                className={`flex items-center h-full no-underline px-[13px] ${pathname.endsWith("/login") ? "text-primary" : "text-desc"}`}
                            >
                                {localeHeader?.login}
                            </Link>
                            <Link
                                href="/signup" data-aos-duration="1400" data-aos="fade-down"
                                className={`flex items-center h-full no-underline px-[13px] ${pathname.endsWith("/signup") ? "text-primary" : "text-desc"}`}
                            >
                                {localeHeader?.signup}
                            </Link>
                            <>
                                {/* <span>|</span>
                                <Link
                                    data-aos-duration="1700" data-aos="fade-down"
                                    locale="dk" href={replaceLocaleInPathname("dk")}
                                    className={`ml-1 no-underline font-[500] ${pathname.startsWith("/dk") ? "text-primary" : "text-desc"}`}
                                >
                                    DK
                                </Link>
                                <Link
                                    data-aos-duration="1900" data-aos="fade-down"
                                    locale="en" href={replaceLocaleInPathname("en")}
                                    className={`ml-1 no-underline font-[500] ${pathname.startsWith("/en") ? "text-primary" : "text-desc"}`}
                                >
                                    EN
                                </Link> */}
                            </>
                        </nav>
                    </div>
                }
            </div>
        </header>
    )
}
