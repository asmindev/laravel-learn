import React from "react";
import { Link, Head } from "@inertiajs/react";

export default function Login({ token, errors }) {
    return (
        <>
            <Head title="Login" />
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white p-6 rounded shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Login</h1>
                    <form method="POST" action="/auth/login">
                        {errors.message && (
                            <div className="text-red-500 text-xs mb-2">
                                {errors.message}
                            </div>
                        )}
                        {token && (
                            <input type="hidden" name="_token" value={token} />
                        )}
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="username"
                            >
                                Username/Email
                            </label>
                            <input
                                id="username"
                                type="text"
                                name="username"
                                required
                                autoComplete="username"
                                autoFocus
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                required
                                autoComplete="current-password"
                                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                className="mr-2"
                                type="checkbox"
                                name="remember"
                                id="remember"
                            />
                            <label
                                className="text-sm text-gray-700"
                                htmlFor="remember"
                            >
                                Remember Me
                            </label>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Login
                            </button>
                            <Link
                                href="/forgot-password"
                                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
