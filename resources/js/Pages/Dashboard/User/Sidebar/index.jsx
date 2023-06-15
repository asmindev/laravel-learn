import { Link } from '@inertiajs/react'
import React, { useState } from 'react'

const Sidebar = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [width, setWidth] = useState('w-72')

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
        setWidth(isOpen ? 'w-72' : 'w-0 md:w-72')
    }

    return (
        <div className="relative transition-all duration-200">
            <div
                className={`fixed z-50 flex h-screen ${width} transition-all duration-200 overflow-hidden bg-white shadow`}
            >
                <div className="w-full flex flex-col items-center flex-wrap justify-evenly">
                    <div className="w-full h-52">
                        <div className="w-full h-full flex items-center justify-center flex-col">
                            <img
                                src={`https://picsum.photos/seed/${user.id}/200`}
                                alt="logo"
                                className="w-24 h-24 rounded-full"
                            />
                            <h1>
                                <span className="text-2xl font-bold text-gray-800 capitalize">
                                    {user.name}
                                </span>
                            </h1>
                        </div>
                    </div>
                    <div className="w-full transition-all duration-300 ease-in-out flex-1">
                        <div className="">
                            <ul className="flex flex-col items-center gap-2">
                                <li className="h-16 w-full border-r-4 border-zinc-100 hover:border-orange-500 transition-all duration-300">
                                    <Link
                                        href="/dashboard"
                                        className="h-full px-4 flex gap-3 items-center justify-start bg-zinc-100"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className="w-6 h-6 fill-orange-500"
                                        >
                                            <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" />
                                        </svg>
                                        <span className="text-lg font-bold">
                                            Dashboard
                                        </span>
                                    </Link>
                                </li>
                                <li className="h-16 w-full border-r-4 border-zinc-100 hover:border-orange-500 transition-all duration-300">
                                    <Link
                                        href="/dashboard/all-venues"
                                        className="h-full px-4 flex gap-3 items-center justify-start bg-zinc-100"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className="w-6 h-6 fill-orange-500"
                                        >
                                            <path d="M20.0833 10.4998L21.2854 11.2211C21.5221 11.3632 21.5989 11.6703 21.4569 11.9071C21.4146 11.9774 21.3557 12.0363 21.2854 12.0786L11.9999 17.6498L2.71451 12.0786C2.47772 11.9365 2.40093 11.6294 2.54301 11.3926C2.58523 11.3222 2.64413 11.2633 2.71451 11.2211L3.9166 10.4998L11.9999 15.3498L20.0833 10.4998ZM20.0833 15.1998L21.2854 15.9211C21.5221 16.0632 21.5989 16.3703 21.4569 16.6071C21.4146 16.6774 21.3557 16.7363 21.2854 16.7786L12.5144 22.0411C12.1977 22.2311 11.8021 22.2311 11.4854 22.0411L2.71451 16.7786C2.47772 16.6365 2.40093 16.3294 2.54301 16.0926C2.58523 16.0222 2.64413 15.9633 2.71451 15.9211L3.9166 15.1998L11.9999 20.0498L20.0833 15.1998ZM12.5144 1.30852L21.2854 6.57108C21.5221 6.71315 21.5989 7.02028 21.4569 7.25707C21.4146 7.32745 21.3557 7.38635 21.2854 7.42857L11.9999 12.9998L2.71451 7.42857C2.47772 7.2865 2.40093 6.97937 2.54301 6.74258C2.58523 6.6722 2.64413 6.6133 2.71451 6.57108L11.4854 1.30852C11.8021 1.11851 12.1977 1.11851 12.5144 1.30852Z" />
                                        </svg>
                                        <span className="text-lg font-bold">
                                            Booking
                                        </span>
                                    </Link>
                                </li>
                                <li className="h-16 w-full border-r-4 border-zinc-100 hover:border-orange-500 transition-all duration-300">
                                    <Link
                                        href="/venue/create"
                                        className="h-full px-4 flex gap-3 items-center justify-start bg-zinc-100"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className="w-6 h-6 fill-orange-600"
                                        >
                                            <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" />
                                        </svg>

                                        <span className="text-lg font-bold">
                                            Tambah Venue
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full">
                        <button
                            onClick={toggleSidebar}
                            className="py-2 my-2 w-full flex items-center justify-center bg-gray-700 rounded-2xl"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="w-8 h-8 fill-orange-500"
                            >
                                <path d="M3 13H21V11H3V13Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${width} transition-all duration-200`} />
        </div>
    )
}

export default Sidebar
