import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const Servicios = () => {
  return (    
    <section id='servicios'>
      <div className='container'>
         <h2>Nuestros Serivicios</h2>
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
        <Typography variant="body2" color="text.secondary">
            <ul>
                <li><h5>Asesoramiento y atención a monotributistas, inscripción, recategorización, modificación de datos, bajas</h5></li>
                <li><h5>Asesoramiento y atención a autónomos, inscripción, recategorización, liquidación de impuestos</h5></li>
                <li><h5>Regímenes de retención (SICORE)</h5></li>
                <li><h5>Regímenes de información</h5></li>
                <li><h5>Confección de moratorias y facilidades de pago</h5></li>
            </ul>
        </Typography>
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
        <Typography variant="body2" color="text.secondary">
            <ul>
                <li><h5>Constitución de sociedades: relevamiento de información y redacción del contrato</h5></li>
                <li><h5>Reorganizaciones societarias</h5></li>
                <li><h5>Aumento y/o reducción del capital</h5></li>
                <li><h5>Disolución y liquidación de sociedades</h5></li>
            </ul>
        </Typography>
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
        <Typography variant="body2" color="text.secondary">
            <ul>
                <li><h5>Certificaciones e informes contables</h5></li>
                <li><h5>Auditoria de EECC</h5></li>
                <li><h5>Elaboración del plan de cuentas y registraciones contables</h5></li>
                <li><h5>Análisis y proyección de EECC</h5></li>
            </ul>
        </Typography>
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
        <Typography variant="body2" color="text.secondary">
            <ul>
                <li><h5>Confección y presentación de declaraciones juradas y boletas de sindicatos</h5></li>
                <li><h5>Emisión de recibos de haberes y registración en el libro sueldos</h5></li>
                <li><h5>Liquidaciones finales</h5></li>
                <li><h5>Inscripciones varias, altas y bajas de empleados, confección de certificados de servicios</h5></li>
            </ul>
        </Typography>
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
        <Typography variant="body2" color="text.secondary">
            <ul>
                <li><h5>Asesoramiento y atención a monotributistas, inscripción, recategorización, modificación de datos, bajas</h5></li>
                <li><h5>Asesoramiento y atención a autónomos, inscripción, recategorización, liquidación de impuestos</h5></li>
                <li><h5>Regímenes de retención (SICORE)</h5></li>
                <li><h5>Regímenes de información</h5></li>
                <li><h5>Confección de moratorias y facilidades de pago</h5></li>
            </ul>
        </Typography>
      </CardContent>
    </div>
    <div className='cardServ'>
<img src="images/servicios/liquidacion.png" alt="Liquidación Mensual" />
      <CardContent className='contentServ'>
        <Typography component="div">
        <h3>Asesoramiento para<br />empleadas domésticas</h3>
        </Typography>
        <Typography component="div">
        <h4>nacionales, provinciales y municipales</h4>
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <ul>
                <li><h5>Asesoramiento y atención a monotributistas, inscripción, recategorización, modificación de datos, bajas</h5></li>
                <li><h5>Asesoramiento y atención a autónomos, inscripción, recategorización, liquidación de impuestos</h5></li>
                <li><h5>Regímenes de retención (SICORE)</h5></li>
                <li><h5>Regímenes de información</h5></li>
                <li><h5>Confección de moratorias y facilidades de pago</h5></li>
            </ul>
        </Typography>
      </CardContent>
    </div>
</div>
<button>Contactanos</button>
    </div>

    </section>
  )
}

export default Servicios



