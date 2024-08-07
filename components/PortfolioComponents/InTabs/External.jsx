'use client'
const External = () => {
    const images = [
        '/External/External1.jpg',
        '/External/External2.jpg',
        '/External/External3.jpg',
        '/External/External4.jpg',
        '/External/External5.jpg',
        '/External/External6.JPG',
        '/External/External7.JPG',
        '/External/External8.JPG',
        '/External/External9.JPG',
        '/External/External10.JPG',
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