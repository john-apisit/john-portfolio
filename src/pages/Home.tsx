import React from 'react'
import Body from '../components/home/Body'
import Header from '../components/home/Header'
import Summary from '../components/home/Summary'

const Home = () => {
  return (
    <div className='bg-[#0f172a] flex flex-col h-full min-h-screen text-gray-300 scroll-smooth'>
      <Header />
      <Body />
    </div>
  )
}

export default Home
