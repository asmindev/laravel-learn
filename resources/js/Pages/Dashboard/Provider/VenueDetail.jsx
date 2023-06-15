import React, { useEffect, useState } from 'react'
import sortDatesByDateTime from '@/helper/sortirByDate'
import calculateBookings from '@/helper/calculateBookings'
import Chart from './Chart/Line'
import Detail from './Components/Detail'

export default function DetailVenue({ venue }) {
    const [bookings, setBookings] = useState({})

    const bookingsByMonth = () => {
        const months = [
            'Januari',
            'Februari',
            'Maret',
            'April',
            'Mei',
            'Juni',
            'Juli',
            'Agustus',
            'September',
            'Oktober',
            'November',
            'Desember',
        ]
        const result = []
        months.forEach((month, index) => {
            const bookings = venue.venue_bookings.filter((booking) => {
                const date = new Date(booking.date)
                return date.getMonth() === index
            })
            result.push(bookings.length)
        })
        return result
    }
    const bookingsByDay = () => {
        const days = [
            'Senin',
            'Selasa',
            'Rabu',
            'Kamis',
            'Jumat',
            'Sabtu',
            'Minggu',
        ]
        const result = []
        days.forEach((day, index) => {
            const bookings = venue.venue_bookings.filter((booking) => {
                const date = new Date(booking.date)
                return date.getDay() === index
            })
            result.push(bookings.length)
        })
        return result
    }
    const bookingsByDate = () => {
        const result = []
        const date = new Date()
        const month = date.getMonth()
        const year = date.getFullYear()
        const daysInMonth = new Date(year, month + 1, 0).getDate()
        for (let i = 1; i <= daysInMonth; i++) {
            const bookings = venue.venue_bookings.filter((booking) => {
                const date = new Date(booking.date)
                return date.getDate() === i
            })
            result.push(bookings.length)
        }
        return result
    }
    useEffect(() => {
        if (venue.venue_bookings.length > 0) {
            const res = sortDatesByDateTime(venue.venue_bookings)
            setBookings(calculateBookings(res))
        } else {
            setBookings({
                currentBookings: [],
                upcomingBookings: [],
                pastBookings: [],
            })
        }
    }, [venue.venue_bookings])
    return (
        <div className="w-full h-full">
            <div className="w-full flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-700 capitalize">
                    {venue.name}
                </h1>
            </div>
            <div className="w-full mt-4">
                <div className="w-full ">
                    <table className="w-full md:w-1/2 table-auto">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 text-left text-gray-600">
                                    Sekarang
                                </th>

                                <th className="py-2 px-4 text-left text-gray-600">
                                    Akan Datang
                                </th>

                                <th className="py-2 px-4 text-left text-gray-600">
                                    Selesai
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 text-left text-gray-600">
                                    {bookings.currentBookings?.length
                                        ? bookings.currentBookings[0].name
                                        : 'Kosong'}
                                </td>
                                <td className="py-2 px-4 text-left text-gray-600">
                                    {bookings.upcomingBookings?.length} Booking
                                </td>
                                <td className="py-2 px-4 text-left text-gray-600">
                                    {bookings.pastBookings?.length} Booking
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-full h-full flex flex-wrap mt-4 flex-row-reverse justify-end">
                    <div className="w-full md:w-1/2 px-4">
                        <div className="w-full mb-4 flex items-center justify-between">
                            <h1 className="text-2xl font-bold text-gray-700 capitalize">
                                Booking Bulan ini
                            </h1>
                        </div>
                        <div className="w-full bg-white rounded-xl p-4 overflow-auto">
                            <Chart
                                bookings={bookings}
                                dataset={bookingsByDate()}
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-4">
                        <Detail data={venue} onClose={() => {}} />
                    </div>
                </div>
            </div>
        </div>
    )
}
