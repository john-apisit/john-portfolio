import React from 'react'
import Body from '../components/resume/Body'
import Header from '../components/resume/Header'

const Resume = () => {
  return (
    <div className="bg-white h-screen text-xs">
      <div className="mx-auto bg-gray-100 max-w-5xl relative">
        <Header />
        <Body />
      </div>
    </div>
  )
}

export default Resume
