'use client'


import Button from "@components/Filter";
import Input from "@components/Input";
import BusinessList from '@sections/BusinessList';
import Image from 'next/image';
import Loading from '@app/loading'


import { useFormState } from "react-dom";
import { Suspense, useState } from "react";
import { handleSubmit } from "@utils/actions/fetch-data";
import { BusinessContext } from "@app/utils/Context";
import { BusinessProps } from '@sections/Business'


const filters = [
    {
        label: 'Best Match',
        value: 'best_match'
    },
    {
        label: 'Highest Rated',
        value: 'rating'
    },
    {
        label: 'Most Reviewed',
        value: 'review_count'
    }]

interface BusinessesProps {
    businesses: BusinessProps | never[]
}


export default function Search() {


    const [formState, formAction] = useFormState(handleSubmit, { data: '' })
    const [modal, setModal] = useState('hidden')

    const [businessList, setBusinessList] = useState<BusinessesProps>({ businesses: [] })

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(0)


    const handleSort = (e: React.MouseEvent<HTMLElement>) => {
        const sort = document.getElementById('hidden-input-sort') as HTMLInputElement
        sort.value = (e.target as HTMLInputElement).value
        handleSearch()
    }

    const handleSearch = () => {
        const termValue = (document.getElementById('term-input') as HTMLInputElement).value
        const locationValue = (document.getElementById('term-input') as HTMLInputElement).value

        if (!termValue || !locationValue) {
            setModal('block')
        }
    }

    return (
        <>
            <div className={`${modal} fixed bg-[#0006] z-20 top-0 left-1/2
                    -translate-x-1/2 overflow-auto h-full w-full`}>
                <div className='p-4 m-4 bg-white w-auto text-center md:w-2/6 md:translate-x-full'>
                    <span onClick={() => setModal('hidden')}
                        className='text-gray-500 top-0 float-right font-bold text-2xl hover:cursor-pointer'>x</span>
                    <p className='m-6 text-black'>Please fill out all the fields.</p>
                </div>
            </div>
            <div className="bg-cyan-900 z-10 relative flex flex-col justify-center">
                <Image className='background-image'
                    fill
                    src={'/search-background.webp'} alt={'Ravenous background image'}
                    priority={true} />
                <form action={formAction} className="flex flex-col justify-center items-center">
                    <div className="flex justify-center py-2 bg-[#00000069] filterbar backdrop-blur-sm">
                        {
                            filters.map(filter =>
                                <Button key={filter.value} label={filter.label} onClick={handleSort}
                                    value={filter.value} />
                            )
                        }
                    </div>
                    <input id='hidden-input-sort' className='hidden' defaultValue={'best_match'} name='sortby' ></input>
                    <div className="flex flex-col justify-center items-center md:flex md:flex-row w-auto md:w-[950px]">
                        <Input id="term-input" placeholder="What food craves you?" name="term" />
                        <Input id="location-input" placeholder="Where?" name="location" />
                    </div>
                    <div className="flex justify-center m-2">
                        <button type="submit" className="rounded-xl bg-cyan-700 text-xs text-white font-semibold md:font-bold px-8 py-2 
                        shadow-gray-900 shadow-lg md:text-base hover:scale-105 hover:bg-cyan-600 w-auto md:w-[100px] md:h-auto button-clamp"
                            onClick={handleSearch}>
                            Let&apos;s Go
                        </button>
                    </div>
                </form>
            </div>
            <Suspense fallback={<Loading />}>
                <BusinessContext.Provider value={
                    {
                        formState,
                        businessList,
                        setBusinessList,
                        currentPage,
                        setCurrentPage,
                        postsPerPage,
                        setPostsPerPage
                    }} >
                    <BusinessList/>
                </BusinessContext.Provider>
            </Suspense>

        </>
    )
}
