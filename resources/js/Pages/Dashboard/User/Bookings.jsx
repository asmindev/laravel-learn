import React, { useEffect } from 'react'
import Layouts from '../Components/Layout'
import { Link, router, useForm } from '@inertiajs/react'
import { fromTimestamp } from '@/helper/parseTime'
import sortDatesByDateTime from '@/helper/sortirByDate'
import { toast } from 'react-toastify'

export default function Bookings({ user, flash }) {
    const form = useForm({})
    const bookings = sortDatesByDateTime(user.venue_bookings)
    const deleteBooking = (booking) => {
        form.delete(route('booking.destroy', 1))
    }
    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success)
            // reset flash
            window.history.replaceState(null, null, window.location.pathname)
        }
        if (flash.error) {
            toast.error(flash.error)
            // reset flash
            window.history.replaceState(null, null, window.location.pathname)
        }
    }, [flash])
    return (
        <Layouts title="Your Bookings" user={user}>
            <div className="p-4 min-h-screen">
                <div className="mt-12">
                    <h1 className="text-2xl font-semibold">Daftar Bookingan</h1>
                    <div className="mt-8 w-full md:w-10/12 lg:w-9/12 grid md:grid-cols-2 gap-4">
                        {bookings ? (
                            bookings.map((booking) => (
                                <div
                                    className="w-full bg-gradient-to-tr from-white/10 to-white/80 p-4 border border-gray-200/80 rounded-md"
                                    key={booking.id}
                                >
                                    <div className="w-full flex justify-between items-center">
                                        <h1 className="text-xl font-bold text-gray-700">
                                            {booking.venue.name}
                                        </h1>
                                        <span className="text-indigo-600 text-sm px-2 bg-indigo-100 rounded-full">
                                            {booking.status}
                                        </span>
                                    </div>
                                    <div className="mt-2">
                                        <div className="">
                                            <p className="text-gray-500 text-sm">
                                                {booking.venue.address}
                                            </p>
                                        </div>
                                        {/* { date } */}
                                        <div className="">
                                            <p className="text-orange-600 text-sm">
                                                {fromTimestamp(booking.date)} -{' '}
                                                {booking.start_time}
                                            </p>
                                        </div>
                                        <div className="mt-2">
                                            <p className="w-fit text-gray-500 text-sm capitalize bg-gray-50/50 border border-gray-200 px-3 py-1 rounded-full">
                                                {
                                                    booking.venue.venue_category
                                                        .name
                                                }
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-2 w-full flex justify-end">
                                        {/* button cancel */}
                                        <div>
                                            <Link
                                                href={`/venue/${booking.venue.slug}`}
                                                className="bg-indigo-500
                                                text-white px-4 py-2 rounded-md
                                                text-sm mr-2"
                                            >
                                                Detail
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    deleteBooking(booking)
                                                }
                                                type="button"
                                                className="border-2 text-gray-700 px-4 py-[0.4rem] rounded-md text-sm"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="w-full bg-gradient-to-tr from-white/10 to-white/80 p-4 border border-gray-200/80 rounded-md">
                                <div className="w-full flex justify-between items-center">
                                    <h1 className="text-xl font-bold text-gray-700">
                                        Belum ada booking
                                    </h1>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layouts>
    )
}
