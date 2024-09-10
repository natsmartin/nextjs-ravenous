
import { useState, useEffect } from 'react'
import BusinessCard from '@sections/Business'
import Pagination from '@sections/Pagination'
// import dynamic from 'next/dynamic'
// import Loading from '@app/loading'
import { fetchBusinesses } from '@app/utils/actions/fetch-data'
// const BusinessCard = dynamic(() => import('@sections/Business'),
//     { loading: () => <Loading /> })


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function BusinessList({ formState }: any) {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [businessList, setBusinessList] = useState<any>()

    const params = formState.data


    useEffect(() => {
        async function fetchData() {
            const response = await fetchBusinesses(params)
            setBusinessList(response)
        }

        const objValues = Object.values(params)
        const isNull = objValues.map(value =>
            value ? false : true).includes(true)

        if (objValues.length && !isNull) {
            fetchData()
        }

    }, [formState.data, params])

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
        <>{businesses ?
            <div className='text-black flex flex-wrap justify-center my-4`'>
                {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    currentPosts?.map((business: any, index: number) =>
                        <BusinessCard key={index} business={business} />)
                }
            </div>
            :
            <p className={`${businesses ? 'block' : 'hidden'} 
            bg-white text-center text-xs p-2 md:text-base text-red-500`}
            >{businessList?.error.description}</p>
        }
            <Pagination
                totalPosts={businesses?.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </>
    )
}
