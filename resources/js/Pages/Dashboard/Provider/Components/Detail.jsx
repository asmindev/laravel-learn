import React from 'react'
import sortirByDate from '@/helper/sortirByDate'

export default function Detail({ data }) {
    const bookings = data.venue_bookings
    // const { venue_bookings: bookings, ...venue } = data
    // console.log(bookings)
    const sort = sortirByDate(bookings)

    return (
        <div className="w-full bg-white mx-auto rounded-xl p-4">
            <div className="w-full flex justify-between items-center">
                <h1 className="text-left text-2xl font-bold text-gray-700 whitespace-nowrap">
                    Detail Venue
                </h1>
                {/* edit dan delete button */}
            </div>
            {/* body */}
            <div className="w-full mt-4">
                <div className="relative w-full">
                    {/* bookings list */}
                    <div>
                        <h1 className="text-center text-lg font-bold text-gray-700 capitalize">
                            Bookings {bookings.length} data
                        </h1>
                        <hr className="my-2" />
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                        {sort?.map((booking, index) => (
                            <div
                                key={index}
                                className="w-full mt-4 bg-gradient-to-r from-black/5 to-gray-50 rounded-xl border hover:shadow-xl transition duration-300 ease-in-out"
                            >
                                <div className="w-full p-4 text-sm font-medium">
                                    <table className="w-full text-left">
                                        <tbody>
                                            <tr>
                                                <td>Nama</td>
                                                <td className="capitalize">
                                                    {booking.user.name}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Tanggal</td>
                                                <td>{booking.date}</td>
                                            </tr>
                                            <tr>
                                                <td>Jam</td>
                                                <td>
                                                    {`${booking.start_time} - ${booking.end_time}`}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Status</td>
                                                <td
                                                    className={`${
                                                        booking.label === 'past'
                                                            ? 'text-gray-700'
                                                            : 'text-orange-600'
                                                    }`}
                                                >
                                                    {booking.label === 'past'
                                                        ? 'selesai'
                                                        : 'belum selesai'}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
