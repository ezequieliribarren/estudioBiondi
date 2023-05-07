import React from 'react'
import Header from '../Header/Header'
import Servicios from '../Servicios/Servicios'
import Nosotros from '../Nosotros/Nosotros'
import Integrantes from '../Integrantes/Integrantes'
import Contacto from '../Contacto/Contacto'


const Main = () => {
  return (
    <main>
        <Header/>
        <Servicios/>
        <Nosotros/>
        <Integrantes/>
        <Contacto/>
    </main>
  )
}

export default Main