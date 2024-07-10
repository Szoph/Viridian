'use client'
import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

const Form = () => {
    const [state, handleSubmit] = useForm('xnqeepgl');

    if (state.succeeded) {
        return <div className="bg-gray-100 py-4 px-6 mb-4 rounded-md shadow-md h-32 md:mr-4 lg:mr-4 mr-0" role="alert">
        <p className='text-xl font-bold text-gray-700 border-b p-2 mb-2'>Your message has been sent. Thank you.</p>
        <a href='/' className='font-bold text-gray-700 hover:text-gray-400 mt-2'>Back to Home</a>
      </div>
    }


  return (
    <div className='md:w-full lg:w-1/2 w-full'>
        <h4 className='text-xl w-3/4'>Feel free to contact us any time. We will get back to you as soon as possible.</h4>
    {/* https://formspree.io/f/xnqeepgl */}

    { state.errors && state.errors.length > 0 && (
        <div className='alert alert-danger' role='alert'>
            There was an error sending your message. Please try again.
            </div>
    )}
   
    <form onSubmit={handleSubmit}>
    <div className="flex flex-col">
    
    <div className="my-4">
    <input type="text" className="form-control px-4 py-2 shadow-md rounded-md w-full placeholder:text-black font-semibold" placeholder="Name" name="name" aria-label="Name" required />
    <ValidationError prefix="Name" field="name" errors={state.errors} />
  </div>

  
  <div className="my-4">
    <input type="email" className="form-control px-4 py-2 shadow-md rounded-md w-full 6 placeholder:text-black font-semibold" placeholder="Email" name="email" aria-label="Email" required />
    <ValidationError prefix="Email" field="Email" errors={state.errors} />
  </div>

 
  <div className="my-4">
    <input type="text" className="form-control px-4 py-2 shadow-md rounded-md w-full placeholder:text-black font-semibold" placeholder="Message" name="message" aria-label="Message" required />
    <ValidationError prefix="Message" field="message" errors={state.errors} />
  </div>

  <div className="my-4">
    <button type='submit' disabled={state.submitting} className='w-full p-4 shadow-md rounded-md font-bold text-white bg-[#99582a] hover:opacity-75'>S E N D</button>
  </div>
</div>


    </form>
    </div>
  )
}

export default Form