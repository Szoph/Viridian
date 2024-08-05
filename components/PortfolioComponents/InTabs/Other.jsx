'use client'
const Other = () => {
    const images = [
        '/Other/Other4.jpg',
        '/Other/Other10.jpg',
        '/Other/Other3.jpg',
        '/Other/Other2.jpg',
        '/Other/Other5.jpg',
        '/Other/Other6.jpg',
        '/Other/Other7.jpg',
        '/Other/Other8.jpg',
        '/Other/Other9.jpg',
        '/Other/Other1.jpg',

    ]

    return (
        <>
        {images.map((src, index) => (
            <div key={index} className='break-inside-avoid move-up'>
                <img src={src} alt={`Other ${index}`} className='img-fluid' />
            </div>))}
            </>
    )
}

export default Other

