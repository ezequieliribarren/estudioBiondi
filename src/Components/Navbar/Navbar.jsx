import React from 'react'

const Navbar = () => {
  return (
    <div>
            <nav class="navbar navbar-expand-lg bg-light">    
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  <div class="container-fluid ">    

    <div className="collapse navbar-collapse" id="navbarNav">      
    <div className='logoNav'><img src="/images/logoEstudio.png" alt="Logo" /></div>
      <div className="navbar-nav ms-auto">
          <a className="nav-link inicio" href="#">Inicio</a>

          <a className="nav-link" href="#servicios">Servicios</a>

          <a className="nav-link" href="#nosotros">Nosotros</a>

          <a className="nav-link contact" href="#contacto">Contacto</a>

      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar