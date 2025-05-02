'use client'
import { useContext } from 'react'
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
                <caption className='text-3xl font-bold text-black py-4'>Your Wishlist</caption>
                <thead>
                    <tr className='bg-[#B39BE1  ] text-white'>
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
                            <td className='text-center text-xl font-bold'>{item.desc}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
           )
        }
      
    </div>
  )
}
