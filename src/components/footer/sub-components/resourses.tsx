import React from 'react'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'


const RecoursesLinks = () => {


    const t = useTranslations("Home")
    const recoursesLinks = [
        {
            id: 1,
            title: t('term_cond'),
            url: '/terms-conditions',
        },
        {
            id: 2,
            title: t('priv_poli'),
            url: '/privacy-policy',
        },
        {
            id: 3,
            title: t('cook_poli'),
            url: '/cookies-policy',
        },
    ]

    const RecoursesItem = (data: any) => {
        const { id, title, url, } = data?.data
        return (
            <div key={id} className='w-fit' data-aos="fade-up">
                <Link href={url} className='flex items-center items-center h-[25px]'>
                    <p className='text-desc text-[14px] font-[400] leading-[18px] text-left'>{title}</p>
                </Link>
            </div>
        )
    }


    return (
        <div className='flex flex-col gap-y-[15px]'>
            <h1 data-aos="fade-up" className='font-[600] text-primary text-[1rem] leading-[1.5rem] text-left'>
                {t('resources')}
            </h1>

            {recoursesLinks.map((item: any) => <RecoursesItem key={item?.id} data={item} />)}
        </div>
    )
}

export default RecoursesLinks