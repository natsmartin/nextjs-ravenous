import React from 'react'
import Image from 'next/image'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Business({ business }: any) {
    return (
        <div className='flex flex-col justify-center items-center rounded-xl shadow-gray-900 shadow-lg h-auto p-2 m-4 bg-cyan-700'>
            <div className='flex justify-center w-[50%] h-[50%] mt-4'>
                <Image
                    src={business.image_url}
                    alt={business.name}
                    width={250}
                    height={250}
                    priority={true} />
            </div>

            <p className='text-center text-white font-bold m-4 text-lg md:text-xl'>{business.name}</p>
            <div className='flex justify-around text-white px-2 md:px-8 mb-4 text-xs md:[&>*]:text-base'>
                <div className='text-wrap'>
                    <p className={`${business.location.address1.length < 30 ? 'md:text-base' : 'md:text-sm'}
                    mr-2 text-xs`}>{business.location.address1}</p>
                    <p className={`${business.location.address2?.length < 30 ? 'md:text-base' : 'md:text-sm'}
                    mr-2 text-xs`}>{business.location.address2}</p>
                    <p>{business.location.city}</p>
                    <p>{business.location.state + ' ' + business.location.zip_code}</p>
                </div>
                <div className='font-bold text-yellow-500 text-right mb-auto'>
                    <p className={`${Number(business.rating) >= 3 ? 'positive' : 'negative'} bg-white rounded-sm text-center`}>
                        {business.rating} ⭐</p>
                    <p className='pt-1'>{business.categories[0]?.title.toUpperCase()}</p>
                    <p className='text-[9px] md:text-base' >{business.review_count + ' reviews'}</p>
                </div>
            </div>
        </div>
    )
}