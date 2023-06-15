import React, { useState, useEffect } from 'react'
import Layout from './Components/Layout'
import LineChart from './Chart/Line'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

function Counter({ total }) {
    const x = useMotionValue(0)
    const rounded = useTransform(x, Math.round)
    useEffect(() => {
        animate(x, total, {
            duration: 5,
        })
    }, [total])
    return <motion.h1 className="text-xl text-primary">{rounded}</motion.h1>
}

export default function Home({ auth, users }) {
    console.log(users)
    const [totalUsers, setTotalUsers] = useState([])
    const [totalVenues, setTotalVenues] = useState(0)
    const [totalProviders, setTotalProviders] = useState([])

    const countUsers = () => {
        const total = users.filter((user) => user.role === 'user')
        setTotalUsers(total)
    }
    const countProviders = () => {
        const total = users.filter((user) => user.role === 'provider')
        setTotalProviders(total)
    }
    const countVenues = () => {
        const total = users.map((user) => {
            if (user.role === 'provider') {
                return user.venues
            }
        })
        const flatten = total.flat()
        setTotalVenues(flatten.length)
    }

    useEffect(() => {
        countUsers()
        countProviders()
        countVenues()
    }, [])

    return (
        <Layout user={auth.user}>
            <div className="w-full p-8 min-h-screen bg-zinc-100">
                <div className="w-fit">
                    <div className="my-4">
                        <h1 className="text-2xl font-bold text-gray-700">
                            Main Dashboard
                        </h1>
                        <h3 className="text-gray-500">
                            Welcome back, {auth.user.name}
                        </h3>
                    </div>
                </div>
                <div className="w-full mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="w-full rounded-2xl p-4 bg-white">
                        <div className="w-full flex gap-6 items-center">
                            <div className="w-fit p-4 bg-orange-100 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 m-auto fill-orange-600"
                                >
                                    <path d="M2 13H8V21H2V13ZM9 3H15V21H9V3ZM16 8H22V21H16V8Z" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-gray-500">
                                    Total Pengguna Terdaftar
                                </h1>
                                <Counter
                                    total={
                                        totalUsers.length +
                                        totalProviders.length
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full rounded-2xl p-4 bg-white">
                        <div className="w-full flex gap-6 items-center">
                            <div className="w-fit p-4 bg-orange-100 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 m-auto fill-orange-600"
                                >
                                    <path d="M10.6144 17.7956 11.492 15.7854C12.2731 13.9966 13.6789 12.5726 15.4325 11.7942L17.8482 10.7219C18.6162 10.381 18.6162 9.26368 17.8482 8.92277L15.5079 7.88394C13.7092 7.08552 12.2782 5.60881 11.5105 3.75894L10.6215 1.61673C10.2916.821765 9.19319.821767 8.8633 1.61673L7.97427 3.75892C7.20657 5.60881 5.77553 7.08552 3.97685 7.88394L1.63658 8.92277C.868537 9.26368.868536 10.381 1.63658 10.7219L4.0523 11.7942C5.80589 12.5726 7.21171 13.9966 7.99275 15.7854L8.8704 17.7956C9.20776 18.5682 10.277 18.5682 10.6144 17.7956ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899Z" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-gray-500">
                                    Total Penyedia
                                </h1>
                                <Counter total={totalProviders.length} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full rounded-2xl p-4 bg-white">
                        <div className="w-full flex gap-6 items-center">
                            <div className="w-fit p-4 bg-orange-100 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 m-auto fill-orange-600"
                                >
                                    <path d="M10.6144 17.7956 11.492 15.7854C12.2731 13.9966 13.6789 12.5726 15.4325 11.7942L17.8482 10.7219C18.6162 10.381 18.6162 9.26368 17.8482 8.92277L15.5079 7.88394C13.7092 7.08552 12.2782 5.60881 11.5105 3.75894L10.6215 1.61673C10.2916.821765 9.19319.821767 8.8633 1.61673L7.97427 3.75892C7.20657 5.60881 5.77553 7.08552 3.97685 7.88394L1.63658 8.92277C.868537 9.26368.868536 10.381 1.63658 10.7219L4.0523 11.7942C5.80589 12.5726 7.21171 13.9966 7.99275 15.7854L8.8704 17.7956C9.20776 18.5682 10.277 18.5682 10.6144 17.7956ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899Z" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-gray-500">
                                    Total Pengguna
                                </h1>
                                <Counter total={totalUsers.length} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full rounded-2xl p-4 bg-white">
                        <div className="w-full flex gap-6 items-center">
                            <div className="w-fit p-4 bg-orange-100 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 m-auto fill-orange-600"
                                >
                                    <path d="M10.6144 17.7956 11.492 15.7854C12.2731 13.9966 13.6789 12.5726 15.4325 11.7942L17.8482 10.7219C18.6162 10.381 18.6162 9.26368 17.8482 8.92277L15.5079 7.88394C13.7092 7.08552 12.2782 5.60881 11.5105 3.75894L10.6215 1.61673C10.2916.821765 9.19319.821767 8.8633 1.61673L7.97427 3.75892C7.20657 5.60881 5.77553 7.08552 3.97685 7.88394L1.63658 8.92277C.868537 9.26368.868536 10.381 1.63658 10.7219L4.0523 11.7942C5.80589 12.5726 7.21171 13.9966 7.99275 15.7854L8.8704 17.7956C9.20776 18.5682 10.277 18.5682 10.6144 17.7956ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899Z" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-gray-500">Total Venues</h1>
                                <Counter total={totalVenues} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 h-auto my-8 rounded-2xl p-4 bg-white">
                    <LineChart users={totalUsers} providers={totalProviders} />
                </div>
            </div>
        </Layout>
    )
}
