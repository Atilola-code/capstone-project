import React from 'react'

export default function MiniNav() {
  return (
    <div>
    <ul className='md:hidden flex flex-col justify-between items-end h-[60vh] bg-blue-950/70 text-white text-2xl px-16 py-6 rounded-bl-full'>
      <li>about</li>
      <li>FAQs</li>
      <li>log in</li>
      <li>sign up</li>
    </ul>
    </div>
  )
}
