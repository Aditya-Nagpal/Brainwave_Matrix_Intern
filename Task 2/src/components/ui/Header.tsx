import React from 'react'
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";
import { FiMapPin,FiShoppingCart } from 'react-icons/fi';
import SearchBar from './SearchBar';
import { VscAccount } from 'react-icons/vsc';
import { FaRegHeart } from 'react-icons/fa';

export default function Header() {
  return (
    <Navbar className='mb-1.5' maxWidth='full'>
        <NavbarBrand>
            <p className='uppercase text-2xl font-extrabold'>e-commerce</p>
        </NavbarBrand>
        <NavbarContent>
          <NavbarItem>
            <FiMapPin className='text-2xl' />
          </NavbarItem>
          <NavbarItem>
            <p className='text-xs tracking-tighter leading-4'>Deliver to <br/><b className='text-sm leading-4'>all</b></p>
          </NavbarItem>
        </NavbarContent>
        <SearchBar />
        <NavbarContent>
          <NavbarItem>
            <VscAccount className='text-2xl' />
          </NavbarItem>
          <NavbarItem>
            <p className='text-xs tracking-tighter leading-4'>Sign in<br/><b className='text-sm leading-4'>Account</b></p>
          </NavbarItem>
          <NavbarItem>
            <FaRegHeart className='text-2xl' />
          </NavbarItem>
          <NavbarItem>
            <FiShoppingCart className='text-2xl' />
          </NavbarItem>
        </NavbarContent>
    </Navbar>
  )
}
