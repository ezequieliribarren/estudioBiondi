import React from 'react'

const Navbar = () => {
  return (
  <nav className="navbar navbar-expand-lg bg-light">    
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" ariklllla-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  <div className="container-fluid ">    
    <div className="collapse navbar-collapse" id="navbarNav">      
      <div className="navbar-nav mx-auto">
      <div className='logoNav'>
        <a href="#">   <img src="/images/logoEstudio.png" alt="Logo" /></a>
      </div>
      <div className='linksNav'>
          <a className="nav-link inicio" href="#">Inicio</a>

          <a className="nav-link" href="#servicios">Servicios</a>

          <a className="nav-link" href="#nosotros">Nosotros</a>

          <a className="nav-link contact" href="#contacto">Contacto</a>
      </div>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar