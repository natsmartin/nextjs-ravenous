
import { useState, useEffect } from 'react'
// import BusinessCard from '@sections/Business'
import Pagination from '@sections/Pagination'
import dynamic from 'next/dynamic'
import Loading from '@app/loading'
import { fetchBusinesses } from '@app/utils/actions/fetch-data'
const BusinessCard = dynamic(() => import('@sections/Business'),
    { loading: () => <Loading /> })


    
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function BusinessList({ formState }: any) {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [businessList, setBusinessList] = useState<any>()

    useEffect(() => {
        const params = formState.data
        async function fetchData() {
            const response = await fetchBusinesses(params)
            setBusinessList(response)
        }

        if (Object.values(params)) {
            fetchData()
        }

    }, [formState.data])

    const businesses = businessList?.businesses

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(0)

    useEffect(() => {
        setPostsPerPage(10)
    }, [businessList])


    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPosts = businesses?.slice(firstPostIndex, lastPostIndex)

    return (
        <>
            <div className='text-black flex flex-wrap justify-center my-4'>
                {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    currentPosts?.map((business: any, index: number) =>
                        <BusinessCard key={index} business={business} />)
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
