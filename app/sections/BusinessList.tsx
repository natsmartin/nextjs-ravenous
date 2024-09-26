


import { useEffect, useContext } from 'react'
import BusinessCard from '@sections/Business'
import Pagination from '@sections/Pagination'
import { fetchBusinesses } from '@utils/actions/fetch-data'
import { BusinessContext } from '@app/utils/Context'
import { BusinessProps } from '@sections/Business'



export default async function BusinessList() {

    const { 
        formState,
        businessList,
        setBusinessList,
        currentPage,
        postsPerPage,
        setPostsPerPage } = useContext(BusinessContext);

    useEffect(() => {
        const params = formState.data
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

    }, [formState.data, setBusinessList])

    const businesses = businessList?.businesses
    console.log(businesses)


    useEffect(() => {
        setPostsPerPage(10)
    }, [businessList, setPostsPerPage])


    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPosts = businesses?.slice(firstPostIndex, lastPostIndex)

    return (
        <>
        {businesses ?
            <div className='text-black flex flex-wrap justify-center my-4`'>
                {
                    currentPosts?.map((business: BusinessProps, index: number) =>
                        <BusinessCard key={index} business={business} />)
                }
            </div>
            :
            <p className='bg-white text-center text-xs p-2 md:text-base text-red-500'
            >{businessList?.error.description}</p>
        }
            <Pagination totalPosts={businesses?.length} />
        </>
    )
}
