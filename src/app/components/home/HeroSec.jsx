import { TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSec() {
    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    <div className="space-y-8">
                        <div className="inline-block">
                            <span className="px-4 py-1.5 bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider rounded-full">
                                Next Generation Medical Education
                            </span>
                        </div>

                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                            Master the Art of Medicine with{' '}
                            <span className="text-secondary">Elite Mentors</span>
                        </h1>

                        <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                            Connect with leading clinical experts and specialists. Personalized 1-on-1
                            sessions designed to elevate your medical expertise through clinical
                            precision and professional growth.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href={'/tutors'} className="px-8 py-3.5 bg-primary hover:bg-primary text-white font-semibold rounded-lg transition-colors shadow-lg shadow-red-900/20">
                                Find Your Mentor
                            </Link>
                            <button className="px-8 py-3.5 bg-transparent border-2 border-teal-700 text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition-colors">
                                Explore Curriculum
                            </button>
                        </div>

                        <div className="flex items-center gap-4 pt-4">
                            <div className="flex -space-x-3">
                                
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
                                    +2k
                                </div>
                            </div>
                            <div className="text-sm">
                                <p className="font-semibold text-gray-900">2.5k+ Active Students</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                height={500}
                                width={500}
                                loading='eager'
                                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
                                alt="Medical professionals reviewing scans"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                        </div>

                        <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl border border-gray-100 p-5">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-green-100 rounded-lg">
                                    <TrendingUp className="w-5 h-5 text-green-700" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-900">98%</p>
                                    <p className="text-sm text-gray-500">Exam Success Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}