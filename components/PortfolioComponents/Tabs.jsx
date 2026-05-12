'use client';


const Tabs = ({currentTab, setCurrentTab}) => {

    

    const setTab = (tab) => {
        setCurrentTab(tab);
    }

 

  return (
    <div className='flex justify-center my-10'>
        <ul className="nav nav-tabs flex justify-center w-full font-semibold">
  <li className="nav-item">
    <a className={`text-black md:text-lg lg:text-lg text-sm hover:cursor-pointer nav-link ${currentTab === 0 ? 'active' : ''}`} onClick={() => setTab(0)}>Media Walls</a>
  </li>
  <li className="nav-item">
    <a className={`text-black md:text-lg lg:text-lg text-sm hover:cursor-pointer nav-link ${currentTab === 1 ? 'active' : ''}`} onClick={() => setTab(1)}>Staircases</a>
  </li>
  <li className="nav-item">
    <a className={`text-black md:text-lg lg:text-lg text-sm hover:cursor-pointer nav-link ${currentTab === 2 ? 'active' : ''}`} onClick={() => setTab(2)}>Kitchens</a>
  </li>
  <li className="nav-item">
    <a className={`text-black md:text-lg lg:text-lg text-sm hover:cursor-pointer nav-link ${currentTab === 3 ? 'active' : ''}`} onClick={() => setTab(3)}>Bespoke Joinery</a>
  </li>
  <li className="nav-item">
    <a className={`text-black md:text-lg lg:text-lg text-sm hover:cursor-pointer nav-link ${currentTab === 4 ? 'active' : ''}`} onClick={() => setTab(4)}>Outdoor Carpentry</a>
  </li>
  <li className="nav-item">
    <a className={`text-black md:text-lg lg:text-lg text-sm hover:cursor-pointer nav-link ${currentTab === 5 ? 'active' : ''}`} onClick={() => setTab(5)}>Wardrobes</a>
  </li>
</ul>
    </div>
  )
}

export default Tabs