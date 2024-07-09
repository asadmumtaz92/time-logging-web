import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'


const Benefits = () => {


    const t = useTranslations("Home")
    const benefitList = [
        {
            id: 1,
            image: '/icons/secure.png',
            title: t('ben_1_title'),
            desc: t('ben_1_desc'),
        },
        {
            id: 2,
            image: '/icons/gdpr.png',
            title: t('ben_2_title'),
            desc: t('ben_2_desc'),
        },
        {
            id: 3,
            image: '/icons/envi.png',
            title: t('ben_3_title'),
            desc: t('ben_3_desc'),
        },
    ]
    const Items = (data: any) => {
        const { id, image, title, desc } = data?.data
        return (
            <div key={id} className={`flex items-start`}>
                <Image src={image} priority className='object-contain gap-[10px]' width={44} height={44} alt={title} />
                <div className='flex flex-col ml-[18px]'>
                    <h4 className='text-primary text-left text-[1.25rem] leading-[1.75rem] lg:text-[1.5rem] lg:leading-[2.125rem] font-[500]'>
                        {title}
                    </h4>
                    <p className='text-desc text-[1rem] leading-[1.5rem] md:text-[1.3rem] leading-[1.5rem] font-[400]'>
                        {desc}
                    </p>
                </div>
            </div>
        )
    }


    return (
        <div className='flex flex-col py-[70px] md:py-[100px] lg:py-[130px] px-[20px] md:px-[50px] xl:px-[80px] min-h-[calc(100vh-50px)] justify-center'>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-x-[20px] lg:gap-x-[32px]`}>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-primary text-center lg:text-left [font-size:_clamp(2rem,2rem+1vw,3rem)] font-[500]'>
                        {t('bene')}
                    </h1>

                    <div className='flex flex-col gap-y-[30px] mt-[30px]'>
                        {benefitList.map((item: any) => <Items key={item?.id} data={item} />)}
                    </div>
                </div>

                <div className={`flex items-center h-full justify-center h-full w-full mt-[40px] lg:mt-0 !rounded-[24px]`}>
                    <Image src={'/images/benefits.svg'} priority className='flex w-[90%] h-[90%] sm:w-[70%] md:max-w-[500px] lg:w-[80%] lg:h-[100%] xl:w-[80%] xl:h-[90%]' width={110} height={100} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Benefits