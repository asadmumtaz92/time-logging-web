import React from 'react'
import { useTranslations } from 'next-intl'

import Button from '@/components/Comman-UI/button/page'


const PackagesComponent = () => {


    const t = useTranslations("Home")
    const packageList = [
        {
            id: 1,
            title: t('price_1_title'),
            price: t('price_1_price'),
            desc: [
                t('price_1_desc1'),
                t('price_1_desc2'),
                t('price_1_desc3'),
                t('price_1_desc4'),
                t('price_1_desc5'),
                t('price_1_desc6'),
                // t('price_1_desc7'),
            ]
        },
        {
            id: 2,
            title: t('price_2_title'),
            price: t('price_2_price'),
            desc: [
                t('price_2_desc1'),
                t('price_1_desc2'),
                t('price_1_desc3'),
                t('price_1_desc4'),
                t('price_1_desc5'),
                t('price_1_desc6'),
                // t('price_2_desc2'),
            ]
        },
        {
            id: 3,
            title: t('price_3_title'),
            price: t('price_3_price'),
            desc: [
                t('price_3_desc1'),
                t('price_1_desc2'),
                t('price_3_desc3'),
                t('price_1_desc4'),
                t('price_3_desc5'),
                t('price_1_desc6'),
                // t('price_2_desc2'),
                t('price_3_desc2'),
                // t('price_3_desc3'),
            ]
        },
    ]

    const PriceCard = (data: any) => {
        const { id, title, price, desc, } = data?.data
        return (
            <div key={id} className="flex flex-col items-center flex-1 rounded-xl overflow-hidden border border-border w-full h-full max-w-[500px] m-auto">
                <div className="animate-background-shine bg-[linear-gradient(130deg,#11005E,35%,#11005ECC,60%,#11005E)] bg-[length:200%_100%] text-6xl py-[50px] xl:p-[50px] text-white font-[600] w-full text-center">
                    <p className=''>
                        {price}
                        <span className='text-3xl'>DKK</span>
                        <span className='text-lg'>/MO</span>
                    </p>
                </div>
                <div className="animate-background-shine bg-[linear-gradient(130deg,#ffffff,45%,#11005E11,55%,#ffffff)] bg-[length:200%_100%] flex flex-col items-center justify-between text-primary h-full w-full px-[30px] py-[40px]">
                    <div>
                        <div className="text-primary text-4xl font-[600] text-center">
                            {title}
                        </div>
                        <div className='pt-[30px] pb-[25px] text-center text-desc text-[1.1rem] leading-[1.5rem] md:text-[1.25rem] leading-[1.625rem] font-[500]'>
                            {t('desc')}
                        </div>
                        <ul className='flex flex-col gap-y-[10px] text-desc text-[1.2rem] leading-[1.5rem] font-[300]'>
                            {desc.map((des: any) => <li className='text-desc'>- {des}</li>)}
                        </ul>
                    </div>
                    <button className="mt-[30px] w-full max-w-[300px] py-[10px] rounded-[25px] bg-primary hover:bg-white text-white hover:text-primary border text-[1.2rem] tracking-[0.5px] font-[500] transition duration-500 ease-out">
                        {t('subscribe')}
                    </button>
                </div>
            </div>
        )
    }


    return (
        <div className={`flex flex-col justify-center py-[70px] md:py-[100px] xl:py-[130px] px-[20px] md:px-[50px] xl:px-[80px] border-b`}>
            <h2 className="font-jost font-[700] text-primary [font-size:_clamp(2rem,2.5rem+1vw,4.5rem)] leading-[1.2] text-center w-full">
                {t('price_title')}
            </h2>

            <div className={`grid grid-cols-12 pt-[50px] lg:pt-[80px]`}>
                <div className="col-start-1 col-end-13">
                    <div className={`grid grid-cols-1 lg:grid-cols-3 gap-y-[50px] lg:gap-x-[20px]`}>
                        {packageList.map((item: any) => <PriceCard key={item?.id} data={item} />)}
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" className="flex flex-col items-center w-full pt-[30px] md:pt-[40px] lg:pt-[50px]">
                <p className='text-primary text-[1.3rem] font-[500] text-center mb-[20px]'>
                    {t('upto_200')}
                </p>
                <Button title={t('cont_sale')} url='/contact' />
            </div>
        </div>
    )
}

export default PackagesComponent