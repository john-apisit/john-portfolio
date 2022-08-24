import React from 'react'
import { Element } from 'react-scroll'
import About from './About'
import ContactMe from './ContactMe'
import Home from './Home'
import Portfolio from './Portfolio'
import Qualification from './Qualification'
import Skills from './Skills'

const Body = () => {
  return (
    <div className="text-gray-300 px-8 lg:px-20">
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Portfolio />
      <ContactMe />
    </div>
  )
}

export default Body
