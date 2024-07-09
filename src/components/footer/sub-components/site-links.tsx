import React from 'react'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'


const SiteLinks = () => {


    const t = useTranslations('Home')
    const productLinks = [
        {
            id: 1,
            title: t('home'),
            url: '/',
        },
        {
            id: 2,
            title: t('contact'),
            url: '/contact',
        },
        {
            id: 3,
            title: t('login'),
            url: '/login',
        },
        {
            id: 4,
            title: t('signup'),
            url: '/signup',
        },
    ]

    const ProductItem = (data: any) => {
        const { id, title, url, } = data?.data
        return (
            <div key={id} className='w-fit' data-aos="fade-up">
                <Link href={`#${url}`} className='flex items-center items-center h-[25px]'>
                <p className='text-white text-[1.1rem] font-[400] leading-[1.4rem] text-left'>{title}</p>
                </Link>
            </div>
        )
    }


    return (
        <div className='flex flex-col gap-y-[15px]'>
            <h1 data-aos="fade-up" className='font-[600] text-white text-[1.3rem] leading-[1.5rem] text-left'>
                {t('usefull')}
            </h1>

            {productLinks.map((item: any) => <ProductItem key={item?.id} data={item} />)}
        </div>
    )
}

export default SiteLinks