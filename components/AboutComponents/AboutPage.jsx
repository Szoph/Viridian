import React from 'react'


const AboutPage = () => {
  return (
    <div className='w-full flex items-center justify-center flex-col text-lg py-14 move-left'>
        <h2 className='text-4xl font-bold mb-24'>About Us</h2>

        <div className='w-2/3'>
        <p className='text-lg'>Welcome to Viridian Carpentry, where expert craftsmanship meets versatile design. Founded by Cameron Rhodes, we have been delivering first-class carpentry services for several years. With a passion for woodworking and a keen eye for detail, Cameron has built a reputation for providing exceptional quality and innovative solutions for every project.</p>
        <p className='py-4 '>Viridian Carpentry proudly serves a diverse range of clients, including luxury residences, commercial builds, restaurants, and renovation projects accross South Yorkshire. Experience the superior craftsmanship and innovative design that set us apart.</p>
        </div>

        <div className='w-2/3 mt-10'>
            <h8 className='text-2xl font-semibold'>Our Expertise</h8>
            <p className='py-4'>At Viridian Carpentry, we pride ourselves on our adaptability and skill, offering a comprehensive range of carpentry services tailored to your needs:</p>
            <div className='flex justify-center items-center flex-col md:flex-col lg:flex-row'>
            <ul className='p-2'>
                <li className='pb-2'><span className='font-semibold'>Custom Kitchens:</span> Beautifully designed kitchens that reflect your lifestyle and preferences.</li>
                <li className='pb-2'><span className='font-semibold'>Staircases:</span> Graceful staircases that add a touch of elegance to your home.</li>
                <li className='pb-2'><span className='font-semibold'>Media Walls:</span> Modern, functional media walls tailored for your entertainment needs.</li>
                <li className='pb-2'><span className='font-semibold'>Bespoke Cabinetry & Storage Solutions:</span> Custom cabinetry and innovative storage solutions to optimize your space and organisation.</li>
                <li className='pb-2'><span className='font-semibold'>Wardrobes:</span> Exquisitely crafted wardrobes designed to seamlessly fit your space and style.</li>
                <li className='pb-1'><span className='font-semibold'>And Much More:</span> From minor repairs to extensive renovations, we bring the same level of dedication and expertise to every project we undertake.</li>
            </ul>
            <div className='w-full ml-2'>
                <img src='/Other/Other2.jpg' className='w-96 min-w-96'/>
            </div>
            </div>
            <p>Experience the exceptional quality and attention to detail that define Viridian Carpentry. Let us transform your space with our expert craftsmanship. </p>
            <p><a className='font-extrabold text-green-700 hover:cursor-pointer ' href='/contact'>Contact us</a> now for a consultation</p>
        </div>
    </div>
  )
}

export default AboutPage