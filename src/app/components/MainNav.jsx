"use client"

import Link from "next/link"
import NavBar from "./NavBar"
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react"
import MiniNav from "./MiniNav"

export default function MainNav() {
    const [open, setOpen] = useState()

    function handleNavigation(){
        setOpen(!open)
    }

  return (
    <div>
      <NavBar/>
      <ul className="flex md:hidden justify-between h-[100px] bg-slate-950 text-white px-16 text-2xl items-center">
        <li>
            <Link href={'/'}>Home</Link>
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

