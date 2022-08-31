import React from 'react'
import img1 from '../../images/luz-1.jpeg';
import img2 from '../../images/cable-1.jpg';
import img3 from '../../images/internet-5.jpg';
import img4 from '../../images/bill-1.jpg';
import styled from 'styled-components';

const Blog = () => {
  return (
    <>
      <div id="blog" class="our-blog section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.25s">
          <div class="section-heading">
            <h2>Conozca como podemos <em>Ayudarle</em> en nuestro <span>Blog</span></h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.25s">
          <div class="left-image">
            <a href="/blog/ayuda-energia"><img src={img1} alt="Workspace Desktop" /></a>
            <div class="info">
              <div class="inner-content">
                <ul>
                  <li><i class="fa fa-calendar"></i>Feb 2022</li>
                  <li><i class="fa fa-users"></i> 23k views</li>
                </ul>
                <a href="/blog/ayuda-energia"><h4>Obtenga ayuda para pagar su estado de cuenta de energía de PG&E</h4></a>
                <p>Nos encargamos de brindarte ayuda con el pago de los bill de tu cuenta de luz para que no tengas que preocuparte...</p>
                <div class="main-blue-button">
                  <a href="none">Llamar Ahora</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.25s">
          <div class="right-list">
            <ul>
              <li>
                <div class="left-content align-self-center">
                  <span><i class="fa fa-calendar"></i>Agosto 2022</span>
                  <a href="/blog/ahorro-de-cable"><h4>Descubre como ahorrar mas en tu factura de cable con mas beneficios!</h4></a>
                  <p>Deja de pagar bills altos por cable, disfruta de mas de 3k canales, series, peliculas, etc al precio ideal</p>
                </div>
                <div class="right-image">
                  <a href="none"><img src={img2} alt="none" /></a>
                </div>
              </li>
              <li>
                <div class="left-content align-self-center">
                  <span><i class="fa fa-calendar"></i>Marzo 2022</span>
                  <a href="/blog/beneficios-fibra-optica"><h4>Que tan rapido es tu internet? mira por que todos escogen la fibra optica</h4></a>
                  <Styleddesc>la fibra optica es capaz de transmisiones de audio y vídeo en alta calidad, transferencia de datos en tiempo real, entre otros beneficios...</Styleddesc>
                </div>
                <div class="right-image">
                  <a href="none"><img src={img3} alt="none" /></a>
                </div>
              </li>
              <li>
                <div class="left-content align-self-center">
                  <span><i class="fa fa-calendar"></i>Marzo 2022</span>
                  <a href="/blog/ayuda-facturas"><h4>Asistencia con el pago de bills o facturas</h4></a>
                  <Styleddesc>Podemos ayudarle a generar un mayor ahorro con la asistencia de bills de internet, cable, energia, agua etc...</Styleddesc>
                </div>
                <div class="right-image">
                  <a href="none"><img src={img4} alt="none" /></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Blog

export const Styleddesc = styled.p`
  font-size: 15px;
  line-height: 20px;
`;