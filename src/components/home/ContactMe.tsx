import React from 'react'
import { FaChevronRight, FaEnvelope, FaLinkedin, FaLocationArrow } from 'react-icons/fa'
import { Element } from 'react-scroll'

const ContactMe = () => {
  return (
    <Element name="contactMe" className="min-h-screen max-w-6xl mx-auto">
      <div className="text-gray-300 flex flex-col items-center gap-2 px-32 py-40 my-auto">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="pt-2 text-gray-400">Get in touch</p>
        <div className="flex flex-row flex-wrap gap-10 pt-10">
          <div className="flex flex-col gap-10">
            <div className="flex flex-row items-center gap-4">
              <FaLinkedin size={32} className="text-primary" />
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">Chat Me</h3>
                <a
                  href="https://www.linkedin.com/in/apisit-sianglert/"
                  target={'_blank'}
                  className="text-gray-500"
                >
                  Linkedin: apisit-sianglert
                </a>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <FaEnvelope size={32} className="text-primary" />
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">Email</h3>
                <span className="text-gray-500">john.apisits@gmail.com</span>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <FaLocationArrow size={32} className="text-primary" />
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">Location</h3>
                <span className="text-gray-500">Bangkok, Thailand</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-row flex-wrap gap-8">
              <input type="text" className="input-text" placeholder="Name" />
              <input type="text" className="input-text" placeholder="Email" />
            </div>
            <input type="text" className="input-text" placeholder="Project" />
            <textarea rows={5} className="input-text" placeholder="Message" />
            <button className="btn w-48">
              <span>Send Message</span>
              <FaChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default ContactMe
