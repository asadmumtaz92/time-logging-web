import React from 'react'
import '../globals.css'
import Link from 'next/link'

import type { Metadata } from "next"
export const metadata: Metadata = {
    title: "404 Not Found",
}


const NotFound = () => {

    return (
        <div className="flex flex-col justify-center items-center h-screen w-full text-center p-[30px] bg-[url('/bg/hero.png')] bg-cover bg-no-repeat bg-bottom">
            <h1 className="font-[700] [font-size:_clamp(3rem,3rem+1vw,5rem)] text-black leading-[1.2]">404</h1>
            <h1 className="mb-2 font-[700] [font-size:_clamp(2rem,2rem+1vw,4rem)] font-semibold text-black">Page not found</h1>
            <p className="mb-8 text-lg text-gray-600">Sorry, the page you are looking for could not be found.</p>
            <Link href="/" className="text-white bg-primary font-[700] px-[30px] py-[10px] rounded-[30px]">Return To Home</Link>
        </div>
    )
}

export default NotFound
