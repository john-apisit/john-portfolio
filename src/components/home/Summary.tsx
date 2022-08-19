import React from 'react'
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'

const Summary = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col mx-auto p-80">
        <span className="text-pink-500">Hi, my name is</span>
        <h1 className="text-white text-5xl font-bold">
          John, Apisit Sianglert
        </h1>
        <h1 className="text-gray-400 text-5xl font-bold mt-2">
          I'm a Lead Software Engineer.
        </h1>
        <p className="text-gray-400 mt-4">
          Currently I am working in the IT department of Lotus company as a
          software development lead. I have 10 years experience in Javascript
          development. 7 years for C# .NET MVC. 5 years for Angular and
          Typescript. 3 years for NodeJs. 2 years for VueJs. and 3 years for
          leading the team. Now, I am looking for a challenging business unit
          especially financial, blockchain and ecommerce.
        </p>
        <button className="mt-4 w-40 justify-center hover:scale-105 items-center border-2 border-gray-400 text-gray-300 p-2 flex flex-row gap-2">
          <span>View Work</span>
          <ArrowNarrowRightIcon className="w-6" />
        </button>
      </div>
    </div>
  )
}

export default Summary
