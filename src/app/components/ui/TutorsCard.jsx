// 'use client'
import { getAllTuros } from '@/lib/getData';
import Image from 'next/image';
import React, { Suspense, use } from 'react';
import CardSkeleton from './CardSkeleton';
import Link from 'next/link';
import { Star, User } from 'lucide-react';

const TutorsCard = async () => {
    const tutors = await getAllTuros();
    const isImageByExtension = (url) => {
        if (!url) return false;

        return /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(url);
    };
    return (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {tutors.map((tutor, index) => {
                const slug = tutor.tutorName.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
                const id = tutor._id;
                // console.log(id);
                const isValidImage =
                    tutor?.photo &&
                    tutor.photo.startsWith("http") &&
                    isImageByExtension(tutor.photo);

                return (
                    <Suspense key={index} fallback={<CardSkeleton />}>
                        <Link href={`tutors/${id}`} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                            <div className="relative h-57.5 w-full bg-gray-200 overflow-hidden">
                                <div className="block">
                                    {!isValidImage ? (
                                        <User size={280} className='text-secondary'/>
                                    ) : (
                                        <Image
                                            src={tutor.photo}
                                            alt={tutor.tutorName || "Tutor"}
                                            width={500}
                                            height={500}
                                            loading='eager'
                                            className="object-fit"
                                        />
                                    )}
                                </div>
                                <div className="absolute right-3 top-3 rounded bg-white/90 px-2 py-1 text-xs font-medium text-gray-700 shadow">
                                    <Star className='text-secondary' />
                                </div>
                            </div>

                            <div className="p-4">
                                <h3 className="text-2xl font-medium text-primary">
                                    {tutor.tutorName}
                                </h3>
                                <p title={tutor.institutionExperience}
                                    className="mt-1 text-sm tracking-wide text-gray-600 truncate">
                                    {tutor.institutionExperience}
                                </p>

                                {tutor.rating && (
                                    <div className="mt-2 flex items-center gap-1">
                                        <span className="text-xs font-semibold text-amber-600">★ {tutor.rating}</span>
                                    </div>
                                )}

                                <div className="my-4 border-t border-gray-200" />

                                <div className="flex items-end justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500">Hourly Fee</p>
                                        <p className="text-3xl font-light text-gray-900">
                                            ৳{tutor.hourlyFee}
                                        </p>
                                    </div>

                                    <button className="rounded-full bg-[#f46d5d] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#eb5f4f]">
                                        Book Session
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </Suspense>

                )
            }
            )}
        </div>
    );
};

export default TutorsCard;