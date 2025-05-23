"use client"

import Link from "next/link"
import NavBar from "./NavBar"
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react"
import MiniNav from "./MiniNav"

export default function MainNav() {
    const [open, setOpen] = useState()
    const [menu, setMenu] = useState('/')

    function handleNavigation(){
        setOpen(!open)
    }

  return (
    <div>
      <NavBar/>
      <ul className="flex md:hidden h-[100px] bg-[#dbcbfcc5] text-[#5106e6c5] px-6 lg:text-2xl text-xl justify-between items-center shadow-2xl">
      <li className='text-[#5106e6c5] font-extrabold text-xl shadow-2xl'>Careglow</li>
      <li onClick={() => {setMenu('/')}}>
                    <Link href='/'>Home {menu=== '/' ? <hr className='border-none w[90%] h-[2px] bg-[#5106e6c5] rounded-md'/>:<></>}</Link>
                    </li>
        <li>
            <GiHamburgerMenu onClick={handleNavigation} className="cursor-pointer"/>
        </li>
      </ul>
      { open &&
       
       <MiniNav/>

      }
    </div>
  )
}

