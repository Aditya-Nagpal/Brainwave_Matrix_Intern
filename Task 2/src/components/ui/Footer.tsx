import React from 'react'
import { MailIcon } from './MailIcon'
import { Button, Input } from '@nextui-org/react'

export default function Footer() {
  return (
    <footer className='bg-gray-200 px-[6vw]'>
        <section className='flex justify-between pt-14 pb-10 border-b-2 border-gray-300'>
            <div className='max-w-80'>
                <p className='tracking-tight font-bold text-xl mb-1'>Join our newsletter for £10 offs</p>
                <p className='tracking-tight leading-5 text-sm text-gray-500'>Register now to get latest updates on promotions & coupons.Don’t worry, we not spam!</p>
            </div>
            <div>
                <div className='flex mb-2'>
                    <Input
                        type="email"
                        placeholder="you@example.com"
                        labelPlacement="outside"
                        startContent={
                            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        classNames={{
                            inputWrapper: ["rounded-r-none"]
                        }}
                    />
                    <Button className='rounded-l-none uppercase text-white bg-purple-800 font-medium'>send</Button>
                </div>
                <p className='tracking-tight text-xs leading-4 text-gray-600'>By subscribing you agree to our <span className='text-purple-900 font-medium'>Terms & Conditions and Privacy & Cookies Policy.</span></p>
            </div>
        </section>
        <section className='flex justify-between py-5'>
            <p className='leading-4 tracking-tight text-xs text-gray-600 font-medium'>Copyright 2024 © Grogin WooCommerce WordPress Theme. All right reserved.</p>
            <ul className='text-gray-600 tracking-tight flex'>
                <li className='underline leading-4 text-xs ml-2 hover:text-purple-900 hover:font-medium cursor-pointer'>Terms and Conditions</li>
                <li className='underline leading-4 text-xs ml-2 hover:text-purple-900 hover:font-medium cursor-pointer'>Privacy Policy</li>
                <li className='underline leading-4 text-xs ml-2 hover:text-purple-900 hover:font-medium cursor-pointer'>Order Tracking</li>
            </ul>
        </section>
    </footer>
  )
}
