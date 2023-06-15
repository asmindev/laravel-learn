import React, { useState, useEffect } from 'react'
import Layout from './Components/Layout'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { Link, useForm } from '@inertiajs/react'
export default function AllVenues({ auth, data, flash }) {
    const [user, setUser] = useState({ ...data })
    const [venues, setVenues] = useState(user.venues)
    const [selectedId, setSelectedId] = useState(null)
    const form = useForm({})
    const closeModal = () => {
        setSelectedId(null)
    }

    return (
        <>
            <Layout title="All Venues" user={auth.user}>
                <div className="w-full p-8 min-h-screen bg-zinc-100">
                    <div className="w-fit text-center rounded">
                        <div className="my-4">
                            <h1 className="text-2xl font-bold text-gray-700">
                                Main Dashboard
                            </h1>
                        </div>
                    </div>
                    <div className="w-full mt-14 flex flex-col gap-4">
                        <div className="w-full md:w-1/2">
                            <div className="w-full">
                                <h1 className="text-2xl font-bold text-gray-700">
                                    All Venues
                                </h1>
                                {flash.success && (
                                    <div className="w-fit bg-green-100 text-green-500 rounded my-2 px-3 py-4 border-l-4 border-green-500">
                                        {flash.success}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="w-full max-h-96 bg-white rounded-xl overflow-auto">
                            <table className="w-full text-left p-4">
                                <thead className="sticky top-0 bg-white/30 backdrop-blur-xl w-full h-full ">
                                    <tr>
                                        <th className="px-4 py-4">No</th>
                                        <th className="px-4 py-4">Nama</th>
                                        <th className="px-4 py-4">Alamat</th>
                                        <th className="px-4 py-4">Kapasitas</th>
                                        <th className="px-4 py-4">Harga</th>
                                        <th className="px-4 py-4">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {venues.map((venue, index) => (
                                        <motion.tr
                                            key={index}
                                            className={`rounded-xl border-b ${
                                                index === 0 ? 'bg-gray-100' : ''
                                            }`}
                                        >
                                            <td className="border px-4 py-4">
                                                {index + 1}
                                            </td>
                                            <td className="border px-4 py-4">
                                                {venue.name}
                                            </td>
                                            <td className="border px-4 py-4">
                                                {venue.address}
                                            </td>
                                            <td className="border px-4 py-4">
                                                {venue.capacity}
                                            </td>
                                            <td className="border px-4 py-4">
                                                {venue.price}
                                            </td>
                                            <td className="border px-4 py-4">
                                                <div className="w-full flex gap-2">
                                                    <Link
                                                        href={`/venue/${venue.slug}/edit`}
                                                    >
                                                        <button
                                                            type="button"
                                                            className="bg-blue-500 text-white rounded px-2 py-1"
                                                        >
                                                            Edit
                                                        </button>
                                                    </Link>
                                                    <button
                                                        onClick={() => {
                                                            form.delete(
                                                                `/venue/${venue.slug}`,
                                                            )
                                                        }}
                                                        type="button"
                                                        className="bg-red-500 text-white rounded px-2 py-1"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
