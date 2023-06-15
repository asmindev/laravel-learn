import React from 'react'

export default function Forbidden() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-9xl font-bold">403</h1>
                <h1 className="text-6xl font-medium py-8">Forbidden</h1>
                <p className="text-2xl pb-12 px-12 font-medium">
                    Oops! You are not authorized to access this page.
                </p>
                <a
                    href="/"
                    className="bg-gray-800 py-4 px-8 text-lg text-white rounded-xl hover:bg-gray-700"
                >
                    Go back home
                </a>
            </div>
        </div>
    )
}
