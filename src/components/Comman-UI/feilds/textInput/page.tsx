import React, { useState } from 'react'
import { LucideEye, LucideEyeOff, } from 'lucide-react'

interface TextInputProps {
    label?: string;
    type?: string;
    placeholder?: string;
    value?: string | number;
    onChange?: any;
    error?: boolean;
    minLength?: number;
    name?: string;
    disabled?: boolean;
    min?: number;
    maxLength?: number;
    required?: boolean;
}


const TextInput = ({
    label = '',
    type = 'text',
    placeholder = '',
    value,
    onChange,
    error = false,
    minLength,
    name,
    disabled = false,
    min,
    maxLength,
    required = true,
}: TextInputProps) => {


    const [showPass, setShowPass] = useState(type)


    return (
        <div className='flex flex-col w-full mb-[14px] relative'>
            {label && <label htmlFor={label} className={`font-[500] text-desc text-[1rem] leading-[25.6px] font-[400] capitalize mb-[5px]`}>{label}</label>}
            <input
                id={label}
                type={showPass}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`text-desc text-[1rem] leading-[25.6px] font-[400] px-[10px] py-[6px] rounded-[4px] w-full !border-[1px] border-border !outline-none !ring-none focus:border-border ${(value && !error) && '!border-red-500'} ${type == 'password' && '!pr-[35px]'}`}
                minLength={minLength && minLength}
                name={name}
                disabled={disabled}
                min={min}
                maxLength={maxLength}
                required={required}
                autoComplete='none'
            />
            {type == 'password'
                && <small
                    className="flex items-center absolute bottom-0 right-[5px] h-[40px]"
                    onClick={() => showPass == 'password' ? setShowPass('text') : setShowPass('password')}
                >
                    {showPass == 'password' ? <LucideEye className='text-[0.6rem] h-[20px]' /> : <LucideEyeOff className='text-[0.6rem] h-[20px]' />}
                </small>
            }
        </div>
    )
}

export default TextInput