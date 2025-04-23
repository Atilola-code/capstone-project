"use client"
import React, { createContext, useState } from 'react'


const SidebarContext = createContext()

const SidebarProviders = ({ children }) => {

  const [val, setVal] = useState(0)
  const [addItem, setAddItem] = useState([])

  return (
    
      <SidebarContext.Provider value={{val, setVal, addItem, setAddItem}}>
        {children}

        </SidebarContext.Provider>
  )
}

export {SidebarProviders, SidebarContext}
