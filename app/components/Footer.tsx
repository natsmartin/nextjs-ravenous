import React from 'react'

export default function Footer() {
    return (
        <footer className='flex justify-center items-center h-[5vh] py-8 bg-[c67e01]
        text-center text-xs text-black md:text-base'
        >&copy;{new Date().getFullYear()} Ravenous
        </footer>
    )
}
