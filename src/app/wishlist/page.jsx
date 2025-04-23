'use client'
import React, { useContext } from 'react'
import { SidebarContext } from '../providers'

export default function Wishlist() {
    const {addItem} = useContext(SidebarContext)
  return (
    <div>
        {
           addItem.length == 0 
           ?
           (
             <h2 className='text-center text-3xl font-bold'>Your wishlist is empty</h2>
           )
           :
           (
            <table className='text-center w-full border-collapse border border-gray-300'>
                <caption className='text-3xl font-bold text-[#E26E2C] py-4'>Your Wishlist</caption>
                <thead>
                    <tr className='bg-[#E26E2C] text-white'>
                        <th className='border border-gray-300'>Title</th>
                        <th className='border border-gray-300'>Price</th>
                        <th className='border border-gray-300'>Description</th>
                    </tr>

                </thead>
                <tbody>
                    {addItem.map((item, index) => (
                        <tr key={index} className='border border-gray-300'>
                            <td className='text-center text-xl font-bold'>{item.title}</td>
                            <td className='text-center text-xl font-bold'>{item.price}</td>
                            <td className='text-center text-xl font-bold'>{item.description}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
           )
        }
      
    </div>
  )
}
