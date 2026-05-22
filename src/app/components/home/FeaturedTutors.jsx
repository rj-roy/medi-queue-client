'use client';

import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

export default function FeaturedTutors({ tutors }) {
    const featuredTutors = tutors?.slice(0, 4) || [];

    return (
        <section className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                            Featured Tutors
                        </h2>
                        <p className="text-gray-600">
                            Top-rated specialists available for immediate booking.
                        </p>
                    </div>
                    <Link
                        href="/tutors"
                        className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-secondary transition-colors mt-4 sm:mt-0 group"
                    >
                        View All Tutors
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredTutors?.map((tutor) => (
                        <Link
                        href={`/tutors/${tutor._id}`}
                            key={tutor._id || tutor.id}
                            className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative h-64 overflow-hidden bg-linear-to-br from-teal-600 to-teal-800">
                                <Image
                                    src={tutor.photo || 'https://randomuser.me/api/portraits/men/1.jpg'}
                                    alt={tutor.tutorName}
                                    height={500}
                                    width={500}
                                    loading='eager'
                                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />

                                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg">
                                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                                    <span className="text-sm font-bold text-gray-900">
                                        {tutor.rating || '4.9'}
                                    </span>
                                </div>

                                <div className="absolute bottom-3 left-3">
                                    <span className="px-2.5 py-1 bg-white/95 backdrop-blur-sm rounded-md text-xs font-semibold text-gray-700">
                                        {tutor.teachingMode}
                                    </span>
                                </div>
                            </div>

                            <div className="p-5">
                                <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
                                    {tutor.tutorName}
                                </h3>
                                <p className="text-[#8B3A3A] text-sm font-semibold mb-2 uppercase tracking-wide">
                                    {tutor.subject} Specialist
                                </p>

                                <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    <span className="line-clamp-1">{tutor.institutionExperience}</span>
                                </div>

                                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                                    <div className="flex items-center gap-1">
                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="text-sm text-gray-600">{tutor.location}</span>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <span className="text-2xl font-bold text-gray-900">৳{tutor.hourlyFee}</span>
                                    <span className="text-gray-500 text-sm">/hour</span>
                                </div>

                                <button className="w-full py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg">
                                    Book Session
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}