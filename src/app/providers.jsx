"use client"

import { createContext, useEffect, useState } from 'react'


const SidebarContext = createContext()

const SidebarProviders = ({children}) => {
  
  const [val, setVal] = useState(0)
  const [isVal, setIsVal] = useState(0)
  const [addWishItem, setAddWishItem] = useState([])
  const [addItemCart, setAddItemCart] = useState([])
  const [openCart, setOpenCart] = useState(false)
  const [openWish, setOpenWish] = useState(false)


  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setAddItemCart(JSON.parse(savedCart));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(addItemCart));
  }, [addItemCart])

  

  const addToCart = (skinCare) => {
    setAddItemCart((prevItems) => {
      const existingItem = prevItems.find(item => item.id === skinCare.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.productId === skinCare.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
          )
        }
        return [
         ...prevItems, 
        { 
          cartItemId: crypto.randomUUID(), // unique cart item id 
          productId: skinCare.id, 
          title: skinCare.title, 
          price: skinCare.price, 
          quantity: 1 
        }
      ]
    })
    }
      const incrementQuantity = (cartItemId) => {
  setAddItemCart((prevItems) =>
    prevItems.map((item) =>
      item.cartItemId === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
    )
  )
}

const decrementQuantity = (cartItemId) => {
  setAddItemCart((prevItems) =>
    prevItems.map((item) =>
      item.cartItemId === cartItemId
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    )
  )
}
      


  return (
    
      <SidebarContext.Provider value={{val, setVal, isVal, setIsVal, addWishItem, setAddWishItem , openWish, setOpenWish, openCart, setOpenCart,addItemCart, setAddItemCart, addToCart,incrementQuantity, decrementQuantity}}>
        {children}

        </SidebarContext.Provider>
  )
}

export {SidebarProviders, SidebarContext}
