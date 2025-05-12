import Link from 'next/link'
import { GrCart } from "react-icons/gr";
import { GrFavorite } from "react-icons/gr";
import React, { useContext } from 'react'
import { SidebarContext } from '../providers';

export default function MiniNav() {
  const {val} = useContext(SidebarContext)
  const {isVal} = useContext(SidebarContext)
  return (
    <div>

    <nav>
    <ul className='md:hidden flex flex-col justify-between items-end h-[60vh] bg-[#dbcbfcc5] text-[#5106e6c5] text-xl px-8 py-8 rounded-bl-full'>
      <li>
        <Link href='/about'>About</Link>
      </li>
      <li>
        <Link href='/FAQs'>FAQs</Link>
      </li>
      <li>
        <Link href='/contact'>Contact</Link>
      </li>
      <li>
        <Link href='/products'>Products</Link>
      </li>
      <GrCart className='p-2 text-[#5106e6c5] size-10 cursor-pointer mt-[-30px]'/>
      <div className='w-[20px] h-[20px] flex justify-center items-center mt-[-10] ml-[-45] rounded-[12px] bg-[#5910ecaf] text-white size[14px]'>{val}</div>
      <GrFavorite className='p-2 text-[#5106e6c5] size-10 cursor-pointer mt-[-20]' />
      <div className='w-[20px] h-[20px] flex justify-center items-center mt-[-10] ml-[-45] rounded-[12px] bg-[#5910ecaf] text-white size[14px]'>{isVal}</div>
      
      <li>log in</li>
      <li>sign up</li>
    </ul>
    </nav>
    </div>
  )
}
