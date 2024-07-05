'use client';
import { useState } from 'react';
import GalleryLayout from './GalleryLayout'
import Tabs from './Tabs'
import NextPrevious from './NextPrevious'

const PortfolioPage = () => {

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div>
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <GalleryLayout currentTab={currentTab} />
        <NextPrevious currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </div>
  )
}

export default PortfolioPage