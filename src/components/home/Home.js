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
                                    <Titulohome class="slick-title">Internet de Fibra Rapido y Veloz</Titulohome>

                                    <SubtituloHome>La mejor velocidad y eficiencia de fibra optica para brindarle el servicio que merece</SubtituloHome>

                                    <StyledButton href="about.html" class="btn custom-btn">Contactenos</StyledButton>
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
text-shadow: 2px 2px 2px #000;

    @media (min-width: 300px) and (max-width: 600px) {
        font-size: 15px;
    }

`;

export const Titulohome = styled.h1`
    color: #fff;
    text-shadow: 2px 2px 2px #000;

    @media (min-width: 300px) and (max-width: 600px) {
        font-size: 26px;
    }
`;

export const StyledButton = styled.a`
  appearance: none;
  background-color: #000000;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 40%;
  will-change: transform;

  :disabled {
  pointer-events: none;
  }

  :hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
  }

  :active {
  box-shadow: none;
  transform: translateY(0);
}

@media (min-width: 300px) and (max-width: 700px) {
    font-size: 13px;
    padding: 8px 8px;
    text-align: center;
    min-height: 0;
}

`;