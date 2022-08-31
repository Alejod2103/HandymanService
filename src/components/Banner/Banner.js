import React from 'react'
import img1 from '../../images/handyman-4.jpg';

const Banner = () => {
  return (
    <>
        <section class="front-product">
            <div class="container-fluid p-0">
                <div class="row align-items-center">

                    <div class="col-lg-6 col-12">
                        <img src={img1} class="img-fluid" alt="none" />
                    </div>

                    <div class="col-lg-6 col-12">
                        <div class="px-5 py-5 py-lg-0">
                            <h2 class="mb-4"><span>Necesita asistencia o</span> ayuda?</h2>
                            <p class="lead mb-4">llevamos mas de 25 años dando la mejor asistencia y soluciones tanto personales como empresariales con nuestros servicios de asistencia telefonica inmediata..</p>

                            <a href="products.html" class="custom-link" style={{marginBottom: '40px'}} >
                                Contactenos
                                <i class="bi-arrow-right ms-2"></i>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </>
  )
}

export default Banner