import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const AboutPage = () => {
  return (
    <div className='w-fullmove-left flex items-center justify-center flex-col py-14'>
        <h2 className='heading'>About Viridian Carpentry</h2>
        <p className='text-center w-2/3'>Viridian Carpentry is a bespoke carpentry and interior joinery business based in Rotherham, working across Sheffield and surrounding areas.</p>

        <div className='w-2/3'>
         <p className='text-center'>Founded by Cameron Rhodes, the business was built from a passion for woodworking and creating high-quality, custom interiors that are both functional and visually refined. With a strong focus on detail, precision, and clean finishes, Viridian Carpentry delivers tailored solutions for modern homes and commercial spaces.</p>

        <p className='text-center'>We specialise in bespoke interior joinery, working closely with clients to design and build unique spaces that suit their home and lifestyle. </p>
        </div>

        <div className='w-2/3'>
            <h3 className='text-center heading'>Our Expertise</h3>

            <p className='text-center'>We offer a wide range of bespoke interior services, including:</p>
            <ul>
                <li className=''>• Custom Media Walls</li>
                <li>• Fitted Kitchens</li>
                <li>• Staircases & Structural Joinery</li>
                <li>• Bespoke Cabinetry & Storage Solutions</li>
                <li>• Fitted Wardrobes</li>
                <li>• General Carpentry & Interior/Exterior Improvements</li>
            </ul>

            <p className='text-center'>Every project is approached with care and attention to detail, ensuring a high-quality finish that is built to last. </p>

        </div>

        <div className=' w-2/3 flex flex-col items-center justify-center'>
            <h3 className='heading '>Our Approach</h3>

            <p>At Viridian Carpentry, we believe good craftsmanship is about more than just building - it's about creating spaces that feel considered, functional, and well finished. We take pride in clear communication, reliability, and delivering work our clients are proud of.</p>


        </div>

        <div className='w-2/3 flex flex-col items-center justify-center'>
            <h3 className='heading'>Get in Touch</h3>

            <p>If you're looking for a trusted local joiner in Rotherham or Sheffield, we'd be happy to discuss your project and bring your ideas to life.</p>
        </div>

    </div>
    // <div className='w-full flex items-center justify-center flex-col text-lg py-14 move-left'>
    //     <h2 className='text-4xl font-bold mb-24 heading text-[#55342B]'>About Us</h2>

    //     <div className='w-2/3'>
    //     <p className='text-lg'>Welcome to Viridian Carpentry, where expert craftsmanship meets versatile design. Founded by Cameron Rhodes, we have been delivering first-class carpentry services for several years. With a passion for woodworking and a keen eye for detail, Cameron has built a reputation for providing exceptional quality and innovative solutions for every project.</p>
    //     <p className='py-4 '>Viridian Carpentry proudly serves a diverse range of clients, including luxury residences, commercial builds, restaurants, and renovation projects accross South Yorkshire. Experience the superior craftsmanship and innovative design that set us apart.</p>
    //     </div>

    //     <div className='w-2/3 mt-10'>
    //         <h8 className='text-2xl font-semibold heading text-[#55342B]'>Our Expertise</h8>
    //         <p className='py-4'>At Viridian Carpentry, we pride ourselves on our adaptability and skill, offering a comprehensive range of carpentry services tailored to your needs:</p>
    //         <div className='flex justify-center items-center flex-col md:flex-col lg:flex-row'>
    //         <ul className='p-2'>
    //             <li className='pb-2'><span className='font-semibold heading'>Custom Kitchens:</span> Beautifully designed kitchens that reflect your lifestyle and preferences.</li>
    //             <li className='pb-2'><span className='font-semibold heading'>Staircases:</span> Graceful staircases that add a touch of elegance to your home.</li>
    //             <li className='pb-2'><span className='font-semibold heading'>Media Walls:</span> Modern, functional media walls tailored for your entertainment needs.</li>
    //             <li className='pb-2'><span className='font-semibold heading'>Bespoke Cabinetry & Storage Solutions:</span> Custom cabinetry and innovative storage solutions to optimize your space and organisation.</li>
    //             <li className='pb-2'><span className='font-semibold heading'>Wardrobes:</span> Exquisitely crafted wardrobes designed to seamlessly fit your space and style.</li>
    //             <li className='pb-1 '><span className='font-semibold heading'>And Much More:</span> From minor repairs to extensive renovations, we bring the same level of dedication and expertise to every project we undertake.</li>
    //         </ul>
    //         <div className='w-full ml-2'>
    //             {/* <Image 
    //             src='/Other/Other2.jpg'
    //             alt='Other'
    //             width={700}
    //             height={1600}
    //             className='w-96 min-w-96 mb-6'
    //             /> */}
    //             {/* <img src='/Other/Other2.jpg' className='w-96 min-w-96 mb-6'/> */}
    //         </div>
    //         </div>
    //         <p>Experience the exceptional quality and attention to detail that define Viridian Carpentry. Let us transform your space with our expert craftsmanship. </p>
           
           
    //         <div className='flex flex-row'>
    //         <Link href='/contact' className='font-extrabold no-underline text-[#55342B] hover:cursor-pointer'>Contact us </Link>
    //         <p className='pl-1'>
    //             now for a consultation</p>
    //             </div>

    //     </div>
    // </div>
  )
}

export default AboutPage