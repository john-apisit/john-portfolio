import React from 'react'
import Contact from './Contact'
import Profile from './Profile'
import Skills from './Skills'
import WorkExperiences from './WorkExperiences'

const Body = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col bg-gray-200 pt-48 px-4 w-80  pb-16">
        <Contact />
        <Profile />
        <Skills />
      </div>
      <div className="flex flex-col flex-1 pt-48 px-4 pb-16">
        <WorkExperiences />
      </div>
    </div>
  )
}

export default Body
