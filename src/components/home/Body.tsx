import React from 'react'
import About from './About'
import Experience from './Experience'
import Summary from './Summary'

const Body = () => {
  return (
    <div className='flex flex-col'>
      <Summary />
      <About />
      <Experience />
    </div>
  )
}

export default Body
