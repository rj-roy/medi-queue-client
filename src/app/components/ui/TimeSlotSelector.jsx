'use client';
import { authClient } from '@/lib/auth-client';
import { getBookings } from '@/lib/getData';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const TimeSlotSelector = ({
    hourlyFee = 0,
    timeSlot = [],
    institutionExperience,
    tutorName,
    bookingSubmiteAction,
    bookedTimeSlot = []
}) => {

    const [selectedSlot, setSelectedSlot] = useState(null);
    const [booked, setBooked] = useState(false);

    const router = useRouter();
    const session = authClient.useSession();
    const normalizeSlots = (data, bookedSlots = []) => {
        if (!data) return [];
        const bookedSlotTimes = bookedSlots.map(
            (item) => item.selectedSlot
        );

        if (Array.isArray(data)) {
            return data.map((slot) => {
                const slotTime = slot.time || slot;
                return {
                    time: slotTime,
                    available: !bookedSlotTimes.includes(slotTime)
                };
            });
        }

        return Object.values(data).map((slot) => {
            const slotTime =
                typeof slot === 'object' && slot !== null
                    ? (slot.time || slot.label)
                    : String(slot);
            return {
                time: slotTime,
                available: !bookedSlotTimes.includes(slotTime)
            };
        });
    };

    const timeSlots = normalizeSlots(timeSlot, bookedTimeSlot);
    const handleSlotSelect = (slot) => {
        if (!slot.available) return;
        setSelectedSlot(slot.time);
        setBooked(false);
    };

    const platformFee = (hourlyFee * 0.1).toFixed(2);
    const totalPrice = (hourlyFee * 1.1).toFixed(2);

    const handleBooking = async () => {
        if (!selectedSlot) {
            toast.error('Please select a time slot');
            return;
        }

        const getBooking = await getBookings();
        const isBooked = getBooking.find(
            (b) =>
                b.selectedSlot === selectedSlot &&
                b.tutorName === tutorName
        );

        if (isBooked) {
            toast.error("You've already booked this slot");
            setBooked(true);
            return;
        }

        const whoBooked = session?.data?.user;
        const bookedAt = new Date();

        const bookingData = {
            bookedAt,
            hourlyFee,
            selectedSlot,
            institutionExperience,
            tutorName,
            whoBooked
        };

        try {
            await bookingSubmiteAction(bookingData);
            setBooked(true);
            toast.success(
                "You've booked the tutor successfully"
            );
            router.push('/my-booked-tutors');

        } catch (error) {
            console.log(error);
            toast.error('Booking failed');
        }
    };

    return (
        <div className="p-6">
            <ToastContainer />
            <p className="text-sm font-bold text-gray-700 mb-4">
                Select Time Slot
            </p>
            {timeSlots.length > 0 ? (
                <div className="grid grid-cols-2 gap-3 mb-6">
                    {timeSlots.map((slot) => (
                        <button
                            key={slot.time}
                            onClick={() => handleSlotSelect(slot)}
                            disabled={!slot.available}
                            className={`
                                py-3 rounded-md text-sm font-bold transition

                                ${!slot.available
                                    ? 'border border-gray-200 bg-gray-50 text-gray-400 line-through cursor-not-allowed'

                                    : selectedSlot === slot.time
                                        ? 'border-2 border-primary bg-emerald-50 text-emerald-700'

                                        : 'border border-gray-200 hover:border-emerald-300 text-gray-600'
                                }
                            `}
                        >
                            {slot.time}
                        </button>
                    ))}
                </div>

            ) : (

                <p className="text-sm text-gray-500 mb-6">
                    No time slots available
                </p>
            )}

            <div className="space-y-3 border-t border-gray-100 pt-6 mb-6">
                <div className="flex justify-between text-sm text-gray-600">
                    <span>60 Min Session</span>
                    <span>৳{hourlyFee}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                    <span>Platform Fee</span>
                    <span>৳{platformFee}</span>
                </div>
                <div className="flex justify-between font-bold text-gray-900 pt-3 border-t border-gray-100">
                    <span>Total Price</span>
                    <span>৳{totalPrice}</span>
                </div>
            </div>

            <button
                onClick={handleBooking}
                disabled={!selectedSlot}
                className={`
                    w-full font-bold py-4 rounded-md
                    flex items-center justify-center gap-2
                    transition shadow-md

                    ${selectedSlot
                        ? 'bg-secondary hover:bg-secondary text-white cursor-pointer'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }
                `}
            >
                <span>Confirm Booking</span>
            </button>

            <p className="text-xs text-center text-gray-400 mt-4">
                No immediate charge. Free cancellation up to
                24 hours before the session.
            </p>

        </div>
    );
};

