import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import Footer from '../components/Footer/Footer'
const Shop = () => {
  return (
    <div>
      <Hero />
      <NewCollections />
      <Offers />
      <br />
      <br />
      <Popular />
      <><br /><br /> <br /></>
      <NewsLetter />


    </div>
  )
}

export default Shop
