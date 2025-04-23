"use client"
import { SidebarContext } from '@/app/providers'
import { useParams } from 'next/navigation'
import React, { useContext } from 'react'

export default function ProductInfo() {
  const params =useParams()
  const id = params.id
    const {setVal, addItem, setAddItem} = useContext(SidebarContext)
    const [put, setPut] = useState('Favourite')

    function handleIncrement() {
        setVal((prev) => prev + 1)
    }
    function handleFavIncrement() {
        setVal((prev) => prev + 1)
    }
    const careDetails = skincareProducts.find(skinCare => skinCare.title.replaceAll(' ','-') == params.id)

    const filteredData = skincareProducts.filter(skinCare => skinCare.title !== careDetails.title) && (skinCare.category === careDetails.category).slice(0, 4)
    function handleItemFav(){
      setAddItem([...addItem, {title: careDetails.title, price: careDetails.price, desc: careDetails.description}])
      setPut(prev => prev === 'Favourite' ? 'Added' : 'Favourite')
      
    }
  return (
    <>
    <div className=' px-16'>
      <h1 className='text-center text-3xl bg-slate-300 text-slate-50 py-5'>{careDetails.image}</h1>
      <section className='flex flex-col items-center justify-center shadow-2xl rounded-md bg-slate-800 border-[#F4C3A4] py-8 px-6'>
        <h2>Description</h2>
        <ul>
        {careDetails.description.map((skinCare, index) => (
            <li className='flex items-center px-6 py-8' key={index}>
            <span>{skinCare}</span>
            </li>
        ))}
        </ul>
      </section>
      <section>
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
            <span>{careDetails.price}</span>
        </ul>
      </section>
    </div>
    <div className='flex gap-4 items-center justify-center shadow-2xl rounded-md bg-slate-800 py-8 px-6'>
    <button className='bg-[#E26E2C] text-white p-4 cursor-pointer rounded-4xl inline-block mx-4 px-8' onClick={handleIncrement}>Add cart</button>
    <button className='bg-[#E26E2C] text-white p-4 cursor-pointer rounded-4xl inline-block mx-4 px-8' onClick={handleFavIncrement}>Favourite</button>
    </div>
    </>
  )
}
