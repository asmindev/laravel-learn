import { Link } from '@inertiajs/react'
import React, { useState, useEffect } from 'react'

export default function Sidebar({ user }) {
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
                    <div className="w-full h-72">
                        <div className="w-full h-full flex items-center justify-center flex-col">
                            <img
                                src={
                                    user.profile_picture.startsWith('http')
                                        ? user.profile_picture
                                        : `${window.location.origin}/storage/${user.profile_picture}`
                                }
                                alt="logo"
                                className="w-24 h-24 rounded-full"
                            />
                            <h1 className="py-2">
                                <span className="text-2xl font-bold text-gray-800 capitalize">
                                    {user.name}
                                </span>
                            </h1>
                        </div>
                    </div>
                    <div className="w-full transition-all duration-300 ease-in-out flex-1">
                        <div className="">
                            <ul className="flex flex-col items-center gap-2">
                                <li className="w-full border-r-4 border-zinc-100 hover:border-orange-500 transition-all duration-300">
                                    <Link
                                        href="/dashboard"
                                        className="h-full px-6 py-3 flex gap-3 items-center justify-start bg-zinc-100"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className="w-5 h-auto fill-gray-500"
                                        >
                                            <path d="M13 21V11H21V21H13ZM3 13V3H11V13H3ZM9 11V5H5V11H9ZM3 21V15H11V21H3ZM5 19H9V17H5V19ZM15 19H19V13H15V19ZM13 3H21V9H13V3ZM15 5V7H19V5H15Z"></path>
                                        </svg>
                                        <span className="text-base font-medium text-gray-500">
                                            Dashboard
                                        </span>
                                    </Link>
                                </li>
                                <li className="w-full border-r-4 border-zinc-100 hover:border-orange-500 transition-all duration-300">
                                    <Link
                                        href="/dashboard/all-users"
                                        className="h-full px-6 py-3 flex gap-3 items-center justify-start bg-zinc-100"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className="w-5 h-auto fill-gray-500"
                                        >
                                            <path d="M20.0833 15.1998L21.2854 15.9211C21.5221 16.0632 21.5989 16.3703 21.4569 16.6071C21.4146 16.6774 21.3557 16.7363 21.2854 16.7786L12.5144 22.0411C12.1977 22.2311 11.8021 22.2311 11.4854 22.0411L2.71451 16.7786C2.47772 16.6365 2.40093 16.3294 2.54301 16.0926C2.58523 16.0222 2.64413 15.9633 2.71451 15.9211L3.9166 15.1998L11.9999 20.0498L20.0833 15.1998ZM20.0833 10.4998L21.2854 11.2211C21.5221 11.3632 21.5989 11.6703 21.4569 11.9071C21.4146 11.9774 21.3557 12.0363 21.2854 12.0786L11.9999 17.6498L2.71451 12.0786C2.47772 11.9365 2.40093 11.6294 2.54301 11.3926C2.58523 11.3222 2.64413 11.2633 2.71451 11.2211L3.9166 10.4998L11.9999 15.3498L20.0833 10.4998ZM12.5144 1.30852L21.2854 6.57108C21.5221 6.71315 21.5989 7.02028 21.4569 7.25707C21.4146 7.32745 21.3557 7.38635 21.2854 7.42857L11.9999 12.9998L2.71451 7.42857C2.47772 7.2865 2.40093 6.97937 2.54301 6.74258C2.58523 6.6722 2.64413 6.6133 2.71451 6.57108L11.4854 1.30852C11.8021 1.11851 12.1977 1.11851 12.5144 1.30852ZM11.9999 3.33221L5.88723 6.99983L11.9999 10.6674L18.1126 6.99983L11.9999 3.33221Z"></path>
                                        </svg>
                                        <span className="text-base font-medium text-gray-500">
                                            Semua User
                                        </span>
                                    </Link>
                                </li>
                                <li className="w-full border-r-4 border-zinc-100 hover:border-orange-500 transition-all duration-300">
                                    <Link
                                        href="/dashboard/profile"
                                        className="h-full px-6 py-3 flex gap-3 items-center justify-start bg-zinc-100"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className="w-5 h-auto fill-gray-500"
                                        >
                                            <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
                                        </svg>
                                        <span className="text-base font-medium text-gray-500">
                                            Profile
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
                                className="w-8 h-8 fill-gray-500"
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
