"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { skincareProducts } from './data'
import SearchBar from './SearchBar'

export default function SkincareProducts() {
    const [search, setSearch] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')
    const categories = ['All', ...new Set(skincareProducts.map(skinCare => skinCare.category))]

    function handleSearch(e){
        setSearch(e.target.value)
    }
    function handleCategoryChange(e) {
        setSelectedCategory(e.target.value)
      }
      const filteredProduct = skincareProducts.filter(skinCare => {
        const matchesSearch = skinCare.title.toLowerCase().includes(search.toLowerCase())
        const matchesCategory = selectedCategory === 'All' || skinCare.category === selectedCategory
        return matchesSearch && matchesCategory
      })
       
    const careDetails = filteredProduct.length != 0 ? filteredProduct.map(skinCare => (
        <section key={skinCare.id} className='flex flex-col items-center justify-center shadow-2xl rounded-2xl bg-purple-100 lg:px-6 lg:py-8 px-4 py-6 font-serif border-none mt-16  '>
            <Image src={skinCare.image} alt={skinCare.title} width={'300'} height={'300'} className='rounded-2xl border-2 '/>
            <h2>
                <Link href={`/skinCare/${skinCare.title.replaceAll(' ', '-')}`}>
                {skinCare.title} </Link>
                <p>Price: ₦{skinCare.price.toLocaleString()}</p>
                <p>Desc: {skinCare.desc}</p>
                </h2>
        </section>

    )) : (
        <div className='flex flex-col items-center justify-center text-purple-300 text-4xl lg:bg-white py-8 px-6 md:w-[1200px]'>
            <h2>No products found</h2>
        </div>
    )
  return (
    <div className='py-24 px-14 flex flex-col min-h-screen'>
        <SearchBar value={search} handle={(e) => handleSearch(e)}/>
        <div className='grid lg:grid-cols-5  sm:grid-cols-2 w-5/5  min-h-screen gap-4 px-20'>
            {careDetails}
            <div className='flex items-center justify-center mt-4'>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className='w-2/4 border-2 border-[#5106e6c5] rounded-full py-3 px-4 outline-none text-black'
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>
    </div>
      
    </div>
  )
}
