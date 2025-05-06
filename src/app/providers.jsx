"use client"

import { createContext, useState } from 'react'


const SidebarContext = createContext()

const SidebarProviders = ({children}) => {
  
  const [val, setVal] = useState(0)
  const [addItem, setAddItem] = useState([])
  const [addItemCart, setAddItemCart] = useState([])
  const [openCart, setOpenCart] = useState(false)
  const [openFav, setOpenFav] = useState(false)

  return (
    
      <SidebarContext.Provider value={{val, setVal, addItem, setAddItem , openCart, setOpenCart,addItemCart, setAddItemCart, openFav, setOpenFav}}>
        {children}

        </SidebarContext.Provider>
  )
}

export {SidebarProviders, SidebarContext}
