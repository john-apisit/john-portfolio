import { ChevronUpIcon, CodeIcon } from '@heroicons/react/outline'
import React from 'react'
import {
  FaCode,
  FaLanguage,
  FaReact,
  FaRegHeart,
  FaRegMoon
} from 'react-icons/fa'
import { Element } from 'react-scroll'
import ProgressBar from './ProgressBar'

export const skills = [
  {
    group: 'Frontend developer',
    caption: 'More than 4 years',
    icon: <FaRegHeart className="text-primary" size={32} />,
    techList: [
      { name: 'React', score: 80 },
      { name: 'React Native', score: 80 },
      { name: 'Angular', score: 80 },
      { name: 'VueJs', score: 80 },
      { name: 'Javascript/TypeScript', score: 100 },
      { name: 'CSS/SCSS', score: 80 },
      { name: 'Tailwind', score: 80 },
      { name: 'Bootstrap', score: 80 }
    ]
  },

  {
    group: 'Backend developer',
    caption: 'More than 4 years',
    icon: <FaRegMoon className="text-primary" size={32} />,
    techList: [
      { name: 'NodeJS', score: 100 },
      { name: 'NestJS', score: 80 },
      { name: 'MongoDB', score: 80 },
      { name: 'Docker', score: 100 },
      { name: 'Kubernetes', score: 80 },
      { name: 'Jenkins', score: 80 }
    ]
  },

  {
    group: 'Languages',
    caption: 'More than 4 years',
    icon: <FaLanguage className="text-primary" size={32} />,
    techList: [
      { name: 'Thai', score: 100 },
      { name: 'English', score: 60 }
    ]
  }
]

const Skills = () => {
  return (
    <Element name="skills" className="min-h-screen max-w-6xl mx-auto">
      <div className="text-gray-300 flex flex-col items-center gap-2 px-32 py-40 my-auto">
        <h1 className="text-5xl font-bold">Skills</h1>
        <p className="pt-2 text-gray-400">My technical level</p>
        <div className="grid grid-cols-2 gap-20 w-full pt-10">
          {skills.map((c, i) => (
            <div className="flex flex-col" key={i}>
              <div className="flex flex-row gap-2 items-center">
                {c.icon}
                <div className="flex flex-col gap-2 flex-1 pl-2">
                  <h1 className="text-xl font-bold">{c.group}</h1>
                  <p className="text-sm text-gray-400">{c.caption}</p>
                </div>
                <ChevronUpIcon className="text-primary w-6" />
              </div>

              <div className="flex flex-col gap-2 pl-12 pt-8">
                {c.techList.map((t, i) => (
                  <div className="flex flex-col mb-4" key={i}>
                    <div className="flex flex-row">
                      <span className="flex-1 font-bold">{t.name}</span>
                      <span className="text-gray-400">{t.score}%</span>
                    </div>
                    <ProgressBar completed={t.score} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  )
}

export default Skills
