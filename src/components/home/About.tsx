import React from 'react'
import { Element } from 'react-scroll'

const About = () => {
  return (
    <Element className="min-h-screen" name="about">
      <div className="flex flex-row mx-auto p-64 gap-10">
        <div className="flex flex-col flex-1 text-right">
          <h1 className="text-4xl font-bold decoration-pink-500 underline underline-offset-8 decoration-4">
            About
          </h1>
          <h1 className="text-4xl mt-10 font-bold text-gray-400">
            Hi, I'm John, nice to meet you. Please take a look around!
          </h1>
        </div>
        <div className="flex flex-col flex-1">
          <p className="text-gray-400 mt-16">
            I am passionate about building excellent software that improve the
            lives of those around me. I specialize in creating software for
            clients ranging from individuals and small-businesses all the way to
            large enterprise corporations. What would you do if you had a
            software expert available at your fingertips?
          </p>
        </div>
      </div>
    </Element>
  )
}

export default About
