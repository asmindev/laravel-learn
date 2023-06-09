import React, { useState } from 'react'
import Navbar from '@/Components/Navigation/Navbar'
import Card from './Card'
import { AnimatePresence, motion } from 'framer-motion'
import Layout from '@/Components/Layout'

export default function index({ auth, data }) {
    // console.log(data)
    // const category = [...new Set(data.map((item) => item.venue_category.slug))]
    const [items, setItems] = useState(data)
    const [clicked, setClicked] = useState('')
    const clicking = (arg) => {
        setClicked(arg)
        // filter by populer
        if (arg === 'all') return setItems(data)
        const res = data.filter((item) => item.venue_category.slug === arg)
        setItems(res)
    }
    return (
        <Layout title="Home">
            <Navbar user={auth.user} />
            <div className="w-full h-full md:w-11/12 lg:w-10/12 mx-auto my-8">
                {/* jumbotron */}
                <div className="relative w-full h-full dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
                    <div className="h-[50vh] rounded-xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1593495603376-7ae2d9ec46f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                            alt="jumbotron"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-black/50 opacity-90">
                        <div className="w-full h-full flex justify-center items-center">
                            <div className="mt-16 md:w-8/12 lg:w-6/12 text-center">
                                <h1 className="text-4xl font-bold text-white uppercase">
                                    Spind
                                </h1>
                                <p className="text-white text-xs">
                                    Find Your Ideal Space with Ease!
                                </p>
                                <h3 className="text-white text-lg mt-4">
                                    Temukan gedung atau lapangan olahraga yang
                                    cocok dengan cepat dan efisien melalui
                                    Spind, solusi terbaik untuk pencarian ruang.
                                </h3>
                                <div className="flex justify-center items-center mt-4 gap-4">
                                    <span className="block py-[3px] px-5 text-sm rounded-full border border-gray-100 bg-transparent text-white">
                                        Easy
                                    </span>
                                    <span className="block py-[3px] px-5 text-sm rounded-full border border-gray-100 bg-transparent text-white">
                                        Modern
                                    </span>
                                    <span className="block py-[3px] px-5 text-sm rounded-full border border-gray-100 bg-transparent text-white">
                                        Fast
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full md:w-11/12 lg:w-10/12 mx-auto mt-14">
                <div className="px-4 md:w-6/12 lg:w-4/12">
                    <div className="grid grid-cols-4 md:grid-col-6 gap-4">
                        <button
                            onClick={() => clicking('all')}
                            className={`w-full h-full rounded-full border border-gray-300 py-[6px] ${
                                clicked === 'all'
                                    ? 'bg-indigo-500 text-white'
                                    : 'bg-gray-200/80 '
                            }`}
                        >
                            Semua
                        </button>
                        <button
                            onClick={() => clicking('lapangan')}
                            className={`w-full h-full rounded-full border border-gray-300 py-[6px] ${
                                clicked === 'lapangan'
                                    ? 'bg-indigo-500 text-white'
                                    : 'bg-gray-200/80 '
                            }`}
                        >
                            Lapangan
                        </button>
                        <button
                            onClick={() => clicking('gedung')}
                            className={`w-full h-full rounded-full border border-gray-300 py-[6px] ${
                                clicked === 'gedung'
                                    ? 'bg-indigo-500 text-white'
                                    : 'bg-gray-200/80 '
                            }`}
                        >
                            Gedung
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full h-full md:w-11/12 lg:w-10/12 mx-auto my-4 px-8">
                <AnimatePresence layoutId>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {items.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layoutId={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="w-full h-full flex justify-center items-center"
                            >
                                <Card key={index} data={item} />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="mt-12 w-full relative">
                <div className="w-full h-full md:w-11/12 lg:w-10/12 mx-auto my-4 px-8">
                    {/* fitur */}
                    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center">
                        <div className="bg-gradient-to-b from-orange-100 via-white py-12 sm:py-8 bg-orange-50 flex flex-col items-center justify-center shadow-xl">
                            <img
                                src="https://cdn.sstatic.net/Img/home/illo-public.svg?v=14bd5a506009"
                                alt="Illustration of Stack Overflow"
                                className="my-8 w-48 h-auto"
                            />
                            <h2 className="mx-8 sm:mx-6 mb-3 text-md font-bold leading-tight text-center">
                                Temukan gedung atau lapangan olahraga yang cocok
                            </h2>
                            <p className="mx-8 sm:mx-6 text-gray-600 text-sm text-center">
                                Spind adalah solusi terbaik untuk pencarian
                                ruang
                            </p>
                            <a
                                href="/auth/register"
                                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 mt-4 rounded w-full sm:w-max"
                            >
                                Ayo join
                            </a>
                            <p className="mt-3 mb-0 text-gray-400">
                                atau{' '}
                                <a
                                    href="/"
                                    className="text-black-400 hover:text-orange-500"
                                >
                                    cari tempat
                                </a>
                            </p>
                        </div>
                        <div className="bg-gradient-to-b from-orange-100 via-white py-12 sm:py-8 bg-orange-50 flex flex-col items-center justify-center shadow-xl">
                            <img
                                src="https://cdn.sstatic.net/Img/home/illo-public.svg?v=14bd5a506009"
                                alt="Illustration of Stack Overflow"
                                className="my-8 w-48 h-auto"
                            />
                            <h2 className="mx-8 sm:mx-6 mb-3 text-md font-bold leading-tight text-center">
                                Temukan gedung atau lapangan olahraga yang cocok
                            </h2>
                            <p className="mx-8 sm:mx-6 text-gray-600 text-sm text-center">
                                Spind adalah solusi terbaik untuk pencarian
                                ruang
                            </p>
                            <a
                                href="/auth/register"
                                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 mt-4 rounded w-full sm:w-max"
                            >
                                Ayo join
                            </a>
                            <p className="mt-3 mb-0 text-gray-400">
                                atau{' '}
                                <a
                                    href="/"
                                    className="text-black-400 hover:text-orange-500"
                                >
                                    cari tempat
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
