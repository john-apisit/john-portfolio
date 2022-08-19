import React from 'react'
import { Link } from 'react-scroll'

const menuList = [
  {
    name: 'home'
  },
  {
    name: 'about'
  },
  {
    name: 'experience'
  },
  {
    name: 'work'
  },
  {
    name: 'contact'
  }
]

const header = () => {
  return (
    <div className="flex flex-row justify-between items-center py-4 px-8 fixed w-full top-0">
      <h1 className="font-bold text-4xl cursor-pointer text-pink-500 font-rubik">
        John's Portfolio
      </h1>
      <ul className="flex flex-row gap-8 capitalize">
        {menuList.map((c, i) => (
          <li className="hover:scale-105" key={i}>
            <Link
              to={c.name}
              smooth={true}
              duration={300}
              className="cursor-pointer hover:text-gray-50"
            >
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default header
