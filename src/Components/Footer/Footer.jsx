import React from 'react'

const Footer = () => {
  return (
<footer>
  <div class="footerDats">
    <div className='footerLogo'>
      <img src="/images/logoEstudio.png"/>
    </div>
    <div className='dat'>
      <img src="/images/footer/map.png"/>
      <h5>Nombre Calle 1111, Barrio, Provincia.</h5>
    </div>
    <div className='dat'>
      <img src="/images/footer/mail.png"/>
      <h5>info@estudiobiondi.com</h5>
    </div>
    <div className='dat'>
      <img src="/images/footer/tel.png"/>
      <a href="#">11-3333-4444</a>
    </div>
  </div>
  
  <div class="footerEnlaces">
    <div className='enlaces'>
      <h5>Servicios</h5>
      <a href="#">Servicios</a>
    </div>
    <div className='enlaces2'>
      <h5>Nosotros</h5>
      <a href="#">Sobre Nosotros</a>
      <a href="#">Valores</a>
    </div>
    <div className='enlaces3'>
      <h5>Seguinos</h5>
      <div>
        <img src="/images/footer/facebook.png"/>
        <a href="#">Facebook</a>
      </div>
      <div>
        <img src="/images/footer/instagram.png"/>
        <a href="#">Instagram</a>
      </div>
      <div>
        <img src="/images/footer/linkedin.png"/>
        <a href="#">Linkedin</a>
      </div>
    </div>
  </div>
  
  <div className="linea"></div>
  
  <div className="copyright">
            <h6>© 2023 Versadigital. Todos los derechos reservados.</h6>
  </div>
</footer>

  )
}

export default Footer