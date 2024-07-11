import React from 'react'
import ServiceCards from './ServiceCards'

const ServicesPage = () => {

    const info = ([
        {
            title: 'First Fix Joinery',
            list: ['Roofing - hand cut and truss section', 'Joists', 'Stud Walls', 'Bulk Heads', 'Drop Cielings', 'Door Frames', 'Staircase installation', 'Flooring - chip board, tongue & groove, mezzanine', 'External Windows & Doors', 'Glazing', 'French Doors, Sliding Doors, Bifold Doors']
        },
        {
            title: 'Second Fix Joinery',
            list: ['Dry Lining', 'Skirting & Architraves', 'Window Boards', 'Doors', 'Pocket Doors / Sliding Doors', 'Box Work', 'Finished Flooring (Laminate, LVT, Tiling, Solid Wood, Engineered Wood)', 'Loft Access']
        },
        {
            title: 'Internal',
            list: ['Kitchens - We work with a range of suppliers and offer fully fitted and bespoke kitchens to fit your needs', 'Staircases - Standard handrails with spindles, oak and glass, oak and wrought iron balusters', 'Wardrobes', 'Bespoke Cabinetry', 'Bathrooms', 'Entertainment Units', 'Media Walls', 'Wall Pannelling']
        },
        {
            title: 'External',
            list: ['Decking - Timber / Composite', 'Log Cabins', 'Garden Rooms', 'Pergolas', 'Made-to-Measure Gates & Fences', 'Sleepers & Planters', 'Porcelain Patios', 'Glass Balustrades', 'Canopies']
        }
    ])

  return (
    <div className='my-24 move-right'>
            <div className='flex justify-center items-center flex-col mx-16'>
                <h2 className='font-bold text-4xl mb-8'>Services</h2>
                <p className='md:w-3/4 lg:w-3/4 w-full text-center text-lg mb-2'>
                    We work alongside well trusted and reputable trades such as fully accredited, gas safe plumbers, fully accredited electricians, brick-layers, plasterers, and painters/decorators. 
                </p>
                <p className='md:w-3/4 lg:w-3/4 w-full text-center mb-8 text-lg'>
                    Services we offer at Viridian Carpentry include but aren't limited to: 
                </p>
            </div>
            
            

            <ServiceCards
            info={info} />
           
      
      <div className='text-xl flex justify-center items-center my-10'>
        <p className=''>Follow us on <a href='https://www.instagram.com/viridiancarpentry/' target='_blank' className='font-bold text-[#99582A]'>Instagram</a> to keep up to date with recent projects</p>
      </div>
    </div>
  )
}

export default ServicesPage