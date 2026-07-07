import React from 'react'
import AlternativeContact from './AlternativeContact'
import Form from './Form'


const ContactPage = () => {
  return (
    <div className='md:px-24 lg:px-24 px-6 pt-24 w-full move-up'>
        <h1 className='font-bold text-5xl mb-24 text-center heading text-[#55342B] tracking-wider'>Contact Us</h1>
    <div className='flex md:flex-col lg:flex-row gap-3 pt-16 flex-col justify-center'>
        <Form />
        <AlternativeContact /> 
    </div>
    </div>
  )
}

export default ContactPage