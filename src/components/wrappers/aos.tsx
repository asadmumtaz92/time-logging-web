"use client"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"


export const AOSInit = () => {


    useEffect(() => {
        AOS.init({
            easing: "ease-out-quad",
            duration: 1000,
            // offset: 200,
            // disable: true/false,
            // disable: function () {
            //     var maxWidth = 1024
            //     return window.innerWidth < maxWidth
            // }
        })
    }, [])

    return null
}
