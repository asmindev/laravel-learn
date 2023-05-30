import React from "react";
import { Head } from "@inertiajs/react";
import Footer from "./Footer";

export default function Layout({ title, children }) {
    return (
        <>
            <Head title={title} />
            {/* footer always bottom */}
            <section className="w-full h-full flex flex-col min-h-screen">
                <div className="flex-grow">{children}</div>
                <section className="">
                    <Footer />
                </section>
            </section>
        </>
    );
}
