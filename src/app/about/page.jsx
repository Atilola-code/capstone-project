import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div className='mt-[1900px] sm:mt-[2100px]'>
      <div className="min-h-screen mt-10 text-slate-100 py-16 px-8  ">
      <div className="">
        <div className="text-center mb-12 font-normal font-sans ">
          <div className='grid grid-cols-2 justify-items-center mt-16'>
          <div className='text-lg text-slate-900'>
          <h1 className="text-3xl sm:text-2xl font-semibold text-black mt-10 px-4 py-8 sm:px-2 sm:py-6 shadow-2xl rounded-2xl sm:mr-4 bg-purple-300">About Me</h1>
          <p className="mt-8 sm:text-xs sm:mr-4"> Hi, I'm Sanni Mistura Ayinke, the creator behind this skincare ecommerce website. I am a young vibrant developer who enjoys developing creative ideas into clean, functional</p>
          <p className='sm:text-xs sm:mr-4'>and visually appealing web experiences, with a strong eye for details and a love for modern, intuitive interfaces.</p>
          <p className='sm:text-xs sm:mr-4'>I enjoy building projects that are not only beautiful but also purposeful and user-friendly which evolved into a full-blown passion.</p>
          <p className='sm:text-xs sm:mr-4'> From crafting responsive layouts to integrating dynamic features. I'm constantly exploring new tools and technologies to improve my skills and creativity and also open to collaboration.</p>
          </div>
      <div>
        <Image src={"/My-avatar.png"} alt="skincare product" title='Quality skincare' width={'600'} height={'200'} className="px-8 py-10 sm:w-[300px] sm:mt-20 sm:px-4 sm:py-8 sm:ml-4 bg-slate-200 rounded-[70px] border-4 border-purple-300 "/>
      </div>
          </div>
        </div>

        <div className=" p-8 sm:p-6 font-sans bg-[#E4CEE7]/50 font-normal rounded-2xl mt-20 sm:mt-30 shadow-2xl ">
          <h2 className="text-3xl sm:text-2xl text-center text-black bg-[#E4CEE7] font-bold sm:font-semibold mb-4 sm:py-10 px-2 py-16 shadow-2xl rounded-2xl">About the Project</h2>
          <p className="text-black text-xl sm:text-xs mb-6">
          This skincare eCommerce website was created to provide skincare enthusiasts with a seamless,visually appealing, and easy-to-use online shopping experience.
           The platform features a curated selection of skincare products, categorized to help users quickly find the items that suit their needs.
          Built with Next.js and Tailwind CSS, the website combines modern web development practices with clean, responsive design.
          It includes features such as product filtering, dynamic search functionality, and optimized image handling to enhance both performance and user experience.
          The goal of this project is to offer a platform where users can effortlessly browse, discover, and learn about skincare products,
           all within a fast, secure, and beautifully designed environment.
          </p>

          <ul className="list-disc list-inside space-y-2 text-xl sm:text-xs text-black">
            <li>Built using Next.js 14+ (App Router)</li>
            <li>Styled entirely with Tailwind CSS</li>
            <li>Search functionality to filter skincare products</li>
            <li>Image-optimized product displays using Next/Image</li>
            <li>Clean, modern UI and responsive layouts</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  
   
  )
}


