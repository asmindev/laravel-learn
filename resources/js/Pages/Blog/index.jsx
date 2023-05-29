import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function index(props) {
    return (
        <>
            <Head title="Blog" />
            <h1>Blog</h1>
            {props.posts.map((post) => (
                // <div key={post.id}>
                //     <h2>{post.title}</h2>
                //     <p>{post.body}</p>
                // </div>
                <Link key={post.id} href={`/blog/${post.slug}`}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </Link>
            ))}
        </>
    );
}
