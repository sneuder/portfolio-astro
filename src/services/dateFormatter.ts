export const formatDateRange = (startDate: Date, endDate?: Date) => {
  const start = new Date(startDate)

  const startMonth = start.toLocaleString('en-US', {
    month: 'short',
    timeZone: 'UTC',
  })

  if (!endDate)
    return `${startMonth} ${start.getFullYear()} - Present`

  const end = new Date(endDate)

  const endMonth = end.toLocaleString('en-US', {
    month: 'short',
    timeZone: 'UTC',
  })

  if (start.getFullYear() === end.getFullYear())
    return `${startMonth} - ${endMonth} ${start.getFullYear()}`

  const startYear = start.toLocaleString('en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })

  const endYear = end.toLocaleString('en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })

  return `${startYear} - ${endYear}`
}

export const formatDateRangeYear = (startDate: Date, endDate: Date) => {
  const start = new Date(startDate)
  const end = new Date(endDate)

  const startYear = start.getUTCFullYear()
  const endYear = end.getUTCFullYear()

  if (startYear === endYear) return `${startYear}`
  return `${startYear} - ${endYear}`
}
