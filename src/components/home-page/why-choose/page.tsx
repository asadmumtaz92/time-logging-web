import React from 'react'
import { useTranslations } from 'next-intl'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const WhyChoose = () => {


    const t = useTranslations("Home")
    const wcList = [
        {
            id: 1,
            title: t('wc_1_title'),
            desc: t('wc_1_desc'),
        },
        {
            id: 2,
            title: t('wc_2_title'),
            desc: t('wc_2_desc'),
        },
        {
            id: 3,
            title: t('wc_3_title'),
            desc: t('wc_3_desc'),
        },
        {
            id: 4,
            title: t('wc_4_title'),
            desc: t('wc_4_desc'),
        },
        {
            id: 5,
            title: t('wc_5_title'),
            desc: t('wc_5_desc'),
        },
        {
            id: 6,
            title: t('wc_6_title'),
            desc: t('wc_6_desc'),
        },
    ]


    return (
        <div className={`flex flex-col justify-center items-center md:min-h-[calc(100vh-50px)] gap-y-[50px] px-[20px] md:px-[50px] xl:px-[80px] py-[50px] border-b`}>
            <h2 className="font-jost font-[700] text-primary [font-size:_clamp(1.5rem,1.5rem+1vw,3rem)] leading-[1.2] text-center w-full">
                {t('why_choose')}
            </h2>

            <Accordion type="single" collapsible className='min max-w-[550px] lg:max-w-[700px] m-auto w-full' defaultValue={'item-1'}>
                {wcList?.map((item: any) => {
                    return (
                        <AccordionItem key={item?.id} value={`item-${item?.id}`}>
                            <AccordionTrigger className='tt font-[450] text-primary text-[1.15rem] md:text-[1.4rem] hover:no-underline'>{item?.title}</AccordionTrigger>
                            <AccordionContent className='font-[300] text-desc text-[1rem] md:text-[1.2rem] px-[5px]'>{item?.desc}</AccordionContent>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </div>
    )
}

export default WhyChoose