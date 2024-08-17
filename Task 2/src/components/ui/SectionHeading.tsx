import React from 'react'

export default function SectionHeading({t1,t2}: any) {
  return (
    <div className='mb-6'>
        <span className='capitalize text-lg font-bold mr-4 tracking-tighter'>{t1}</span>
        <span className='tracking-tighter text-sm text-gray-400'>{t2}</span>
    </div>
  )
}
