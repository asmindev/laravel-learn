const fromTimestamp = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}
const yesterday = () => {
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)
    return yesterday
}

export { fromTimestamp, yesterday }
