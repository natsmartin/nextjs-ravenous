import React, { useContext } from 'react'
import { BusinessContext } from '@app/utils/Context'


export default function Pagination({ totalPosts }: { totalPosts: number}) {

    const { postsPerPage, currentPage, setCurrentPage } = useContext(BusinessContext);

    const pages = []

    for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
        pages.push(index);
    }

    return (
        <div className='flex flex-nowrap justify-center items-center text-black font-bold'>
            {
                pages.map((page, index) =>
                    <button key={index} onClick={() => setCurrentPage(page)}
                        className={`${page === currentPage ? 'active' : ''} 
                        border border-white text-white bg-amber-500 rounded-md 
                        w-8 h-8 m-1 md:w-12 md:h-12 md:m-2 hover:bg-yellow-400 hover:text-black`}>{page}</button>
                )
            }
        </div>
    )
}
