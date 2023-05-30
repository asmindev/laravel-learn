import React from "react";

export default function Card({ data: { title, price, location, category } }) {
    return (
        <div className="w-full h-full p-3">
            <div className="rounded overflow-hidden h-72">
                <img
                    src="https://images.unsplash.com/photo-1585637071663-799845ad5212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="test 1"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="mt-4 w-full h-full flex flex-col justify-between">
                <div className="flex flex-col justify-between">
                    <div className="flex justify-between items-center">
                        <h1 className="text-lg font-bold">{title}</h1>
                        <span className="text-sm text-gray-600">
                            <h1>
                                {price}/<strong>Jam</strong>
                            </h1>
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">
                            {location}
                        </span>
                        <span className="text-sm text-gray-600">
                            Kapasitas 100
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
