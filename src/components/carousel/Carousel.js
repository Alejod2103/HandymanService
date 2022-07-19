import React from 'react'
import img1 from '../../images/imagen3.jpg';
import img2 from '../../images/imagen5.jpg';
import img3 from '../../images/imagen6.jpg';

export const Carousel = () => {
  return (
    <>
        <div class="container-fluid p-0">
        <div id="header-carousel" class="carousel slide carousel-fade" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#header-carousel" data-slide-to="0" class="active"></li>
                <li data-target="#header-carousel" data-slide-to="1"></li>
                <li data-target="#header-carousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="img-fluid" src={img1} alt="none" />
                    <div class="carousel-caption d-flex align-items-center justify-content-center">
                        <div class="p-5" style={{width: '100%',  maxWidth: '900px'}} >
                            <h5 class="text-primary text-uppercase mb-md-3">Necesitas Ayuda?</h5>
                            <h1 class="display-3 text-white mb-md-4">Multi servicio de asistencia</h1>
                            <a href="null" class="btn btn-primary">Contactanos hoy!</a>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="img-fluid" src={img2} alt="none" />
                    <div class="carousel-caption d-flex align-items-center justify-content-center">
                        <div class="p-5" style={{width: '100%',  maxWidth: '900px'}} >
                            <h5 class="text-primary text-uppercase mb-md-3">Le ayudamos a ahorrar en internet, telefonia, cable etc</h5>
                            <h1 class="display-3 text-white mb-md-4">Asistencia en el hogar!</h1>
                            <a href="null" class="btn btn-primary">Contactanos hoy!</a>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="img-fluid" src={img3} alt="none" />
                    <div class="carousel-caption d-flex align-items-center justify-content-center">
                        <div class="p-5" style={{width: '100%',  maxWidth: '900px'}} >
                            <h5 class="text-primary text-uppercase mb-md-3">Asitencia legal y juridica</h5>
                            <h1 class="display-3 text-white mb-md-4">Ofrecemos la mejor asistencia legal</h1>
                            <a href="null" class="btn btn-primary">Contactanos Hoy!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    </>
  )
}
