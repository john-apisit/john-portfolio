import React from 'react'
import Body from '../components/home/Body'
import Header from '../components/home/Header'
import Socials from '../components/home/Socials'

const Home = () => {
  return (
    <div className='bg-[rgb(20,17,32)] min-h-screen'>
      <Header />
      <Socials />
      <Body />
    </div>
  )
}

export default Home
