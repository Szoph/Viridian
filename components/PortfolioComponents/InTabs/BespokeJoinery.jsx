'use client'
const BespokeJoinery = () => {
    const images = [
        '/BespokeJoinery/Bespoke1.jpg',
        '/BespokeJoinery/Bespoke2.jpg', 
        '/BespokeJoinery/Bespoke3.jpg',
        '/BespokeJoinery/Bespoke4.jpg', 
        '/BespokeJoinery/Bespoke5.jpg',
        '/BespokeJoinery/Bespoke6.jpg',
        '/BespokeJoinery/Bespoke7.jpg',
        '/BespokeJoinery/Bespoke8.JPG',
        '/BespokeJoinery/Bespoke9.JPG',
        '/BespokeJoinery/Bespoke10.JPG',
        '/BespokeJoinery/Bespoke11.jpg',
        'BespokeJoinery/Bespoke12.jpg',


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