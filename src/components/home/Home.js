import React from 'react'
import About from '../about/About.js'
import { Carousel } from '../carousel/Carousel.js'
import { Info } from '../info/Info.js'

function Home() {
  return (
    <>
      <Carousel />
      
      <Info />

      <About />
    </>
  )
}

export default Home