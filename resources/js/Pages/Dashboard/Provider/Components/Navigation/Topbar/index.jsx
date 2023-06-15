import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from '@inertiajs/react'

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

export default function index({ user }) {
    const [showMenu, setShowMenu] = React.useState(false)
    const displayMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className="w-full bg-white py-3 px-4">
            <div className="w-full flex items-center justify-between px-4">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold text-gray-700">Spind</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-100">
                        <button className="w-full h-full" onClick={displayMenu}>
                            <img
                                src={
                                    user.profile_picture.startsWith('http')
                                        ? user.profile_picture
                                        : `${window.location.origin}/storage/${user.profile_picture}`
                                }
                                alt=""
                                className="w-full h-full rounded-full"
                            />
                        </button>
                        {showMenu && <Menu user={user} />}
                    </div>
                </div>
            </div>
        </div>
    )
}
