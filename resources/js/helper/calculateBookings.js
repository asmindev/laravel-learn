const calculateBookings = (bookings) => {
    // separate bookings into past and future by label
    const pastBookings = bookings.filter((booking) => booking.label === 'past')
    const futureBookings = bookings.filter(
        (booking) => booking.label === 'upcoming',
    )
    const nowBookings = bookings.filter(
        (booking) => booking.label === 'current',
    )
    // make object to return
    const calculatedBookings = {
        pastBookings,
        upcomingBookings: futureBookings,
        currentBookings: nowBookings,
    }
    return calculatedBookings
}

export default calculateBookings
