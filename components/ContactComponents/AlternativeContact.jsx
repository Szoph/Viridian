import React from 'react'
import { Mail, Phone, MapPin, AtSign } from 'lucide-react'

const AlternativeContact = () => {
  return (
    <div className='flex flex-col gap-4 bg-[#D8B689] text-[#55342B] p-6 rounded-md shadow-md tracking-wide'>
        <h3 className='text-2xl md:text-3xl lg:text-3xl font-light mb-4 tracking-wider'>Prefer to contact us directly? </h3>
        
        
        <div className='flex flex-row items-center gap-2'>
        <Mail size={32} strokeWidth={2} />
        <p className='md:text-lg lg:text-lg text-md'>viridiancarpentry@gmail.com</p>
        </div>
        
        

        <div className='flex flex-row items-center gap-2'>
          <Phone size={32} strokeWidth={2} />

        <p className='md:text-lg lg:text-lg text-md'>07341447849</p>
        </div>


        <div className='flex flex-row items-center gap-2'>
          <AtSign size={32} strokeWidth={2} />

        <p className='md:text-lg lg:text-lg text-md'>viridiancarpentry</p>
        </div>


        <div className='flex flex-row items-center gap-2'>
          <MapPin size={32} strokeWidth={2} />

        <p className='md:text-lg lg:text-lg text-md'>Sheffield/Rotherham</p>
        </div>

      


        
    </div>
  )
}

export default AlternativeContact