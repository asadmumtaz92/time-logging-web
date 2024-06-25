import React from 'react'
import { useTranslations } from 'next-intl'

import SiteLinks from './sub-components/site-links'
import ResoursesLink from './sub-components/resourses'
import SocialLinks from './sub-components/social-links'


const Footer = () => {


    const t = useTranslations("Home")


    return (
        <div className={`w-full min-h-[100vh] flex flex-col bg-[url('/bg/footer.svg')] bg-center lg:bg-cover bg-no-repeat mt-[70px]md:mt-[100px]xl:mt-[130px] px-[20px] md:px-[50px] xl:px-[80px]`}>
            <div className="flex flex-col flex-1 justify-center">
                {/* TOP HEADINGS */}
                <>
                    <div className="flex justify-center mt-[50px] md:mt-0">
                        <div data-aos="zoom-in" data-aos-duration="2000" className="flex items-center justify-center w-auto m-auto bg-white shadow rounded-[30px] px-[15px] py-[7px]">
                            {/* <Image src="/icons/rocket.png" priority className='w-[24px] h-[24px]' alt="rocket" height={10} width={10} /> */}
                            <p className="text-desc font-[600] text-[0.75rem] lg:text-[1rem] leading-[1.5rem] mt-1 ml-[6px]">
                                {t('start_jour')}
                            </p>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="flex flex-col items-center pt-[20px]">
                        <h1 className='flex text-primary text-[1.75rem] leading-[34px] text-center tracking-[0.01rem] font-[500] mb-[12px]'>
                            {t('join')} {t('author')}!
                        </h1>
                    </div>
                </>

                {/* FORM & LINKS */}
                <div data-aos="fade-up" className={`grid grid-cols-12 mt-[100px]`}>
                    <div className="col-start-1 col-end-13">
                        <div className={`grid grid-cols-1`}>
                            <div className='flex flex-col lg:flex-row lg:justify-between gap-x-[32px]'>
                                <div className='flex flex-col w-full'>
                                    <h1 className='flex text-primary text-[1.75rem] leading-[1.75rem] text-center tracking-[0.01rem] font-[500] uppercase'>
                                        {t('author')}
                                    </h1>
                                    <p className='text-desc text-[1rem] leading-[1.5rem] font-[400] mt-[15px]'>
                                        {t('join_our')}
                                    </p>
                                    {/* Subscribe */}
                                    <form method='POST' className='flex flex-col sm:flex-row items-center w-full pt-[30px]'>
                                        <input
                                            data-aos="fade-up"
                                            type='text'
                                            autoCorrect=''
                                            placeholder={t('email_plac')}
                                            className='text-desc h-[48px] px-[22px] rounded-[24px] w-full min-w-[150px] max-w-[400px] mr-[10px]'
                                        />
                                        <div data-aos="fade-up" className='custom-btn flex items-center overflow-hidden bg-primary hover:bg-primary/[0.8] rounded cursor-pointer min-w-[150px] max-w-[400px] h-[48px] mt-[20px] sm:mt-0'>
                                            <div className='btn-text w-full text-center text-white'>
                                                {t('subsc')}
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                {/* LINKS */}
                                <div className='w-full p-[8px] pt-0 mt-[50px] lg:mt-0'>
                                    <div className={`grid grid-cols-3 gap-x-[20px]`}>
                                        <SiteLinks />
                                        <ResoursesLink />
                                        <SocialLinks />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* COPY RIGHTS */}
            <div className="col-start-1 col-end-13">
                <div className={`grid grid-cols-1 border-t-[1px] border-t-divider mt-6 lg:mt-0`}>
                    <div className='w-full pt-[32px] pb-[24px] text-center text-desc'>
                        {`© 2024 ${t('author')}. ${t('all_right')}`}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer