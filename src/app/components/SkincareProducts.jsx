"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import skincareProducts from '../components/data'
import SearchBar from './SearchBar'

export default function SkincareProducts() {
    const [search, setSearch] = useState('')
    function handleSearch(e){
        setSearch(e.target.value)
    }
    const filteredProduct = skincareProducts.filter(skinCare => skinCare.title.toLowerCase().includes(search.toLowerCase()) || skinCare.category.toLowerCase().includes(search.toLowerCase()))
    const careDetails = filteredProduct.length != 0 ? filteredProduct.map(skinCare => (
        <section key={skinCare.id} className='flex flex-col items-center justify-center shadow-2xl rounded-md bg-slate-800 border-[#F4C3A4] p-4'>
            <Image src={skinCare.image} alt={skinCare.title} width={'300'} height={'300'} className='rounded-4xl border-4 '/>
            <h2>
                <Link href={`/skinCare/${skinCare.title.replaceAll(' ', '-')}`}>
                {skinCare.title} </Link>
                </h2>
        </section>

    )) : (
        <div className='flex flex-col items-center justify-center shadow-2xl text-slate-100 text-3xl md:bg-slate-800 py-8 px-6 md:w-[1200px]'>
            <h2>No products found</h2>
        </div>
    )
  return (
    <div className='py-16 h-screen'>
        <SearchBar value={search} handle={(e) => handleSearch(e)}/>
        <div className='grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 w-3/5 m-auto h-screen gap-4 px-16'>
            {careDetails}
      
    </div>
    </div>
  )
}
