'use client'
import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { Mail, Phone } from 'lucide-react'

const Form = () => {
    const [state, handleSubmit] = useForm('xnqeepgl');

    if (state.succeeded) {
        return <div className="bg-gray-100 py-4 px-6 mb-4 rounded-md shadow-md h-32 md:mr-4 lg:mr-4 mr-0" role="alert">
        <p className='text-xl font-bold text-gray-700 border-b p-2 mb-2'>Your message has been sent. Thank you.</p>
        <a href='/' className='font-bold text-gray-700 hover:text-gray-400 mt-2'>Back to Home</a>
      </div>
    }


  return (
    <div className='md:w-full lg:w-1/2 w-full tracking-wide'>
        <h4 className='text-2xl w-3/4 font-medium tracking-wider'>Feel free to contact us to discuss your project</h4>
        <h4 className='text-lg font-normal w-full md:w-full lg:w-3/4'>We offer a free, no-obligation quote following an in-person site visit, allowing us to fully understand your requirements and provide accurate pricing. </h4>
    {/* https://formspree.io/f/xnqeepgl */}

    { state.errors && state.errors.length > 0 && (
        <div className='alert alert-danger' role='alert'>
            There was an error sending your message. Please try again.
            </div>
    )}
   
    <form onSubmit={handleSubmit}>
    <div className="flex flex-col">
    
    <div className="my-4">
      <label htmlFor="name" className="block mb-2 font-medium text-black pt-3 text-md">Name *</label>
    <input type="text" className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-[#D8B689] focus:border-[#D8B689]"  
    name="name" 
    aria-label="Name"
    id='name' 
    required />
    {/* <ValidationError prefix="Name" field="name" errors={state.errors} /> */}
  </div>

  
  <div className="my-4">
  <label 
    htmlFor="email" 
    className="font-medium text-black text-md block mb-2"
  >
    Email Address *
  </label>

  <div className="flex items-center border rounded-md shadow-md px-4 py-2 focus-within:ring-2 focus-within:ring-[#D8B689]
                focus-within:border-[#D8B689]">
    <Mail size={24} strokeWidth={2} className="text-[#55342B] opacity-50" />

    <input
      id="email"
      type="email"
      autoComplete="email"
      className="grow ml-2 outline-none bg-transparent"
      required
    />
  </div>
</div>


<div className="my-4">
  <label 
    htmlFor="number" 
    className="font-medium text-black text-md block mb-2"
  >
    Phone Number
  </label>

  <div className="flex items-center border rounded-md shadow-md px-4 py-2 focus-within:ring-2 focus-within:ring-[#D8B689]
                focus-within:border-[#D8B689]">
    <Phone size={24} strokeWidth={2} className="text-[#55342B] opacity-50" />

    <input
      id="number"
      type="tel"
      autoComplete="tel"
      className="grow ml-2 outline-none bg-transparent "
      
    />
  </div>
</div>




  <div className="my-4">
    <label htmlFor='projectType' className='block font-medium text-black mb-2 text-md'>Project Type *</label>
    <select required id='projectType' defaultValue='' className='w-full rounded-md border border-gray-300 px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-[#D8B689] focus:border-[#D8B689]'>
      <option value='' disabled>Please select</option>
      <option value='Kitchen'>Kitchen</option>
      <option value='Media Wall'>Media Wall</option>
      <option value='Staircase'>Staircase</option>
       <option value='Fitted Wardrobe'>Fitted Wardrobe</option>
       <option value='Bespoke Cabinetry & Storage'>Bespoke Cabinetry & Storage</option>
      <option value='Other'>Other</option>
    </select>
    {/* <ValidationError prefix="Message" field="message" errors={state.errors} /> */}
  </div>
 
 <div className='my-4'>
  <label htmlFor='projectDetails' className='block font-medium text-black. mb-2 text-md'>Tell us about your project</label>
  <textarea id='projectDetails' rows={4}  className='w-full rounded-md border border-gray-300 px-4 py-3 shadow-md resize-y focus:outline-none focus:ring-2 focus:ring-[#D8B689] focus:border-[#D8B689]'/>
 </div>


  <div className="my-4">
    <label htmlFor='heardAbout' className='block font-medium text-black mb-2 text-md'>How did you hear about us? </label>
    <select id='heardAbout' className='w-full rounded-md border border-gray-300 px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-[#D8B689] focus:border-[#D8B689]'>
      <option value=''>Please select</option>
      <option value='Google'>Google</option>
      <option value='Facebook'>Facebook</option>
      <option value='Instagram'>Instagram</option>
       <option value='Recommendation'>Recommendation</option>
      <option value='Other'>Other</option>
    </select>
    {/* <ValidationError prefix="Message" field="message" errors={state.errors} /> */}
  </div>

  


  

  <div className="my-4">
    <button type='submit' disabled={state.submitting} className='w-full p-4 shadow-md rounded-md font-bold text-white bg-[#D8B689] hover:opacity-75'>S E N D</button>
  </div>
</div>


    </form>
    </div>
  )
}

export default Form