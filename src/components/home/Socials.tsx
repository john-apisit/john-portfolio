import React from 'react'
import {
  FaLinkedin,
  FaFacebookSquare,
  FaRegFileAlt,
  FaGithub
} from 'react-icons/fa'

const Socials = ({ className }: { className?: string }) => {
  return (
    <div
      className={`${className} gap-4 justify-center text-gray-300 z-50`}
    >
      <a
        target="_blank"
        href="https://www.linkedin.com/in/apisit-sianglert"
        className="hover:animate-pulse hover:scale-110"
      >
        <FaLinkedin className="text-primary cursor-pointer" size={28} />
      </a>
      <a
        target="_blank"
        href="https://www.facebook.com/pha.john.14"
        className="hover:animate-pulse hover:scale-110"
      >
        <FaFacebookSquare className="text-primary cursor-pointer" size={28} />
      </a>
      <a
        target="_blank"
        href="https://github.com/johns-portfolio"
        className="hover:animate-pulse hover:scale-110"
      >
        <FaGithub className="text-primary cursor-pointer" size={28} />
      </a>
    </div>
  )
}

export default Socials
