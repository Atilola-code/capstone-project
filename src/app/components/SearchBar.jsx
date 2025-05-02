import React from 'react'

export default function SearchBar({value, handle}) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='w-2/5 h-1/2 border-2 border-[#E26E2C]] rounded-full mt-4 py-4 px-2 '>
      <input type="text" name="search" id="search" className='outline-none block w-2/5' placeholder='Type your way to glowing skin...' 
      defaultValue={value}
      onChange={handle}/>

      </div>
    </div>
  )
}
