import { Button } from '@nextui-org/button'
import Image from 'next/image'
import React from 'react'

export default function FeaturedProductsCard({product}: any) {
  return (
    <li className='w-1/3 flex py-3 pr-3 border-r-2 border-b-2 border-gray-200 [&:nth-child(3n)]:border-r-0 '>
        <div className='min-w-44'>
            <Image src={product.img} alt='img' />
        </div>
        <div className='w-full flex flex-col justify-between'>
            <div className='min-h-28 flex flex-col justify-between'>
                <p className='leading-5 text-sm tracking-tighter font-medium'>{product.name}</p>
                <div>
                    <span className='text-2xl text-red-500 font-bold mr-1 tracking-tight leading-6'>${product.org_price}</span>
                    <del className='font-medium leading-4 tracking-tight text-base'>${product.new_price}</del>
                </div>
            </div>
            <Button variant='bordered' color='primary' className='rounded-2xl border-2 border-gray-200 hover:bg-gray-400'>Add To Cart</Button>
        </div>
    </li>
  )
}
