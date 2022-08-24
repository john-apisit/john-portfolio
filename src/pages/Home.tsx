import React from 'react'
import Body from '../components/home/Body'
import Footer from '../components/home/Footer'
import Header from '../components/home/Header'
import Socials from '../components/home/Socials'

const Home = () => {
  return (
    <div className="bg-[rgb(20,17,32)] min-h-screen">
      <Header />
      <Socials className="hidden lg:flex flex-col fixed left-20 min-h-screen" />
      <Body />
      <Footer />
    </div>
  )
}

export default Home
