import React from 'react'
import About from './About'
import Summary from './Summary'

const Body = () => {
  return (
    <div className='flex flex-col'>
      <Summary />
      <About />
    </div>
  )
}

export default Body
