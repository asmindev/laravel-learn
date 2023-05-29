import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Card from "./Card";

export default function index({ auth, data }) {
    const [clicked, setClicked] = useState("");
    const clicking = (arg) => {
        setClicked(arg);
    };
    return (
        <>
            <Head title="Home" />
            <Navbar auth={auth} />
            <div className="w-full h-full md:w-11/12 lg:w-10/12 mx-auto my-8">
                {/* jumbotron */}
                <div className="relative w-full h-full dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
                    <div className="h-[5___0vh] rounded-xl overflow-hidden">
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
                            onClick={() => clicking("populer")}
                            className={`w-full h-full rounded-full border border-gray-300 py-[6px] ${
                                clicked === "populer"
                                    ? "bg-indigo-500 text-white"
                                    : "bg-gray-200/80 "
                            }`}
                        >
                            Populer
                        </button>
                        <button
                            onClick={() => clicking("terdekat")}
                            className={`w-full h-full rounded-full border border-gray-300 py-[6px] ${
                                clicked === "terdekat"
                                    ? "bg-indigo-500 text-white"
                                    : "bg-gray-200/80 "
                            }`}
                        >
                            Terdekat
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full h-full md:w-11/12 lg:w-10/12 mx-auto my-4">
                <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="w-full h-full flex justify-center items-center"
                        >
                            <Card key={index} data={item} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
