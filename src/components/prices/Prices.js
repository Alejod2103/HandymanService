import React from 'react'
import styled from 'styled-components'

const Prices = () => {
  return (
    <>

    <section style={{marginBottom: '-240px'}} class="pricing1 cid-st2L1NX8yl" id="pricing01-d">
        <div class="container-mobile" style={{borderRadius: '25px'}}>
      <div class="row-mobile">
            <Tittleprice><strong>Conoce Nuestros Planes &amp; Precios</strong></Tittleprice>
    </div>
    <div class="row" style={{justifyContent: 'center'}} >
        <div class="card md col-12 col-md-4 rounded " style={{margin: '20px'}}>
            <Styledcard class="card-wrapper">
                <div class="card-box">
                    <h4 class="card-subtitle align-left mbr-fonts-style pb-3 display-7" style={{textAlign: 'center' , marginTop: '15px', marginBottom: '15px'}} >Internet fibra</h4>
                    <h5 class="card-title align-left mbr-fonts-style pb-3 display-1" style={{textAlign: 'center'}} ><strong>$49.99</strong></h5>
                        
                        <ul style={{textAlign: 'center', marginLeft: '-26px'}}>
                            <li>Conexion optima de fibra optica</li>
                            <li>Conexion para 5 dispositivos</li>
                            <li>Soporte para descargas</li>
                            <li>Mayor potencia de red</li>
                            <li>Firewall de Seguridad</li>
                        </ul>
                </div>
                <Styledbutton><a type="submit" href='none' class="btn btn-lg btn-warning display-7">Llama Ahora!</a></Styledbutton>
            </Styledcard>
        </div>

        <div class="card col-12 col-md-6 col-lg-4" style={{margin: '20px'}}>
            <Styledcard class="card-wrapper">
                <div class="card-box">
                    <h4 class="card-subtitle align-left mbr-fonts-style pb-3 display-7" style={{textAlign: 'center',  marginTop: '15px', marginBottom: '15px'}}>Mayor Ahorro</h4>
                    <h5 class="card-title align-left mbr-fonts-style pb-3 display-1" style={{textAlign: 'center'}}><strong>$69.99</strong></h5>
                    
                        <ul style={{textAlign: 'center'}}>
                            <li>Conexion de descarga Ilimitada</li>
                            <li>Conexion hasta para 15 dispositivos</li>
                            <li>Mayor frecuencia de Red</li>
                            <li>Ideal para juegos y descargas</li>
                            <li>Mejor rendimiento del servicio de internet</li>
                            <li>Optimizado para todos tus dispositivos</li>
                        </ul>
                </div>
                <Styledbutton><a type="submit" href='none' class="btn btn-lg btn-warning display-7">Llama Ahora!</a></Styledbutton>
            </Styledcard>
        </div>
    </div>
</div>
</section>
    </>
  )
}

export default Prices

export const Styledcard = styled.div`

`;

export const Tittleprice = styled.h1`
    font-size: 28px;
    font-weight: bold;
    font-weight: 500;
    text-shadow: 2px 2px 2px #fff;
    margin-top: 30px;
    text-align: center;
`;

export const Styledbutton = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;