'use client'
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const CarouselComponent = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      require('bootstrap/dist/css/bootstrap.min.css')
      
    
    }
  }, []);

  return (
    <div id="carouselExampleIndicators" className="carousel slide carousel-container shadow-lg" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="10" aria-label="Slide 0"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="Kitchen1.jpg" className="d-block w-100" alt="First Slide" />
        </div>
        <div className="carousel-item">
          <img src="/Kitchens/Kitchen12.jpg" className="d-block w-100" alt="Second Slide" />
        </div>
        <div className="carousel-item">
          <img src="/Kitchens/Kitchen19.jpg" className="d-block w-100" alt="Third Slide" />
        </div>
        <div className="carousel-item">
          <img src="/Kitchens/Kitchen8.jpg" className="d-block w-100" alt="Third Slide" />
        </div>
        <div className="carousel-item">
          <img src="/Staircases/Stairs3.jpg" className="d-block w-100" alt="Third Slide" />
        </div>
        <div className="carousel-item">
          <img src="/Staircases/Stairs6.jpeg" className="d-block w-100" alt="Third Slide" />
        </div>
        <div className="carousel-item">
          <img src="/Flooring/Flooring9.jpg" className="d-block w-100" alt="Third Slide" />
        </div>
        <div className="carousel-item">
          <img src="/Other/Other2.jpg" className="d-block w-100" alt="Third Slide" />
        </div>
        <div className="carousel-item">
          <img src="/Other/Other4.jpg" className="d-block w-100" alt="Third Slide" />
        </div>
        <div className="carousel-item">
          <img src="/External/External10.jpg" className="d-block w-100" alt="Third Slide" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComponent;
