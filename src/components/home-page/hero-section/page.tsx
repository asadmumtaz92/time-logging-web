import React from 'react'
import { useTranslations } from 'next-intl'
import { Skeleton } from '@/components/ui/skeleton'

import Button from '@/components/Comman-UI/button/page'
import Image from 'next/image'


const HeroSection = () => {


    const t = useTranslations("Home")


    return (
        <div className={`flex flex-col lg:flex-row justify-center items-center relative min-h-[calc(100vh-50px)] border-b px-[20px] md:px-[50px] xl:px-[80px] py-[40px] md:py-[70px] xl:py-[100px]`}>
            <div className="flex flex-1 flex-col">
                <div data-aos="zoom-in" data-aos-duration="2000" className="hidden flex absolute top-[7rem] right-[4rem]">
                    <Skeleton className="bg-primary/[0.05] w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-[60px] md:rounded-[75px]" />
                </div>

                <h2 className="font-[700] text-primary [font-size:_clamp(1rem,2.2rem+1vw,2.5rem)] leading-[1.2] w-[100%] md:w-[95%] lg:w-[95%] xl:w-[95%]">
                    {t('hs_title')}
                </h2>

                <p className="mt-[20px] !font-[300] text-desc [font-size:_clamp(0.8rem,0.8rem+1vw,1.3rem)] leading-[1.1] w-[100%] md:w-[90%] lg:w-[95%] xl:w-[90%]">
                    {t('hs_desc')}
                </p>

                <div className='flex flex-col sm:flex-row mt-[30px] items-center'>
                    <Button title={t('hs_sche')} url='/signup' />
                    <h2 className="mt-6 sm:mt-0 ml-5 text-primary/[0.7] [font-size:_clamp(1.3rem,0.7rem+1vw,2rem)] leading-[1] font-[700] tracking-tight">
                        {t('hs_day')}
                    </h2>
                </div>

                <div data-aos="zoom-in" data-aos-duration="2000" className="flex absolute bottom-[4rem] left-[4rem]">
                    <Skeleton className="border-t-[40px]border-r-[30px] border-white bg-primary/[0.05] w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-[60px] md:rounded-[75px]" />
                </div>
            </div>

            <div className="flex flex-1 justify-center mt-[60px] lg:mt-0">
                <Image src={'/images/hero-section.svg'} priority className='flex w-[90%] h-[90%] sm:w-[70%] md:max-w-[500px] lg:w-[80%] lg:h-[100%] xl:w-[80%] xl:h-[90%]' width={110} height={100} alt={t('hs_title')} />
            </div>
        </div>
    )

}

export default HeroSection