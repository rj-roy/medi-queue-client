'use client';

import Image from 'next/image';
import { Trophy, Quote } from 'lucide-react';

export default function SuccessStories() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        Student Success Stories
                    </h2>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Large Testimonial Card - Left */}
                    <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-8 lg:p-10">
                        <Quote className="w-10 h-10 text-[#8B3A3A] mb-6" />

                        <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
                            &quot;MediQueue transformed my residency application journey. The personalized feedback from Dr. Thorne helped me master complex cardiac diagnostic
                            procedures in weeks.&quot;
                        </blockquote>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                                <Image
                                    src="https://randomuser.me/api/portraits/women/1.jpg"
                                    alt="Maya Rodriguez"
                                    width={48}
                                    height={48}
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">Maya Rodriguez</p>
                                <p className="text-sm text-gray-500">Internal Medicine Resident</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Stacked Cards */}
                    <div className="space-y-6">

                        {/* Stats Card - Top Right */}
                        <div className="bg-teal-900 rounded-2xl p-8 text-center">
                            <p className="text-3xl lg:text-4xl font-bold text-white mb-2">
                                1,200+
                            </p>
                            <p className="text-teal-200 text-sm font-medium uppercase tracking-wider">
                                Residencies Secured
                            </p>
                        </div>

                        {/* Testimonial Card - Bottom Right */}
                        <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
                            <div className="absolute inset-0">
                                <Image
                                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop"
                                    alt="David Kim studying"
                                    fill
                                    className="object-cover opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            </div>

                            <div className="relative p-6 lg:p-7">
                                <blockquote className="text-white text-sm leading-relaxed mb-4">
                                    &quot;The resource library is second to none. Everything is categorized
                                    for clinical speed.&quot;
                                </blockquote>
                                <p className="text-gray-300 text-sm font-medium">
                                    — David Kim, MS3
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Left Card - Full Width on Mobile */}
                    <div className="lg:col-span-1 bg-[#8B3A3A] rounded-2xl p-8 flex items-center gap-5">
                        <div className="shrink-0">
                            <Trophy className="w-12 h-12 text-white" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white mb-1">
                                Top 5%
                            </p>
                            <p className="text-red-100 text-sm">
                                Board Score Improvement
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}