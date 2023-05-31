import React from "react";
import { Link } from "@inertiajs/react";
export default function Card({ data }) {
    console.log(data);
    return (
        <Link href={`/venue/${data.slug}`}>
            <div className="w-full h-full p-3">
                <div className="rounded overflow-hidden h-72">
                    <img
                        src={data.photo}
                        alt="test 1"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="mt-4 w-full h-full flex flex-col justify-between">
                    <div className="flex flex-col justify-between">
                        <div className="flex justify-between items-center">
                            <h1 className="text-lg font-bold">{data.name}</h1>
                            <span className="text-sm text-gray-600">
                                <h1>
                                    {data.price}/<strong>Jam</strong>
                                </h1>
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">
                                {data.address}
                            </span>
                            <span className="text-sm text-gray-600">
                                {data.capacity}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
