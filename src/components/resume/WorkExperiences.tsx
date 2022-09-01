import React from 'react'
import { BsCalendar2Month, BsList, BsTag } from 'react-icons/bs'
import { diffMonth } from '../../utils/functions'
import DateFormatter from '../DateFormatter'
import { expList } from '../home/Qualification'

const WorkExperiences = () => {
  return (
    <div className="mt-4">
      <h1 className="text-xl text-sky-500">Work Experiences</h1>
      {expList
        .filter((c) => c !== undefined)
        .map((c, i) => (
          <div className="my-4">
            <h2 className="text-lg">{c!.position}</h2>
            <h2 className="font-extralight text-sm flex flex-row items-center gap-2">
              {c?.company} | <BsCalendar2Month />
              <DateFormatter value={c!.from} format={'MMM YYYY'} />
              -
              <DateFormatter value={c!.to} format={'MMM YYYY'} />(
              {diffMonth(c!.from, c!.to)})
            </h2>
            <div className="flex flex-col gap-1 pt-2">
              {c?.responsibilities &&
                c!.responsibilities!.map((r: any) => (
                  <div>
                    <div className="flex flex-row gap-2 items-center">
                      <BsTag className="text-blue-500" size={14} />
                      <span className="max-w-xl">{r.title ? r.title : r}</span>
                    </div>
                    {r.subTasks && (
                      <div className="flex flex-col pl-4">
                        {r.subTasks.map((s: string) => (
                          <div className="flex flex-row gap-2 items-center">
                            <BsTag className="text-blue-500" size={14} />
                            <span className="max-w-xl">{s}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  )
}

export default WorkExperiences
