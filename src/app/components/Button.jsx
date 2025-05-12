'use client'
import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button className='bg-[#5106e6c5] text-slate-50 p-4 cursor-pointer rounded-2xl shadow-2xl inline-block mx-4 px-8' onClick={props.add}>{props.put}</button>
    </div>
  )
}
