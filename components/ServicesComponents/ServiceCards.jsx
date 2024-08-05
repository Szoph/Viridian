import React from 'react'

const ServiceCards = ({info}) => {

    
  return (
  <div className='w-full flex flex-wrap justify-center'>
  {info.map((service, index) => (
    <div key={index} className='w-96 bg-[#C18A58] lg:opacity-80 lg:hover:opacity-100 text-white rounded-md p-6 m-4 lg:basis-1/3 basis-full shadow-lg hover:scale-105'>
        <h3 className='text-xl font-bold mb-2'>{service.title}</h3>
        <ul>
         {service.list.map((item, idx) => (
            <li key={idx} className='text-sm'>• {item}</li>
         ))}
        </ul>
    </div>
  ))}
  </div>
  )
}

export default ServiceCards