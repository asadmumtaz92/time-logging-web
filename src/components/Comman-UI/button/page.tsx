import { Link } from '@/navigation'
import React from 'react'

interface ButtonPtops {
    title: string
    url?: string
}
const Button = ({ title, url = '' }: ButtonPtops) => {


    return (
        <Link href={url} className='font-[500] text-white hover:text-primary text-[1rem] leading-[1rem] tracking-[0.5px] bg-primary hover:bg-white pb-[12px] pt-[15px] px-[30px] border border-primary shadow rounded-[30px] transition duration-500 ease-out'>
            {title}
        </Link>
    )
}

export default Button