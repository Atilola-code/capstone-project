"use client"
import Button from '@/app/components/Button'
import { skincareProducts } from '@/app/components/data'
import { SidebarContext } from '@/app/providers'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useContext, useState } from 'react'

export default function ProductInfo() {
  const params = useParams()
  const id = params.id
    const {setVal, addItem, setAddItem} = useContext(SidebarContext)
    const [put, setPut] = useState('Favourite')

    function handleIncrement() {
        setVal(prev => prev + 1)
    }
    function handleFavIncrement() {
        setVal(prev => prev + 1)
    }
    const careDetails = skincareProducts.find(skinCare => skinCare.title.replaceAll(' ','-') == id)
    

    function handleItemFav(){
      setAddItem([...addItem, {title:careDetails.title, price:careDetails.price, desc:careDetails.description, image:careDetails.image}])
      setPut(prev => prev === 'Favorite' ? 'Added' : 'Favorite')
      
    }
  return (
    <>
    <div className=' px-16'>
      <Image src={careDetails.image} alt={careDetails.title} width={'300'} height={'300'} className='rounded-3xl border-none hover:scale-105 '/>

      <section className='flex flex-col items-center justify-center shadow-2xl rounded-md bg-slate-800 border-[#B39BE1] py-8 px-6'>
        <h2>Description</h2>
        <ul>
        {careDetails.description.map((skinCare, index) => (
            <li className='flex items-center px-6 py-8' key={index}>
            <span>{skinCare}</span>
            </li>
        ))}
        </ul>
      </section>
      <section className='flex flex-col items-center justify-center shadow-2xl rounded-md bg-amber-500 py-8 px-6'>
        <h2>Ratings</h2>
        <ul>
            <span>{careDetails.ratingStars}</span>
        </ul>
      </section>
      <section>
        <h2>category</h2>
        <ul>
            {careDetails.category.map((skinCare, index) => (
            <li className='flex items-center px-6' key={index}>
            <span>{skinCare}</span>
            </li>
        ))}
        </ul>
      </section>
      <section>
        <h2>Price</h2>
        <ul>
            <span>Price: ₦{careDetails.price.toLocaleString()}</span>
        </ul>
      </section>
    </div>
    <div className='flex gap-4 items-center justify-center shadow-2xl rounded-md bg-slate-800 py-8 px-6'>
    <button className='bg-[#E26E2C] text-white p-4 cursor-pointer rounded-4xl inline-block mx-4 px-8' onClick={handleIncrement}>Add cart</button>
    <button className='bg-[#E26E2C] text-white p-4 cursor-pointer rounded-4xl inline-block mx-4 px-8' onClick={handleFavIncrement}>Favourite</button>
    <Button put={put} add={handleItemFav}/>
    </div>
    </>
  )
}
