import React from 'react'
import img3 from '../../images/internet-4.jpg';
import styled from 'styled-components';

const Home = () => {
  return (
    <>
          <section class="slick-slideshow">   
                <div class="slick-custom">
                    <img src={img3} alt="none" />

                    <div class="slick-bottom">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-10">
                                    <h1 class="slick-title">Internet de Fibra Rapido y Veloz</h1>

                                    <SubtituloHome>La mejor velocidad y eficiencia de fibra optica para brindarle el servicio que merece</SubtituloHome>

                                    <a href="about.html" class="btn custom-btn">Contactenos</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
    </>
  )
}

export default Home

export const SubtituloHome = styled.p`
font-size: 18px;
color: #fff;
`;