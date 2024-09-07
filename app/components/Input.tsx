import React from 'react'

interface InputProps {
    name: string,
    placeholder: string
}

export default function Input({name, placeholder}: InputProps) {
    return (
        <input type="text" placeholder={placeholder} name={name}
            className="text-black px-2 m-2 h-5 text-xs rounded-md w-50%
                md:text-base md:h-auto md:m-4 md:w-25%">
        </input>
    )
}
