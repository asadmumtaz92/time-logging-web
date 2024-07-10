import React from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import Image from 'next/image'

import SiteLinks from './sub-components/site-links'
import ResoursesLink from './sub-components/resourses'


const Footer = () => {


    const t = useTranslations("Home")


    return (
        <div className={`w-full min-h-[80vh] flex flex-col bg-[url('/bg/footer.svg')] bg-center lg:bg-cover bg-no-repeat font-jost px-[20px] md:px-[50px] xl:px-[80px]`}>
            <div className="flex flex-col flex-1 justify-center">
                {/* TOP HEADINGS */}
                <>
                    <div className="flex justify-center mt-[60px] lg:mt-0">
                        <div data-aos="zoom-in" data-aos-duration="2000" className="flex items-center justify-center w-auto m-auto bg-white shadow rounded-[50px] px-[30px] py-[13px]">
                            <Link href="/signup" className="text-primary font-[500] text-[1.8rem] leading-[1.8rem]">
                                {t('start_jour')}
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col items-center pt-[20px]">
                        <h1 className='flex text-white text-[1.75rem] leading-[34px] text-center tracking-[0.01rem] font-[500] mb-[12px]'>
                            {t('join')} {t('author')}!
                        </h1>
                    </div>
                </>

                {/* FORM & LINKS */}
                <div data-aos="fade-up" className={`grid grid-cols-12 mt-[100px]`}>
                    <div className="col-start-1 col-end-13">
                        <div className={`grid grid-cols-1`}>
                            <div className='flex flex-col lg:flex-row lg:justify-between gap-x-[32px]'>
                                <div className='flex flex-col w-full items-start'>
                                    <Image src={'/logo.svg'} priority className="w-[200px] max-h-[80px]" width={12} height={12} alt="" />
                                    <p className='text-white text-[1.2rem] leading-[1.5rem] font-[400] mt-[15px]'>
                                        {t('join_our')}
                                    </p>
                                    {/* Subscribe FORM */}
                                    <form method='POST' className='flex flex-col sm:flex-row items-center w-full pt-[20px]'>
                                        <input
                                            type='text'
                                            autoCorrect=''
                                            placeholder={t('email_plac')}
                                            className='text-desc font-[500] h-[40px] px-[10px] rounded-[4px] w-full min-w-[150px] max-w-[400px] mr-[10px]'
                                        />
                                        <div className='flex items-center overflow-hidden bg-white rounded cursor-pointer min-w-[120px] max-w-[400px] h-[40px] mt-[20px] sm:mt-0'>
                                            <div className='w-full font-[500] text-[1rem] text-center text-primary'>
                                                {t('subsc')}
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                {/* LINKS */}
                                <div className='w-full p-[8px] pt-0 mt-[50px] lg:mt-0'>
                                    <div className={`grid grid-cols-2 gap-x-[20px]`}>
                                        <SiteLinks />
                                        <ResoursesLink />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* COPY RIGHTS */}
            <div className="col-start-1 col-end-13">
                <div className={`grid grid-cols-1 border-t-[1px] border-t-divider mt-10`}>
                    <div className='w-full pt-[32px] pb-[24px] font-[500] text-[1.1rem] text-center text-white'>
                        {`© 2024 ${t('author')}. ${t('all_right')}`}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer