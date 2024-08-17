import React from 'react'
import CategoryListItem from './CategoryListItem'
import { CiApple } from 'react-icons/ci'
import { LuBeef,LuEgg } from 'react-icons/lu'
import { PiBread,PiPaintBrush,PiBabyLight } from 'react-icons/pi'
import { BsCupHot } from 'react-icons/bs'
import { FaRegSnowflake } from 'react-icons/fa'
import { GiChocolateBar } from 'react-icons/gi'
import { MdOutlineLocalGroceryStore } from 'react-icons/md'
import { TbHospitalCircle } from 'react-icons/tb'
import { LiaIconsSolid } from "react-icons/lia";

export default function CategoryList() {
    const categories=[
        {'name': 'all categories','icon': <LiaIconsSolid className='text-2xl mr-3.5' />},
        {'name': 'fruits & vegetables', 'icon': <CiApple className='text-2xl mr-3.5' />},
        {'name': 'meats & seafood', 'icon': <LuBeef className='text-2xl mr-3.5' />},
        {'name': 'breakfast & diary', 'icon': <LuEgg className='text-2xl mr-3.5' />},
        {'name': 'breads & bakery', 'icon': <PiBread className='text-2xl mr-3.5' />},
        {'name': 'beverages', 'icon': <BsCupHot className='text-2xl mr-3.5' />},
        {'name': 'frozen foods', 'icon': <FaRegSnowflake className='text-2xl mr-3.5' />},
        {'name': 'biscuits & snacks', 'icon': <GiChocolateBar className='text-2xl mr-3.5' />},
        {'name': 'grocery & staples', 'icon': <MdOutlineLocalGroceryStore className='text-2xl mr-3.5' />},
        {'name': 'household needs', 'icon': <PiPaintBrush className='text-2xl mr-3.5' />},
        {'name': 'healthcare', 'icon': <TbHospitalCircle className='text-2xl mr-3.5' />},
        {'name': 'baby & pregnancy', 'icon': <PiBabyLight className='text-2xl mr-3.5' />}
    ]
  return (
    <ul className='w-72 rounded-xl overflow-hidden border-2 border-gray-200 relative -top-12'>
        {
            categories.map((category,index) => (
                <CategoryListItem name={category.name} icon={category.icon} key={index} />
            ))
        }
    </ul>
  )
}
