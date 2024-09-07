import React from 'react'
import Image from 'next/image'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Business({ business }: any) {
    return (
        <div className='flex flex-col justify-center rounded-xl h-auto p-2 m-2 bg-cyan-700'>
            <div className='flex justify-center'>
                <Image
                    src={business.image_url}
                    alt={business.name}
                    width={250}
                    height={250}
                    priority={true} />
            </div>

            <p className='text-center text-white font-bold m-4 text-lg md:text-xl'>{business.name}</p>
            <div className='flex justify-between text-white px-2 md:px-8 mb-4 text-xs md:[&>*]:text-base'>
                <div>
                    <p className={`${business.location.address1.length < 35 ? 'md:text-base' : 'md:text-sm'}
                    mr-4 text-xs`}>{business.location.address1}</p>
                    <p className={`${business.location.address2?.length < 35 ? 'md:text-base' : 'md:text-sm'}
                    mr-4 text-xs`}>{business.location.address2}</p>
                    <p>{business.location.city}</p>
                    <p>{business.location.state + ' ' + business.location.zip_code}</p>
                </div>
                <div className='font-bold text-yellow-500'>
                    <p >{business.categories[0]?.title.toUpperCase()}</p>
                    <p className={`${Number(business.rating) >= 3 ? 'positive' : 'negative'} bg-white p-1 rounded-md`}>
                        {business.rating}⭐⭐⭐</p>
                    <p >{business.review_count + ' reviews'}</p>
                </div>
            </div>
        </div>
    )
}