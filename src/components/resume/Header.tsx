import React from 'react'
import Profile from '../../assets/profile.jpg'

const Header = () => {
  return (
    <div className="absolute top-0 h-44 w-full">
      <div className="h-44 bg-gradient-to-r from-pink-300 to-indigo-400 clip-bg"></div>
      <div className="absolute top-0 w-full flex flex-row justify-between">
        <div className="p-1 border-2 border-white  w-36 rounded-full mt-8 ml-16 hover:scale-300 hover:translate-y-40 hover:translate-x-40 transition">
          <img src={Profile} className="rounded-full" />
        </div>
        <div className="text-white pr-5 pt-16 text-right">
          <h1 className="text-2xl font-semibold">Apisit Sianglert</h1>
          <h1 className="text-xl font-light">Software Development Lead</h1>
        </div>
      </div>
    </div>
  )
}

export default Header
