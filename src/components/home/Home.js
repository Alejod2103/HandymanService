import React from 'react'
import '../../css/style.css';
import About from '../about/About.js'
import { Carousel } from '../carousel/Carousel.js'
import { Info } from '../info/Info.js'
import { Team } from '../team/Team';


function Home() {
  return (
    <>
      <Carousel />
      <Info />
      <About />
      <Team />
    </>
  )
}

export default Home