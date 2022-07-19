import React from 'react'
import '../../css/style.css';
import { FaPhoneAlt } from 'react-icons/fa';

const About = () => {
  return (
    <>
      <div class="container-fluid py-5 mb-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="d-flex flex-column align-items-center justify-content-center bg-about rounded h-100 py-5 px-3">
                        <i class="fa fa-5x fa-award text-primary mb-4"></i>
                        <h1 class="display-2 text-white mb-2" data-toggle="counter-up">+25</h1>
                        <h2 class="text-white m-0">Años de experiencia dando la mejor asistencia</h2>
                    </div>
                </div>
                <div class="col-lg-7 pt-5 pb-lg-5">
                    <h6 class="text-secondary font-weight-semi-bold text-uppercase mb-3">Más sobre nosotros</h6>
                    <h1 class="mb-4 section-title">Necesita asistencia o ayuda?</h1>
                    <h5 class="text-muted font-weight-normal mb-3">No se preoucupe!, llevamos mas de 25 años dando la mejor asistencia y soluciones tanto personales como empresariales con nuestros servicios de asistencia telefonica inmediata.</h5>
                    <p>Obtenga un mayor ahorro en sus servicios de internet, telefonia, cable, luz, agua, pago de taxes, pago de IRS, asistencia financera personal y empresarial, ayuda con el pago de bills y facturas. </p>
                    <div class="d-flex align-items-center pt-4">
                        <a href="null" class="btn btn-primary mr-5">Llame Hoy! <FaPhoneAlt /></a>
                        <button type="button" class="btn-play" data-toggle="modal"
                            data-src="https://youtu.be/gwKjvJBl5xw" data-target="#videoModal">
                            <span></span>
                        </button>
                        <h5 class="font-weight-normal text-white m-0 ml-4 d-none d-sm-block">Play Video</h5>
                    </div>
                </div>
            </div>
        </div>
      </div>


      <div class="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>        
                    
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://youtu.be/32dGIHCzbfE" id="video" title='yupp' allowscriptaccess="always" allow="autoplay"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About