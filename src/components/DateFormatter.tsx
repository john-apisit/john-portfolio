import React from 'react'
import dayjs from 'dayjs'

const DateFormatter = ({
  value,
  format,
  className
}: {
  value: string | Date
  format: string
  className?: string
}) => {
  return <span className={className}>{dayjs(value).format(format)}</span>
}

export default DateFormatter
