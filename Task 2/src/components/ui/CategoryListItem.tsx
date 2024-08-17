import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md'

export default function CategoryListItem({name,icon}: any) {
  return (
    <li className='flex justify-between h-12 px-3 border-b-2 border-gray-200 last:border-b-0 first:border-b-0 cursor-pointer hover:bg-purple-800 hover:text-white'>
        <div className='flex items-center'>
            {icon}
            <span className='capitalize text-sm font-medium leading-4'>{name}</span>
        </div>
        <div className='flex items-center'>
            {
                name == "all categories" ? <MdKeyboardArrowDown className='text-gray-400 text-2xl' /> : <MdKeyboardArrowRight className='text-gray-400 text-2xl' />
            }
        </div>
    </li>
  )
}
