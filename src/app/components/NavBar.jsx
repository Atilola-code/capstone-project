"use client"
import Link from 'next/link'
import { FaRegUser } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { GrFavorite } from "react-icons/gr";
import React, { useContext, useState } from 'react'
import { SidebarContext } from '../providers';

export default function NavBar() {
    const {val} = useContext(SidebarContext)
    const [isOpen, setIsOpen] = useState()
    const [menu, setMenu] = useState('/')

    function handleUser() {
        setIsOpen(!isOpen);
    }
  return (
        <>
        <div>
    <nav className='bg-[#dbcbfcc5] shadow-2xl py-8 md:flex hidden justify-between'>
            <ul className='mx-auto flex flex-row items-center justify-between font-medium px-4 md:px-2 gap-x-4 text-[#5106e6c5] relative'>
            <li className='text-[#5106e6c5] lg:font-extrabold lg:text-2xl shadow-2xl text-xl flex flex-col justify-self-start items-start font-bold'>Careglow</li>
                    <li onClick={() => {setMenu('/')}}>
                    <Link href='/'>Home {menu=== '/' ? <hr className='border-none w[90%] h-[2px] bg-[#5106e6c5] rounded-md'/>:<></>}</Link>
                    </li>
                    <li onClick={() => {setMenu('/about')}}>
                    <Link href='/about'>About {menu=== '/about' ? <hr className='border-none w[90%] h-[2px] bg-[#5106e6c5] rounded-md'/>:<></>}</Link>
                    </li>
                    <li onClick={() => {setMenu('/FAQs')}}>
                    <Link href='/FAQs'>FAQs {menu=== '/FAQs' ? <hr className='border-none w[90%] h-[2px] bg-[#5106e6c5] rounded-md'/>:<></>}</Link>
                    </li>
                    <li onClick={() => {setMenu('/contact')}}>
                    <Link href="/contact">Contact {menu=== '/contact' ? <hr className='border-none w[90%] h-[2px] bg-[#5106e6c5] rounded-md'/>:<></>}</Link>
                    </li>
                    <li onClick={() => {setMenu('/products')}}>
                        <Link href='/products'>Products {menu=== '/products' ? <hr className='border-none w[90%] h-[2px] bg-[#5106e6c5] rounded-md'/>:<></>}</Link>
                    </li>
                <div className={`${isOpen ? 'flex flex-col absolute md:right-0 md:flex gap-4 p-4 right-0 top-14 z-10'
                : "hidden"}`}>
                    <li>
                        <Link href='/signup'>Sign up</Link>
                    </li>
                    <li>
                        <Link href='/login'>Log In</Link></li>
                </div>
                <div className='flex flex-row items-center  justify-end gap-4'>
                <GrCart className='p-2 text-[#5106e6c5] size-10 items-end cursor-pointer'/>
                <div className='w-[23px] h-[23px] flex justify-center items-center mt-[-35] ml-[-55] rounded-[12px] bg-[#5910ecaf] text-white size[14px]'>{val}</div>
                <GrFavorite className='p-2 text-[#5106e6c5] size-10 cursor-pointer' />
                <FaRegUser className='p-2 text-[#5106e6c5] size-10 cursor-pointer' onClick={handleUser}/>
                </div>

            </ul>
        
    </nav>
        </div>
        </>
  )
}
