"use client"
import Button from '@/app/components/Button'
import { skincareProducts } from '@/app/components/data'
import { SidebarContext } from '@/app/providers'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';

export default function ProductInfo() {
  const params = useParams()
  const slug = params.slug
    const {setVal, setIsVal, addWishItem, setAddWishItem, addItemCart, setAddItemCart} = useContext(SidebarContext)
    const [put, setPut] = useState('Favorite')


    // function handleFavIncrement() {
      // }
      const careDetails = skincareProducts.find(skinCare => skinCare.title.replaceAll(' ','-') == slug)
      
      function addToCart(){
        setVal(prev => prev + 1)
        setAddItemCart(prevItems => {
        const existingItem = prevItems.find(item => item.id === careDetails.id);
  
        if (existingItem) {
        return prevItems.map(item =>
          item.id === careDetails.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
          return [
          ...prevItems,
      {
        cartItemId: crypto.randomUUID(),
        id: careDetails.id,
        title: careDetails.title,
        price: careDetails.price,
        quantity: 1
      }
    ];
  }
});
         toast.success(`${careDetails.title} added to cart!`)
      }
      
      
      function handleItemFav(){
      setIsVal(prev => prev + 1)
       setAddWishItem(prevItems => {
        const existingItem = prevItems.find(item => item.id === careDetails.id);
  
        if (existingItem) {
        return prevItems.map(item =>
          item.id === careDetails.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
          return [
          ...prevItems,
      {
        cartItemId: crypto.randomUUID(),
        id: careDetails.id,
        title: careDetails.title,
        desc: careDetails.desc,
        price: careDetails.price,
        quantity: 1
      }
    ];
  }
});
      setPut(prev => prev === 'Favorite' ? 'Added' : 'Favorite')
       toast.success(`${careDetails.title} added to Wishlist!`)
      
    }
  return (
    <>
    <div className='px-4 py-8 flex flex-col items-center justify-center h-screen m-auto'>
      <Image src={careDetails.image} alt={careDetails.title} width={'400'} height={'400'} className='rounded-3xl border-none '/>
      <section className='flex flex-col items-center justify-center max-w-lg  mt-6'>
        <ul>
        <span className='break-words font-normal font-serif leading-relaxed'><span className='text-lg font-semibold'>Description:</span> {careDetails.description}</span>
        </ul>
      </section>
      <section className='mr-[350px]'>
        <ul>
            <span className='font-serif text-xl  text-amber-500'><span className='text-black text-lg font-semibold'>Ratings: </span>{careDetails.ratingStars}</span>
        </ul>
      </section>
      <section className='mr-[333px]'>
        <ul>
            <span className='font-normal font-serif'><span className='font-semibold text-lg'>Category:</span> {careDetails.category}</span>
        </ul>
      </section>
      <section className='mr-[390px]'>
        <ul>
        <span className='font-normal font-serif'><span className='font-semibold text-lg'>Price: </span>₦{careDetails.price.toLocaleString()}</span>
        </ul>
      </section>
    </div>
    <div className='flex gap-4 items-center justify-center mt-[-32px] mb-6'>
    <button className='bg-[#5106e6c5] text-white p-4 cursor-pointer rounded-2xl inline-block shadow-2xl mx-4 px-8' onClick={() => addToCart()}>Add cart</button>
    {/* <button className='bg-[#5106e6c5] text-white p-4 cursor-pointer rounded-4xl inline-block mx-4 px-8' onClick={handleFavIncrement}>Favorite</button> */}
    <Button put={put} add={handleItemFav}/>
    </div>
    </>
  )
}
