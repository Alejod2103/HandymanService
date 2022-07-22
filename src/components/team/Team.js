import React from 'react'
import img1 from '../../images/imagen1.jpg';
import img2 from '../../images/imagen2.jpg';
import img3 from '../../images/imagen3.jpg';
import '../../css/style.css';
import './Team.css';

export const Team = () => {
  return (
    <>
        <div class="container-fluid py-5">
        <div class="container py-5">
            <div class="row align-items-end mb-4">
                <div class="col-lg-6">
                    <h6 class="text-secondary font-weight-semi-bold text-uppercase mb-3">su tranquilidad es nuestro compromiso.</h6>
                    <h1 class="section-title mb-3">Expertos en soluciones</h1>
                </div>
                <div class="col-lg-6">
                    <h4 class="texto-team text-muted mb-3">Nos encargamos de asistirlo ante inconvientes tanto en el hogar y de forma personal, a traves de nuestros distintos servicios de asistencia telefonica inmediata</h4>
                </div>
            </div>
            <div class="row">
                <div class="containerServices">
                    
                        <div class="team text-center rounded overflow-hidden ml-20px">
                            <div class="position-relative">
                                <div class="team-img">
                                    <img class="img-fluid" src={img1} alt="none" />
                                </div>
                                <div class="team-social d-flex flex-column align-items-center justify-content-center bg-primary">
                                    <a class="btn btn-secondary btn-social mb-2" href="none"><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-secondary btn-social mb-2" href="none"><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-secondary btn-social" href="none"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div class="d-flex flex-column bg-primary text-center py-4">
                                <h5 class="font-weight-bold">Servicio</h5>
                                <p class="text-white m-0">Descripcion</p>
                            </div>
                        </div>
                        <div class="team text-center rounded overflow-hidden">
                            <div class="position-relative">
                                <div class="team-img">
                                    <img class="img-fluid w-100" src={img2} alt="none" />
                                </div>
                                <div class="team-social d-flex flex-column align-items-center justify-content-center bg-primary">
                                    <a class="btn btn-secondary btn-social mb-2" href="none"><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-secondary btn-social mb-2" href="none"><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-secondary btn-social" href="none"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div class="d-flex flex-column bg-primary text-center py-4">
                                <h5 class="font-weight-bold">Servicio</h5>
                                <p class="text-white m-0">Descripcion</p>
                            </div>
                        </div>
                        <div class="team d-flex flex-column text-center rounded overflow-hidden">
                            <div class="position-relative">
                                <div class="team-img">
                                    <img class="img-fluid w-100" src={img3} alt="none" />
                                </div>
                                <div class="team-social d-flex flex-column align-items-center justify-content-center bg-primary">
                                    <a class="btn btn-secondary btn-social mb-2" href="none"><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-secondary btn-social mb-2" href="none"><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-secondary btn-social" href="none"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div class="d-flex flex-column bg-primary text-center py-4">
                                <h5 class="font-weight-bold">Servicio</h5>
                                <p class="text-white m-0">Descripcion</p>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
