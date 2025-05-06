import React, { useContext } from 'react'
import { LiaTimesSolid } from "react-icons/lia"
import { SidebarContext } from '../providers'

export default function CartItems() {
    const {openCart, setOpenCart, addItemCart, setAddItemCart} = useContext(SidebarContext)
    
    function handleCart() {
        setOpenCart(!openCart)
    }
    
  return (
    <div>
    <div className='w-1/2 h-screen shadow-2xl bg-[#E3D7FD] text-black py-8 px-6 rounded-lg absolute right-0 top-18 '>
      <div className=' flex justify-between items-center text-2xl font-serif'>
        <h2 className='text-[#5106e6c5]'>Cart</h2>
        <LiaTimesSolid className='text-[#5106e6c5]' onClick={handleCart}/>
      </div>
    </div>
    { 
        addItemCart.length == 0 
       ?
       (
         <h2 className='text-center text-3xl font-bold'>Your cart is empty</h2>
       )
       :
       (
           <table className='text-center w-full border-collapse'>
            <caption className='text-2xl font-bold text-[#5106e6c5] py-4'>Your Cart</caption>
            <thead>
                <tr className='bg-[#B39BE1  ] text-white'>
                    <th className='border border-gray-300'>Title</th>
                    <th className='border border-gray-300'>Value</th>
                    <th className='border border-gray-300'>Amount</th>
                </tr>

            </thead>
            <tbody>
                {addItemCart.map((item, index) => (
                    <tr key={index} className='border border-gray-300'>
                        <td className='text-center text-xl font-bold'>{item.title}</td>
                        <td className='text-center text-xl font-bold'>{item.val}</td>
                        <td className='text-center text-xl font-bold'>{item.price}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                </tr>
            </tfoot>

        </table>
       )
    }
  
    </div>
  )
}
