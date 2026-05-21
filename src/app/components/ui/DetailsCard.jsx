import { getBookings, getTutorBySlug } from '@/lib/getData';
import Image from 'next/image';
import TimeSlotSelector from './TimeSlotSelector';
import { bookingSubmiteAction } from '@/lib/actions';
import { User } from 'lucide-react';

export const metadata = {
    title: 'Medi Vibe Tutors | All Tutors',
    description: 'Find Your Favourite Tutor',
};

const DetailsCard = async ({ slug }) => {
    const tutor = await getTutorBySlug(slug)
    const allBookings = await getBookings();

    const bookedTimeSlot = allBookings.filter((booking)=>Object.values(tutor.timeSlot).includes(booking.selectedSlot));
    
    if (!tutor) {
        return <div>Tutor not found</div>;
    }

    const { tutorName, photo, institutionExperience, hourlyFee, rating = 4.9, totalStudents = '1.2k+', totalSessions = '850', bio, description, expertise, competencies, timeSlot = [] } = tutor;
    const isImageByExtension = (url) => {
        if (!url) return false;

        return /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(url);
    };
    const isValidImage = photo && photo.startsWith("http") && isImageByExtension(photo);

    return (
        <div className="bg-gray-50 p-4 sm:p-8 flex items-center justify-center">
            <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 flex flex-col md:flex-row gap-6 items-start">
                            {!isValidImage ? (
                                <User size={280} className='text-secondary' />
                            ) : (
                                <Image
                                    height={100}
                                    width={100}
                                    src={photo}
                                    alt={tutorName}
                                    className="w-32 h-32 rounded-lg object-cover shadow-sm border border-gray-100" />
                            )}


                            <div className="flex-1 w-full">
                                <div className="flex items-center gap-2 mb-1">
                                    <h1 className="text-2xl font-bold text-gray-900">{tutorName}</h1>
                                    <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" /></svg>
                                        VERIFIED
                                    </span>
                                </div>
                                <p className="text-gray-500 text-sm font-medium tracking-wide mb-4">{institutionExperience}</p>

                                <div className="h-px bg-gray-100 w-full my-4"></div>

                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase font-semibold">Rating</p>
                                        <div className="flex items-center justify-center gap-1 mt-1">
                                            <span className="text-xl font-bold text-gray-900">{rating}</span>
                                            <span className="text-secondary text-sm">★</span>
                                            <span className="text-secondary text-xs">star</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase font-semibold">Students</p>
                                        <p className="text-xl font-bold text-gray-900 mt-1">{totalStudents}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase font-semibold">Sessions</p>
                                        <p className="text-xl font-bold text-gray-900 mt-1">{totalSessions}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                        <div className="border-b border-gray-100 px-6 pt-6 flex gap-6">
                            <button className="text-emerald-600 font-bold border-b-2 border-emerald-600 pb-3 text-sm uppercase tracking-wide">Bio</button>
                            <button className="text-gray-500 font-medium hover:text-gray-700 pb-3 text-sm uppercase tracking-wide">Experience</button>
                            <button className="text-gray-500 font-medium hover:text-gray-700 pb-3 text-sm uppercase tracking-wide">Reviews</button>
                        </div>

                        <div className="p-6">
                            <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                                <p>{bio || description || `${tutorName} is a professional tutor with expertise in ${institutionExperience}. With years of experience, they bring real-world knowledge and personalized teaching methodology to help students excel.`}</p>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Core Competencies</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                                    {competencies && competencies.length > 0 ? (
                                        competencies.map((comp, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <span className="text-emerald-600">✓</span>
                                                <span className="text-gray-700 text-sm font-medium">{comp}</span>
                                            </div>
                                        ))
                                    ) : (
                                        <>
                                            <div className="flex items-center gap-2">
                                                <span className="text-emerald-600">✓</span>
                                                <span className="text-gray-700 text-sm font-medium">Expert in {institutionExperience}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-emerald-600">✓</span>
                                                <span className="text-gray-700 text-sm font-medium">Personalized Learning</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-emerald-600">✓</span>
                                                <span className="text-gray-700 text-sm font-medium">Interactive Sessions</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-emerald-600">✓</span>
                                                <span className="text-gray-700 text-sm font-medium">Proven Track Record</span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-6">

                        <div className="bg-primary p-6 text-white">
                            <p className="text-xs font-semibold uppercase tracking-wider opacity-75 mb-1">Hourly Rate</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-bold">৳{hourlyFee}</span>
                                <span className="text-sm opacity-75">/hour</span>
                            </div>
                        </div>

                        <TimeSlotSelector
                            hourlyFee={hourlyFee}
                            timeSlot={timeSlot}
                            bookedTimeSlot={bookedTimeSlot}
                            institutionExperience={institutionExperience}
                            tutorName={tutorName}
                            bookingSubmiteAction={bookingSubmiteAction}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DetailsCard;