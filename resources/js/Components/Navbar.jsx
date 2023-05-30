import React from "react";
import { Link } from "@inertiajs/react";

export default function Navbar({ auth }) {
    console.log(auth);
    return (
        <nav className="w-full md:w-11/12 lg:w-10/12 mx-auto bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <div>
                        <a
                            className="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300"
                            href="#"
                        >
                            Spind
                        </a>
                    </div>
                </div>
                <div className="items-center md:flex">
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <a
                            className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                            href="#"
                        >
                            Home
                        </a>
                        <a
                            className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                            href="#"
                        >
                            About
                        </a>
                        <a
                            className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                            href="#"
                        >
                            Contact
                        </a>
                    </div>
                    <div className="flex justify-center md:block">
                        {auth.user ? (
                            <Link
                                className="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
                                href={route("logout")}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5 fill-current"
                                >
                                    <path d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z"></path>
                                </svg>
                            </Link>
                        ) : (
                            <div className="flex gap-2 h-full items-center">
                                <Link href={route("login")}>
                                    <button className="border border-blue-500 text-blue-500 rounded-md px-4 py-2 transition duration-500 ease select-none hover:text-white hover:bg-blue-600 focus:outline-none focus:shadow-outline">
                                        Login
                                    </button>
                                </Link>
                                <Link
                                    className="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
                                    href={route("register")}
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
    );
}
