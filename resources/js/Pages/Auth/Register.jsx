import React from 'react'
import { Link, Head, useForm } from '@inertiajs/react'

export default function Register({ token, errors }) {
    const {
        data,
        setData,
        post,
        processing,
        errors: formErrors,
    } = useForm({
        phone_number: '',
        name: '',
        username: '',
        role: '',
        email: '',
        password: '',
        password_confirmation: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('register'), {
            onSuccess: () => {
                setData('email', '')
                setData('password', '')
            },
            onError: (errors) => {
                console.log(errors)
                setData('password', '')
                setData('password_confirmation', '')
            },
        })
    }
    return (
        <>
            <Head title="Login" />
            <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
                <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1 flex-row-reverse">
                    <div className="lg:w-1/2 p-6 sm:p-12">
                        <div>
                            <h1 className="text-2xl xl:text-3xl font-black text-center">
                                Spind
                            </h1>
                        </div>
                        <div className="mt-12 flex flex-col items-center">
                            <h1 className="text-2xl xl:text-3xl font-extrabold">
                                Silahkan Daftar
                            </h1>
                            <div className="w-full flex-1 mt-8">
                                <div className="flex flex-col items-center">
                                    <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                        <div className="bg-white p-2 rounded-full">
                                            <svg
                                                className="w-4"
                                                viewBox="0 0 533.5 544.3"
                                            >
                                                <path
                                                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                    fill="#4285f4"
                                                />
                                                <path
                                                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                    fill="#34a853"
                                                />
                                                <path
                                                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                    fill="#fbbc04"
                                                />
                                                <path
                                                    d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                    fill="#ea4335"
                                                />
                                            </svg>
                                        </div>
                                        <span className="ml-4">
                                            Sign Up with Google
                                        </span>
                                    </button>
                                </div>

                                <div className="my-12 border-b text-center">
                                    <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                        Or sign up with e-mail
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="mx-auto w-full">
                                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-5">
                                            <div className="">
                                                <input
                                                    className="w-full px-4 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                    type="text"
                                                    placeholder="Nama"
                                                    required
                                                    onChange={(e) =>
                                                        setData(
                                                            'name',
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                                {formErrors.name && (
                                                    <div className="text-red-500 text-xs mt-1">
                                                        {formErrors.name}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="">
                                                <input
                                                    className="w-full px-4 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                    type="username"
                                                    placeholder="Username"
                                                    required
                                                    onChange={(e) =>
                                                        setData(
                                                            'username',
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                                {formErrors.username && (
                                                    <div className="text-red-500 text-xs mt-1">
                                                        {formErrors.username}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-5">
                                            <div className="">
                                                <input
                                                    className="w-full px-4 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                    type="text"
                                                    placeholder="No. HP"
                                                    required
                                                    onChange={(e) =>
                                                        setData(
                                                            'phone_number',
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                                {formErrors.phone_number && (
                                                    <div className="text-red-500 text-xs mt-1">
                                                        {
                                                            formErrors.phone_number
                                                        }
                                                    </div>
                                                )}
                                            </div>
                                            <div className="">
                                                <input
                                                    className="w-full px-4 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                    type="email"
                                                    placeholder="Email"
                                                    required
                                                    onChange={(e) =>
                                                        setData(
                                                            'email',
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                                {formErrors.email && (
                                                    <div className="text-red-500 text-xs mt-1">
                                                        {formErrors.email}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-5">
                                            <div className="">
                                                <input
                                                    className="w-full px-4 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                    type="password"
                                                    placeholder="Password"
                                                    required
                                                    value={data.password}
                                                    onChange={(e) =>
                                                        setData(
                                                            'password',
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                                {formErrors.password && (
                                                    <div className="text-red-500 text-xs mt-1">
                                                        {formErrors.password}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="">
                                                <input
                                                    required
                                                    className="w-full px-4 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                    type="password"
                                                    placeholder="Confirm Password"
                                                    value={
                                                        data.password_confirmation
                                                    }
                                                    onChange={(e) =>
                                                        setData(
                                                            'password_confirmation',
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                                {formErrors.password_confirmation && (
                                                    <div className="text-red-500 text-xs mt-1">
                                                        {
                                                            formErrors.password_confirmation
                                                        }
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-5">
                                            <div className="">
                                                {/* select */}
                                                <select
                                                    onChange={(e) =>
                                                        setData(
                                                            'role',
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="w-full px-4 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                >
                                                    <option value="">
                                                        Pilih Role
                                                    </option>
                                                    <option value="user">
                                                        Penyewa
                                                    </option>
                                                    <option value="provider">
                                                        Penyedia
                                                    </option>
                                                </select>
                                                {formErrors.role && (
                                                    <div className="text-red-500 text-xs mt-1">
                                                        {formErrors.role}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                        >
                                            <svg
                                                className="w-6 h-6 -ml-2"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                                <circle cx="8.5" cy="7" r="4" />
                                                <path d="M20 8v6M23 11h-6" />
                                            </svg>
                                            <span className="ml-3">Daftar</span>
                                        </button>
                                        <div className="mt-5 text-sm text-center">
                                            Sudah punya akun?{' '}
                                            <Link href="/auth/login">
                                                <span className="font-semibold text-indigo-500 hover:text-indigo-600 transition-all duration-300 ease-in-out">
                                                    Masuk disini
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                        <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat bg-[url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')]"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
