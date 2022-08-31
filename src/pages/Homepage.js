import React from 'react'
import About from '../components/about/About'
import Banner from '../components/Banner/Banner'
import Blog from '../components/blog/Blog'
import Home from '../components/home/Home'
import Prices from '../components/prices/Prices'
import Stats from '../components/stats/Stats'

const Homepage = () => {
  return (
    <>
    <Home />
    <Prices />
    <Stats />
    <Banner />
    <About />
    <Blog />
    </>
  )
}

export default Homepage