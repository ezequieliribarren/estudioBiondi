import React from 'react'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Servicios = () => {
  return (    
    <section id='servicios'>
      <div className='container'>
         <h2>Nuestros Serivicios</h2>
         <p>Nuestro prioridad es brindar servicios de calidad y profesionales según sus necesidades</p>
      </div>
    <div className='contenedorServ'>
<div className='cardsServ'>
<div className='cardServ'>
<img src="images/servicios/liquidacion.png" alt="Liquidación Mensual" />
      <CardContent className='contentServ'>
        <Typography component="div">
        <h3>Liquidación mensual y <br />anual de tributos</h3>
        </Typography>
        <Typography component="div">
        <h4>nacionales, provinciales y municipales</h4>
        </Typography>
            <ul>
                <li><h5>Asesoramiento y atención a monotributistas, inscripción, recategorización, modificación de datos, bajas</h5></li>
                <li><h5>Asesoramiento y atención a autónomos, inscripción, recategorización, liquidación de impuestos</h5></li>
                <li><h5>Regímenes de retención (SICORE)</h5></li>
                <li><h5>Regímenes de información</h5></li>
                <li><h5>Confección de moratorias y facilidades de pago</h5></li>
            </ul>
      </CardContent>
    </div>
    <div className='cardServ'>
<img src="images/servicios/societario.png" alt="Cuadro Societario" />
      <CardContent className='contentServ'>
        <Typography component="div">
        <h3>Determinación del<br />escuadro societario</h3>
        </Typography>
        <Typography component="div">
        <h4>apropiado para la empresa</h4>
        </Typography>
            <ul>
                <li><h5>Constitución de sociedades: relevamiento de información y redacción del contrato</h5></li>
                <li><h5>Reorganizaciones societarias</h5></li>
                <li><h5>Aumento y/o reducción del capital</h5></li>
                <li><h5>Disolución y liquidación de sociedades</h5></li>
            </ul>
      </CardContent>
    </div>
    <div className='cardServ'>
<img src="images/servicios/estados.png" alt="Estados Contables" />
      <CardContent className='contentServ'>
        <Typography component="div">
        <h3>Preparación de estados<br />contables</h3>
        </Typography>
        <Typography component="div">
        <h4>anexos y notas complementarias</h4>
        </Typography>
            <ul>
                <li><h5>Certificaciones e informes contables</h5></li>
                <li><h5>Auditoria de EECC</h5></li>
                <li><h5>Elaboración del plan de cuentas y registraciones contables</h5></li>
                <li><h5>Análisis y proyección de EECC</h5></li>
            </ul>
      </CardContent>
    </div>
</div>
<div className='cardsServ'>
<div className='cardServ'>
<img src="images/servicios/sueldos.png" alt="Liquidación de Sueldos" />
      <CardContent className='contentServ'>
        <Typography component="div">
        <h3>Liquidación de sueldos</h3>
        </Typography>
        <Typography component="div">
        <h4>jornales y cargas sociales</h4>
        </Typography>
            <ul>
                <li><h5>Confección y presentación de declaraciones juradas y boletas de sindicatos</h5></li>
                <li><h5>Emisión de recibos de haberes y registración en el libro sueldos</h5></li>
                <li><h5>Liquidaciones finales</h5></li>
                <li><h5>Inscripciones varias, altas y bajas de empleados, confección de certificados de servicios</h5></li>
            </ul>
      </CardContent>
    </div>
    <div className='cardServ'>
<img src="images/servicios/liquidacion.png" alt="Liquidación Mensual" />
      <CardContent className='contentServ'>
        <Typography component="div">
        <h3>Atención a inspecciones </h3>
        </Typography>
        <Typography component="div">
        <h4>nacionales, provinciales y municipales</h4>
        </Typography>

            <ul>
                <li><h5>Respuesta a intimaciones y requerimientos ante los distintos organismos (AFIP, ARBA, AGIP, MTSS, Sindicatos)</h5></li>
                <li><h5>Seguimiento de cada caso en particular ante el inspector interviniente.</h5></li>
            </ul>
      </CardContent>
    </div>
    <div className='cardServ'>
<img src="images/servicios/liquidacion.png" alt="Liquidación Mensual" />
      <CardContent className='contentServ'>
        <Typography component="div">
        <h3>Casas Particulares</h3>
        </Typography>
        <Typography component="div">
        <h4>nacionales, provinciales y municipales</h4>
        </Typography>
            <ul>
                <li><h5>Asesoramiento y atención </h5></li>
                <li><h5>Emision de recibos de haberes</h5></li>
                <li><h5>Emision constancia de pago</h5></li>
                <li><h5>Altas, bajas y modificaciones</h5></li>
                <li><h5>Liquidaciones finales</h5></li>
            </ul>
      </CardContent>
    </div>
</div>

<button className='contactServ'><a href="#contacto">Contactanos</a></button>
    </div>

    </section>
  )
}

export default Servicios



