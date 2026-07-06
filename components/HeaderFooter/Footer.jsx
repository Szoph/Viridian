import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='w-full p-4 flex items-center justify-between bg-white shadow-lg'>
      <div>
        <Image 
        src='/Logo.png'
        alt='Logo'
        width={700}
        height={1600}
        className='w-36 h-22'
        />
      {/* <img src='/Logo.png' className='w-36 h-22 '/> */}
        <p className='text-sm'>© 2024 Viridian Carpentry.</p>
      </div>
      <div className='flex flex-col'>
      <Link href='https://www.instagram.com/viridiancarpentry/' target='_blank' className='text-lg text-black no-underline font-medium hover:underline'>Instagram</Link>
      <Link href='https://www.facebook.com/ViridianCarpentry?locale=en_GB' target='_blank' className='text-lg text-black no-underline font-medium hover:underline'>Facebook</Link>
      </div>
    </footer>
  )
}

export default Footer