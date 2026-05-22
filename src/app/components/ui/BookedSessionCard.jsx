'use client'
import { handleRemove } from "../hooks/nj";
import { User } from "lucide-react";

const BookedSessionCard = ({ allBookings }) => {
    if (!allBookings || allBookings.length === 0) {
        return (
            <tr>
                <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                    No booked sessions found.
                </td>
            </tr>
        );
    };
    return (
        <>
            {allBookings.map((booking, i) => {
                return (

                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 shrink-0">
                                    <span className="text-xs font-semibold text-primary">
                                        <User />
                                    </span>
                                </div>
                                <span className="font-medium text-gray-900">session.tutor</span>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700 font-medium">session.price</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">session.location</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">session.datetime</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-amber-50 text-amber-700 border-amber-200`}>
                                Pending
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                            <button onClick={handleRemove} className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md transition-colors">
                                <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                Remove
                            </button>
                        </td>
                    </tr>
                )
            })}
        </>
    );
};

export default BookedSessionCard;