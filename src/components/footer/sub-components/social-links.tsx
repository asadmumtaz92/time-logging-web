import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'


const SocialLinks = () => {


    const t = useTranslations('Home')
    const socialLink = [
        {
            id: 1,
            icon: '/icons/facebook.svg',
            title: 'Facebook',
            url: ''
        },
        {
            id: 2,
            icon: '/icons/instagram.svg',
            title: 'Instagram',
            url: ''
        },
        {
            id: 3,
            icon: '/icons/twitter.svg',
            title: 'Twitter',
            url: ''
        },
        {
            id: 4,
            icon: '/icons/linkedin.svg',
            title: 'LinkedIn',
            url: ''
        },
    ]

    const SocialItem = (data: any) => {
        const { id, icon, title, url, } = data?.data
        return (
            <div key={id} className='w-fit' data-aos="fade-up">
                <Link href={url} className='flex items-center' target='_blank'>
                    <Image src={icon} priority className='w-auto mr-[11px]' width={24} height={24} alt={`${title} icon`} />
                    <p className='text-desc text-[14px] font-[400] leading-[14px] text-left'>{title}</p>
                </Link>
            </div>
        )
    }


    return (
        <div className='flex flex-col gap-y-[15px]'>
            <h1 data-aos="fade-up" className='font-[600] text-primary text-[1rem] leading-[1.5rem] text-left'>
                {t('social')}
            </h1>

            {socialLink.map((item: any) => <SocialItem key={item?.id} data={item} />)}
        </div>
    )
}

export default SocialLinks