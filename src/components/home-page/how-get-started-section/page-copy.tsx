import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'


const Benefits = () => {


    const t = useTranslations("Home")
    const BenefitData = [
        {
            id: 1,
            image: '/icons/company.png',
            title: `Step One`,
            description: `Register company`,
        },
        {
            id: 2,
            image: '/icons/employee.png',
            title: `Step Two`,
            description: `Add employee.`,
        },
        {
            id: 3,
            image: '/icons/logging.png',
            title: `Step Three`,
            description: `Start logging.`,
        },
    ]


    const Items = (data: any) => {
        const { id, image, title, description } = data?.data
        return (
            <div key={id} className={`flex items-start`}>
                <Image data-aos="fade-up" src={image} priority className='object-contain gap-[10px]' width={44} height={44} alt={title} />
                <div className='flex flex-col ml-[15px]'>
                    <h4 data-aos="fade-up" className='text-primary text-left text-[1.25rem] leading-[1.75rem] lg:text-[1.5rem] lg:leading-[2.125rem] font-[500]'>
                        {title}
                    </h4>
                    <p data-aos="fade-up" className='text-desc text-left text-[1rem] leading-[1.5rem] md:text-[1.125rem] leading-[1.625rem] font-[300]'>
                        {description}
                    </p>
                </div>
            </div>
        )
    }


    return (
        <div className='flex flex-col py-[70px] md:py-[100px] lg:py-[130px] px-[20px] md:px-[50px] xl:px-[80px] border-b min-h-[calc(100vh-50px)] justify-center'>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-x-[20px] lg:gap-x-[32px]`}>
                <div className={`flex items-center sh-full justify-center h-full w-full !rounded-[24px]`}>
                    <Image data-aos="zoom-in" data-aos-duration="2000" src={'/images/hgt.png'} priority className='flex w-[100%] h-[90%] md:max-w-[500px] lg:h-[100%] xl:w-[90%] xl:h-[90%]' width={110} height={100} alt='' />
                </div>

                <div className='flex flex-col justify-center mt-[40px] md:mt-0'>
                    <h1 data-aos="fade-up" className="text-primary text-center lg:text-left [font-size:_clamp(2rem,2rem+1vw,3rem)] font-[500]">
                        {`How To Get Started`}
                    </h1>

                    <p data-aos="fade-up" className='text-desc text-center lg:text-left text-[16px] font-[400] mb-[32px] lg:mb-[40px] xl:mb-[48px]'>
                        {`Three Simple Steps!`}
                    </p>

                    <div className='flex flex-col gap-y-[25px]'>
                        {BenefitData.map((item: any) => <Items key={item?.id} data={item} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits