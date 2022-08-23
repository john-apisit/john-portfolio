import React from 'react'
import { Element } from 'react-scroll'
import About from './About'
import Home from './Home'
import Skills from './Skills'

const Body = () => {
  return (
    <div className="text-gray-300 px-20">
      <Home />
      <About />
      <Skills />
      <Element name="service" className="min-h-screen pt-20">
        service
      </Element>
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
