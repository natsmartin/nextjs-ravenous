import React from 'react'
import Image from 'next/image'

export interface BusinessProps {
    categories: [{ alias: string, title: string }],
    display_phone: string,
    id: string,
    image_url: string,
    location:
    {
        address1: string,
        address2: string,
        city: string,
        country: string,
        state: string,
        zip_code: string
    },
    name: string,
    phone: string,
    rating: number,
    review_count: number,
    url: string
}

export default function Business({ business }: { business: BusinessProps }) {
    return (
        <div className='flex flex-col flex-wrap self-center justify-center rounded-xl shadow-gray-900 shadow-lg p-2 m-4 bg-cyan-700 w-min md:w-auto md:card-clamp'>
            <div className='flex justify-center'>
                <Image
                    src={business.image_url}
                    alt={business.name}
                    width={250}
                    height={250}
                    priority={true} />
            </div>
            <div className='flex justify-center'>
                <p className='text-white font-bold my-2 px-8 title-clamp'>{business.name}</p>
            </div>
            <div className='flex justify-around text-white mb-4 text-clamp'>
                <div className='text-wrap w-[50%]'>
                    <p className={`${business.location.address1.length < 20 ? 'md:text-base' : 'md:text-sm'}
                    mr-2 text-[10px]`}
                    style={{'display': business.location.address1.length < 20 ? 'block' : 'none'}}>{business.location.address1}</p>
                    <p className={`${business.location.address2?.length < 15 ? 'md:text-base' : 'md:text-sm'}
                    mr-2 text-[10px]`}
                    style={{'display': business.location.address1.length < 20 ? 'block' : 'none'}}>{business.location.address2}</p>
                    <p className='text-[9px] md:text-base'>{business.location.city}</p>
                    <p className='text-[9px] md:text-base'>{business.location.state + ' ' + business.location.zip_code}</p>
                </div>
                <div className='font-bold text-yellow-500 text-right mb-auto'>
                    <p className={`${Number(business.rating) >= 3 ? 'positive' : 'negative'} 
                    bg-white rounded-sm text-[10px] md:text-base text-center`}>
                        {business.rating + '⭐'}</p>
                    <p className={`pt-1 text-[10px] ${business.categories[0]?.title.length < 12 ? 'md:text-base' : 'md:text-[10px]'}
                    w-[50px]`}>{business.categories[0]?.title.toUpperCase()}</p>
                    <p className='text-[9px] md:text-base' >{business.review_count + ' reviews'}</p>
                </div>
            </div>
        </div>
    )
}