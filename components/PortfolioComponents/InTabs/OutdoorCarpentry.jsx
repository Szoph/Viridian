'use client'
import Image from 'next/image';

const OutdoorCarpentry = () => {
    const images = [
        '/External/External1.jpg',
        '/External/External2.JPG',
        '/External/External3.JPG',
        '/External/External4.jpg',
        '/External/External5.jpg',
        '/External/External6.JPG',
        '/External/External7.JPG',
        '/External/External8.JPG',
    ]

    return (
        <>
        {images.map((src, index) => (
            <div key={index} className='break-inside-avoid move-up'>
                <Image 
                src={src}
                alt={`External ${index}`}
                width={700}
                height={1600}
                className='img-fluid'
                />
            </div>))}
            </>
    )
}

export default OutdoorCarpentry