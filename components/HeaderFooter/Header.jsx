'use client';
import { useState } from 'react'; 
import Link from 'next/link';

const Header = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false); 
  return (
    <div className='sticky top-0 z-20 bg-white flex w-full h-full p-2 shadow-lg'>
      <div className='flex justify-between items-center w-full'>
      <div className=''>
        <Link href='/'>
        <img src='/Logo.png' className='w-38 h-20 '/>
        </Link>
      </div>


      {/* desktop navbar */}
      <div className='hidden lg:flex justify-center w-full'>
      <ul className='flex gap-3 p-4 mr-24'>
       <Link href='/' className='grey text-lg no-underline hover:font-semibold'>Home</Link>
       <Link href='/about' className='grey text-lg no-underline font-medium hover:font-semibold'>About</Link>
       <Link href='/portfolio' className='grey text-lg no-underline font-medium hover:font-semibold'>Portfolio</Link>
       <Link href='/contact' className='grey text-lg no-underline font-medium hover:font-semibold'>Contact</Link>
       <Link href='/services' className='grey text-lg no-underline font-medium  hover:font-semibold'>Services</Link>
      </ul>
      </div>
      </div>

      {/* mobile navbar */}
      <div className='flex lg:hidden'>
      <button
                className="text-4xl "
                onClick={() => setToggleMobileMenu((prev) => !prev)}
              >
                <div className="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 6h18M3 12h18M3 18h18"/></svg>
                </div>
              </button>

              {toggleMobileMenu && (
                <div className='absolute top-24 right-0 md:rounded-md md:w-1/3 w-full bg-white flex flex-col gap-2 shadow-lg justify-center items-center py-2'>

                  <Link href='/' className='grey text-xl no-underline font-bold border-b border-gray-300 w-3/4 text-center py-2 shadow-b-md' onClick={() => setToggleMobileMenu(false)}>Home</Link>
                  <Link href='/about' className='grey text-xl no-underline font-bold border-b border-gray-300 w-3/4 text-center pb-2 shadow-b-md' onClick={() => setToggleMobileMenu(false)}>About</Link>
                  <Link href='/portfolio' className='grey text-xl no-underline font-bold border-b border-gray-300 w-3/4 text-center pb-2 shadow-b-md' onClick={() => setToggleMobileMenu(false)}>Portfolio</Link>
                  <Link href='/contact' className='grey text-xl no-underline font-bold border-b border-gray-300 w-3/4 text-center pb-2 shadow-b-md' onClick={() => setToggleMobileMenu(false)}>Contact</Link>
                  <Link href='/services' className='grey text-xl no-underline font-bold w-3/4 text-center pb-2' onClick={() => setToggleMobileMenu(false)}>Services</Link>

                </div>
              )}

              
      

      </div>
    </div>
  )
}

export default Header