import React from 'react'

interface TextAreaProps {
    label?: string;
    placeholder?: string;
    value?: string | number;
    onChange?: any;
    error?: boolean;
    minLength?: number;
    name?: string;
    disabled?: boolean;
    maxLength?: number;
    required?: boolean;
}


const TextArea = ({
    label = '',
    placeholder = '',
    value,
    onChange,
    error = false,
    minLength,
    name,
    disabled = false,
    maxLength,
    required = true,
}: TextAreaProps) => {


    return (
        <div className='flex flex-col w-full mb-[24px] !font-epilogue'>
            {label && <label htmlFor={label} className='text-desc text-[1rem] leading-[25.6px] font-[400] mb-[8px]'>{label}</label>}
            <textarea
                id={label}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`bg-card text-desc text-[1rem] leading-[25.6px] font-[400] px-[10px] py-[6px] rounded-[4px] w-full !border-[1px] border-border !outline-none !ring-none focus:border-border ${value && !error && '!border-red-500'} min-h-[110px] md:min-h-[130px] lg:min-h-[180px]`}
                minLength={minLength && minLength}
                name={name}
                disabled={disabled}
                maxLength={maxLength}
                required={required}
                autoComplete='none'
            >{value}</textarea>
            {error && <small className='text-left mt-[3px] mr-[5px] text-red-500 text-[0.8rem]'>{error}</small>}
        </div>
    )
}

export default TextArea