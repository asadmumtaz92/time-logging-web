'use client'
import React, { useState } from 'react'
import { Loader } from "lucide-react"
import { emailValidator } from '@/utils'

import TextInput from '@/components/Comman-UI/feilds/textInput/page'
import TextArea from '@/components/Comman-UI/feilds/textArea/page'

interface ContactFormProps {
    formLocale: any;
}


const ContactForm = ({ formLocale }: ContactFormProps) => {


    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    // FORM DATA HANDLER
    const formDataHandler = (event: any) => {
        const { name, value } = event?.target
        if (name === 'email') {
            const updatedVal = {
                ...formData,
                [name]: value.trim(),
            }
            setFormData(updatedVal)
        }
        else {
            const updatedVal = {
                ...formData,
                [name]: value,
            }
            setFormData(updatedVal)
        }
    }

    let disabled = (formData?.name?.length > 3 && formData?.email && formData?.subject?.length > 3) ? false : true

    const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault()
        setIsLoading(true)
        const { name, email, subject, message, } = formData
        if (!disabled) {
            alert(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`)
        }
        else {
            alert("Please fill the form first.")
        }
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
    }


    return (
        <div className='flex flex-col w-full'>
            <form onSubmit={formSubmitHandler} method='POST' action=''>
                <TextInput
                    label={formLocale.name}
                    name='name'
                    value={formData?.name}
                    error={formData.name.length > 3}
                    onChange={formDataHandler}
                />
                <TextInput
                    label={formLocale.email}
                    name='email'
                    value={formData?.email}
                    error={emailValidator(formData.email)}
                    onChange={formDataHandler}
                />
                <TextInput
                    label={formLocale.subject}
                    name='subject'
                    value={formData?.subject}
                    error={formData.subject?.length > 3}
                    onChange={formDataHandler}
                />
                <TextArea
                    label={formLocale.message}
                    name='message'
                    value={formData?.message}
                    error={formData.message?.length > 3}
                    onChange={formDataHandler}
                    required={false}
                />

                <div className='flex pt-[10px]'>
                    <button type='submit' disabled={disabled} className={`flex items-center ${disabled ? 'bg-primary text-white' : 'bg-primary text-white'} !font-epilogue text-[1rem] leading-[1rem] font-[500] uppercase not-italic px-[36px] pt-[16px] pb-[13px] rounded-[5px]`}>
                        {isLoading
                            ? <div className='w-full h-full flex justify-center items-center'>
                                <Loader color="black" size={15} className="animate-spin" /> Please wait
                            </div>
                            : formLocale?.submit
                        }
                    </button>
                </div>
            </form >
        </div >
    )
}

export default ContactForm