import { ClipboardList, Search, UserSearch, BookOpen, ShieldCheck, Clock } from 'lucide-react';
import Link from 'next/link';

export default function MyTutors() {
  return (
    <div className="bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
      {/* Illustration */}
      <div className="relative mb-10 ">
        <div className="w-40 h-40 border-2 border-dashed border-secondary rounded-xl flex items-center justify-center">
          <div className="relative">
            <div className="w-20 h-24 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center animate-pulse">
              <ClipboardList className="w-10 h-10 text-gray-400" />
            </div>
            <div className="absolute -top-3 -right-3 bg-secondary rounded-md p-1.5 shadow-md">
              <Search className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
        No Sessions Found
      </h2>

      <p className="text-gray-500 text-center max-w-md mb-10 leading-relaxed text-sm">
        Your medical learning queue is currently empty. Connect with top-tier 
        healthcare professionals to start your specialized growth journey today.
      </p>

      <div className="flex gap-4 mb-20">
        <Link href={'/tutors'} className="bg-secondary/90 hover:bg-secondary text-white px-6 py-2.5 rounded-lg flex items-center gap-2 font-medium text-sm transition-colors">
          <UserSearch className="w-4 h-4" />
          Find a Tutor
        </Link>
        <Link href={'/my-booked-tutors'} className="bg-white border border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg flex items-center gap-2 font-medium text-sm hover:bg-gray-50 transition-colors">
          Browse Subjects
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-10 max-w-2xl w-full">
        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-2">
            <ShieldCheck className="w-5 h-5 text-primary" />
          </div>
          <h4 className="text-[11px] font-semibold text-gray-800 tracking-wider uppercase mb-1">
            VERIFIED DOCTORS
          </h4>
          <p className="text-[10px] text-gray-500 leading-tight">
            Learn from experienced<br/>medical professionals
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-2">
            <Clock className="w-5 h-5 text-primary" />
          </div>
          <h4 className="text-[11px] font-semibold text-gray-800 tracking-wider uppercase mb-1">
            FLEXIBLE SLOTS
          </h4>
          <p className="text-[10px] text-gray-500 leading-tight">
            Schedule sessions at<br/>your convenience
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-2">
            <BookOpen className="w-5 h-5 text-primary" />
          </div>
          <h4 className="text-[11px] font-semibold text-gray-800 tracking-wider uppercase mb-1">
            CASE STUDIES
          </h4>
          <p className="text-[10px] text-gray-500 leading-tight">
            Real-world medical<br/>case discussions
          </p>
        </div>
      </div>
    </div>
  );
}