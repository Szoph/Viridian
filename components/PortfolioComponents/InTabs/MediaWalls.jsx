'use client'
import Image from 'next/image';
const MediaWalls = () => {
    const images = [
        '/MediaWalls/MediaWall1.jpg',
        '/MediaWalls/MediaWall2.JPG',
        '/MediaWalls/MediaWall3.jpg',
        '/MediaWalls/MediaWall4.jpg',
        '/MediaWalls/MediaWall5.jpg',
        '/MediaWalls/MediaWall6.jpg',
        '/MediaWalls/MediaWall7.jpg',



    ]

    return (
        <>
        {images.map((src, index) => (
            <div key={index} className='break-inside-avoid move-up'>
                <Image 
                src={src}
                alt={`Media Wall ${index}`}
                width={700}
                height={1600}
                className='img-fluid'
                />
                
            </div>))}
            </>
    )
}

export default MediaWalls

