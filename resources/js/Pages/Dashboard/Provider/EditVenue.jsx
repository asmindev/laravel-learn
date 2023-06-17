import React, { useState, useRef, useEffect } from 'react'
import Layout from '@/Components/Layout'
import { useForm, router } from '@inertiajs/react'
import InputError from '@/Components/InputError'
import { motion } from 'framer-motion'
import validateTime from '@/helper/validateTime'
import hours from '@/helper/HourList'

export default function index(props) {
    const imageRef = useRef(null)
    const [selectedTab, setSelectedTab] = useState(props.data.venue_category_id)
    const { data, setData, put, errors, reset, progress } = useForm({
        name: props.data.name,
        address: props.data.address,
        capacity: props.data.capacity,
        open: props.data.open,
        close: props.data.close,
        venue_category_id: props.data.venue_category_id,
        contact: props.data.contact,
        price: props.data.price,
        slug: props.data.slug,
        description: props.data.description,
        photo: '',
    })
    const [error, setError] = useState({ ...errors })
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(data)
        router.post(route('venue.update', data.slug), {
            _method: 'put',
            ...data,
        })
    }
    const urlToBlob = async (url) => {
        console.log(url)
        const response = await fetch(url, {
            mode: 'no-cors',
        })
        const blob = await response.blob()
        return blob
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

    const timeValidation = (e) => {
        const { value } = e.target
        const valid = validateTime(value)
        console.log(valid)
        if (!valid) {
            setError('open', 'invalid')
        } else {
            errors.open = ''
        }
    }
    useEffect(() => {
        let url = props.data.photo
        if (!url.startsWith('http')) {
            url = `${window.location.origin}/storage/${url}`
        }
        urlToBlob(url).then((blob) => {
            console.log(blob)
            const file = new File([blob], 'venue.jpg', { type: blob.type })
            setData('photo', file)
            imageRef.current.src = URL.createObjectURL(file)
        })
        if (props.errors) {
            console.log(props.errors)
            setError(props.errors)
        }
    }, [])

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
                                            value={data.name}
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
                                            value={data.address}
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
                                            value={data.capacity}
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
                                            value={data.price}
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
                                        <div className="w-full h-fit flex flex-col justify-center items-center">
                                            <select
                                                className="w-full h-full px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent trasnsition-all duration-200 ease-in-out"
                                                onChange={(e) =>
                                                    setData(
                                                        'open',
                                                        e.target.value,
                                                    )
                                                }
                                                // make 10:00:00 to 10:00
                                                defaultValue={data.open.slice(
                                                    0,
                                                    5,
                                                )}
                                            >
                                                {hours.map((hour) => (
                                                    <option
                                                        value={hour}
                                                        key={hour}
                                                    >
                                                        {hour}
                                                    </option>
                                                ))}
                                            </select>
                                            <InputError
                                                error={error}
                                                name={'open'}
                                            />
                                        </div>

                                        <div className="w-full h-fit flex flex-col justify-center items-center">
                                            <select
                                                className="w-full h-full px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent trasnsition-all duration-200 ease-in-out"
                                                onChange={(e) =>
                                                    setData(
                                                        'close',
                                                        e.target.value,
                                                    )
                                                }
                                                defaultValue={data.close.slice(
                                                    0,
                                                    5,
                                                )}
                                            >
                                                {hours.map((hour) => (
                                                    <option
                                                        value={hour}
                                                        key={hour}
                                                    >
                                                        {hour}
                                                    </option>
                                                ))}
                                            </select>
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
                                                value={data.contact}
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
                                                onChange={(e) => {
                                                    imageRef.current.src =
                                                        URL.createObjectURL(
                                                            e.target.files[0],
                                                        )
                                                    setData(
                                                        'photo',
                                                        e.target.files[0],
                                                    )
                                                    console.log(
                                                        e.target.files[0],
                                                    )
                                                }}
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
                                        value={data.description}
                                    ></textarea>
                                    <InputError
                                        error={errors}
                                        name={'description'}
                                    />
                                </div>
                                <div className="w-full h-fit my-3">
                                    <button className="w-full h-full px-4 py-3 rounded bg-indigo-500 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent trasnsition-all duration-200 ease-in-out">
                                        Update
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
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
