import React from 'react'

interface InputProps {
    id: string,
    name: string,
    placeholder: string
}

export default function Input({id, name, placeholder}: InputProps) {
    return (
        <input id={id} type="text" placeholder={placeholder} name={name} required
            className="text-black px-2 m-2 h-5 text-xs rounded-md w-[50vw]
                md:text-base md:h-auto md:m-4 md:w-[20vw]">
        </input>
    )
}
