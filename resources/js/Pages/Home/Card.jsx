import React from 'react'
import { Link } from '@inertiajs/react'
export default function Card({ data }) {
    console.log(data)
    return (
        <Link href={route('venue.show', data.slug)} className="w-full h-full">
            <div className="min-w-full h-full p-3">
                <div className="w-full rounded overflow-hidden h-72">
                    <img
                        src={
                            data.photo.startsWith('http')
                                ? data.photo
                                : `/storage/${data.photo}`
                        }
                        alt="test 1"
                        className="object-cover min-w-full h-full object-center"
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
    )
}
