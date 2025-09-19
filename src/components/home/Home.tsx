import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { Button, Element, Link } from 'react-scroll'
import profile from '../../assets/profile3.jpg'

const Home = () => {
  return (
    <Element name="home" className="min-h-screen lg:max-w-6xl mx-auto lg:px-32 py-32 lg:py-52">
      <div className="text-gray-300 flex flex-row flex-wrap-reverse items-center gap-10">
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
        <div className="flex-1 min-w-fit">
          <img src={profile} className="rounded-full w-72 object-contain mx-auto" />
        </div>
      </div>
    </Element>
  )
}

export default Home
