import React, { useState, useRef, useEffect } from "react";
import { Link } from "@inertiajs/react";
import Layout from "@/Components/Layout";
import Navbar from "@/Components/Navbar";
import Datepicker from "react-tailwindcss-datepicker";
import Lapangan from "./Lapangan";

export default function Detail({ data }) {
    const venueOpen = data.open;
    const venueClose = data.close;
    const pickerRef = useRef();
    const [timeTable, setTimeTable] = useState({});
    const [popDirection, setPopDirection] = useState("up");
    const [date, setDate] = useState("");

    const { name, photo, address, capacity, price, open, close } = data;
    const reviews = data.venue_reviews;
    const fromTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };
    const handleDate = (e) => {
        setDate(e.startDate);
    };
    const yesterday = () => {
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        return yesterday;
    };
    const updateState = (listHour) => {
        setTimeTable(listHour);
    };
    useEffect(() => {
        if (pickerRef.current) {
            const picker = pickerRef.current;
            const distanceFromBottom =
                window.innerHeight - picker.getBoundingClientRect().bottom;
            if (distanceFromBottom < 500) {
                setPopDirection("up");
            } else {
                setPopDirection("down");
            }
        }
        const today = new Date().toISOString().split("T")[0];
        setDate(today);
        console.log(timeTable);
    }, [pickerRef.current, timeTable]);

    return (
        <Layout title="Detail Venue">
            <Navbar auth={{}} />
            <div className="relative w-full h-full lg:w-9/12 mx-auto my-8 px-8">
                <div className="w-full h-full flex flex-col gap-4 my-16">
                    <div className="w-full h-full flex-col-reverse md:flex-row-reverse flex gap-4 md:gap-12">
                        <div className="w-full md:w-1/2 h-full flex flex-col gap-4">
                            <div className="w-full h-full flex flex-col gap-4">
                                <div
                                    id="name"
                                    className="w-full h-full flex flex-col gap-2 justify-between"
                                >
                                    <div className="w-full h-full flex items-center justify-between">
                                        <h1 className="w-2/3 text-4xl font-bold text-gray-500 leading-[6px]">
                                            {name}
                                        </h1>
                                        <div className="h-full flex flex-col">
                                            <p className="text-gray-500 text-xs font-bold">
                                                By {data.user.name}
                                            </p>
                                            <p className="text-gray-500 text-xs font-bold">
                                                {fromTimestamp(data.created_at)}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full h-full flex gap-2">
                                        {/* <h2>{data.venue_category.name}</h2> */}
                                        <button className="px-5 py-1 bg-gray-100 border border-gray-300 rounded-full text-gray-800">
                                            <Link
                                                href={`/venue/category/${data.venue_category.slug}`}
                                            >
                                                {data.venue_category.name}
                                            </Link>
                                        </button>
                                    </div>
                                    <div className="w-full h-full flex gap-4 overflow-x-auto py-2">
                                        <div>
                                            <h2 className="text-lg font-bold text-gray-700 whitespace-nowrap">
                                                Address
                                            </h2>
                                            <p className="text-gray-500 text-sm  whitespace-nowrap">
                                                {address}
                                            </p>
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-bold text-gray-700 whitespace-nowrap">
                                                Capacity
                                            </h2>
                                            <p className="text-gray-500 text-sm whitespace-nowrap">
                                                {capacity}
                                            </p>
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-bold text-gray-700 whitespace-nowrap">
                                                Price
                                            </h2>
                                            <p className="text-gray-500 text-sm whitespace-nowrap">
                                                {price}
                                            </p>
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-bold text-gray-700 whitespace-nowrap">
                                                Open
                                            </h2>
                                            <p className="text-gray-500 text-sm whitespace-nowrap">
                                                {open}
                                            </p>
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-bold text-gray-700 whitespace-nowrap">
                                                Close
                                            </h2>
                                            <p className="text-gray-500 text-sm whitespace-nowrap">
                                                {close}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full h-full flex gap-2">
                                        <div>
                                            <h2 className="text-lg font-bold text-gray-700">
                                                Contact
                                            </h2>
                                            <p className="text-gray-500 text-sm">
                                                {data.contact}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full h-full flex gap-2">
                                        <div>
                                            <h2 className="text-lg font-bold text-gray-700">
                                                Description
                                            </h2>
                                            <p className="text-gray-500 text-sm">
                                                {data.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full h-full flex gap-2">
                                        <div>
                                            <h2 className="text-lg font-bold text-gray-700">
                                                Facilities
                                            </h2>
                                            <div className="w-full h-full flex gap-2">
                                                {data?.facilities ? (
                                                    data.facilities.map(
                                                        (facility) => (
                                                            <button
                                                                key={
                                                                    facility.id
                                                                }
                                                                className="px-5 py-1 bg-gray-100 border border-gray-300 rounded-full text-gray-800"
                                                            >
                                                                {facility.name}
                                                            </button>
                                                        )
                                                    )
                                                ) : (
                                                    <p className="text-gray-500 text-sm">
                                                        No Facilities
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 h-full flex flex-col gap-4">
                            <div className="">
                                <img src={photo} alt={name} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col gap-4 md:flex-row">
                        {/* review section */}
                        <div className="w-full h-full flex flex-col gap-4">
                            <h1 className="text-2xl font-bold text-gray-700">
                                Reviews
                            </h1>
                            <div className="w-full max-h-40 flex flex-col gap-4 overflow-auto">
                                {reviews?.length > 0 ? (
                                    reviews.map((review) => (
                                        <div
                                            key={review.id}
                                            className="w-full h-full flex flex-col gap-2"
                                        >
                                            <div className="w-full h-full flex flex-col">
                                                <Link
                                                    href={`/user/${review.user.name}`}
                                                >
                                                    <h1 className="text-sm font-bold text-gray-700">
                                                        {review.user.name}
                                                    </h1>
                                                </Link>
                                                <p className="text-gray-500 text-xs">
                                                    {fromTimestamp(
                                                        review.created_at
                                                    )}
                                                </p>
                                            </div>
                                            <div className="w-full h-full">
                                                <p className="text-gray-500 text-sm">
                                                    {review.comment}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500 text-sm">
                                        No Reviews
                                    </p>
                                )}
                            </div>
                            <div className="w-full h-full flex flex-col gap-4">
                                <h1 className="text-2xl font-bold text-gray-700">
                                    Add Review
                                </h1>
                                <div className="w-full h-full flex flex-col gap-4">
                                    <form>
                                        <div className="flex justify-between gap-4 border-b border-gray-300">
                                            <input
                                                type="text"
                                                className="w-full py-2 px-4 border-none focus:outline-none focus:border-none focus:ring-0"
                                                placeholder="Add Review"
                                            />
                                            <button
                                                type="submit"
                                                className="w-1/4 text-white flex justify-center"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    className="w-6 h-6 fill-gray-500 cursor-pointer"
                                                >
                                                    <path d="M3.5 1.3457C3.58425 1.3457 3.66714 1.36699 3.74096 1.4076L22.2034 11.562C22.4454 11.695 22.5337 11.9991 22.4006 12.241C22.3549 12.3241 22.2865 12.3925 22.2034 12.4382L3.74096 22.5925C3.499 22.7256 3.19497 22.6374 3.06189 22.3954C3.02129 22.3216 3 22.2387 3 22.1544V1.8457C3 1.56956 3.22386 1.3457 3.5 1.3457ZM5 4.38261V11.0001H10V13.0001H5V19.6175L18.8499 12.0001L5 4.38261Z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-full flex flex-col gap-4">
                            <h1 className="text-2xl font-bold text-gray-700">
                                Tersedia
                            </h1>
                            <div ref={pickerRef} className="w-full h-full">
                                <Datepicker
                                    value={date}
                                    onChange={handleDate}
                                    popoverDirection={popDirection}
                                    minDate={yesterday()}
                                    placeholder="Pilih Tanggal"
                                    asSingle={
                                        data.venue_category.slug === "lapangan"
                                    }
                                />
                            </div>
                            {/* make a pad with grid */}
                            <div className="w-full h-full">
                                {data.venue_category.slug === "lapangan" ? (
                                    <Lapangan
                                        state={timeTable}
                                        updateState={updateState}
                                        venueOpen={venueOpen}
                                        venueClose={venueClose}
                                        date={date}
                                        bookings={data.venue_bookings}
                                    />
                                ) : (
                                    <div className="w-full h-full flex flex-col gap-4">
                                        <h1 className="text-2xl font-bold text-gray-700">
                                            Belum tersedia
                                        </h1>
                                    </div>
                                )}
                                <div className="w-full mt-8">
                                    <div className="h-full w-full mx-auto">
                                        <Link href="/booking">
                                            <button
                                                type="button"
                                                disabled={
                                                    timeTable.hour
                                                        ? false
                                                        : true
                                                }
                                                className={`w-full px-5 py-2 bg-indigo-500 rounded-lg text-white disabled:opacity-50 ${
                                                    timeTable?.hour
                                                        ? "cursor-not-allowed"
                                                        : "cursor-pointer"
                                                }`}
                                            >
                                                Book Now
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* floating button */}
            </div>
        </Layout>
    );
}
