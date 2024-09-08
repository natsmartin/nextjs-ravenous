import React from 'react'

export default function Footer() {
    return (
        <footer className='flex justify-center items-center h-[5vh] m-4 p-4 text-center text-xs md:text-base'
        >&copy;{new Date().getFullYear()} Ravenous
        </footer>
    )
}
