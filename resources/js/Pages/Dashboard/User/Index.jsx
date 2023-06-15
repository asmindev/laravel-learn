import React, { useState, useEffect } from 'react'
import Layout from '@/Components/Layout'
const Profile = ({ data }) => {
    const booking = data.venue_bookings
    const filterBookings = () => {
        const now = new Date()
        const result = booking.filter((book) => {
            const date = new Date(`${book.date} ${book.start_time}`)
            return date >= now
        })
        return result
    }
    const [bookings, setBookings] = useState(filterBookings())
    // console.log(booking)
    useEffect(() => {}, [])

    return (
        <Layout user={data} title={`Profile ${data.name}`}>
            <div className="w-full mx-auto p-8 min-h-screen bg-zinc-100">
                <div className="mt-8 w-full md:w-1/2 mx-auto">
                    <h1 className="my-2 text-2xl font-bold text-gray-800">
                        Profile
                    </h1>
                </div>

                <div className="overflow-hidden rounded border  bg-white shadow w-full md:w-1/2 mx-auto">
                    <div className="relative z-20 h-32 md:h-64 overflow-hidden">
                        <img
                            src={`https://picsum.photos/seed/${data.id}/1800`}
                            alt="profile cover"
                            className="h-65 w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
                        />
                        <div className="absolute bottom-1 right-1 z-[9999999] sm:bottom-4 sm:right-4">
                            <label
                                htmlFor="cover"
                                className="flex cursor-pointer items-center justify-center gap-2 rounded bg-red-500 py-1 px-2 text-sm font-medium text-white hover:bg-opacity-80 sm:px-4"
                            >
                                <input
                                    type="file"
                                    name="cover"
                                    id="cover"
                                    className="sr-only"
                                />
                                <span>
                                    <svg
                                        className="fill-current"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219ZM4.41667 6.58329C4.94299 6.58329 5.36584 6.16043 5.36584 5.63412C5.36584 5.1078 4.94299 4.68495 4.41667 4.68495C3.89036 4.68495 3.4675 5.1078 3.4675 5.63412C3.4675 6.16043 3.89036 6.58329 4.41667 6.58329ZM9.58333 6.58329C10.1096 6.58329 10.5325 6.16043 10.5325 5.63412C10.5325 5.1078 10.1096 4.68495 9.58333 4.68495C9.05701 4.68495 8.63416 5.1078 8.63416 5.63412C8.63416 6.16043 9.05701 6.58329 9.58333 6.58329ZM7 7.83329C7.82843 7.83329 8.5 7.16173 8.5 6.33329C8.5 5.50486 7.82843 4.83329 7 4.83329C6.17157 4.83329 5.5 5.50486 5.5 6.33329C5.5 7.16173 6.17157 7.83329 7 7.83329Z"
                                        />
                                    </svg>
                                </span>
                                Edit
                            </label>
                        </div>
                    </div>

                    <div className="flex justify-center -mt-8">
                        <div className="relative z-50">
                            <img
                                src={`https://picsum.photos/seed/${data.id}/1800`}
                                alt="profile picture"
                                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                            />
                            <div className="absolute bottom-0 right-0 z-10">
                                <label
                                    htmlFor="profile"
                                    className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary text-white cursor-pointer"
                                >
                                    <input
                                        type="file"
                                        name="profile"
                                        id="profile"
                                        className="sr-only"
                                    />
                                    <svg
                                        className="fill-current"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M17.5 2.5C17.5 2.22386 17.2761 2 17 2C16.7239 2 16.5 2.22386 16.5 2.5V4.5H3.5V2.5C3.5 2.22386 3.27614 2 3 2C2.72386 2 2.5 2.22386 2.5 2.5V17.5C2.5 17.7761 2.72386 18 3 18H17C17.2761 18 17.5 17.7761 17.5 17.5V2.5ZM15.5 6C15.5 5.72386 15.2761 5.5 15 5.5H5C4.72386 5.5 4.5 5.72386 4.5 6V7.5H15.5V6ZM15.5 9C15.5 8.72386 15.2761 8.5 15 8.5H5C4.72386 8.5 4.5 8.72386 4.5 9V10.5H15.5V9ZM15.5 12C15.5 11.7239 15.2761 11.5 15 11.5H5C4.72386 11.5 4.5 11.7239 4.5 12V13.5H15.5V12Z"
                                        />
                                    </svg>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-center">
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold text-primary dark:text-primarydark">
                                {data.name}
                            </h2>
                            <div className="mt-2">
                                <div className="flex items-center gap-2 mt-2">
                                    <svg
                                        className="w-4 h-4 text-gray-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M12 17C10.3431 17 9 15.6569 9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14C15 15.6569 13.6569 17 12 17ZM12 12C10.8954 12 10 12.8954 10 14C10 15.1046 10.8954 16 12 16C13.1046 16 14 15.1046 14 14C14 12.8954 13.1046 12 12 12Z"
                                        />
                                    </svg>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {data.email}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <svg
                                        className="w-4 h-4 text-gray-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M12 17C10.3431 17 9 15.6569 9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14C15 15.6569 13.6569 17 12 17ZM12 12C10.8954 12 10 12.8954 10 14C10 15.1046 10.8954 16 12 16C13.1046 16 14 15.1046 14 14C14 12.8954 13.1046 12 12 12Z"
                                        />
                                    </svg>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {data.username}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <svg
                                        className="w-4 h-4 text-gray-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M12 17C10.3431 17 9 15.6569 9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14C15 15.6569 13.6569 17 12 17ZM12 12C10.8954 12 10 12.8954 10 14C10 15.1046 10.8954 16 12 16C13.1046 16 14 15.1046 14 14C14 12.8954 13.1046 12 12 12Z"
                                        />
                                    </svg>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {data.phone_number}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* bookings order */}
                    <div className="mt-4 mx-4">
                        <h2 className="text-2xl font-semibold text-gray-600">
                            Jadwal Booking
                        </h2>
                        <div className="mt-4">
                            <div className="flex flex-col">
                                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 sm:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                <thead className="bg-gray-50 dark:bg-gray-800">
                                                    <tr>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                                                        >
                                                            Nama
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                                                        >
                                                            Tanggal
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                                                        >
                                                            Jam
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                                                        >
                                                            Status
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700">
                                                    {bookings.map((booking) => (
                                                        <tr key={booking.id}>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <div className="flex items-center gap-2">
                                                                    <h1 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                                                        {
                                                                            booking.name
                                                                        }
                                                                    </h1>
                                                                    <p className="w-fit px-2 bg-indigo-200 text-indigo-800 rounded-full text-xs">
                                                                        {
                                                                            booking
                                                                                .venue
                                                                                .venue_category
                                                                                .name
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <h1 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                                                    {
                                                                        booking.date
                                                                    }
                                                                </h1>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <h1 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                                                    {
                                                                        booking.start_time
                                                                    }
                                                                </h1>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                                    {
                                                                        booking.status
                                                                    }
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Profile
