import React, { useRef } from 'react'
import containercss from './Container.module.css'
import './Container.css'


function Container() {
    const LoginWrapper = useRef();
    const RegistrationWrapper = useRef();

    const LoginHandler = () => {
        LoginWrapper.current.classList.add(containercss.ActiveLogin);
        RegistrationWrapper.current.classList.remove(containercss.ActiveRegistration);
    }

    const RegistrationHandler = () => {
        RegistrationWrapper.current.classList.add(containercss.ActiveRegistration);
        LoginWrapper.current.classList.remove(containercss.ActiveLogin);
    }

  return (
    <div className='login'>
            <div className={containercss.LoginWrapper} ref={LoginWrapper}>
                <div className="form_wrapper">
                    <h2>Inicia Sesion</h2>
                    <p>Inicia sesion para que sigas al tanto de la ultimas novedades en peliculas y series</p>

                    <div className='Input_wrapper'>
                        <input type="text" placeholder='Nombre de usuario' />
                    </div>
                    <div className='Input_wrapper'>
                        <input type="password" placeholder='Contraseña'/>
                        
                    </div>
                    <a href="#!">Olvidaste la contraseña? </a>
                    <button className='loginBtn' onClick={LoginHandler}>Iniciar Sesion</button>
                </div>
                <div className="Image_wrapper">
                    <img  src="/images/login.jpg" alt="" />
                </div>
            </div>
            <div className={containercss.RegistrationWrapper} ref={RegistrationWrapper}>
                <div className="form_wrapper">
                    <h2>Registrate</h2>
                    <p>Registrate y guarda tus peliculas y series favoritas recibe notificaciones de nuevos lanzamientos y mas</p>

                    <div className='Input_wrapper'>
                        <input type="text" placeholder='Nombre de usuario' />
                    </div>
                    <div className='Input_wrapper'>
                        <input type="email" placeholder='Correo'/>
                    </div>
                    <div className='Input_wrapper'>
                        <input type="password" placeholder='Contraseña'/>
                    </div>
                    <button className='loginBtn' onClick={RegistrationHandler}>Registrate</button>
                </div>
                <div className="Image_wrapper">
                    <img  src="/images/register.jpg" alt="" />
                </div>
            </div>
        </div>
  )
}

export default Container