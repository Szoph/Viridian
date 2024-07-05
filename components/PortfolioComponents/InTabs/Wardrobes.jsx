const Wardrobes = () => {
    const images = [
        '/Wardrobes/Wardrobes1.jpg', 
        '/Wardrobes/Wardrobes2.jpg', 
        '/Wardrobes/Wardrobes3.jpg',
        '/Wardrobes/Wardrobes4.jpg',
        '/Wardrobes/Wardrobes5.jpg',
        '/Wardrobes/Wardrobes6.jpg',
        '/Wardrobes/Wardrobes7.jpg',
    ]

    return (
        <>
        {images.map((src, index) => (
            <div key={index} className='break-inside-avoid move-up'>
                <img src={src} alt={`Wardrobe ${index}`} className='img-fluid' />
            </div>
        ))}
        </>
    )
}

export default Wardrobes