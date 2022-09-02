import dayjs from 'dayjs'

export const diffMonth = (from: string | Date, to: string | Date): string => {
  const diffDays = dayjs(to).diff(from, 'days')
  const diffMonth = Math.floor(diffDays / 30)
  const years = Math.floor(diffMonth / 12)
  const months = diffMonth % 12
  if (years > 0) {
    if (months > 0) {
      return `${years} yrs ${months} mos`
    } else {
      return `${years} yrs`
    }
  } else {
    return `${months} mos`
  }
}
