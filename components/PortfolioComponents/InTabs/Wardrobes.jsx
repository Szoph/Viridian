'use client'
import Image from 'next/image';

const Wardrobes = () => {
    const images = [
        '/Wardrobes/Wardrobes1.jpg', 
        '/Wardrobes/Wardrobes2.jpg', 
        '/Wardrobes/Wardrobes3.jpg',
        '/Wardrobes/Wardrobes4.jpg',
        '/Wardrobes/Wardrobes5.JPG',
        '/Wardrobes/Wardrobes6.JPG',
        '/Wardrobes/Wardrobes7.JPG',
        '/Wardrobes/Wardrobes8.JPG', 
        '/Wardrobes/Wardrobes9.JPG', 
        '/Wardrobes/Wardrobes10.JPG',
        
    ]

    return (
        <>
        {images.map((src, index) => (
            <div key={index} className='break-inside-avoid move-up'>
                <Image 
                src={src}
                alt={`Wardrobe ${index}`}
                width={700}
                height={1600}
                className='img-fluid'
                />
            </div>
        ))}
        </>
    )
}

export default Wardrobes