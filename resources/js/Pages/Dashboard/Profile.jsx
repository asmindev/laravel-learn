import React, { useState, useEffect, useRef } from 'react'
import Layout from './Components/Layout'
import { useForm, router } from '@inertiajs/react'
import ModalLayout from '@/Components/ModalLayout'
import { AnimatePresence } from 'framer-motion'
import InputError from '@/Components/InputError'

export default function Profile(props) {
    const { auth, flash } = props
    const user = auth.user
    const imgRef = useRef(null)
    const [showModal, setShowModal] = useState(false)
    const [errors, setErrors] = useState({})
    const form = useForm({
        name: user.name,
        email: user.email,
        phone_number: user.phone_number,
        address: user.address,
        old_photo: user.profile_picture,
    })
    const toRedeableDate = (date) => {
        const d = new Date(date)
        return d.toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        router.post(
            route('user.update', user.id),
            {
                _method: 'put',
                ...form.data,
            },
            {
                onSuccess: () => {
                    setShowModal(false)
                    setErrors({})
                },
                onError: (e) => {
                    setErrors(e)
                },
            },
        )
    }
    const handleModal = () => {
        setShowModal(!showModal)
    }
    const urlToBlob = async (url) => {
        const response = await fetch(url, {
            mode: 'no-cors',
        })
        const blob = await response.blob()
        return blob
    }

    useEffect(() => {
        let url = user.profile_picture
        if (!url.startsWith('http')) {
            // get host
            url = `${window.location.origin}/storage/${url}`
        }
        const file = urlToBlob(url)
        file.then((res) => {
            const photo = new File([res], 'admin.png', {
                type: 'image/png',
            })
            form.setData('photo', photo)
        })
        if (showModal) {
            // set img src from form.data.photo
            const img = URL.createObjectURL(form.data.photo)
            imgRef.current.src = img
        }
        // close flash message after 3s
        if (flash.error || flash.success) {
            setTimeout(() => {
                flash.success = ''
                flash.error = ''
            }, 3000)
        }
    }, [showModal, flash])
    return (
        <>
            <AnimatePresence mode="wait">
                {showModal && (
                    <ModalLayout>
                        <div className="w-fit bg-white rounded p-4">
                            <div className="text-left">
                                <h1 className="text-2xl font-bold text-gray-700">
                                    Edit Profile
                                </h1>
                                <p className="text-gray-500 py-2">
                                    @{user.username}
                                </p>
                            </div>
                            <div className="w-fit h-full my-4">
                                <img
                                    ref={imgRef}
                                    alt=""
                                    className="w-28 h-32 rounded-md object-center object-cover"
                                />
                            </div>
                            <div className="w-full h-full">
                                <form
                                    className="w-full h-full text-left"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="mt-3">
                                        <label
                                            htmlFor="name"
                                            className="text-gray-700"
                                        >
                                            Nama
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="w-full rounded border border-gray-300 px-4 focus:ring-indigo-300 py-2 mt-1 focus:outline-none focus:border-indigo-700"
                                            value={form.data.name}
                                            onChange={(e) =>
                                                form.setData(
                                                    'name',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        <InputError
                                            error={errors}
                                            name="name"
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <label
                                            htmlFor="name"
                                            className="text-gray-700"
                                        >
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="w-full rounded border border-gray-300 px-4 focus:ring-indigo-300 py-2 mt-1 focus:outline-none focus:border-indigo-700"
                                            value={form.data.address}
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <label
                                            htmlFor="phone_number"
                                            className="text-gray-700"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            name="phone_number"
                                            id="phone_number"
                                            className="w-full rounded border border-gray-300 px-4 focus:ring-indigo-300 py-2 mt-1 focus:outline-none focus:border-indigo-700"
                                            value={form.data.phone_number}
                                            onChange={(e) =>
                                                form.setData(
                                                    'phone_number',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <label
                                            htmlFor="email"
                                            className="text-gray-700"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="w-full rounded border border-gray-300 px-4 focus:ring-indigo-300 py-2 mt-1 focus:outline-none focus:border-indigo-700"
                                            value={form.data.email}
                                            onChange={(e) =>
                                                form.setData(
                                                    'email',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        <InputError
                                            error={errors}
                                            name="email"
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <label
                                            htmlFor="photo"
                                            className="text-gray-700"
                                        >
                                            Photo
                                        </label>
                                        <input
                                            type="file"
                                            name="photo"
                                            id="photo"
                                            className="w-full rounded border border-gray-300 px-4 focus:ring-indigo-300 py-2 mt-1 focus:outline-none focus:border-indigo-700"
                                            onChange={(e) => {
                                                form.setData(
                                                    'photo',
                                                    e.target.files[0],
                                                )
                                                imgRef.current.src =
                                                    URL.createObjectURL(
                                                        e.target.files[0],
                                                    )
                                            }}
                                        />
                                    </div>
                                    <div className="mt-3 flex gap-2">
                                        <button
                                            type="submit"
                                            className="bg-indigo-600 text-white px-2 py-[2px] rounded text-sm"
                                        >
                                            Save
                                        </button>
                                        <button
                                            type="button"
                                            className="bg-zinc-700 text-white px-2 py-[2px] rounded text-sm"
                                            onClick={handleModal}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </ModalLayout>
                )}
            </AnimatePresence>

            <Layout user={user}>
                <div className="w-full p-8 min-h-screen bg-zinc-100">
                    <div className="w-fit rounded">
                        <div className="my-4">
                            {flash.success && (
                                <div className="bg-green-200 text-green-700 border border-green-600 rounded p-2">
                                    {flash.success}
                                </div>
                            )}
                            <h1 className="text-2xl font-bold text-gray-700">
                                {user.name} Profile
                            </h1>
                            <p className="text-gray-500 px-4 py-2">
                                @{user.username}
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-full mt-12">
                        <div className="w-full h-full flex items-end">
                            <div>
                                <img
                                    src={
                                        user.profile_picture.startsWith('http')
                                            ? user.profile_picture
                                            : `${window.location.origin}/storage/${user.profile_picture}`
                                    }
                                    alt=""
                                    className="w-32 h-32 rounded-full object-cover object-center"
                                />
                            </div>
                            <div className="w-1/2 mx-3 mt-4">
                                <span>
                                    <button
                                        className="bg-zinc-700 text-white px-2 py-[2px] rounded text-sm"
                                        onClick={handleModal}
                                    >
                                        Edit Profile
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div className="mt-12">
                            {/* here is the name, email, phone number and addess */}
                            <div className="w-full h-full flex justify-between items-center">
                                <div className="w-1/2">
                                    <table className="w-fit">
                                        <tbody>
                                            <tr>
                                                <td className="text-gray-500 px-4 py-2">
                                                    Nama
                                                </td>
                                                <td className="text-gray-700 px-4 py-2">
                                                    {user.name}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-gray-500 px-4 py-2">
                                                    Email
                                                </td>
                                                <td className="text-gray-700 px-4 py-2">
                                                    {user.email}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-gray-500 px-4 py-2">
                                                    Nomor Telepon
                                                </td>
                                                <td className="text-gray-700 px-4 py-2">
                                                    {user.phone_number}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-gray-500 px-4 py-2">
                                                    Alamat
                                                </td>
                                                <td className="text-gray-700 px-4 py-2">
                                                    Jln Raya
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-gray-500 px-4 py-2">
                                                    Bergabung
                                                </td>
                                                <td className="text-gray-700 px-4 py-2">
                                                    {toRedeableDate(
                                                        user.created_at,
                                                    )}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
