function labelDates(dates) {
    // use gmt+8
    const result = dates.map(function (date) {
        // use gmt +8
        const now = new Date()
        const options = { timeZone: 'Asia/Hong_Kong' }
        now.toLocaleString('en-US', options)
        const dateTime = new Date(date.date + 'T' + date.start_time)
        if (
            dateTime.getDate() === now.getDate() &&
            dateTime.getMonth() === now.getMonth() &&
            dateTime.getFullYear() === now.getFullYear() &&
            dateTime.getHours() === now.getHours()
        ) {
            date.label = 'current'
        } else if (dateTime < now) {
            date.label = 'past'
        } else if (dateTime > now) {
            date.label = 'upcoming'
        }
        return dates
    })
    return result[0]
}
function sortDatesByDateTime(dates) {
    dates.sort(function (a, b) {
        const dateTimeA = new Date(a.date + 'T' + a.start_time)
        const dateTimeB = new Date(b.date + 'T' + b.start_time)
        return dateTimeA - dateTimeB
    })
    return labelDates(dates)
}

export default sortDatesByDateTime
