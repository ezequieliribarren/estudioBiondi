import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacto = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_od2g2s8', 'template_2lgu25r', form.current, 'UPVbh47VuLr5_CNCU')
      .then((result) => {
         alert("Mensaje Enviado")
      }, (error) => {
        alert("Hubo un error en el envío del mensaje. Intente nuevamente")
      });
  };


  return (
    <section id='contacto'>
<div className='contacto'>
    <div className='maps'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.406719812551!2d-58.58585632476926!3d-34.64443005964851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc78e0efe4fab%3A0x99448ad64fdb6f2b!2sAyacucho%20315%2C%20B1706BFC%20Haedo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1683314554460!5m2!1ses!2sar" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div className='formulario'>
        <div className='container'>
           <h2>Contactanos</h2> 
        </div>
<div className='divForm'>
<form className='form' ref={form} onSubmit={sendEmail}>
<label htmlFor="">Nombre</label>
<input type="text"  placeholder='Tu Nombre' name='name'required/> 
<label htmlFor="">E-mail</label>
<input className='email' type="mail" placeholder='ejemplo@email.com' name='email' required/> 
<label htmlFor="">Tel.</label>
<input type="text"  placeholder='Tu tel.' name='tel'required/> 
<label htmlFor="">Dejanos tu mensaje</label>
<textarea name="message" id="" cols="30" rows="10" placeholder='Por favor escribí tu mensaje aquí...' required></textarea>
<button type='submit'>Enviar</button>
            </form>
    <div className='datContact'>
      <img src="/images/contacto/mail.png" alt="mail" />
      <h5><a href="mailto:info@estudiobiondi.com">info@estudiobiondi.com</a></h5>
    </div>
    <div className='datContact'>
      <img src="/images/contacto/tel.png"/>
      <a  href="tel:+011-4651-6226"> 011-4651-6226  /7238    -    011-4443-1861</a>
    </div>
</div>
    </div>
</div>
    </section>
  )
}

export default Contacto