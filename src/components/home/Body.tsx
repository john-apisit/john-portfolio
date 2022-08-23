import React from 'react'
import { Element } from 'react-scroll'
import About from './About'
import Home from './Home'
import Qualification from './Qualification'
import Skills from './Skills'

const Body = () => {
  return (
    <div className="text-gray-300 px-20">
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Element name="portfolio" className="min-h-screen pt-20">
        portfolio
      </Element>
      <Element name="contactMe" className="min-h-screen pt-20">
        contactMe
      </Element>
    </div>
  )
}

export default Body
