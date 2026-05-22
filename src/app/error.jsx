'use client'
import { BriefcaseMedical, RefreshCw, ArrowLeft, Info } from 'lucide-react';

export default function Error() {
    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center px-4 py-12">
            <div className="max-w-md w-full flex flex-col items-center text-center">
                <div className="mb-6">
                    <BriefcaseMedical className="w-20 h-20 text-secondary" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-3">
                    System Hiccup
                </h1>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                    We&apos;ve hit a small bump in the road while preparing your academic
                    records. Please refresh the page to get back on track.
                </p>
                <div className="flex flex-col w-full gap-3 mb-6">
                    <button
                        onClick={() => window.location.reload()}
                        className="w-full bg-secondary hover:bg-secondary text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                    >
                        <RefreshCw className="w-4 h-4" />
                        Refresh Page
                    </button>
                    <button
                        onClick={() => window.history.back()}
                        className="w-full bg-transparent border border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go Back
                    </button>
                </div>

                <a
                    href="/support"
                    className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-secondary transition-colors"
                >
                    <Info className="w-3 h-3" />
                    Contact Support
                </a>

            </div>

            <div className="absolute bottom-6 text-center w-full">
                <p className="text-xs text-gray-400">
                    © 2024 MediQueue. Error Code: 500-MQ
                </p>
            </div>
        </div>
    );
}