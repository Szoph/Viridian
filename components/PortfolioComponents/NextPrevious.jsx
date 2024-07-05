import React from 'react'


const NextPrevious = ({ currentTab, setCurrentTab}) => {
  return (
    <div className='relative'>
        {currentTab !== 0 && <button className='bg-[#99582a] rounded-md text-white font-semibold p-2 absolute bottom-6 lg:left-28 md:left-18 left-4 w-40' onClick={() => setCurrentTab(currentTab - 1)}>Previous Page</button>}
        {currentTab !== 5 && <button className='bg-[#99582a] rounded-md text-white font-semibold p-2 absolute bottom-6 lg:right-28 md:right-18 right-4 w-40' onClick={() => setCurrentTab(currentTab + 1)}>Next Page</button>}
    </div>
  )
}

export default NextPrevious