export default TimeSlotSelector;

















// 'use client';
// import { authClient } from '@/lib/auth-client';
// import { getAllTuros, getBookings } from '@/lib/getData';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';

// const TimeSlotSelector = ({ hourlyFee = 0, timeSlot = [], institutionExperience, tutorName, bookingSubmiteAction, bookedTimeSlot }) => {
//     console.log(bookedTimeSlot);
//     const [selectedSlot, setSelectedSlot] = useState(null);
//     const [booked, setBooked] = useState(false);
//     const router = useRouter();
//     const normalizeSlots = (data) => {
//         if (!data) return [];
//         if (Array.isArray(data)) {
//             return data.map(slot => ({
//                 time: slot.time || slot,
//                 available: slot.available !== false
//             }));
//         }
//         return Object.values(data).map(slot => ({
//             time: typeof slot === 'object' && slot !== null ? (slot.time || slot.label) : String(slot),
//             available: !(typeof slot === 'object' && slot.available === false)
//         }));
//     };
//     const timeSlots = normalizeSlots(timeSlot);
//     const handleSlotSelect = (slot) => {
//         if (slot.available) {
//             setSelectedSlot(slot.time);
//         }
//         setBooked(false);
//     };
//     const platformFee = (hourlyFee * 0.1).toFixed(2);
//     const totalPrice = (hourlyFee * 1.1).toFixed(2);


//     const session = authClient.useSession();

//     const handleBooking = async () => {
//         const getBooking = await getBookings();
//         const isBooked = getBooking.find(b => b.selectedSlot === selectedSlot && b.tutorName === tutorName);

//         if (getBooking) {
//             if (isBooked) {
//                 toast.error("You've already booked the tutor")
//                 setBooked(true);
//                 return;
//             };

//         };
//         if (!isBooked) {
//             console.log('booking...');
//             const whoBooked = session?.data?.user
//             const bookedAt = new Date();
//             const bookingData = { bookedAt, hourlyFee, selectedSlot, institutionExperience, tutorName, whoBooked }
//             bookingSubmiteAction(bookingData)
//             console.log(bookingData, 'booking data');
//             console.log(getBooking, 'get booking');
//             setBooked(true);
//             toast.success("You've Booked the Tutor. Redirecting....")
//             router.push('/my-booked-tutors')
//         };

//     };

//     return (
//         <div className="p-6">
//             <ToastContainer />
//             <p className="text-sm font-bold text-gray-700 mb-4">Select Time Slot</p>

//             {timeSlots.length > 0 ? (
//                 <div className="grid grid-cols-2 gap-3 mb-6">
//                     {timeSlots.map((slot) => (
//                         <button
//                             key={slot.time}
//                             onClick={() => handleSlotSelect(slot)}
//                             disabled={!slot.available}
//                             className={`py-3 rounded-md text-sm font-bold transition ${!slot.available
//                                 ? 'border border-gray-200 bg-gray-50 text-gray-400 line-through cursor-not-allowed'
//                                 : selectedSlot === slot.time
//                                     ? 'border-2 border-primary bg-emerald-50 text-emerald-700'
//                                     : 'border border-gray-200 hover:border-emerald-300 text-gray-600'
//                                 }`}
//                         >
//                             {slot.time}
//                         </button>
//                     ))}
//                 </div>
//             ) : (
//                 <p className="text-sm text-gray-500 mb-6">No time slots available</p>
//             )}

//             <div className="space-y-3 border-t border-gray-100 pt-6 mb-6">
//                 <div className="flex justify-between text-sm text-gray-600">
//                     <span>60 Min Session</span>
//                     <span>৳{hourlyFee}</span>
//                 </div>
//                 <div className="flex justify-between text-sm text-gray-600">
//                     <span>Platform Fee</span>
//                     <span>৳{platformFee}</span>
//                 </div>
//                 <div className="flex justify-between font-bold text-gray-900 pt-3 border-t border-gray-100">
//                     <span>Total Price</span>
//                     <span>৳{totalPrice}</span>
//                 </div>
//             </div>

//             <button
//                 onClick={handleBooking}
//                 disabled={!selectedSlot && booked === true || timeSlot === null}
//                 className={`w-full font-bold py-4 rounded-md flex items-center justify-center gap-2 transition shadow-md ${selectedSlot && !booked
//                     ? 'bg-secondary hover:bg-secondary text-white cursor-pointer'
//                     : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                     }`}
//             >
//                 <span>Confirm Booking</span>
//             </button>

//             <p className="text-xs text-center text-gray-400 mt-4">
//                 No immediate charge. Free cancellation up to 24 hours before the session.
//             </p>
//         </div>
//     );
// };

// export default TimeSlotSelector;