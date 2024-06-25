import { Link } from '@/navigation'
import React from 'react'


const PackagesComponent = () => {


    return (
        <div className={`flex flex-col justify-center py-[70px] md:py-[100px] xl:py-[130px] px-[20px] md:px-[50px] xl:px-[80px] border-b`}>
            <div data-aos="fade-up" className="flex flex-col items-center w-full">
                <h1 data-aos="fade-up" className="text-primary text-center [font-size:_clamp(2rem,2rem+1vw,3rem)] font-[500]">
                    {`Our Packages`}
                </h1>
            </div>
            <div className={`grid grid-cols-12 pt-[30px] md:pt-[40px] xl:pt-[50px]`}>
                <div className="col-start-1 col-end-13">
                    <div className={`grid grid-cols-1 lg:grid-cols-3 gap-y-[50px] lg:gap-x-[20px]`}>
                        {/* PACKAGE - 1 */}
                        <div data-aos="fade-up" className="flex flex-col flex-1 text-xl rounded-xl border border-[#4E67E5]/25 bg-primary p-10  h-full w-full max-w-[500px] m-auto">
                            <div data-aos="fade-up" className="text-white">Package one</div>

                            <div data-aos="fade-up" className="text-white text-6xl my-5 font-light">
                                199
                                <span className='text-3xl'>DKK</span>
                                <span className='text-xl'>/mo</span>
                            </div>

                            <div data-aos="fade-up" className='text-[#FFFFFFBB] mt-[30px]'>
                                Short description
                            </div>

                            <button data-aos="fade-up" className="flex justify-center mt-[20px] py-[8px] w-full max-w-[300px] rounded-3xl bg-primary hover:bg-white text-white hover:text-primary border-[0.5px] text-[1rem]">
                                Purchase
                            </button>
                            <ul className='flex flex-col gap-y-[10px] text-[#FFFFFFBB] text-[1rem] leading-[1.5rem] md:text-[1.125rem] leading-[1.625rem] font-[300] mt-[30px]'>
                                <li data-aos="fade-up" className=''>Upto 10 users</li>
                                <li data-aos="fade-up" className=''>Admin Access</li>
                            </ul>
                        </div>

                        {/* PACKAGE - 2 */}
                        <div data-aos="fade-up" className="flex flex-col items-center flex-1 rounded-xl overflow-hidden border px-[30px]py-[40px] w-full max-w-[500px] m-auto">
                            <div className="text-6xl p-[50px] bg-primary text-white font-[600] border-b w-full text-center">
                                <p data-aos="fade-up">
                                    199
                                    <span className='text-3xl'>DKK</span>
                                </p>
                            </div>
                            <div className="flex flex-col justify-center, w-full px-[30px] py-[40px]">
                                <div data-aos="fade-up" className="text-primary text-4xl font-[600]">Professional</div>
                                <div data-aos="fade-up" className='text-desc text-[1rem] leading-[1.5rem] md:text-[1.125rem] leading-[1.625rem] font-[300] pt-[40px] pb-[25px] font-[500]'>
                                    Short description
                                </div>
                                <ul className='flex flex-col gap-y-[10px] text-desc text-[1rem] leading-[1.5rem] md:text-[1.125rem] leading-[1.625rem] font-[300]'>
                                    <li data-aos="fade-up" className='text-desc'>Upto 10 users</li>
                                    <li data-aos="fade-up" className='text-desc'>Admin Access</li>
                                </ul>
                                <button data-aos="fade-up" className="mt-[30px] w-full max-w-[300px] p-2 max-sm:p-2 rounded-3xl bg-primary hover:bg-primary/[0.8] text-white text-xl max-sm:text-lg">
                                    Purchase
                                </button>
                            </div>
                        </div>

                        {/* PACKAGE - 3 */}
                        <div data-aos="fade-up" className="flex flex-col items-center flex-1 rounded-xl overflow-hidden border border-border w-full max-w-[500px] m-auto">
                            <div className="animate-background-shine bg-[linear-gradient(130deg,#11005E,35%,#11005ECC,60%,#11005E)] bg-[length:200%_100%] text-6xl py-[50px] xl:p-[50px] text-white font-[600] w-full text-center">
                                <p data-aos="fade-up">
                                    1399
                                    <span className='text-3xl'>DKK</span>
                                    <span className='text-lg'>/MO</span>
                                </p>
                            </div>
                            <div className="animate-background-shine bg-[linear-gradient(130deg,#ffffff,45%,#11005E11,55%,#ffffff)] bg-[length:200%_100%] flex flex-col items-center justify-center text-primary h-full w-full px-[30px] py-[40px]">
                                <div data-aos="fade-up" className="text-primary text-4xl font-[600]">Team</div>
                                <div data-aos="fade-up" className='pt-[40px] pb-[25px] text-desc text-[1rem] leading-[1.5rem] md:text-[1.125rem] leading-[1.625rem] font-[500]'>
                                    Short description
                                </div>
                                <ul className='flex flex-col gap-y-[10px] text-desc text-[1rem] leading-[1.5rem] md:text-[1.125rem] leading-[1.625rem] font-[300]'>
                                    <li data-aos="fade-up" className='text-desc'>Upto 200 users</li>
                                    <li data-aos="fade-up" className='text-desc'>Admin Access</li>
                                </ul>
                                <button data-aos="fade-up" className="mt-[20px] w-full max-w-[300px] p-2 max-sm:p-2 rounded-3xl bg-white hover:bg-primary text-primary hover:text-white border text-xl max-sm:text-lg">
                                    Purchase
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="flex flex-col items-center w-full pt-[30px] md:pt-[40px] lg:pt-[50px]">
                <p className='text-primary text-[1.5rem] font-[500] text-center'>
                    {`Not covered in the above?`}
                </p>
                <Link href="/contact" className='flex items-center justify-center bg-primary text-white text-[1rem] font-[500] text-nowrap text-center h-[40px] rounded-[20px] px-[30px] mt-4'>Contact Sales</Link>
            </div>
        </div>
    )
}

export default PackagesComponent