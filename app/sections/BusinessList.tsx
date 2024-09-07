
import { useState, useEffect } from 'react'
import Business from '@sections/Business'
import Pagination from '@sections/Pagination'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BusinessList({ response }: any) {

    const businessesArr = response.data
    const businesses = businessesArr.businesses

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(0)

    useEffect(() => {
        setPostsPerPage(10)
    }, [businessesArr])


    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPosts = businesses?.slice(firstPostIndex, lastPostIndex)

    return (
        <>
            <div className='text-black flex flex-wrap justify-center'>
                {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    currentPosts?.map((business: any, index: number) =>
                        <Business key={business.name + index} business={business} />)
                }
            </div>
            <Pagination
                totalPosts={businesses?.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </>
    )
}
