import React from 'react'
import { ImFacebook2, ImYoutube, ImWhatsapp, ImInstagram} from "react-icons/im";

const Footer = () => {
  return (
    <>
        <div class="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
        <div class="row pt-5">
            <div class="col-lg-3 col-md-6 mb-5">
                <a href="none" class="navbar-brand">
                    <h1 class="m-0 mt-n3 display-4 text-primary">Multiservices &copy;</h1>
                </a>
                <p>Su tranquilidad es nuestro compromiso!</p>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h4 class="font-weight-semi-bold text-primary mb-4">Contactenos</h4>
                <p><i class="fa fa-map-marker-alt text-primary mr-2"></i>123 Street, New York, USA</p>
                <p><i class="fa fa-phone-alt text-primary mr-2"></i>+012 345 67890</p>
                <p><i class="fa fa-envelope text-primary mr-2"></i>correoejemplo@mail.com</p>
                <div class="d-flex justify-content-start mt-4">
                    <a class="btn btn-light btn-social mr-2" href="none"><ImFacebook2 /></a>
                    <a class="btn btn-light btn-social mr-2" href="none"><ImYoutube /></a>
                    <a class="btn btn-light btn-social mr-2" href="none"><ImInstagram /></a>
                    <a class="btn btn-light btn-social" href="none"><ImWhatsapp /></a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5" style={{marginLeft: '210px'}} >
                <h4 class="font-weight-semi-bold text-primary mb-4">Newsletter</h4>
                <p>Suscribase a nuestro boletín de novedades para recibir mayor informacion y participar en sorteos,noticias,promociones etc.</p>
                <div class="w-100">
                    <div class="input-group">
                        <input type="text" class="form-control border-0" style={{padding: '25px'}} placeholder="Your Email" />
                        <div class="input-group-append">
                            <button class="btn btn-primary px-4">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{borderColor: '#3E3E4E'}}>
        <div class="row">
            <div class="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                <p class="m-0 text-white">&copy; <a href="none">Multiservices - Handyman</a>. Todos los derechos reservados.
                </p>
            </div>
            <div class="col-lg-6 text-center text-md-right">
                <ul class="nav d-inline-flex">
                    <li class="nav-item">
                        <a class="nav-link text-white py-0" href="none">Privacy</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white py-0" href="none">Terminos y condiciones</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white py-0" href="none">FAQs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white py-0" href="none">Help</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer