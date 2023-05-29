import React from "react";
import { Link, Head } from "@inertiajs/react";

export default function Register({ token, errors }) {
    console.log(errors);
    return (
        <>
            <Head title="Register" />
            <section className="flex justify-center items-center h-screen">
                <div className="bg-white p-6 rounded shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Register</h1>
                    <form method="POST" action="/auth/register">
                        {token && (
                            <input type="hidden" name="_token" value={token} />
                        )}
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                className="border rounded w-full py-2 px-3 text-gray-700"
                                id="name"
                                type="text"
                                name="name"
                                required
                                autoFocus
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="border rounded w-full py-2 px-3 text-gray-700"
                                id="email"
                                type="email"
                                name="email"
                                required
                            />
                            {errors.email && (
                                <div className="text-red-500 text-xs mt-2">
                                    {errors.email}
                                </div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="username"
                            >
                                Username
                            </label>
                            <input
                                className="border rounded w-full py-2 px-3 text-gray-700"
                                id="username"
                                type="text"
                                name="username"
                                required
                            />
                            {errors.username && (
                                <div className="text-red-500 text-xs mt-2">
                                    {errors.username}
                                </div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="phone"
                            >
                                Phone
                            </label>
                            <input
                                className="border rounded w-full py-2 px-3 text-gray-700"
                                id="phone"
                                type="text"
                                name="phone_number"
                                required
                            />
                            {errors.phone_number && (
                                <div className="text-red-500 text-xs mt-2">
                                    {errors.phone_number}
                                </div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="address"
                            >
                                Role
                            </label>
                            <select
                                className="border rounded w-full py-2 px-3 text-gray-700"
                                id="role"
                                type="text"
                                name="role"
                                required
                            >
                                <option value="provider">Penyedia</option>
                                <option value="tenant">Pengguna</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="border rounded w-full py-2 px-3 text-gray-700"
                                id="password"
                                type="password"
                                name="password"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="password_confirmation"
                            >
                                Confirm Password
                            </label>
                            <input
                                className="border rounded w-full py-2 px-3 text-gray-700"
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                required
                            />
                        </div>
                        <div className="flex justify-end">
                            <Link
                                className="text-sm text-gray-600 hover:text-gray-700 hover:underline mb-6"
                                href={route("login")}
                            >
                                Already registered?
                            </Link>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-200"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
