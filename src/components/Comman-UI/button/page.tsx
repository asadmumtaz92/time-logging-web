import { Link } from '@/navigation'
import React from 'react'

interface ButtonPtops {
    title: string
    url?: string
}
const Button = ({ title, url = '' }: ButtonPtops) => {


    return (
        <Link href={url} className='font-[500] text-white hover:text-primary text-[1.2rem] leading-[1] tracking-[0.5px] bg-primary hover:bg-white py-[13px] px-[30px] border border-primary shadow rounded-[30px] transition duration-500 ease-out'>
            {title}
        </Link>
    )
}

export default Button