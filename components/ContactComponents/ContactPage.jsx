import React from 'react'
import AlternativeContact from './AlternativeContact'
import Form from './Form'

const ContactPage = () => {
  return (
    <div className='md:px-24 lg:px-24 px-6 py-10 w-full move-up'>
        <h1 className='font-bold text-4xl mb-24 text-center'>Contact Us</h1>
    <div className='flex md:flex-col lg:flex-row gap-3 flex-col justify-center'>
        <Form />
        <AlternativeContact /> 
    </div>
    </div>
  )
}

export default ContactPage