'use client'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';



function CarouselComponent() {
  return (
    <div className='flex justify-center'>
    <Carousel className='lg:w-full md:w-full w-full'>
      <Carousel.Item>

        <Image 
        src='/MediaWallHero.jpeg' 
        alt='First Slide'
        width={700}
        height={1600}
        className='d-block w-100'
        /> 

      </Carousel.Item>

      <Carousel.Item>
        <Image 
        src='/BespokeHero.JPG'
        alt='Second Slide'
        width={700}
        height={1600}
        className='d-block w-100'
        />
      
      </Carousel.Item>

      <Carousel.Item>
        <Image 
        src='/Kitchens/Kitchen31.JPG' 
        alt='Third Slide'
        width={700}
        height={1600}
        className='d-block w-100'
        />
      
      </Carousel.Item>

      <Carousel.Item>
        <Image
        src='/Wardrobes/Wardrobes10.JPG'
        alt='Fourth Slide'
        width={700}
        height={1600}
        className='d-block w-100'
        /> 

      
      </Carousel.Item>

      <Carousel.Item>
        <Image 
        src='/DeckingHero.JPG'
        alt='Fifth Slide'
        width={700}
        height={1600}
        className='d-block w-100'
        />
      
      </Carousel.Item>
      
      
    </Carousel>
    </div>
  )
}

export default CarouselComponent
