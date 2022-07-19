import React from 'react'
import '../../css/style.css';

function Topbar() {
  return (
    <>
    <div class="container-fluid">
        <div class="row">
            <div class="containerlogo col-lg-3 d-none d-lg-block">
                <a href="null" class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                    <h1 class="m-0 display-3 text-primary">MultiServices</h1>
                </a>
            </div>
            <div class="col-lg-9">
                <div class="row bg-dark d-none d-lg-flex">
                    <div class="col-lg-7 text-left text-white">
                        <div class="h-100 d-inline-flex align-items-center border-right border-primary py-2 px-3">
                            <i class="fa fa-envelope text-primary mr-2"></i>
                            <small>info@example.com</small>
                        </div>
                        <div class="h-100 d-inline-flex align-items-center py-2 px-2">
                            <i class="fa fa-phone-alt text-primary mr-2"></i>
                            <small>+012 345 6789</small>
                        </div>
                    </div>
                    <div class="col-lg-5 text-right">
                        <div class="d-inline-flex align-items-center pr-2">
                            <a class="text-primary p-2" href="null">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a class="text-primary p-2" href="null">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a class="text-primary p-2" href="null">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a class="text-primary p-2" href="null">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a class="text-primary p-2" href="null">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <nav class="navbar navbar-expand-lg bg-white navbar-light p-0">
                    <a href="null" class="navbar-brand d-block d-lg-none">
                        <h1 class="m-0 display-4 text-primary">MultiServices</h1>
                    </a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav mr-auto py-0">
                            <a href="index.html" class="nav-item nav-link active">Home</a>
                            <a href="about.html" class="nav-item nav-link">Sobre nosotros</a>
                            <div class="nav-item dropdown">
                                <a href="null" class="nav-link dropdown-toggle" data-toggle="dropdown">Servicios</a>
                                <div class="dropdown-menu rounded-0 m-0">
                                    <a href="blog.html" class="dropdown-item">Servicio de asistencia electrica</a>
                                    <a href="single.html" class="dropdown-item">Servicio de asistencia financiera</a>
                                    <a href="single.html" class="dropdown-item">Asistencia Legal</a>
                                    <a href="single.html" class="dropdown-item">Ahorro en servicio de internet</a>
                                </div>
                            </div>
                        </div>
                        <a href="null" class="btn btn-primary mr-3 d-none d-lg-block">Llame Hoy!</a>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    </>
  )
}

export default Topbar;