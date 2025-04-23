import React from 'react'

export default function AboutMe() {
  return (
    <div>
    <div className="min-h-screen mt-[550px] text-slate-100 py-16 px-8 ">
      <div className="">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold flex justify-center items-center bg-[#E4CEE7] rounded-2xl shadow-2xl mt-16 mb-4 px-2 py-16 ">About Me</h1>
          <div className='text-lg text-slate-900'>
          <p className=""> Hi, I'm Sanni Mistura Ayinke, the creator behind this skincare eCommerce platform. I thrive on turning creative ideas into clean, functional, and visually appealing web experiences.</p>
          <p>With a strong eye for details and a love for modern, intuitive interfaces. I enjoy building projects that are not only beautiful but also purposeful and user-friendly which </p> 
          <p>evolved into a full-blown passion. From crafting responsive layouts to integrating dynamic features. I'm constantly exploring new tools and technologies to improve my skills and creativity.</p>
          </div>
        </div>

        <div className=" p-8 rounded-2xl shadow-2xl ">
          <h2 className="text-5xl text-center font-bold mb-4 px-2 py-16 shadow-2xl rounded-2xl">About the Project</h2>
          <p className="text-black mb-6">
          This skincare eCommerce website was created to provide skincare enthusiasts with a seamless,visually appealing, and easy-to-use online shopping experience.
           The platform features a curated selection of skincare products, categorized to help users quickly find the items that suit their needs.
          Built with Next.js and Tailwind CSS, the website combines modern web development practices with clean, responsive design.
          It includes features such as product filtering, dynamic search functionality, and optimized image handling to enhance both performance and user experience.
          The goal of this project is to offer a platform where users can effortlessly browse, discover, and learn about skincare products,
           all within a fast, secure, and beautifully designed environment.
          </p>

          <ul className="list-disc list-inside space-y-2 text-black">
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


