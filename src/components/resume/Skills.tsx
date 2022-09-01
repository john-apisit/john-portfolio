import React from 'react'
import { skills } from '../home/Skills'

const Skills = () => {
  return (
    <div className="mt-4">
      <h1 className="text-xl text-sky-500">Skill Summary</h1>
      <div className="my-2">
        {skills.map((skill) => (
          <div className="flex flex-col  gap-1">
            <h1 className="text-sky-500 pt-4 uppercase">{skill.group}</h1>
            {skill.techList.map((c, i) => (
              <div className="flex flex-row justify-between">
                <span className="flex-1">{c.name}</span>
                <div className="bg-gray-300 w-36 rounded-lg">
                  <div
                    className="bg-blue-500 h-full rounded-lg text-right text-blue-200 pr-2 hover:scale-y-125"
                    style={{ width: `${c.score}%` }}
                  >
                    {c.score / 10}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
