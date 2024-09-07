import React from 'react'

interface FilterProps {
    label: string,
    value?: string,
    onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

export default function Filter({ label, value, onClick }: FilterProps) {
    return (
        <button onClick={onClick} value={value}
            className="mx-4 border-b-2 border-b-white text-xs md:text-base
            focus:border-b-amber-400 focus:text-amber-400"
        >{label}
        </button>
    )
}
