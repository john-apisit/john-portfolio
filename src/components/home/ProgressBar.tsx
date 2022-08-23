import React from 'react'

const ProgressBar = ({ completed, className }: ProgressBarProps) => {
  return (
    <div className={`rounded-md bg-gray-300 ${className}`}>
      <div className="bg-primary h-2 rounded-md" style={{width: `${completed}%`}}></div>
    </div>
  )
}

export default ProgressBar

type ProgressBarProps = {
  completed: number
  className?: string
}
