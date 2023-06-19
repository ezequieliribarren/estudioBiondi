import Avatar from '@mui/material/Avatar';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Integrantes = () => {
const notify = () => toast.info('E-mail Copiado!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });;

  return (
    <section id='integrantes'>
<div className='container'><h2>Conocenos</h2></div>
<div className='container'><h3>Somos un grán equipo de profesionales</h3></div>
<div className='contadores'>
    <div className='contador'>
        <div className='avatar'>
        <Avatar alt="integrante" src="/images/integrantes/mail.png" />
           <h4>Dr. Carlos Damian Biondi</h4>
        </div>
        <div className='titulo'><h5>CONTADOR PÚBLICO NACIONAL</h5></div>
        <div className='mail'> 
        <button className="btn" data-clipboard-target="#copiar" onClick={notify}> <h5 id="copiar" cols="30" rows="1">
        carlos@estudiobiondi.com
</h5></button>
<ToastContainer
position="top-right"
toastStyle={{ backgroundColor: "#1E285F" }}
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/></div>
    </div>
    <div className='contador'>
        <div className='avatar'>
        <Avatar alt="integrante" src="/images/integrantes/mail.png"  />
           <h4>Dr. Guido Ezequiel Di Mauro</h4>
        </div>
        <div className='titulo'><h5>CONTADOR PÚBLICO NACIONAL</h5></div>
        <div className='mail'> <button className="btn" data-clipboard-target="#copiar" onClick={notify}><h5 id="copiar" cols="30" rows="1">
        guido@estudiobiondi.com</h5></button>
        </div>
    </div>
    <div className='contador'>
        <div className='avatar'>
        <Avatar alt="integrante" src="/images/integrantes/mail.png" />
           <h4>Dra. Natalia Vanesa Moya</h4>
        </div>
        <div className='titulo'><h5>CONTADORA PÚBLICA NACIONAL</h5></div>
        <div className='mail'> <button className="btn" data-clipboard-target="#copiar" onClick={notify}><h5 id="copiar" cols="30" rows="1">
        natalia@estudiobiondi.com</h5></button></div>
    </div>
    <div className='contador'>
        <div className='avatar'>
        <Avatar alt="integrante" src="/images/integrantes/mail.png" />
           <h4>Dra. Yamila Ballesteros</h4>
        </div>
        <div className='titulo'><h5>CONTADORA PÚBLICA NACIONAL</h5></div>
        <div className='mail'> <button className="btn" data-clipboard-target="#copiar" onClick={notify}><h5 id="copiar" cols="30" rows="1">
        yamila@estudiobiondi.com</h5></button></div>
    </div>
    <div className='contador'>
        <div className='avatar'>
        <Avatar alt="integrante" src="/images/integrantes/mail.png"  />
           <h4>Dr. Pablo Daniel Casagrande</h4>
        </div>
        <div className='titulo'><h5>ABOGADO</h5></div>
        <div className='mail'> <button className="btn" data-clipboard-target="#copiar"onClick={notify}><h5 id="copiar" cols="30" rows="1">
        daniel@estudiobiondi.com</h5></button></div>
    </div>
    <div className='contador'>
        <div className='avatar'>
        <Avatar alt="integrante" src="/images/integrantes/mail.png"  />
           <h4>Dra. Evelyn Gisele Rodriguez</h4>
        </div>
        <div className='titulo'><h5>CONTADORA PÚBLICA NACIONAL</h5></div>
        <div className='mail'> <button className="btn" data-clipboard-target="#copiar"onClick={notify}><h5 id="copiar" cols="30" rows="1">
        evelyn@estudiobiondi.com</h5></button></div>
    </div>
    <div className='contador'>
        <div className='avatar'>
        <Avatar alt="integrante" src="/images/integrantes/mail.png"  />
           <h4>Dr. Cristian Godoy</h4>
        </div>
        <div className='titulo'><h5>CONTADOR PÚBLICO NACIONAL</h5></div>
        <div className='mail'> <button className="btn" data-clipboard-target="#copiar"onClick={notify}><h5 id="copiar" cols="30" rows="1">
        cristian@estudiobiondi.com</h5></button></div>
    </div>
    <div className='contador'>
        <div className='avatar'>
        <Avatar alt="integrante" src="/images/integrantes/mail.png"  />
           <h4>Maria Fernanda Biondi</h4>
        </div>
        <div className='titulo'><h5>ADMINISTRATIVA</h5></div>
        <div className='mail'> <button className="btn" data-clipboard-target="#copiar" onClick={notify} ><h5 id="copiar" cols="30" rows="1">
        fernanda@estudiobiondi.com</h5></button></div>
    </div>
    <div className='contador'>
        <div className='avatar'>
        <Avatar alt="integrante" src="/images/integrantes/mail.png"  />
           <h4>Micaela Aylen Casagrande</h4>
        </div>
        <div className='titulo'><h5>ADMINISTRATIVA</h5></div>
        <div className='mail'> <button className="btn" data-clipboard-target="#copiar" onClick={notify} ><h5 id="copiar" cols="30" rows="1">
        micaela@estudiobiondi.com
</h5></button></div>
    </div>
    <div className='contador'>
        <div className='avatar'>
        <Avatar alt="integrante" src="/images/integrantes/mail.png"  />
           <h4>Leandro Miguel Avila</h4>
        </div>
        <div className='titulo'><h5>ADMINISTRATIVO</h5></div>
        <div className='mail'> <button className="btn" data-clipboard-target="#copiar" onClick={notify}><h5 id="copiar" cols="30" rows="1">
        leandro@estudiobiondi.com</h5></button></div>
    </div>
    <div className='contador'>
        <div className='avatar'>
        <Avatar alt="integrante" src="/images/integrantes/mail.png"  />
           <h4>Agustín Sánchez Abal</h4>
        </div>
        <div className='titulo'><h5>ADMINISTRATIVO</h5></div>
        <div className='mail'> <button className="btn" data-clipboard-target="#copiar" onClick={notify}><h5 id="copiar" cols="30" rows="1">
        agustin@estudiobiondi.com</h5></button></div>
    </div>
    <div className='contador'>
        <div className='avatar'>
        <Avatar alt="integrante" src="/images/integrantes/mail.png" />
           <h4>Gastón Ordieres</h4>
        </div>
        <div className='titulo'><h5>ADMINISTRATIVO</h5></div>
        <div className='mail'> <button className="btn" data-clipboard-target="#copiar" onClick={notify} ><h5 id="copiar" cols="30" rows="1">
        gaston@estudiobiondi.com
</h5></button></div>
    </div>
    <div className='contador'>
        <div className='avatar'>
        <Avatar alt="integrante" src="/images/integrantes/mail.png" />
           <h4>Ludmila Daniela Darago</h4>
        </div>
        <div className='titulo'><h5>ADMINISTRATIVA</h5></div>
        <div className='mail'> <button className="btn" data-clipboard-target="#copiar" onClick={notify} ><h5 id="copiar" cols="30" rows="1">
        ludmila@estudiobiondi.com</h5></button></div>
    </div>
    <div className='contador'>
        <div className='avatar'>
        <Avatar alt="integrante" src="/images/integrantes/mail.png"  />
           <h4>Nathali Belen Mozas</h4>
        </div>
        <div className='titulo'><h5>ADMINISTRATIVA</h5></div>
        <div className='mail'> <button className="btn" data-clipboard-target="#copiar" onClick={notify} ><h5 id="copiar" cols="30" rows="1">
        nathali@estudiobiondi.com
</h5></button></div>
    </div>
</div>
    </section>
  )
}

export default Integrantes