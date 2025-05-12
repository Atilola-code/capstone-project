import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { RiStarSFill } from "react-icons/ri";
import About from '../about/page';



export default function LandingPage() {
  return (
    
    <div>

    <div className="flex flex-col justify-between h-screen bg-white px-4 lg:px-8">
      <div className="flex flex-row justify-between md:col-span-1 mt-10 md:mt-6">
        <div className='mt-10 lg:mt-40'>
        <h1 className='font-bold text-xl lg:text-4xl text-black'>GLOW BRIGHTER, <br />RADIATE CONFIDENCE</h1>
        <p className='text-xl font-sans font-normal'>Elevate your skincare routine </p>
        <p className='text-xl font-sans font-normal'>with clinically-effective formulas  </p>
          <p className='text-xl font-sans font-normal'>designed to restore balance and glow</p>
          <p className='text-xl font-sans font-normal md:flex hidden'><em>Your best skin is just a routine away</em></p>
          <button className='flex items-center justify-between shadow-2xl px-8 py-4 lg:px-14 lg:py-6 bg-[#A082DA] text-white rounded-2xl mt-8 lg:mt-10'>Shop Now</button>
        </div>
      <div>
        <Image src={"/New-image.png"} alt="skincare product" title='Quality skincare' width={'400'} height={'200'} className="bg-cover lg:mt-2 lg:w-[800px] my-[10px]"/>
      </div>
      </div>
      <div className='grid grid-cols-3 justify-items-center justify-around px-6 py-10 bg-white shadow-md text-xl lg:text-3xl font-serif mt-30 sm:mt-20 sm:px-4 sm:py-6'>
        <p>Trusted by over 200,000+ Customers</p>
        <span>
          <h2 className='lg:text-4xl text-2xl mb-2 sm:mb-0.5 text-center'>4.8</h2>
          <span className='flex flex-row'>
          <RiStarSFill  className='text-[#FFD700]'/>
          <RiStarSFill  className='text-[#FFD700]'/>
          <RiStarSFill  className='text-[#FFD700]'/>
          <RiStarSFill  className='text-[#FFD700]'/>
          <RiStarSFill  className='text-[#FFD700]'/>
          </span>
        </span>
        <span>
          <h2 className='lg:text-4xl text-2xl'>6M+</h2>
          <span className='text-2xl font-semibold font-serif'>Users</span>
        </span>
      </div>
       
      <div className=' mt-28  '>
        <h2 className=' font-semibold lg:text-4xl text-2xl'>Most Popular</h2>
      </div>
      <div>
      <div className=' grid sm:grid-cols-2 lg:grid-cols-5 justify-between mt-6 gap-6 items-center '>
        <div className=' bg-slate-100 rounded-2xl p-8 sm:p-6 shadow-2xl'>
        <Image src={"https://www.bareminerals.co.uk/cdn/shop/files/BM_SP24_SkinRescue_Silo_Closed_PureSmooth_3000x3000_R150.png?v=1742326240"} alt='first-product' width={'200'} height={'200'} />
        <p className='flex justify-center lg:text-lg sm:text-xs items-center mt-6 '>Bare mineral skin rescue</p>
        <p className='flex justify-center lg:text-lg sm:text-xs items-center '>Face serum-70ml</p>
        <p className='flex justify-center lg:text-lg sm:text-xs items-center '>Price: NGN 25,000</p>
        </div>
        <div className=' bg-slate-100 rounded-2xl py-8 px-8 shadow-2xl'>
        <Image src={"https://skinpopessentiel.com/cdn/shop/files/1000496439.jpg?v=1733681893&width=3840"} alt='second-product' width={'200'} height={'200'}/>
        <p className='flex justify-center lg:text-lg sm:text-xs items-center mt-6'>Moisturizing Face Wash</p>
        <p className='flex justify-center lg:text-lg sm:text-xs items-center'>Face Wash-120ml</p>
        <p className='flex justify-center lg:text-lg sm:text-xs items-center'>Price: NGN 55,000</p>
        </div>
        <div className=' bg-slate-100 rounded-2xl py-8 px-8 shadow-2xl'>
        <Image src={"https://emmediane.com/cdn/shop/files/Emme-Diane-Gentle-Cleaser---1200x1200.jpg?v=1722883873"} alt='third-product' width={'200'} height={'200'}/>
        <p className='flex justify-center lg:text-lg sm:text-xs items-center mt-6'>Gentle cleanser</p>
        <p className='flex justify-center lg:text-lg sm:text-xs items-center'>Face cleanser-140ml</p>
        <p className='flex justify-center lg:text-lg sm:text-xs items-center'>Price: NGN 28,000</p>
        </div> 
        <div className=' bg-slate-100 rounded-2xl py-8 px-8 shadow-2xl'>
        <Image src={"https://buybetter.ng/wp-content/uploads/2023/08/blemishh.jpg"} alt='fourth-product' width={'200'} height={'200'}/>
        <p className='flex justify-center lg:text-lg sm:text-xs items-center mt-6'>Ceramide</p>
        <p className='flex justify-center items-center lg:text-lg sm:text-xs'>Foam Cleanser-400ml</p>
        <p className='flex justify-center items-center lg:text-lg sm:text-xs '>Price: NGN 95,000</p>
        </div>
        <div className=' bg-slate-100 rounded-2xl py-8 px-8 shadow-2xl'>
        <Image src={"https://www.fresh.com/dw/image/v2/BDJQ_PRD/on/demandware.static/-/Sites-fresh_master_catalog/default/dw5571dede/product_images/H00006690_plp.jpg?sw=400&sh=400&bgcolor=F7F7F8&sfrm=jpg"} alt='fourth-product' width={'200'} height={'200'}/>
        <p className='flex justify-center sm:text-xs lg:text-lg items-center mt-6'>Fresh Kombucha</p>
        <p className='flex justify-center sm:text-xs lg:text-lg items-center '>Facial treatment-250ml</p>
        <p className='flex justify-center sm:text-xs lg:text-lg items-center '>Price: NGN 85,000</p>
        </div>
        <div className=' bg-slate-100 rounded-2xl py-8 px-8 shadow-2xl'>
        <Image src={"https://www.repechage.com/cdn/shop/files/Red-Out_Soothing_Moisturizer_Bottle.png?v=1733869728&width=1080"} alt='fourth-product' width={'200'} height={'200'}/>
        <p className='flex justify-center sm:text-xs lg:text-lg items-center mt-6'>REPECHAGE</p>
        <p className='flex justify-center sm:text-xs lg:text-lg items-center '>Moisturizer-120ml</p>
        <p className='flex justify-center sm:text-xs lg:text-lg items-center '>Price: NGN 10,000</p>
        </div>
        <div className=' bg-slate-100 rounded-2xl py-8 px-8 shadow-2xl'>
        <Image src={"https://www.beautyheaven.com.au/wp-content/uploads/2025/01/2DF_800-62-1.jpg"} alt='fourth-product' width={'200'} height={'200'}/>
        <p className='flex justify-center sm:text-xs lg:text-lg items-center mt-6'>CeraVe</p>
        <p className='flex justify-center sm:text-xs lg:text-lg items-center '>Hydrate Cleanser-236ml</p>
        <p className='flex justify-center sm:text-xs lg:text-lg items-center '>Price: NGN 45,000</p>
        </div>
        <div className=' bg-slate-100 rounded-2xl py-8 px-8 shadow-2xl'>
        <Image src={"https://images-eu.ssl-images-amazon.com/images/I/51Z2OL1x66L._AC_UL375_SR375,375_.jpg"} alt='fourth-product' width={'200'} height={'200'}/>
        <p className='flex justify-center sm:text-xs lg:text-lg items-center mt-6'>Garnier Skin Active</p>
        <p className='flex justify-center sm:text-xs lg:text-lg items-center '>Cleansing water-250ml</p>
        <p className='flex justify-center sm:text-xs lg:text-lg items-center '>Price: NGN 30,000</p>
        </div>
        <div className=' bg-slate-100 rounded-2xl py-8 px-8 shadow-2xl'>
        <Image src={"https://www.cloud10beauty.com/cdn/shop/files/paulas-choice-resist-perfectly-balanced-foaming-cleanser-271625.jpg?v=1726671655"} alt='fourth-product' width={'200'} height={'200'}/>
        <p className='flex justify-center sm:text-xs lg:text-lg items-center mt-6'>Paula's Choice</p>
        <p className='flex justify-center sm:text-xs lg:text-lg items-center '>Foaming Cleanser-150ml</p>
        <p className='flex justify-center sm:text-xs lg:text-lg items-center '>Price: NGN 55,000</p>
        </div>
        <div className=' bg-slate-100 rounded-2xl py-8 px-8 shadow-2xl'>
        <Image src={"https://assets.tatcha.com/desktop/images/product-images/serums/TheEssence-1-FS-2-MainImage.jpg"} alt='fourth-product' width={'200'} height={'200'}/>
        <p className='flex justify-center sm:text-xs lg:text-lg items-center mt-6'>Tatcha</p>
        <p className='flex justify-center sm:text-xs lg:text-lg items-center '>Skin boost-150ml</p>
        <p className='flex justify-center sm:text-xs lg:text-lg items-center '>Price: NGN 15,000</p>
        </div>
        </div>
      </div>
      <div className="flex flex-col justify-between mt-10 sm:mt-14">
        <div className='grid grid-cols-2 mt-10 sm:gap-4 lg:gap-2 justify-items-center'>
      <div>
        <Image src={"/Second-image.png"} alt="skincare for all" title='Quality skincare for all' width={'600'} height={'200'} className="px-8 py-10  bg-slate-200 rounded-[70px] "/>
      </div>
      <div className='lg:mt-32 lg:min-w-2xl max-w-lg ml-8 mt-8'>
        <h2 className='text-center lg:text-4xl text-xl font-semibold mt-14 mb-2'>Best skincare products for all skin type</h2>
        <p className='text-center lg:text-lg text-xs font-sans font-normal'>We've created a collection of thoughtfully crafted skincare essentials</p>
        <p className='text-center lg:text-lg text-xs font-sans font-normal'>made for every complexion, every texture, and every tone.</p>
        <p className='text-center lg:text-lg font-sans md:flex hidden font-normal '>Experience the transformative power of our skincare product</p>
        <p className='text-center lg:text-lg font-sans md:flex hidden font-normal '>and unlock your skin's true potential.</p>
        <p className='text-center lg:text-lg font-sans sm:text-xs font-normal '>Skincare isn't one-size-fits-all. It's personal and we're here for every kind</p>
        <button className='flex items-center justify-center shadow-2xl px-8 py-4 lg:ml-52 ml-18 lg:px-14 lg:py-6 bg-[#A082DA] mr-10 text-white rounded-2xl mt-8'>Shop Now</button>
      </div>
        </div>
      </div>
      </div>
      </div>
      

      
  )
}
