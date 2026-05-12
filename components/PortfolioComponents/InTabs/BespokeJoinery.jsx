'use client'
const BespokeJoinery = () => {
    const images = [
        '/Bespoke Joinery/Bespoke1.jpg',
        '/Bespoke Joinery/Bespoke2.jpg', 
        '/Bespoke Joinery/Bespoke3.jpg',
        '/Bespoke Joinery/Bespoke4.jpg', 
        '/Bespoke Joinery/Bespoke5.jpg',
        '/Bespoke Joinery/Bespoke6.jpg',
        '/Bespoke Joinery/Bespoke7.jpg',
        '/Bespoke Joinery/Bespoke8.JPG',
        '/Bespoke Joinery/Bespoke9.JPG',
        '/Bespoke Joinery/Bespoke10.JPG',
        '/Bespoke Joinery/Bespoke11.jpg',
        'Bespoke Joinery/Bespoke12.jpg',


    ]

    return (
        <>
        {images.map((src, index) => (
            <div key={index} className='break-inside-avoid move-up'>
                <img src={src} alt={`Bespoke Joinery ${index}`} className='img-fluid' />
            </div>))}
            </>
    )
}

export default BespokeJoinery