import React from 'react'
import CarouselComponent from '../ExtraComponants/CarouselComponent'
import Link from 'next/link'
import { Archivo_Narrow } from 'next/font/google'

const archivo = Archivo_Narrow({subsets: ['latin'], weight: ['500']})

const Home = () => {
 
  return (
    <div className=''>

<div className='p-5'>
<CarouselComponent />
</div>
<div className='flex items-center justify-center flex-col gap-3 pb-10'>
  
  <h3 className='mont text-3xl grey font-bold'>Versatile Craftsmanship, Unmatched Quality</h3>
  <Link href='/about' className='grey archivo p-4 no-underline bg-[#2C5F2D] text-white text-lg rounded-md hover:bg-[#639F5E]'>Learn more</Link>
</div>
<div className='flex items-center justify-center flex-col p-2 mt-10 text-xl archivo mb-20'>
  <p className={`${archivo.className} text-center w-1/2`}>At Viridian Carpentry, you have found the versatile experts in all carpentry projects. Not only do we have the extensive experience to deliver the exact look you desire, we also pride ourselves in great customer relations and attention to detail in the services we provide.</p>
  <p className={`${archivo.className} text-center w-1/2`}>We offer a broad range of design and build services including kitchens, staircases, media walls, bespoke cabinetry/storage solutions, wardrobes and more. </p>
  <p className={`${archivo.className} text-center w-1/2`}>Viridian Carpentry offers a professional, trustworthy and highly skilled service. We take great pride in ensuring genuine customer satisfaction at every step of the process and will take the time to ensure you are 100% happy with the finished product. </p>
</div>

    </div>
  )
}

export default Home