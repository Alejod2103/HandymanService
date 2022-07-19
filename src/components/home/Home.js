import React from 'react'
import '../../css/style.css';
import About from '../about/About.js'
import { Carousel } from '../carousel/Carousel.js'
import { Info } from '../info/Info.js'
import Servicios from '../servicios/Servicios.js'

function Home() {
  return (
    <>
      <Carousel />
      <Info />
      <About />
      <Servicios />
    </>
  )
}

export default Home