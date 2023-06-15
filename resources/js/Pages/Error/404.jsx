import React from 'react'
import { Link } from '@inertiajs/react'
import Layout from '@/Components/Layout'
export default function NotFound() {
    return (
        <Layout title="Not Found">
            <div className="w-full h-full py-8 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-gray-500">
                    404 Not Founddd
                </h1>
                <Link href="/">
                    <button className="px-5 py-1 bg-gray-100 border border-gray-300 rounded-full text-gray-800 mt-4">
                        Back to Home
                    </button>
                </Link>
            </div>
        </Layout>
    )
}
