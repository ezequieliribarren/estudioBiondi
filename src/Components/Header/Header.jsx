import React from 'react'

const Header = () => {
  return (
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/carousel1.png" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img src="/images/carousel2.png" alt="Second slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
  </a>
</div>
  )
}

export default Header