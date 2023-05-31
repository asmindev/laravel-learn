import React from "react";
import Layout from "@/Components/Layout";

export default function index(props) {
    console.log(props);
    return (
        <Layout title="Venue">
            <div className="w-full h-full py-8 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-gray-500">Add Venue</h1>
                <div className="w-full h-full flex flex-col justify-center items-center">
                    {props?.success && (
                        <div className="w-full h-full flex flex-col justify-center items-center">
                            <div className="w-full h-full flex flex-col justify-center items-center">
                                <h1 className="text-4xl font-bold text-gray-500">
                                    Success
                                </h1>
                                <p className="text-gray-500">
                                    {props?.success?.message}
                                </p>
                            </div>
                        </div>
                    )}
                    {props?.error?.message && (
                        <div className="w-full h-full flex flex-col justify-center items-center">
                            <div className="w-full h-full flex flex-col justify-center items-center">
                                <h1 className="text-4xl font-bold text-gray-500">
                                    Error
                                </h1>
                                <p className="text-gray-500">{props?.error}</p>
                            </div>
                        </div>
                    )}
                </div>
                {/* make a form */}
                <div className="w-full h-full md:w-11/12 lg:w-10/12 mx-auto my-8">
                    <div className="w-full md:w-2/3 lg:w-1/3 h-full flex flex-col gap-4 mx-auto">
                        <form
                            action="/venue"
                            method="POST"
                            className="w-full h-full flex flex-col gap-4"
                            encType="multipart/form-data"
                        >
                            <input
                                type="hidden"
                                name="_token"
                                value={props?.csrf}
                            />
                            <div className="w-full h-full flex flex-col gap-4">
                                <label htmlFor="name" className="text-gray-500">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
                                />
                                {props?.message?.name && (
                                    <span className="text-red-500">
                                        {props?.message.name[0]}
                                    </span>
                                )}
                            </div>
                            <div className="w-full h-full flex flex-col gap-4">
                                <label
                                    htmlFor="address"
                                    className="text-gray-500"
                                >
                                    Address
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
                                />
                                {props?.message?.address && (
                                    <span className="text-red-500">
                                        {props?.message.address[0]}
                                    </span>
                                )}
                            </div>
                            <div className="w-full h-full flex flex-col gap-4">
                                <label
                                    htmlFor="category"
                                    className="text-gray-500"
                                >
                                    Kategori
                                </label>
                                <input
                                    type="text"
                                    name="category"
                                    id="category"
                                    className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
                                />
                                {props?.message?.category && (
                                    <span className="text-red-500">
                                        {props?.message.category[0]}
                                    </span>
                                )}
                            </div>
                            <div className="w-full h-full flex flex-col gap-4">
                                <label
                                    htmlFor="price"
                                    className="text-gray-500"
                                >
                                    Harga
                                </label>
                                <input
                                    type="text"
                                    name="price"
                                    id="price"
                                    className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
                                />
                                {props?.message?.price && (
                                    <span className="text-red-500">
                                        {props?.message.price[0]}
                                    </span>
                                )}
                            </div>
                            <div className="w-full h-full flex flex-col gap-4">
                                <label
                                    htmlFor="photo"
                                    className="text-gray-500"
                                >
                                    Foto
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    name="photo"
                                    id="photo"
                                    required
                                    className="block w-full text-sm text-slate-500
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-violet-50 file:text-violet-700
                                    hover:file:bg-violet-100"
                                />
                                {props?.errors?.photo && (
                                    <span className="text-red-500">
                                        {props?.message}
                                    </span>
                                )}
                            </div>
                            <div className="w-full h-full flex flex-col gap-4">
                                <label
                                    htmlFor="description"
                                    className="text-gray-500"
                                >
                                    Deskripsi
                                </label>
                                <textarea
                                    type="text"
                                    name="description"
                                    id="description"
                                    className="w-full h-12 px-4
                                    border border-gray-300 rounded-lg
                                    focus:outline-none focus:ring-2
                                    focus:ring-gray-200
                                    focus:border-transparent"
                                ></textarea>
                                {props?.message?.description && (
                                    <span className="text-red-500">
                                        {props?.message.description[0]}
                                    </span>
                                )}
                            </div>
                            <div className="w-full h-full flex flex-col gap-4">
                                <button
                                    type="submit"
                                    className="w-full h-12 bg-gray-500 text-white rounded-lg"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
