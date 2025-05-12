import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div className='lg:mt-8 mt-28'>
      <div className="h-screen text-slate-100 lg:py-16 lg:px-8  ">
      <div className="">
        <div className="text-center mb-12 font-normal font-sans ">
          <div className='grid grid-cols-2 justify-items-center'>
          <div className='text-lg lg:mt-30 mt-48 text-slate-900'>
          <h1 className="lg:text-3xl text-2xl font-semibold text-black mt-10 lg:px-4 lg:py-8 px-2 py-6 shadow-2xl rounded-2xl sm:mr-4 bg-purple-300">About Me</h1>
          <p className="mt-8 lg:text-lg text-xs sm:mr-4"> Hi, I'm Sanni Mistura Ayinke, the creator behind this skincare ecommerce website. I am a young vibrant developer who enjoys developing creative ideas into clean, functional</p>
          <p className='lg:text-lg text-xs sm:mr-4'>and visually appealing web experiences, with a strong eye for details and a love for modern, intuitive interfaces.</p>
          <p className='lg:text-lg text-xs sm:mr-4'>I enjoy building projects that are not only beautiful but also purposeful and user-friendly which evolved into a full-blown passion.</p>
          <p className='lg:text-lg text-xs sm:mr-4'> From crafting responsive layouts to integrating dynamic features. I'm constantly exploring new tools and technologies to improve my skills and creativity and also open to collaboration.</p>
          </div>
      <div>
        <Image src={"/My-avatar.png"} alt="skincare product" title='Quality skincare' width={'600'} height={'200'} className="lg:px-8 lg:py-10 mt-58 md:mt-20 md:px-4 sm:py-8 sm:ml-4 bg-slate-200 rounded-[70px] border-4 border-purple-300 "/>
      </div>
          </div>
        </div>

        <div className=" lg:p-8 p-6 font-sans bg-[#E4CEE7]/50 font-normal rounded-2xl lg:mt-30 mt-30 shadow-2xl">
          <h2 className="lg:text-3xl text-2xl text-center text-black bg-[#E4CEE7] lg:font-bold font-semibold mb-4 py-10 px-2 lg:py-16 shadow-2xl rounded-2xl">About the Project</h2>
          <p className="text-black lg:text-lg text-xs mb-6">
          This skincare eCommerce website was created to provide skincare enthusiasts with a seamless,visually appealing, and easy-to-use online shopping experience.
           The platform features a curated selection of skincare products, categorized to help users quickly find the items that suit their needs.
          Built with Next.js and Tailwind CSS, the website combines modern web development practices with clean, responsive design.
          It includes features such as product filtering, dynamic search functionality, and optimized image handling to enhance both performance and user experience.
          The goal of this project is to offer a platform where users can effortlessly browse, discover, and learn about skincare products,
           all within a fast, secure, and beautifully designed environment.
          </p>

          <ul className="list-disc list-inside space-y-2 lg:text-lg text-xs text-black">
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


