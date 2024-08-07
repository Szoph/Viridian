'use client'
const Flooring = () => {
    const images = [
        '/Flooring/Flooring1.jpg',
        '/Flooring/Flooring2.jpg',
        '/Flooring/Flooring3.jpg',
        '/Flooring/Flooring4.jpg',
        '/Flooring/Flooring5.jpg',
        '/Flooring/Flooring6.jpg',
        '/Flooring/Flooring7.jpg',
        '/Flooring/Flooring8.jpg',
        '/Flooring/Flooring9.jpg',
        '/Flooring/Flooring10.JPG',
        '/Flooring/Flooring11.JPG',
        '/Flooring/Flooring12.JPG',
    ]

    return (
        <>
        {images.map((src, index) => (
            <div key={index} className='break-inside-avoid move-up'>
                <img src={src} alt={`Flooring ${index}`} className='img-fluid' />
            </div>))}
            </>
    )
}

export default Flooring