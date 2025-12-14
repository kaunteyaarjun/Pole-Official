'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Something went wrong!</h2>
            <div className="bg-gray-900 p-4 rounded-md border border-red-500/30 overflow-auto max-w-2xl w-full mb-6">
                <p className="font-mono text-sm text-red-400 break-words">
                    {error.message || "Unknown Error"}
                </p>
                <pre className="mt-4 text-xs text-gray-400 overflow-x-auto">
                    {error.stack}
                </pre>
            </div>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
                className="px-6 py-2 bg-white text-black font-bold uppercase hover:bg-gray-200 transition-colors"
            >
                Try again
            </button>
        </div>
    );
}
