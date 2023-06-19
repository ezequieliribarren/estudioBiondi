import React from 'react'

const Header = () => {
  return (
<header>
<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-interval="800">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/carousel1.jpg" className="d-block w-100 imgCarousel" alt="Asesoramiento contable"/>      
      <img src="/images/carousel3.png" className="d-block w-100 respCarousel" alt="Asesoramiento contable"/>
    </div>
    <div className="carousel-item">
      <img src="/images/carousel2.jpg" className="d-block w-100 imgCarousel" alt="..."/> 
      <img src="/images/carousel4.png" className="d-block w-100 respCarousel" alt="..."/>
    </div>
  </div>
</div>
<a href='#contacto' className='contactHeader'>Contactanos</a>
</header>
  
     

  )
}

export default Header