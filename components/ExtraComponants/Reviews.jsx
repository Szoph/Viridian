import React from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {

    const customerTestimonies = ([
        {
            name: 'Mick & Maureen', 
            text: 'I would like to thank you for doing a great job of stripping the old stairs and building the new oak and glass replacement. Cannot fault you for the standard of work provided, very professional.'
        },  
        {
            name: 'James',
            text: 'Kitchen install: Right from the first phone call until handing the finished job back to us, Cameron was nothing short of professional. We are really pleased with his workmanship and customer service, I would not hesitate to contact him again in the future and I would definitely recommend.'
        },
        {
            name: 'Phil & Anette', 
            text: 'I have had a load of work done in my house, but by far the best was done by Cameron. The joinery work is first class, I would recommend him to anyone.'
        },
        {
            name: 'Ryan & Stevie', 
            text: "During a revamp of our bedroom we wanted some wall panelling installing. We reached out to Cameron who was quick with his responses and had discussions with us about the sizing and shapes of the panelling we wanted to get it exactly as we had envisioned. The work was done quickly and efficiently to a great standard. It has been up for over a year now and it still looks the same as the day it was first done. We get lots of compliments at how great it looks. I would definitely recommend Cameron for joinery work and wouldn't go anywhere else."
        }, 
        {
            name: 'Tim', 
            text: 'Cameron has done a few jobs for me renovating a property to put on the rental market. His work has always been completed to an excellent standard and his attention to detail surpasses other joiners I have used. I would recommend him to anyone needing joinery work done. '
        }, 
        {
            name: 'Kerry',
            text: "Cameron has completed several jobs for me, including fitting oak doors, door frames and skirting boards. He fitted a wooden floor, removed and replaced all skirting board. He's currently fitting another floor. I would highly recommend Cameron, he always leaves everything spotless and has advised me on different options for my built-in floor to cieling cupboards. Which I love!! Highly recommended and reasonable."
        }

    ])
  return (
    <div className='flex flex-col justify-center items-center'>
        <h2 className='text-3xl px-4 text-center'>Our customers love what we do</h2>
        <p className='p-4 text-center'>Discover what our satisfted customers have to say about Viridian Carpentry</p>

        <ReviewCard customerTestimonies={customerTestimonies} />

        <p></p>
    </div>
  )
}

export default Reviews