'use client';
import Link from 'next/link';
import React from 'react';

export default function BookedSessions() {

    const sessions = [
        { id: 1, tutor: 'Dr. James Smith', price: '$150.00', location: 'Virtual (Zoom)', datetime: 'Oct 24, 2024 • 09:00 AM - 10:30 AM', status: 'pending' },
        { id: 2, tutor: 'Dr. Sarah Patel', price: '$200.00', location: 'Med Center, Rm 302', datetime: 'Oct 26, 2024 • 02:00 PM - 03:30 PM', status: 'pending' },
        { id: 3, tutor: 'Dr. Michael Wong', price: '$175.00', location: 'Virtual (Meet)', datetime: 'Oct 28, 2024 • 11:00 AM - 12:30 PM', status: 'pending' },
        { id: 4, tutor: 'Dr. Elena Rodriguez', price: '$180.00', location: 'Uni Hospital, Fl 2', datetime: 'Nov 02, 2024 • 08:00 AM - 09:30 AM', status: 'pending' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-8 font-sans">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Booked Sessions</h1>
                        <p className="text-gray-600 max-w-2xl">
                            Manage your upcoming clinical mentorships and medical consultations. Keep track of confirmed appointments and pending requests in one administrative view.
                        </p>
                    </div>

                    <div className="flex gap-3 shrink-0">
                        <button className="flex items-center px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors min-w-35">
                            <svg className="w-5 h-5 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12v-2m0 4v-2" />
                            </svg>
                            <span>Synced with<br />Calendar</span>
                        </button>

                        {/* Book New Session Button */}
                        <Link
                        href={'/tutors'}
                         className="inline-flex items-center px-4 py-2.5 bg-red-800 hover:bg-red-900 rounded-lg text-sm font-medium text-white transition-colors min-w-35">
                            <svg className="w-5 h-5 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            <span>Book New<br />Session</span>
                        </Link>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Total Bookings</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-gray-900">24</span>
                            <span className="text-sm text-red-600 font-medium">+2 this week</span>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Upcoming</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-gray-900">08</span>
                            <span className="text-sm text-gray-500">Next: Tomorrow</span>
                        </div>
                    </div>
                    <div className="bg-linear-to-br from-teal-900 to-emerald-900 rounded-xl p-6 text-white shadow-sm">
                        <p className="text-xs font-semibold text-teal-100 uppercase tracking-wide mb-1">Clinical Progress</p>
                        <h3 className="text-xl font-semibold mb-1">On Track for Residency</h3>
                        <p className="text-sm text-teal-100">You have completed 85% of your required mentorship hours this month.</p>
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Tutor Name</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Price</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Location</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Date & Time</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {sessions.map((session) => (
                                    <tr key={session.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3 shrink-0">
                                                    <span className="text-xs font-semibold text-indigo-700">
                                                        {session.tutor.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                                    </span>
                                                </div>
                                                <span className="font-medium text-gray-900">{session.tutor}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-700 font-medium">{session.price}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">{session.location}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">{session.datetime}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${session.status === 'pending' ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-gray-50 text-gray-700 border-gray-200'
                                                }`}>
                                                {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                            <button className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md transition-colors">
                                                <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between bg-gray-50">
                        <p className="text-sm text-gray-600">
                            Showing <span className="font-medium text-gray-900">{sessions.length}</span> of <span className="font-medium text-gray-900">{sessions.length}</span> upcoming sessions
                        </p>
                        <div className="flex gap-2">
                            <button className="px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                                Previous
                            </button>
                            <button className="px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}