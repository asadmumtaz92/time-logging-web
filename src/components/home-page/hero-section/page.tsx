import React from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import { Skeleton } from '@/components/ui/skeleton'


const HeroSection = () => {


    const t = useTranslations("Home")


    return (
        <div className={`flex flex-col justify-center items-center relative gap-y-[30px] min-h-[calc(100vh-50px)] border-b cbg-[url('/bg/hero.png')] bg-cover bg-no-repeat bg-bottom px-[20px] md:px-[50px] xl:px-[80px]`}>
            <div className="hidden flex absolute top-[7rem] right-[4rem]">
                <Skeleton className="bg-primary/[0.05] w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-[60px] md:rounded-[75px]" />
            </div>

            <h2 data-aos="fade-down" className="!font-epilogue !font-[500] text-primary [font-size:_clamp(1rem,1rem+1vw,3rem)] text-center w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw]">
                {t('hs_title')}
            </h2>

            <div data-aos="zoom-in" data-aos-duration="2000" className="flex absolute">
                <Skeleton className="bg-primary/[0.05] w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-[60px] md:rounded-[75px]" />
            </div>

            <h2 data-aos="fade-up" data-aos-duration="1700" className="!font-epilogue text-primary text-3xl !font-[600] tracking-tight">
                {t('hs_day')}
            </h2>

            <Link href={'/contact'} data-aos="fade-up" data-aos-duration="2500" className="!font-epilogue !font-[400] text-white text-[1rem] leading-[1rem] tracking-[0.5px] bg-primary/[0.8] hover:bg-primary pb-[12px] pt-[15px] px-[30px] border-[1px] border-primary shadow rounded-[30px]">
                {t('hs_sche')}
            </Link>

            <div data-aos="zoom-in" data-aos-duration="2000" className="flex absolute bottom-[3rem] left-[4rem]">
                <Skeleton className="border-t-[40px]border-r-[30px] border-white bg-primary/[0.05] w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-[60px] md:rounded-[75px]" />
            </div>
        </div>
    )

}

export default HeroSection