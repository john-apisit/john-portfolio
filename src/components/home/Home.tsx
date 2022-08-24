import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { Button, Element, Link } from 'react-scroll'
import profile from '../../assets/profile.jpg'

const Home = () => {
  return (
    <Element name="home" className="min-h-screen max-w-6xl mx-auto">
      <div className="text-gray-300 flex flex-row items-center gap-2 px-32 py-52">
        <div className="flex-1">
          <h1 className="text-5xl font-bold">Hi, I'am John</h1>
          <h2 className="text-xl py-4">Lead Software Engineer</h2>
          <p className=''>
            High level experience in web and mobile development knowledge,
            producing quality work.
          </p>
          <Link
            to="contactMe"
            smooth={true}
            duration={300}
            className="btn w-44"
          >
            <span>Contact Me</span>
            <FaChevronRight size={18} />
          </Link>
        </div>
        <div className="flex-1">
          <img src={profile} className="rounded-full w-72 object-contain mx-auto" />
        </div>
      </div>
    </Element>
  )
}

export default Home
