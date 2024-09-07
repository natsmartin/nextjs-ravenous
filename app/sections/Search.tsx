'use client'

import { useFormState } from 'react-dom';
import Button from "@components/Filter";
import Input from "@components/Input";
import BusinessList from '@sections/BusinessList';
import { handleSubmit } from '@app/utils/actions/fetch-data';
import { Suspense } from 'react';

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

export default function Search() {

    const [formState, formAction] = useFormState(handleSubmit, { data: '' })

    const handleSort = (e: React.MouseEvent<HTMLElement>) => {
        const sort = document.getElementById('hidden-input-sort') as HTMLInputElement
        sort.value = (e.target as HTMLInputElement).value
    }

    return (
        <>
            <div className="bg-cyan-700 p-4">
                <form action={formAction}>
                    <div className="flex justify-center mb-4">
                        {
                            filters.map(filter =>
                                <Button key={filter.value} label={filter.label} onClick={handleSort}
                                    value={filter.value} />
                            )
                        }
                    </div>
                    <input id='hidden-input-sort' className='hidden' defaultValue={'best_match'} name='sortby' ></input>
                    <div className="flex flex-col justify-center items-center md:flex md:flex-row">
                        <Input placeholder="What food craves you?" name="term" />
                        <Input placeholder="Where?" name="location" />
                    </div>
                    <div className="flex justify-center m-2">
                        <button type="submit" className="rounded-xl bg-amber-600 text-xs text-white font-bold px-8 py-2 
                        md:text-base hover:scale-105 hover:bg-amber-100 hover:text-slate-500"
                        >
                            Let&apos;s Go
                        </button>
                    </div>
                </form>
            </div>
            <Suspense fallback={<p>Loading...</p>}>
                <BusinessList response={formState} />
            </Suspense>
        </>
    )
}
