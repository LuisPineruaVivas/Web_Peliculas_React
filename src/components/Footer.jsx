import React from 'react'
import './footer.css'
import FooterNavItem from './FooterNavItem';

function Footer() {
    const links = [
        {
            name: 'Inicio',
            link: '/',
        },
        {
            name: 'Peliculas',
            link: '/movies',
        },
        {
            name: 'Series',
            link: '/series',
        },

    ];
    const locations = [
        {
            id: 1,
            name: 'Maracaibo'
        },
        {
            id: 2,
            name: 'Valera'
        },
        {
            id: 3,
            name: 'Merida'
        },
        {
            id: 4,
            name: 'Margarita'
        },
        {
            id: 5,
            name: 'San Cristobal'
        },
    ];
  return (
    <footer id='footer' className='footer'>
        <div className="footer-top">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-5 col-md-12 footer-info">
                        <a href="/" className='logo d-flex align-items-center'>
                            <span>WebMovie</span>
                        </a>
                        <p>Toda la informacion de peliculas series la encuentras aqui</p>
                        <div className='social-links mt-3'>
                            <a href="#!" className='facebook'>
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                            <a href="#!" className='instagram'>
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                            <a href="#!" className='youtube'>
                                <ion-icon name="logo-youtube"></ion-icon>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6 footer-links">
                        <h4> Links </h4>
                        <ul>
                            {links.map(link => (
                                <FooterNavItem key={link.name} name={link}/>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-2 col-6 footer-links">
                        <h4> Sedes </h4>
                        <ul>
                            {locations.map(location => (
                                <FooterNavItem key={location.id} name={location}/>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                        <h4>Contactanos</h4>
                        <p> 
                            Avenida 16 <br />
                            Maracaibo, Zulia 4001 <br />
                            Venezuela <br />
                            <strong> Tlfn:</strong> +58 424 7894152 <br />
                            <strong> Email:</strong> NextGenCoders@gmail.com <br/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            &copy; Derechos{' '}
            <strong>
                <span> NextGenCoders </span>
            </strong>
            . TODOS LOS DERECHOS RESERVADOS
        </div>
        <div className="credits">
            Diseñado por <a href="#!"> NextGenCoders </a>
        </div>
    </footer>
  )
}

export default Footer