import React from 'react'
import { FaDownload } from 'react-icons/fa'
import { Element, Link } from 'react-scroll'
import profile2 from '../../assets/profile2.jpg'

const expList = [
  {
    value: '10+',
    text: 'Years experience'
  },
  {
    value: '10+',
    text: 'Completed projects'
  },
  {
    value: '09+',
    text: 'Companies worked'
  }
]

const About = () => {
  return (
    <Element name="about" className="min-h-screen lg:max-w-6xl mx-auto lg:px-32 py-32 lg:py-52">
      <div className="text-gray-300 flex flex-col items-center gap-2 my-auto">
        <h1 className="text-5xl font-bold">About Me</h1>
        <p className="pt-2">My introduction</p>
        <div className="flex flex-row flex-wrap gap-2 pt-14">
          <div className="flex-1 px-10 pb-10">
            <img
              src={profile2}
              className="rounded-full w-72 object-contain mx-auto"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <p>
              Web developer, with extensive knowledge and years of experience,
              working in web, backend and AWS cloud technologies, delivering quality
              work.
            </p>
            <div className="pt-10 flex flex-row">
              {expList.map((c, i) => (
                <div className="flex flex-col items-center gap-2" key={i}>
                  <h1 className="text-2xl font-bold">{c.value}</h1>
                  <p className="text-center">{c.text}</p>
                </div>
              ))}
            </div>

            <a
              className="btn lg:w-52"
              href="/resume"
              target={'_blank'}
            >
              <span>Download CV</span>
              <FaDownload size={18} />
            </a>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default About
