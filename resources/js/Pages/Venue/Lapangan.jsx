import React, { useEffect, useState, useRef } from 'react'
const Tooltip = ({ order, paid }) => {
    return (
        <div className="absolute -top-14 left-1 bg-gray-800 text-white text-xs px-2 py-1 rounded">
            <div className="flex items-center justify-between flex-col gap-1 py-1">
                <span>Order by {order}</span>
                <span>{paid}</span>
            </div>
        </div>
    )
}

export default function Lapangan({
    state,
    updateState,
    date,
    bookings,
    venueOpen,
    venueClose,
}) {
    const [orders, setOrders] = useState([])
    const [showToolTip, setShowToolTip] = useState([])
    const [result, setResult] = useState([])
    const [today, setToday] = useState(false)
    const buttonRefs = useRef([])

    const nowInHour = new Date().getHours()
    const hoursCalculation = (start, end, hasBooking) => {
        const startHour = Number(start.split(':')[0])
        const endHour = parseInt(end.split(':')[0], 10) || 24
        const listHour = []
        for (let i = startHour; i <= endHour; i++) {
            let end = (i + 1).toString().padStart(2, '0')
            if (end === '25') {
                end = '01'
            }
            const result = {
                hour: `${i.toString().padStart(2, '0')}:00`,
                end: `${end}:00`,
                available: true,
                order: null,
                paid: null,
            }
            if (hasBooking.length > 0) {
                hasBooking.forEach((order) => {
                    if (order.hours.includes(result.hour)) {
                        result.available = false
                        result.order = order.order
                        result.paid = order.paid
                    }
                })
            }
            listHour.push(result)
        }
        setResult(listHour)
    }
    const selectedDate = (arg) => {
        const results = []
        const selected = new Date(arg).toISOString().split('T')[0]

        bookings.filter((booking) => {
            if (booking.date === selected) {
                const { start_time, end_time } = booking
                const startHour = Number(start_time.split(':')[0])
                const endHour = Number(end_time.split(':')[0])

                const hoursCount = endHour - startHour
                const listHour = []
                for (let i = 0; i < hoursCount; i++) {
                    const hour = `${(startHour + i)
                        .toString()
                        .padStart(2, '0')}:00`
                    listHour.push(hour)
                }
                const result = {
                    order: booking.user.name,
                    hours: listHour,
                    name: booking.name,
                    paid: booking.status,
                }
                results.push(result)
            }
        })
        setOrders(results)
        return results
    }

    const handleClick = (hour) => {
        if (hour.available) {
            // check if the hour is already in state, if yes, remove it
            if (hour.hour === state.hour) {
                updateState({ ...state, hour: null })
            } else {
                updateState({ ...state, hour: hour.hour, end: hour.end })
            }
        }
    }
    const handleMouseEnter = (index) => {
        setShowToolTip((prev) => {
            const updated = [...prev]
            updated[index] = true
            return updated
        })
    }
    const handleMouseLeave = (index) => {
        setShowToolTip((prev) => {
            const updated = [...prev]
            updated[index] = false
            return updated
        })
    }
    const checkIsToday = () => {
        const today = new Date()
        const getFullDate = today.toISOString().split('T')[0]
        const dateToFullDate = new Date(date).toISOString().split('T')[0]
        if (getFullDate === dateToFullDate) {
            setToday(true)
        } else {
            setToday(false)
        }
    }
    function className({ state, hour, index }) {
        console.log({ available: hour.available, available_2: !hour.available })
        let classname
        if (!hour.available) {
            classname = 'bg-indigo-500 text-white'
        } else if (hour.available) {
            classname = 'bg-white text-gray-700'
            if (state.hour === hour.hour) {
                classname = 'bg-indigo-500 text-white'
            }
            if (today) {
                if (Number(hour.hour.split(':')[0]) <= nowInHour) {
                    // disable button
                    classname = 'bg-gray-300 text-gray-700 cursor-not-allowed'
                }
            }
        }
        return `${classname} border border-gray-300 rounded py-2 relative`
    }
    useEffect(() => {
        checkIsToday()
        const res = selectedDate(date)
        console.log({ res })
        hoursCalculation(venueOpen, venueClose, res)
    }, [date])
    return (
        <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {result.map((hour, index) => (
                <button
                    ref={(el) => (buttonRefs.current[index] = el)}
                    onClick={() => handleClick(hour)}
                    type="button"
                    disabled={
                        !hour.available ||
                        Number(hour.hour.split(':')[0]) <= nowInHour
                    }
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    key={index}
                    className={`
                    ${className({ state, hour, index })}
                    `}
                >
                    <p>{hour.hour}</p>
                    {hour.order && showToolTip[index] && (
                        <Tooltip order={hour.order} paid={hour.paid} />
                    )}
                </button>
            ))}
        </div>
    )
}
