import { Users, DollarSign, CalendarCheck, Search, Pencil, Trash2, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import MyTutorsCard from './ui/MyTutorsCard';
import { getBookings } from '@/lib/getData';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { deleteTutors } from '@/lib/actions';

export default async function TutorsManagement({allTutors}) {
    const allBookings = await getBookings();
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const userId = session.user.id;
    return (
        <div className="bg-gray-50 p-6 md:p-8 mb-20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Tutors Management
                    </h1>
                    <p className="text-gray-500 mt-1">
                        Manage your clinical educators and track session performance.
                    </p>
                </div>
                <Link href={'/add-tutor'} className="mt-4 md:mt-0 bg-secondary hover:bg-secondary text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium transition-colors">
                    <Plus className="w-4 h-4" />
                    Register New Tutor
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/30 flex items-center justify-center">
                            <Users className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-gray-600">Total Tutors</span>
                    </div>
                    <div className="flex items-end gap-3">
                        <span className="text-3xl font-bold text-gray-900">{allTutors.length}</span>
                        <span className="text-sm text-secondary mb-1">+30 this month</span>
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/30 flex items-center justify-center">
                            <DollarSign className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-gray-600">Avg. Hourly Fee</span>
                    </div>
                    <div className="flex items-end gap-3">
                        <span className="text-3xl font-bold text-gray-900">$85</span>
                        <span className="text-sm text-gray-500 mb-1">Across all subjects</span>
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                            <CalendarCheck className="w-5 h-5 text-secondary" />
                        </div>
                        <span className="text-sm font-medium text-gray-600">Active Sessions</span>
                    </div>
                    <div className="flex items-end gap-3">
                        <span className="text-3xl font-bold text-gray-900">{allBookings.length}</span>
                        <span className="text-sm text-gray-500 mb-1">Currently scheduled</span>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 sm:mb-0">
                        Tutor Profiles
                    </h2>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search tutors or subjects..."
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent w-full sm:w-64"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-4">
                                    Tutor
                                </th>
                                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-4">
                                    Subject
                                </th>
                                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-4">
                                    Experience
                                </th>
                                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-4">
                                    Hourly Fee
                                </th>
                                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-4">
                                    Status
                                </th>
                                <th className="text-right text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-4">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <MyTutorsCard tutors={allTutors} userId={userId} deleteTutors={deleteTutors}/>
                        </tbody>
                    </table>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 py-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-4 sm:mb-0">
                        Showing users.profile.length of <span>{allTutors.length}</span> tutors
                    </p>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1">
                            <ChevronLeft className="w-4 h-4" />
                            Previous
                        </button>
                        <button className="px-3 py-1.5 bg-secondary text-white rounded text-sm font-medium">
                            1
                        </button>
                        <button className="px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-1">
                            Next
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}