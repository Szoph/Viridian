'use client'
const External = () => {
    const images = [
        '/External/External1.jpg',
        '/External/External2.jpg',
        '/External/External3.jpg',
        '/External/External4.jpg',
        '/External/External5.jpg',
        '/External/External6.jpg',
        '/External/External7.jpg',
        '/External/External8.jpg',
        '/External/External9.jpg',
        '/External/External10.jpg',
    ]

    return (
        <>
        {images.map((src, index) => (
            <div key={index} className='break-inside-avoid move-up'>
                <img src={src} alt={`External ${index}`} className='img-fluid' />
            </div>))}
            </>
    )
}

export default External