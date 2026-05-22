import { User } from "lucide-react";
import { DeleteAlertDialog } from "../DeleteAlertDialogue";
import { Suspense } from "react";
import BookedSessionLoader from "./BookedSessionLoader";

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
                    <Suspense key={i} fallback={<BookedSessionLoader />}>
                        <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 shrink-0">
                                        <span className="text-xs font-semibold text-primary">
                                            <User />
                                        </span>
                                    </div>
                                    <span className="font-medium text-gray-900">
                                        {booking.tutorName}
                                    </span>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-700 font-medium">৳{booking.hourlyFee}/hour</td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-600">{booking.location}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                                <span>{booking.bookedAt}</span>
                                <br />
                                <span>{booking.selectedSlot}</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-amber-50 text-amber-700 border-amber-200`}>
                                    Pending
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                <DeleteAlertDialog />
                            </td>
                        </tr>
                    </Suspense>
                )
            })}
        </>
    );
};

export default BookedSessionCard;