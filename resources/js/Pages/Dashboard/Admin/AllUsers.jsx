import React, { useState, useEffect } from 'react'
import Layout from './Components/Layout'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { Link, useForm } from '@inertiajs/react'
export default function AllVenues({ auth, users, flash }) {
    console.log(users)
    const form = useForm({})
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
                                    Pengguna Terdaftar
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
                                <thead className="sticky top-0 bg-white/60 backdrop-blur-xl w-full h-full">
                                    <tr>
                                        <th className="px-4 py-4">No</th>
                                        <th className="px-4 py-4">Nama</th>
                                        <th className="px-4 py-4">Daftar</th>
                                        <th className="px-4 py-4">Role</th>
                                        <th className="px-4 py-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user, index) => (
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
                                                {user.name}
                                            </td>
                                            <td className="border px-4 py-4">
                                                {user.created_at}
                                            </td>
                                            <td className="border px-4 py-4">
                                                {user.role}
                                            </td>

                                            <td className="border px-4 py-4">
                                                <div className="w-full flex gap-2">
                                                    <button
                                                        onClick={() => {
                                                            form.delete(
                                                                `/venue/${user.id}`,
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
