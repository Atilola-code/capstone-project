"use client"
import Link from 'next/link'
import { FaRegUser } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { GrFavorite } from "react-icons/gr";
import React, { useContext, useState } from 'react'
import { SidebarContext } from '../providers';
import CartItems from './CartItems';
import Wishlist from '../wishlist/page';

export default function NavBar() {
    const {val, isVal, openWish, setOpenWish,openCart, setOpenCart} = useContext(SidebarContext)
    const [isOpen, setIsOpen] = useState()
    const [menu, setMenu] = useState('/')

    function handleUser() {
        setIsOpen(!isOpen)
    }

    function handleCart() {
        setOpenCart(!openCart)
    }
    function handleWish() {
        setOpenWish(!openWish)
    }
  return (
        <>
        <div className=''>
    <nav className='bg-[#dbcbfcc5] shadow-none lg:shadow-2xl lg:py-8 justify-between'>
            <ul className='m-auto lg:flex hidden flex-row items-center justify-between font-medium px-4 md:px-2 gap-x-4 text-[#5106e6c5] relative'>
            <li className='text-[#5106e6c5] lg:font-extrabold lg:text-2xl shadow-2xl text-xl flex flex-col lg:justify-between items-start font-bold'>Careglow</li>
                    <li onClick={() => {setMenu('/')}}>
                    <Link href='/'>Home {menu=== '/' ? <hr className='border-none w[90%] h-[2px] bg-[#5106e6c5] lg:text-2xl rounded-md'/>:<></>}</Link>
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
                <div className='flex flex-row items-center mr-4 justify-end gap-4'>
                <GrCart onClick={handleCart} className='p-2 text-[#5106e6c5] size-10 cursor-pointer'/>
                <div className='w-[20px] h-[22px] flex justify-center items-center mt-[-35] ml-[-55] rounded-full text-lg bg-[#5910ecaf] text-white size-[14px]'>{val}</div>
                <GrFavorite onClick={handleWish} className='p-2 text-[#5106e6c5] size-10 cursor-pointer' />
                <div className='w-[20px] h-[22px] flex justify-center items-center mt-[-35] ml-[-55] rounded-full text-lg bg-[#5910ecaf] text-white size-[14px]'>{isVal}</div>
                <FaRegUser className='p-2 text-[#5106e6c5] size-10 cursor-pointer' onClick={handleUser}/>
                </div>
                </ul>
                </nav>
                </div>
                {openCart && <CartItems/>}
                {openWish && <Wishlist/>}
                </>
                 )
                }
