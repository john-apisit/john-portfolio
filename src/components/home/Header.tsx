import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { SunIcon } from '@heroicons/react/outline'

const menus = [
  {
    id: 'home',
    text: 'Home'
  },
  {
    id: 'about',
    text: 'About'
  },
  {
    id: 'skills',
    text: 'Skills'
  },
  {
    id: 'qualification',
    text: 'Qualification'
  },
  {
    id: 'portfolio',
    text: 'Portfolio'
  },
  {
    id: 'contactMe',
    text: 'Contact Me'
  }
]

const Header = () => {
  const [menuList, setMenuList] = useState(menus)
  const [activeId, setActiveId] = useState('home')

  return (
    <div className="flex flex-row gap-4 bg-[rgba(20,17,32,0.8)] text-gray-300 items-center justify-between py-8 fixed w-full top-0 z-10 px-20">
      <h1 className="font-semibold flex-1">John</h1>
      <ul className="flex flex-row gap-10">
        {menuList.map((c, i) => (
          <li key={i} className="font-medium cursor-pointer">
            <Link
              onClick={() => setActiveId(c.id)}
              className={`hover:text-primary ${
                activeId === c.id ? 'text-primary' : ''
              }`}
              to={c.id}
              smooth={true}
              duration={300}
            >
              {c.text}
            </Link>
          </li>
        ))}
      </ul>
      <SunIcon className="text-gray-300 w-6 cursor-pointer" />
    </div>
  )
}

export default Header
