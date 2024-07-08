'use client'
import React, { useState, useEffect, } from 'react'
import Image from 'next/image'
import { Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { emailValidator } from '@/utils'
// import { loginHandlers } from '@/api/loginHandler'

import TextInput from '@/components/Comman-UI/feilds/textInput/page'


const Login = () => {


    const router = useRouter()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        emailValid: true,
        password: '',
        passwordValid: true,
    })
    // FORM DATA HANDLER
    const formDataHandler = (event: any) => {
        const { name, value } = event?.target
        if (name == 'email') {
            const updatedVal = {
                ...formData,
                [name]: value.trim(), emailValid: emailValidator(value),
            }
            setFormData(updatedVal)
        }
        else if (name == 'password') {
            const updatedVal = {
                ...formData,
                [name]: value, passwordValid: value?.length < 6 ? false : true,
            }
            setFormData(updatedVal)
        }
    }
    const successCallBack = (data: any) => {
        localStorage.setItem('userInfo', JSON.stringify(data))
        localStorage.setItem('token', JSON.stringify(data?.token))
        window.location.href = '/dashboard'
    }
    const faildCallBack = (data: any) => {
        setLoading(false)
        if (data?.response?.status == 401 || data?.response?.statusText == "UNAUTHORIZED") {
            setError(`You Are Unauthorized. Please Enter Valid Credential.`)
        }
    }

    const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        const { email, password, emailValid, passwordValid } = formData
        try {
            if (email && email?.length > 6 && password && emailValid && passwordValid) {
                setTimeout(() => {
                    window.location.href = '/dashboard'
                    setLoading(false)
                }, 1500)
                // loginHandlers(email, password, successCallBack, faildCallBack)
            }
            else {
                setError('Enter valid email & password')
                setLoading(false)
            }
        }
        catch (err: any) {
            setError(err.message)
            setLoading(false)
        }
    }

    // CHECK USER IS ALREADY LOGIN
    const checkUserInfo = async () => {
        const res: string | null = await localStorage.getItem('token')
        if (res !== null) { router.replace('/dashboard') }
    }
    useEffect(() => {
        checkUserInfo()
    }, [])


    return (
        <div data-aos="zoom-in" data-aos-duration="400" className='flex justify-center items-center w-full sm:min-h-[100vh] px-[20px] text-primary'>
            <div className='flex flex-col items-start justify-between w-full sm:w-[450px] my-[30px] lg:my-0 border-[0.5px] border-border rounded-[10px] p-[40px] shadow-lg overflow-y-scroll sm:overflow-hidden'>
                <div className='flex items-center justify-center max-w-[400px] m-auto'>
                    <h1 className='max-w-[400px] w-full !text-center font-[700] [font-size:_clamp(1.7rem,1.3rem+1vw,3rem)]'>
                        Time Logging
                    </h1>
                    {/* <Image src={'/logo.png'} priority className='max-w-[300px] md:max-w-[400px] w-full m-auto' alt='iTech logo' width={100} height={100} /> */}
                </div>
                <form className='w-full flex flex-col items-center sm:items-start' onSubmit={loginHandler} autoComplete="on" id="login-form">
                    <h2 className='max-w-[400px] w-full !text-left mt-[30px] [font-size:_clamp(1.7rem,1.3rem+1vw,3rem)]'>
                        Welcome Back
                    </h2>
                    <p className='max-w-[400px] w-full mb-[50px] leading-[1rem]'>
                        Please enter email & password to<br />access your account.
                    </p>

                    <TextInput
                        label='email'
                        value={formData?.email}
                        onChange={formDataHandler}
                        placeholder='Email'
                        name='email'
                        minLength={6}
                        maxLength={40}
                        required
                        error={formData?.email && !formData?.emailValid ? false : true}
                        disabled={loading ? true : false}
                    />

                    <TextInput
                        label='password'
                        value={formData?.password}
                        onChange={formDataHandler}
                        placeholder='Password'
                        type='password'
                        name='password'
                        minLength={6}
                        maxLength={40}
                        required
                        error={!formData?.passwordValid && formData?.password ? false : true}
                        disabled={loading ? true : false}
                    />

                    <button disabled={loading} type='submit' className='w-full bg-primary hover:bg-primary/[0.8] text-white text-[1rem] font-[600] border-[1px] border-border text-disable h-[45px] outline-0 rounded-[8px] focus:border-ip-border my-[12px]'>
                        {loading
                            ? <div className='w-full h-full flex justify-center items-center'>
                                <Loader className="mr-2 h-5 w-5 animate-spin" /> Please wait
                            </div>
                            : 'Log In'
                        }
                    </button>
                    {error && <p className='text-[0.8rem] text-red-500 text-center w-full'>{error}</p>}
                </form>
            </div>
        </div >
    )
}

export default Login
