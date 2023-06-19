import React from 'react'

const Footer = () => {
  return (
<footer>
  <div className="footerDats">
    <div className='oficina'>
    <div className='ofiFoot'>
        <h5>Oficina San Justo:</h5>
      </div>
    <div className='dat'>
      <div>
             <img src="/images/footer/map.png"/>
      </div>
 
      <h5>Comisionado J. Indart 2177, <br /> San Justo, Bs As</h5>
    </div>

    <div className='dat'>
      <img className='sep' src="/images/footer/tel.png"/>
      <h5>11-4651-6226  /  7238</h5>
    </div>
    </div>

    <div className='oficina'>
    <div className='ofiFoot'>
        <h5>Oficina Haedo:</h5>
      </div>
      <div className='dat'>
        <div>
                <img src="/images/footer/map.png"/>
        </div>

      <h5>Ayacucho 315, Haedo, Bs As</h5>
    </div>
    <div className='dat'>
      <div>
              <img src="/images/footer/tel.png"/>
      </div>
      <h5>11-4651-6226  /  7238</h5>
    </div>
    <div className='dat'>
      <div>
              <img src="/images/footer/mail.png"/>
      </div>
      <h5><a href="mailto:info@estudiobiondi.com">info@estudiobiondi.com</a></h5>
    </div>
  </div>

    </div>
  
  <div className="footerEnlaces">
    <div className='enlaces'>
      <h5>Servicios</h5>
      <a href="#servicios">Servicios</a>
    </div>
    <div className='enlaces2'>
      <h5>Nosotros</h5>
      <a href="#nosotros">Nosotros</a>
      <a href="#valores">Valores</a>
      <a href="#integrantes">Conocenos</a>

    </div>

    <div className='enlaces2'>
      <h5>Contacto</h5>
      <a href="#contacto">Contacto</a>
    </div>
  </div>
  <div className="linea"></div>
  <div className="copyright">
         <a target='_blank' href="https://versadigital.com.ar/">  <h6>© 2023 Versadigital. Todos los derechos reservados.</h6></a> 
  </div>
</footer>

  )
}

export default Footer