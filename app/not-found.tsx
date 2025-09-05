import React from "react";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center bg-neutral-900 text-neutral-100">
            <h1 className="text-5xl font-bold mb-4">404</h1>
            <p className="text-xl mb-2">Page not found</p>
            <p className="text-sm text-neutral-400 mb-4 max-w-sm">The page you are looking for does not exist. Why are you here? Don't worry, you can go back to the homepage!</p>
            <Link href="/" className="px-4 py-2 rounded bg-neutral-800 text-neutral-100 hover:bg-neutral-700 transition-colors font-medium">Go to Homepage</Link>
        </div>
    );
};

export default NotFound;