import React, { useState } from 'react'
import { Link } from '@inertiajs/react'
import { AnimatePresence, motion } from 'framer-motion'
const Menu = ({ user }) => {
    // show menu like logout, profile, etc
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.2 }}
                className="absolute top-0 right-2 mt-16 w-56 bg-white rounded-md shadow-lg overflow-hidden z-50"
            >
                <div className="p-4">
                    <div>
                        <h1>
                            Hi <span className="font-bold">{user.name}</span>
                        </h1>
                    </div>
                    <hr className="my-2" />

                    <div className="py-2">
                        <Link
                            className="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
                            href={route('dashboard')}
                        >
                            <div className="w-full flex gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5 fill-current"
                                >
                                    <path d="M13 21V11H21V21H13ZM3 13V3H11V13H3ZM9 11V5H5V11H9ZM3 21V15H11V21H3ZM5 19H9V17H5V19ZM15 19H19V13H15V19ZM13 3H21V9H13V3ZM15 5V7H19V5H15Z"></path>
                                </svg>
                                <span className="">Dashboard</span>
                            </div>
                        </Link>
                    </div>
                    <div className="py-2">
                        <Link
                            className="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
                            href={route('logout')}
                        >
                            <div className="w-full flex gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5 fill-current"
                                >
                                    <path d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z"></path>
                                </svg>
                                <span className="">Keluar</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
export default function Navbar({ user }) {
    const [showMenu, setShowMenu] = useState(false)
    const displayMenu = () => {
        setShowMenu(!showMenu)
    }
    return (
        <>
            <nav className="w-full mx-auto shadow fixed z-50 bg-white/70 backdrop-blur-lg">
                <div className="w-full md:w-11/12 lg:w-10/12 px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <div>
                            <Link
                                className="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300"
                                href="/"
                            >
                                Spind
                            </Link>
                        </div>
                    </div>
                    <div className="items-center md:flex">
                        <div className="flex flex-col md:flex-row md:mx-6">
                            <Link
                                className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                                href="/"
                            >
                                Home
                            </Link>
                            <Link
                                className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                                href="#"
                            >
                                About
                            </Link>
                            <Link
                                className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                                href="#"
                            >
                                Contact
                            </Link>
                        </div>
                        <div className="flex justify-center md:block">
                            {user ? (
                                <div className="w-10 h-10 rounded-full bg-gray-100">
                                    <button
                                        className="w-full h-full"
                                        onClick={displayMenu}
                                    >
                                        <img
                                            src={
                                                user.profile_picture.startsWith(
                                                    'http',
                                                )
                                                    ? user.profile_picture
                                                    : `${window.location.origin}/storage/${user.profile_picture}`
                                            }
                                            alt=""
                                            className="w-full h-full rounded-full"
                                        />
                                    </button>
                                    {showMenu && <Menu user={user} />}
                                </div>
                            ) : (
                                <div className="flex gap-2 h-full items-center">
                                    <Link href={route('login')}>
                                        <button className="border border-blue-500 text-blue-500 rounded-md px-4 py-2 transition duration-500 ease select-none hover:text-white hover:bg-blue-600 focus:outline-none focus:shadow-outline">
                                            Login
                                        </button>
                                    </Link>
                                    <Link
                                        className="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
                                        href={route('register')}
                                    >
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Register
                                        </button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            <div className="h-16" />
        </>
    )
}
