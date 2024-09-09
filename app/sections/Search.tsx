'use client'


import Button from "@components/Filter";
import Input from "@components/Input";
import BusinessList from '@sections/BusinessList';
import Image from 'next/image';


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


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Search({ formState, formAction, modal, setModal }: any ) {


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
            <div className="bg-cyan-700 z-10 relative md:h-[30vh] flex flex-col justify-center">
                <Image className='background-image'
                    fill
                    src={'/search-background.webp'} alt={'Ravenous background image'}
                    priority={true} />
                <form action={formAction} >
                    <div className="flex justify-center py-2 bg-[#000000b0]">
                        {
                            filters.map(filter =>
                                <Button key={filter.value} label={filter.label} onClick={handleSort}
                                    value={filter.value} />
                            )
                        }
                    </div>
                    <input id='hidden-input-sort' className='hidden' defaultValue={'best_match'} name='sortby' ></input>
                    <div className="flex flex-col justify-center items-center md:flex md:flex-row">
                        <Input id="term-input" placeholder="What food craves you?" name="term" />
                        <Input id="location-input" placeholder="Where?" name="location" />
                    </div>
                    <div className="flex justify-center m-2">
                        <button type="submit" className="rounded-xl bg-cyan-700 text-xs text-white font-semibold md:font-bold px-8 py-2 
                        shadow-gray-900 shadow-lg md:text-base hover:scale-105 hover:bg-cyan-600 button-clamp"
                            onClick={handleSearch}>
                            Let&apos;s Go
                        </button>
                    </div>
                </form>
            </div>
            <BusinessList formState={formState} />
        </>
    )
}
