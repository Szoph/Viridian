import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full p-4 flex items-center justify-between bg-white shadow-lg'>
      <div>
      <img src='/Logo.png' className='w-36 h-22 '/>
        <p className='text-sm'>© 2024 Viridian Carpentry.</p>
      </div>
      <div className='flex flex-col'>
      <Link href='https://www.instagram.com/viridiancarpentry/' target='_blank' className='text-lg text-black no-underline font-bold'>Instagram</Link>
      <Link href='https://www.facebook.com/ViridianCarpentry?locale=en_GB' target='_blank' className='text-lg text-black no-underline font-bold'>Facebook</Link>
      </div>
    </footer>
  )
}

export default Footer