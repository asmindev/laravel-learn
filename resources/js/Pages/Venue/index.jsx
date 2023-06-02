import React, { useState, useRef, useEffect } from 'react'
import Layout from '@/Components/Layout'
import { useForm } from '@inertiajs/react'
import InputError from '@/Components/InputError'
import { motion } from 'framer-motion'
import { router } from '@inertiajs/react'
export default function index(props) {
    console.log(props)
    const imageRef = useRef(null)
    const [selectedTab, setSelectedTab] = useState(1)
    const { data, setData, post, errors, reset, progress } = useForm({
        name: '',
        address: '',
        capacity: '',
        price: '',
        open: '',
        close: '',
        description: '',
        photo: '',
        contact: '',
        venue_category_id: 1,
    })
    const submitHandler = (e) => {
        e.preventDefault()
        post(route('venue.store'))
    }

    const itemTab = [
        {
            name: 'lapangan',
            id: 1,
        },
        {
            name: 'gedung',
            id: 2,
        },
    ]
    const setTab = (id) => {
        setSelectedTab(id)
        setData('venue_category_id', id)
    }

    useEffect(() => {
        if (data.photo) {
            imageRef.current.src = URL.createObjectURL(
                new Blob([data.photo], {
                    type: 'image/jpeg',
                }),
            )
        }
        console.log(data)
    }, [data])

    return (
        <Layout title="Venue">
            <div className="w-full h-full py-8 flex flex-col justify-center items-center min-h-screen">
                <div className="w-full h-full flex justify-center items-center">
                    <h1 className="text-4xl font-bold">Venue</h1>
                </div>
                <div className="w-full md:w-10/12 lg:w-9/12 h-fit flex flex-row-reverse justify-center items-center p-12 bg-white rounded shadow-lg gap-12">
                    <div className="w-full h-full md:w-1/2">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-700">
                                Tambah Venue
                            </h1>
                            <div className="w-full flex justify-center items-center mt-12">
                                {itemTab.map((item) => (
                                    <div
                                        className="w-full h-full"
                                        key={item.id}
                                    >
                                        <button
                                            onClick={() => setTab(item.id)}
                                            className={`w-full h-full py-2 rounded-t first-letter:uppercase ${
                                                selectedTab === item.id
                                                    ? 'bg-gray-100 text-gray-700 font-bold'
                                                    : ''
                                            }`}
                                        >
                                            {item.name}
                                        </button>
                                        {item.id === selectedTab ? (
                                            <motion.div
                                                className="w-full h-[2px] bg-indigo-500 rounded"
                                                layoutId="underline"
                                            />
                                        ) : null}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full h-full my-4">
                            <form onSubmit={submitHandler}>
                                <div className="w-full h-fit my-3 grid grid-cols-2 md:grid-cols-2 gap-3">
                                    <div className="w-full h-fit">
                                        <label htmlFor="name">Nama</label>
                                        <input
                                            onChange={(e) =>
                                                setData('name', e.target.value)
                                            }
                                            id="name"
                                            type="text"
                                            className="w-full h-full my-2 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent trasnsition-all duration-200 ease-in-out"
                                            placeholder="Nama"
                                        />
                                        <InputError
                                            error={errors}
                                            name={'name'}
                                        />
                                    </div>

                                    <div className="w-full h-fit">
                                        <label htmlFor="address">Alamat</label>
                                        <input
                                            onChange={(e) =>
                                                setData(
                                                    'address',
                                                    e.target.value,
                                                )
                                            }
                                            type="text"
                                            id="address"
                                            className="w-full h-full my-2 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent trasnsition-all duration-200 ease-in-out"
                                            placeholder="Alamat"
                                        />
                                        <InputError
                                            error={errors}
                                            name={'address'}
                                        />
                                    </div>
                                </div>
                                <div className="w-full h-fit my-3 grid grid-cols-2 md:grid-cols-2 gap-3">
                                    <div className="w-full h-fit">
                                        <label htmlFor="capacity">
                                            Kapasitas
                                        </label>

                                        <input
                                            onChange={(e) =>
                                                setData(
                                                    'capacity',
                                                    e.target.value,
                                                )
                                            }
                                            type="text"
                                            className="w-full h-full my-2 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent trasnsition-all duration-200 ease-in-out"
                                            placeholder="Kapasitas"
                                        />
                                        <InputError
                                            error={errors}
                                            name={'capacity'}
                                        />
                                    </div>

                                    <div className="w-full h-fit">
                                        <label htmlFor="price">Harga</label>

                                        <input
                                            onChange={(e) =>
                                                setData('price', e.target.value)
                                            }
                                            id="price"
                                            type="text"
                                            className="w-full h-full my-2 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent trasnsition-all duration-200 ease-in-out"
                                            placeholder="Harga"
                                        />
                                        <InputError
                                            error={errors}
                                            name={'price'}
                                        />
                                    </div>
                                </div>
                                <div className="my-3">
                                    <h1 className="text-lg font-bold text-gray-700">
                                        Jam Operasional
                                    </h1>
                                    <div className="w-full h-fit my-3 grid grid-cols-2 md:grid-cols-2 gap-3">
                                        <div className="w-full h-fit flex justify-center items-center">
                                            <input
                                                onChange={(e) =>
                                                    setData(
                                                        'open',
                                                        e.target.value,
                                                    )
                                                }
                                                type="text"
                                                className="w-full h-full px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent trasnsition-all duration-200 ease-in-out"
                                                placeholder="Buka"
                                            />
                                            <InputError
                                                error={errors}
                                                name={'open'}
                                            />
                                        </div>

                                        <div className="w-full h-fit flex justify-center items-center">
                                            <input
                                                onChange={(e) =>
                                                    setData(
                                                        'close',
                                                        e.target.value,
                                                    )
                                                }
                                                type="text"
                                                className="w-full h-full px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent trasnsition-all duration-200 ease-in-out"
                                                placeholder="Tutup"
                                            />
                                            <InputError
                                                error={errors}
                                                name={'close'}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="w-full h-fit my-3 grid grid-cols-2 md:grid-cols-2 gap-3">
                                        <div className="w-full h-fit">
                                            <label htmlFor="contact">
                                                Kontak
                                            </label>
                                            <input
                                                onChange={(e) =>
                                                    setData(
                                                        'contact',
                                                        e.target.value,
                                                    )
                                                }
                                                id="contact"
                                                type="text"
                                                className="w-full h-full my-2 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent trasnsition-all duration-200 ease-in-out"
                                                placeholder="Contact"
                                            />
                                            <InputError
                                                error={errors}
                                                name={'contact'}
                                            />
                                        </div>
                                        <div className="w-full h-fit my-3">
                                            <label htmlFor="image">
                                                Gambar
                                            </label>
                                            <input
                                                onChange={(e) =>
                                                    setData(
                                                        'photo',
                                                        e.target.files[0],
                                                    )
                                                }
                                                id="image"
                                                type="file"
                                                accept="image/*"
                                                className="block w-full my-2 text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                                            />
                                            <InputError
                                                error={errors}
                                                name={'photo'}
                                            />
                                            <div className="w-full h-fit my-3">
                                                {progress && (
                                                    <progress
                                                        value={
                                                            progress.percentage
                                                        }
                                                        className="w-full h-2 bg-indigo-600 rounded"
                                                        max="100"
                                                    >
                                                        {progress.percentage}%
                                                    </progress>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-fit my-3">
                                    <label htmlFor="description">
                                        Deskripsi
                                    </label>
                                    <textarea
                                        onChange={(e) =>
                                            setData(
                                                'description',
                                                e.target.value,
                                            )
                                        }
                                        id="description"
                                        className="w-full h-24 my-2 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent trasnsition-all duration-200 ease-in-out resize-none"
                                        placeholder="Deskripsi"
                                    ></textarea>
                                    <InputError
                                        error={errors}
                                        name={'description'}
                                    />
                                </div>
                                <div className="w-full h-fit my-3">
                                    <button className="w-full h-full px-4 py-3 rounded bg-indigo-500 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent trasnsition-all duration-200 ease-in-out">
                                        Tambah
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-col gap-2 justify-between h-full w-1/2 items-end">
                        <div className="w-full h-full">
                            <h1 className="text-4xl font-bold text-gray-700 text-center">
                                Spind
                            </h1>
                            <p className="text-lg text-gray-700 text-center">
                                Find your perfect venue for your perfect event
                            </p>
                        </div>
                        <img
                            ref={imageRef}
                            className="w-full h-[38rem] object-cover rounded"
                            src="https://images.unsplash.com/photo-1620735692151-26a7e0748429?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
