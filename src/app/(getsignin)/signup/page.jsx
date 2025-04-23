import Link from 'next/link'
import React from 'react'

export default function SignUp() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-slate-900 p-4'>
      <div className='w-full max-w-md p-4 bg-transparent rounded-lg shadow-lg'>
        <h1 className='text-2xl font-semibold text-white text-center'>Sign up</h1>
        <p className='text-white text-center mb-4'>Already have an account? <Link href={"/login"}>Login</Link></p>

        <form className='space-y-4'>
            <input type="text" name="fname" id="Fullname" placeholder="Fullname" className='block text-white font-medium w-full px-4 py-4 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'/>
            <input type="email" name="e-address" id="Email" placeholder="Email" className='block text-white font-medium w-full px-4 py-4 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none' />
            <input type="password" name="password" id="Password" placeholder="Password" className='block text-white font-medium w-full px-4 py-4 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none' />
            <input type="password" name="password" id="C-Password" placeholder="Confirm Password" className='block text-white font-medium w-full px-4 py-4 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none' />

            <button type="submit" className='w-full bg-blue-500 text-white py-4 rounded-lg font-semibold hover:bg-blue-600 transition shadow-2xl'>Sign Up</button>
        </form>
      </div>
    </div>
  )
}
