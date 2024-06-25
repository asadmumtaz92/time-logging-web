import React from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

import ContactForm from '@/components/Comman-UI/contact-form/page'


const ContactPage = () => {


    const t = useTranslations("Home")
    const formLocale = {
        name: t('name'),
        email: t('email'),
        subject: t('subject'),
        message: t('message'),
        submit: t('submit'),
    }


    return (
        <div className={`grid grid-cols-12 min-h-[calc(100vh-50px)] px-[20px] md:px-[50px] xl:px-[80px]`}>
            <div className="col-start-1 col-end-13 lg:col-end-6 lg:col-end-5">
                <div className='flex flex-col justify-center h-full w-full'>
                    <p data-aos="fade-down" className='!font-impact text-primary text-[2rem] leading-[2rem] md:text-[3rem] md:leading-[3rem] tracking-[-0.8px] md:tracking-[0px] font-[400] not-italic uppercase text-nowrap'>
                        {t('lets_connect')}
                    </p>
                    <p data-aos="fade-up" className='!font-epilogue text-desc text-[1rem] md:text-[18px] leading-[24px] md:leading-[27px] font-[400] not-italic mt-[20px] md:mt-[16px]'>
                        {t('say_hello')} <Link href={`mailto:${t('author_email')}`} className='text-primary'>{t('author_email')}</Link>
                    </p>
                </div>
            </div>

            <div data-aos="fade-left" className="col-start-1 lg:col-start-7 lg:col-start-7 col-end-13 mt-[60px] lg:mt-0">
                <div className="flex justify-center items-center lg:min-h-[calc(100vh-50px)]">
                    <ContactForm formLocale={formLocale} />
                </div>
            </div>
        </div>
    )
}

export default ContactPage
