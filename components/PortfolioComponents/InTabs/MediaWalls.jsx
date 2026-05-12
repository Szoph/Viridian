'use client'
const MediaWalls = () => {
    const images = [
        '/Media Walls/MediaWall1.jpg',
        '/Media Walls/MediaWall2.JPG',
        'Media Walls/MediaWall3.jpg',
        'Media Walls/MediaWall4.jpg',
        'Media Walls/MediaWall5.jpg',
        'Media Walls/MediaWall6.jpg',
        'Media Walls/MediaWall7.jpg',



    ]

    return (
        <>
        {images.map((src, index) => (
            <div key={index} className='break-inside-avoid move-up'>
                <img src={src} alt={`Media Wall ${index}`} className='img-fluid' />
            </div>))}
            </>
    )
}

export default MediaWalls

