"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { skincareProducts } from './data'
import SearchBar from './SearchBar'

export default function SkincareProducts() {
    const [search, setSearch] = useState('')
    const [sortOrder, setSortOrder] = useState('asc')
    const [selectedCategory, setSelectedCategory] = useState('')

    function handleSearch(e){
        setSearch(e.target.value)
    }
    const filteredProduct = skincareProducts.filter(skinCare  => { const matchesSearch = skinCare.title.toLowerCase().includes(search.toLowerCase()) 
        const matchesCategory = !selectedCategory || skinCare.category === selectedCategory
        return matchesSearch && matchesCategory})

        .sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.title.localeCompare(b.title) 
            }
            return b.title.localeCompare(a.title) } 
        )
       
    const careDetails = filteredProduct.length != 0 ? filteredProduct.map(skinCare => (
        <section key={skinCare.id} className='flex flex-col items-center justify-center shadow-2xl rounded-2xl bg-purple-100 px-4 py-6 border-none mt-8  '>
            <Image src={skinCare.image} alt={skinCare.title} width={'300'} height={'300'} className='rounded-2xl border-2 '/>
            <h2>
                <Link href={`/skinCare/${skinCare.title.replaceAll(' ', '-')}`}>
                {skinCare.title} </Link>
                </h2>
        </section>

    )) : (
        <div className='flex flex-col items-center justify-center shadow-2xl text-slate-100 text-3xl md:bg-purple-200 py-8 px-6 md:w-[1200px]'>
            <h2>No products found</h2>
        </div>
    )
  return (
    <div className='py-16 h-screen'>
        <SearchBar value={search} handle={(e) => handleSearch(e)}/>
        <div className='grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 w-3/5  min-h-screen gap-4 px-16'>
            {careDetails}
      
    </div>
    </div>
  )
}
