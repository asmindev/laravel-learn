const validateTime = (time) => {
    const patternHour = /^([0-1]?[0-9]|2[0-3])/
    const patternMinute = /([0-5]?[0-9])$/

    if (time.length === 0) {
        return { message: 'Time is required' }
    }
    if (patternHour.test(time)) {
        if (patternMinute.test(time)) {
            return { hour: time.substring(0, 2), minute: time.substring(3, 5) }
        } else {
            return { success: false, message: 'Minute is invalid' }
        }
    } else {
        return { success: false, message: 'Hour is invalid' }
    }
}

export default validateTime
