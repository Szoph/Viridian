import React from 'react'
import CarouselComponent from '../ExtraComponants/CarouselComponent'
import Reviews from '../ExtraComponants/Reviews'
import Hero from './Hero'
import Link from 'next/link'
import { Archivo_Narrow } from 'next/font/google'

const archivo = Archivo_Narrow({subsets: ['latin'], weight: ['500']})

const Home = () => {
 
  return (
    <div className='move-right'>

<div className='pt-10'>
<CarouselComponent />
</div>
<Hero />
<div className='grid md:grid-cols-2 gap-16 items-center py-20 px-6'>
<div className='flex items-center justify-center flex-col p-2 mt-10 text-xl archivo mb-20'>
  <p className= 'text-center lg:w-3/4 lg:p-0 p-8'>Viridian Carpentry is a bespoke carpentry and interior joinery company based in Rotherham, working across Sheffield and surrounding areas. </p>
  <p className='text-center lg:w-3/4 lg:p-0 p-8'>We specialise in creating custom-built interiors including media walls, fitted wardrobes, kitchens, staircases and bespoke cabinetry. Every project is designed and built with precision, combining modern design with traditional craftsmanship to achieve high-quality, long-lasting results. </p>
  <p className='text-center lg:w-3/4 lg:p-0 p-8'>As experienced local joiners in Rotherham and Sheffield, we take pride in delivering a professional, reliable service from concept through to completion. Our focus is on clean finishes, attention to detail, and ensuring every client is fully satisfied with the final result.</p>
</div>
<div className=''>
  <img src='/Stairs1.jpg' alt='Oak and Iron staircase in Rotherham' className='w-full max-w-md mx-auto object-cover shadow-lg' />
</div>
</div>

<div className='flex flex-col justify-center items-center pb-20'>
  <h2 className='heading text-center p-4 text-[#55342B]'>Our Carpentry & Joinery Services</h2>
  <p className='text-center text-xl p-4'>We provide a wide range of bespoke carpentry and joinery services across Rotherham, Sheffield and surround areas, including: </p>
  
  <div className='flex flex-col-reverse md:flex-row md:justify-between md:gap-16 gap-4 justify-center items-center'>
    <img src='/Media Walls/MediaWall7.jpg' alt='' className='max-w-sm mx-auto shadow-lg'/>

  <ul className='font-medium text-lg text-[#55342B]'>
    <li className='pt-2'>• Media Walls</li>
    <li className='pt-2'>• Staircases</li>
    <li className='pt-2'>• Kitchens</li>
    <li className='pt-2'>• Bespoke Cabinetry</li>
    <li className='pt-2'>• Outdoor Carpentry</li>
    <li className='pt-2'>• Wardrobes</li>
    <li className='pt-2'>• Flooring</li>
    <li className='py-2'>• Doors</li>
  </ul>

  
</div>

</div>

<Reviews />
    </div>
  )
}

export default Home