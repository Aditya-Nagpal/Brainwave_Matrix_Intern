import { Button } from '@nextui-org/button'
import Image from 'next/image'
import { FaLeaf,FaRegSnowflake } from 'react-icons/fa'

export default function NewArrivalCard({product}: any) {
  return (
    <li className='p-4 w-72 border-2 border-gray-200 border-r-0 last:border-r-2'>
        <div className='w-full relative'>
            <div className='absolute top-0 left-0 rounded-xl text-xs px-2 py-1 font-extrabold text-white bg-red-500'>{product.discount}%</div>
            <Image src={product.img} alt='img' className='w-full' />
            {
              product.type && product.type === "organic" ? (
                <>
                  <p className=" absolute bottom-0 uppercase font-extrabold text-xs tracking-tight leading-5 text-green-900 mb-3 organic-gradient rounded-full py-1.5 px-3 box-content flex items-center"><FaLeaf size={14} className='mr-2' />organic</p>
                </>
              ) : null
            }
            {
              product.type && product.type === "cold sale" ? (
                <>
                  <p className="absolute bottom-0 uppercase font-extrabold text-xs tracking-tight leading-5 text-sky-700 mb-3 cold-gradient rounded-full py-1.5 px-3 box-content flex items-center"><FaRegSnowflake size={14} className='mr-2' />cold sale</p>
                </>
              ) : null
            }
        </div>
        <div className='min-h-40 flex flex-col justify-between'>
            <div className='flex flex-col justify-between min-h-24'>
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
