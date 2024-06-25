import React from 'react'

import { Skeleton } from "@/components/ui/skeleton"


const Clients = () => {


    const logos = Array(20).fill(
        <div data-aos="zoom-in" data-aos-duration="2000" className="flex flex-col">
            <Skeleton className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-[60px] md:rounded-[75px]" />
            <Skeleton className="mt-[10px] h-4 w-[120px] md:w-[150px]" />
        </div>
    )
    const logos2 = Array(20).fill(
        <div data-aos="zoom-in" data-aos-duration="2000" className="flex flex-col">
            <Skeleton className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-[60px] md:rounded-[75px]" />
            <Skeleton className="mt-[10px] h-4 w-[120px] md:w-[150px]" />
        </div>
    )
    const logos3 = Array(20).fill(
        <div data-aos="zoom-in" data-aos-duration="2000" className="flex flex-col">
            <Skeleton className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-[60px] md:rounded-[75px]" />
            <Skeleton className="mt-[10px] h-4 w-[120px] md:w-[150px]" />
        </div>
    )
    const logos4 = Array(20).fill(
        <div data-aos="zoom-in" data-aos-duration="2000" className="flex flex-col">
            <Skeleton className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-[60px] md:rounded-[75px]" />
            <Skeleton className="mt-[10px] h-4 w-[120px] md:w-[150px]" />
        </div>
    )
    const logos5 = Array(20).fill(
        <div data-aos="zoom-in" data-aos-duration="2000" className="flex flex-col">
            <Skeleton className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-[60px] md:rounded-[75px]" />
            <Skeleton className="mt-[10px] h-4 w-[120px] md:w-[150px]" />
        </div>
    )
    const logos6 = Array(20).fill(
        <div data-aos="zoom-in" data-aos-duration="2000" className="flex flex-col">
            <Skeleton className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-[60px] md:rounded-[75px]" />
            <Skeleton className="mt-[10px] h-4 w-[120px] md:w-[150px]" />
        </div>
    )
    const logos7 = Array(20).fill(
        <div data-aos="zoom-in" data-aos-duration="2000" className="flex flex-col">
            <Skeleton className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-[60px] md:rounded-[75px]" />
            <Skeleton className="mt-[10px] h-4 w-[120px] md:w-[150px]" />
        </div>
    )

    const combinedLogos = []
    for (let i = 0; i < logos.length; i++) {
        combinedLogos.push(logos[i], logos3[i], logos2[i], logos5[i], logos4[i], logos6[i], logos7[i])
    }


    return (
        <div className="relative py-[70px] md:py-[100px] xl:py-[130px] border-b">
            <h1 data-aos="fade-up" className="text-primary text-center [font-size:_clamp(2rem,2rem+1vw,3rem)] font-[500]">
                Our Trusted Partner
            </h1>

            <div className="flex overflow-hidden pt-[80px]" data-aos="fade-up">
                <div className="flex items-center gap-x-[25px] md:gap-x-[40px] animate-scrollingLogo">
                    {combinedLogos.map((logo, index) => <div key={index}>{logo}</div>)}
                </div>

                <div className="flex items-center gap-x-[25px] md:gap-x-[40px] animate-scrollingLogo">
                    {combinedLogos.map((logo, index) => <div key={index}>{logo}</div>)}
                </div>
            </div>
        </div>
    )

}

export default Clients