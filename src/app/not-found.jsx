'use client'
import { FileSearch, Home, Headphones, ExternalLink, Database, Search } from 'lucide-react';
import Link from 'next/link';

export default function notFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
        
        <div className="relative mb-8">
          <div className="bg-linear-to-br from-teal-500 to-teal-700 rounded-lg p-8 flex items-center justify-center">
            <div className="relative">
              <FileSearch className="w-24 h-24 text-white opacity-90" />
              <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                  <div className="w-4 h-0.5 bg-gray-500 rotate-45 absolute" />
                  <div className="w-4 h-0.5 bg-gray-500 -rotate-45 absolute" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-[#8B3A3A] text-white text-xs font-semibold px-3 py-1 rounded-full">
              ERROR 404
            </span>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3 text-center mt-4">
          Record Not Found
        </h1>

        <p className="text-gray-600 text-center text-sm leading-relaxed mb-8">
          The medical resource or page you are looking for has been moved, 
          archived, or never existed in our database.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <Link href={'/'}
            className="flex-1 bg-[#8B3A3A] hover:bg-[#7A3232] text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Link>
          <Link href={'/'}
            className="flex-1 bg-transparent border-2 border-teal-700 text-teal-700 font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-teal-50 transition-colors"
          >
            <Headphones className="w-4 h-4" />
            Contact Support
          </Link>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Useful Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/sitemap" className="text-sm text-gray-600 hover:text-[#8B3A3A] transition-colors flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" />
                    Sitemap
                  </a>
                </li>
                
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                System Status
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-gray-600">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}