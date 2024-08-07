'use client'
const Kitchens = () => {
    const images = [
        '/Kitchens/Kitchen1.jpg',
        '/Kitchens/Kitchen2.jpg',
        '/Kitchens/Kitchen3.jpg',
        '/Kitchens/Kitchen4.jpg',
        '/Kitchens/Kitchen5.jpg',
        '/Kitchens/Kitchen6.jpg',
        '/Kitchens/Kitchen8.jpg',
        '/Kitchens/Kitchen9.jpg',
        '/Kitchens/Kitchen10.JPG',
        '/Kitchens/Kitchen11.JPG',
        '/Kitchens/Kitchen12.JPG',
        '/Kitchens/Kitchen13.JPG',
        '/Kitchens/Kitchen14.JPG',
        '/Kitchens/Kitchen15.JPG',
        '/Kitchens/Kitchen16.jpeg',
        '/Kitchens/Kitchen17.jpeg',
        '/Kitchens/Kitchen18.jpeg',
        '/Kitchens/Kitchen19.JPG',
        '/Kitchens/Kitchen20.jpg',
        '/Kitchens/Kitchen21.jpg',
        '/Kitchens/Kitchen22.jpg',
        '/Kitchens/Kitchen23.jpg',
        '/Kitchens/Kitchen24.jpg',
        '/Kitchens/Kitchen25.jpg',
        '/Kitchens/Kitchen26.jpg',
        '/Kitchens/Kitchen27.jpg',
        '/Kitchens/Kitchen28.jpg',
        '/Kitchens/Kitchen29.jpg',
        '/Kitchens/Kitchen30.jpg',
    ]
    
    return (
        <>
        {images.map((src, index) => (
            <div key={index} className='break-inside-avoid move-up'>
                <img src={src} alt={`Kitchen ${index}`} className='img-fluid' />
            </div>))}
            </>
    )
}

export default Kitchens