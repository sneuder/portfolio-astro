export const formatDateRange = (startDate: Date, endDate: Date) => {
  const start = new Date(startDate)
  const end = new Date(endDate)

  const startMonth = start.toLocaleString('en-US', {
    month: 'short',
    timeZone: 'UTC',
  })
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
