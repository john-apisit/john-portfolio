import React from 'react'
import {
  FaCalendar,
  FaCalendarAlt,
  FaCalendarWeek,
  FaChalkboardTeacher,
  FaChartPie,
  FaEthereum,
  FaGraduationCap,
  FaPray,
  FaUserFriends,
  FaUserTie,
  FaWalking
} from 'react-icons/fa'
import { Element } from 'react-scroll'
import DateFormatter from '../DateFormatter'

const expList = [
  {
    position: 'Software Development Lead',
    company: 'Lotus’s',
    from: '2020-02-01',
    to: Date()
  },
  undefined,
  undefined,
  {
    position: 'Senior Frontend Developer',
    company: 'Refinitiv',
    from: '2019-05-01',
    to: '2020-01-31'
  },
  {
    position: 'Full Stack .NET Programmer',
    company: 'Brand New Day',
    from: '2018-07-01',
    to: '2019-04-30'
  },
  undefined,
  undefined,
  {
    position: 'Full Stack .NET Programmer',
    company: 'Thai Beverage Plc',
    from: '2018-01-01',
    to: '2018-06-30'
  },
  {
    position: 'Full Stack .NET Programmer',
    company: 'Symphony Communication',
    from: '2016-04-01',
    to: '2017-12-31'
  },
  undefined,
  undefined,
  {
    position: 'Full Stack .NET Programmer',
    company: 'Qi Services',
    from: '2015-04-01',
    to: '2016-04-30'
  },
  {
    position: 'Freelance .NET Programmer',
    company: 'Home',
    from: '2014-09-01',
    to: '2015-04-30'
  },
  undefined,
  undefined,
  {
    position: 'Java Programmer',
    company: 'MoCom Group',
    from: '2013-10-01',
    to: '2014-09-30'
  },
  {
    position: 'Full Stack .NET Programmer',
    company: 'Cigna Insurance',
    from: '2012-11-01',
    to: '2013-09-01'
  },
  undefined,
  undefined,
  {
    type: 'education',
    position: 'Computer Engineering',
    company: 'Rajamangala University of Technology Thanyaburi (RMUTT)',
    from: '2009-05-01',
    to: '2012-05-31'
  }
]

const Qualification = () => {
  return (
    <Element name="qualification" className="min-h-screen max-w-6xl mx-auto lg:px-32 py-32 lg:py-52">
      <div className="text-gray-300 flex flex-col items-center gap-2 my-auto">
        <h1 className="text-5xl font-bold">Qualification</h1>
        <p className="pt-2 text-gray-400">My personal journey</p>
        <div className="flex flex-row gap-10 pt-10">
          <div className="flex flex-row gap-2 items-center">
            <FaUserFriends size={30} />
            <span className="text-2xl">Work</span>
          </div>
          <div className="flex flex-row gap-2 items-center text-primary">
            <FaGraduationCap size={30} />
            <span className="text-2xl">Education</span>
          </div>
        </div>
        <div className="grid grid-cols-2 w-full pt-10">
          {expList.map((c, i) => {
            const isLeftItem = (i + 1) % 2 !== 0
            return (
              <div
                className={`flex flex-col relative pb-4 border-primary ${
                  isLeftItem ? 'items-end pr-4 lg:pr-14' : 'pl-4 lg:pl-14'
                } ${isLeftItem && i < expList.length - 2 && 'border-r-2'}`}
                key={i}
              >
                {c && (
                  <>
                    <h1
                      className={`leading-none text-sm lg:text-xl ${
                        isLeftItem && 'text-right'
                      } ${c.type === 'education' && 'text-primary'}`}
                    >
                      {c.position}
                    </h1>
                    <span className="text-gray-500 mt-1 text-sm lg:text-base">{c.company}</span>
                    <span className="text-gray-500 flex flex-row items-center gap-1 mt-4 text-xs lg:text-base">
                      <FaCalendarAlt />
                      <DateFormatter value={c.from} format={'MMM YYYY'} />
                      -
                      <DateFormatter value={c.to} format={'MMM YYYY'} />
                    </span>
                  </>
                )}
                {isLeftItem && (
                  <div className="w-4 h-4 rounded-full bg-primary top-0 -right-2 absolute"></div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </Element>
  )
}

export default Qualification
