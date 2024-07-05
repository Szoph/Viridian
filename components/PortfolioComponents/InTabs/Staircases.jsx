
const Staircases = () => {
    const images = [
        '/Staircases/Stairs1.jpeg', 
        '/Staircases/Stairs2.jpg', 
        '/Staircases/Stairs3.jpg',
        '/Staircases/Stairs4.jpeg',
        '/Staircases/Stairs5.jpeg',
        '/Staircases/Stairs6.jpeg',
        '/Staircases/Stairs7.jpeg',
        '/Staircases/Stairs8.jpeg',
        '/Staircases/Stairs9.jpeg',
        '/Staircases/Stairs10.jpg',
        '/Staircases/Stairs11.jpg',
        '/Staircases/Stairs12.jpg',
        '/Staircases/Stairs13.jpg',
        '/Staircases/Stairs14.jpg',
    ]

    return (
        <>
        {images.map((src, index) => (
            <div key={index} className='break-inside-avoid move-up'>
                <img src={src} alt={`Staircase ${index}`} className='img-fluid' />
            </div>))}
            </>
    )
}

export default Staircases