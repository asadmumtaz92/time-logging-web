import React from 'react'
import Image from 'next/image';

interface HGSProps {
    id: number;
    image: string;
    title: string;
    description: string;
}


const SimpleSteps = () => {

    const SSData: HGSProps[] = [
        {
            id: 1,
            image: '/icons/company.png',
            title: `Step One`,
            description: `Register company.`,
        },
        {
            id: 2,
            image: '/icons/employee.png',
            title: `Step 2`,
            description: `Add employee.`,
        },
        {
            id: 3,
            image: '/icons/logging.png',
            title: `Step 3`,
            description: `Start logging.`,
        },
    ]
    const Card = ({ id, image, title, description }: HGSProps) => {
        return (
            <div key={id} data-aos="fade-up" className={`border-[1px] border-box-stroke rounded-[15px] px-[16px] lg:px-[30px] py-[25px] lg:py-[40px] m-auto w-full max-w-[500px]`}>
                <div className='flex items-center justify-center'>
                    <Image data-aos="zoom-in" src={image} priority className='flex object-center object-contain' width={80} height={100} alt={`${title}`} />
                </div>

                <div className='flex flex-col mt-[25px] text-center'>
                    <h2 data-aos="fade-up" className='text-primary text-[1.25rem] leading-[1.75rem] xl:text-[1.5rem] xl:leading-[2.125rem] font-[500]'>{title}</h2>
                    <p data-aos="fade-up" className='text-desc text-[1rem] leading-[1.5rem] md:text-[1.125rem] leading-[1.625rem] font-[300]'>{description}</p>
                </div>
            </div>
        )
    }


    return (
        <div className='flex flex-col py-[70px] md:py-[100px] xl:py-[130px] px-[20px] md:px-[50px] xl:px-[80px] min-h-[calc(100vh-50px)] justify-center border-b'>
            <h1 data-aos="fade-up" className="text-primary text-center [font-size:_clamp(2rem,2rem+1vw,3rem)] font-[500]">
                {`How To Get Started`}
            </h1>

            <p data-aos="fade-up" className='text-desc text-center text-[1rem] font-[500] mb-[32px] md:mb-[40px] xl:mb-[48px]'>
                {`Three Simple Steps!`}
            </p>

            <div className={`grid grid-cols-12 mt-[30px]`}>
                <div className="col-start-1 col-end-13">
                    <div className={`grid grid-cols-1 md:grid-cols-3 gap-y-[44px] md:gap-x-[25px]`}>
                        {SSData.map((item: any) => {
                            const { id, image, title, description } = item
                            return <Card key={id} id={id} image={image} title={title} description={description} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SimpleSteps