import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'


const HowGetStarted = () => {


    const t = useTranslations("Home")


    return (
        <div className='flex flex-col justify-center pt-[40px] md:pt-[60px] lg:pt-[80px] px-[20px] md:px-[50px] xl:px-[80px] border-b md:min-h-[calc(100vh-50px)]'>
            <div className="flex flex-col items-center w-full">
                <h2 className="w-full font-[700] text-primary [font-size:_clamp(1rem,2.1rem+1vw,4.5rem)] leading-[1.2] text-center">
                    {t('htg_title')}
                </h2>

                <p className='w-full font-[300] text-desc text-[1.5rem] leading-[2rem] md:text-[2rem] leading-[2.625rem] mb-[48px] text-center mt-3'>
                    {t('htg_slug')}
                </p>
            </div>

            <div className={`flex items-center justify-center h-full w-full rounded-[24px]`}>
                <Image src={'/images/steps.svg'} priority className='flex w-full [90%] h-[90%] md:max-h-[550px]' width={110} height={100} alt={t('htg_title')} />
            </div>
        </div>
    )
}

export default HowGetStarted