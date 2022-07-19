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
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default About