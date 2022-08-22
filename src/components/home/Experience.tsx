import React from 'react'
import { Element } from 'react-scroll'

const techList = [
  {
    name: 'react',
    logoImage:
      'react.png'
  },
  {
    name: 'react native',
    logoImage: 'react.png'
  },
  {
    name: 'xxxx',
    logoImage: 'xxxxxx'
  },
  {
    name: 'xxxx',
    logoImage: 'xxxxxx'
  },
  {
    name: 'xxxx',
    logoImage: 'xxxxxx'
  },
  {
    name: 'xxxx',
    logoImage: 'xxxxxx'
  },
  {
    name: 'xxxx',
    logoImage: 'xxxxxx'
  }
]

const Experience = () => {
  return (
    <Element className="min-h-screen" name="experience">
      <div className="flex flex-col mx-auto p-64 gap-4">
        <h1 className="text-4xl font-bold decoration-pink-500 underline underline-offset-8 decoration-4">
          Experiences
        </h1>
        <p>// There are the technologies I've worked with</p>
        <div className="grid grid-cols-3 border-2">
          <div className="text-center">xx</div>
          <div>xx</div>
          <div>xx</div>
          <div>xx</div>
          <div>xx</div>
          <div>xx</div>
          <div>xx</div>
          <div>xx</div>
          <div>xx</div>
        </div>
      </div>
    </Element>
  )
}

export default Experience
