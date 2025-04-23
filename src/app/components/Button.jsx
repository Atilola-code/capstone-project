'use client'
import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button className='bg-[#E26E2C] text-slate-50 p-4 cursor-pointer rounded-full inline-block mx-4 px-4' onClick={props.add}>{props.put}</button>
    </div>
  )
}
