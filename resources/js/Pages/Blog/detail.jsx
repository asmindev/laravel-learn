import React from "react";
import { Head, Link } from "@inertiajs/react";

export default function Detail(props) {
    return (
        <>
            <Head title={props.post.title} />
            {/* back to blog */}
            <Link href="/blog">Back to Blog</Link>
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold">{props.post.title}</h1>
                <p>{props.post.body}</p>
            </div>
        </>
    );
}
