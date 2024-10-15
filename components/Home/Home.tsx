import React from 'react'
import Hero from './Hero/Hero'
import HomeType from './HomeType/HomeType'
import Properties from './Properties/Properties'
import LocationProperties from './LocationProperties/LocationProperties'
import HouseFeature from './HouseFeature/HouseFeature'
import Reviews from './Reviews/Reviews';
import Blog from './Blog/Blog'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <HomeType />
      <Properties />
      <LocationProperties />
      <HouseFeature />
      <Reviews />
      <Blog />
    </div>
  )
}

export default Home
