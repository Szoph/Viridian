'use client'
import Image from 'next/image';

const Staircases = () => {
    const images = [
        '/Staircases/Stairs15.jpg',
        '/Staircases/Stairs16.jpg',
        '/Staircases/Stairs17.jpg',
        '/Staircases/Stairs18.jpg',
        '/Staircases/Stairs19.jpg',
        '/Staircases/Stairs20.jpg',
        '/Staircases/Stairs21.jpg',
        '/Staircases/Stairs14.JPG', 
        '/Staircases/Stairs2.jpg', 
        '/Staircases/Stairs3.jpg',
        '/Staircases/Stairs4.jpeg',
        '/Staircases/Stairs5.jpeg',
        '/Staircases/Stairs6.jpeg',
        '/Staircases/Stairs7.jpeg',
        '/Staircases/Stairs8.jpeg',
        '/Staircases/Stairs9.jpeg',
        '/Staircases/Stairs10.JPG',
        '/Staircases/Stairs11.JPG',
        '/Staircases/Stairs12.JPG',
        '/Staircases/Stairs13.JPG',
        '/Staircases/Stairs1.jpeg',
        '/Staircases/Stairs22.JPG', 
        '/Staircases/Stairs23.JPG', 
        '/Staircases/Stairs24.JPG', 
        '/Staircases/Stairs25.JPG', 
        '/Staircases/Stairs26.JPG', 
        '/Staircases/Stairs27.JPG', 
        
    ]

    return (
        <>
        {images.map((src, index) => (
            <div key={index} className='break-inside-avoid move-up'>
                <Image 
                src={src}
                alt={`Staircase ${index}`}
                width={700}
                height={1600}
                className='img-fluid'
                />
            </div>))}
            </>
    )
}

export default Staircases