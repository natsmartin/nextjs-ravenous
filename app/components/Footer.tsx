import React from 'react'

export default function Footer() {
    return (
        <footer className='flex justify-center items-center h-5% m-4 p-4 text-center text-sm md:text-base'
        >&copy;{new Date().getFullYear()} Ravenous
        </footer>
    )
}
