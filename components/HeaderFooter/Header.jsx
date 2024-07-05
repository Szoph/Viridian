import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex justify-center items-center relative w-full h-full p-2'>
      <div className='absolute left-2 top-2'>
        <img src='/Logo.png' className='w-56 h-38 '/>
      </div>

      <ul className='flex gap-3 p-4'>
       <Link href='/' className='grey text-lg no-underline hover:font-semibold'>Home</Link>
       <Link href='/about' className='grey text-lg no-underline font-medium hover:font-semibold'>About</Link>
       <Link href='/portfolio' className='grey text-lg no-underline font-medium hover:font-semibold'>Portfolio</Link>
       <Link href='/contact' className='grey text-lg no-underline font-medium hover:font-semibold'>Contact</Link>
       <Link href='/' className='grey text-lg no-underline font-medium  hover:font-semibold'>Services</Link>
      </ul>
    </div>
  )
}

export default Header