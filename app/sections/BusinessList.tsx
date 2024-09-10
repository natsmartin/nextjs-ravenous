


import { useEffect } from 'react'
import BusinessCard from '@sections/Business'
import Pagination from '@sections/Pagination'
import { fetchBusinesses } from '@utils/actions/fetch-data'




export default async function BusinessList({
    formState, businessList, setBusinessList,
    currentPage, setCurrentPage, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    postsPerPage, setPostsPerPage }: any) {


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

    }, [formState.data, params, setBusinessList])

    const businesses = businessList?.businesses



    useEffect(() => {
        setPostsPerPage(10)
    }, [businessList, setPostsPerPage])


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
