// 'use client'
// import { Suspense, useState } from "react";
// import TutorsCard from "../ui/TutorsCard";
// import CardSkeleton from "../ui/CardSkeleton";
// import { Link, Star } from "lucide-react";
// import Image from "next/image";

// const TuMainContent = ({ tutors }) => {
//     const [selectedCategories, setSelectedCategories] = useState([]);

//     const handleCategory = (category) => {
//         setSelectedCategories((prev) => {
//             if (prev.includes(category)) {
//                 return prev.filter((item) => item !== category);
//             }

//             return [...prev, category];
//         });
//         // console.log(selectedCategories);
//     };

//     return (
//         <div className="flex flex-col lg:flex-row">

//             <aside className="w-full border-b border-gray-200 p-5 lg:w-67.5 lg:border-b-0 lg:border-r">
//                 <h2 className="text-2xl font-semibold text-[#173f3c]">Filters</h2>

//                 <div className="mt-8">
//                     <h3 className="text-sm font-semibold tracking-wider text-gray-700">
//                         Subject Specialty
//                     </h3>
//                     <div className="mt-4 space-y-3 text-sm text-gray-700">
//                         {[
//                             "Physics",
//                             "Biology",
//                             "Math",
//                             "Chemistry",
//                             "Bangla",
//                             "BBA",
//                         ].map((item, index) => (
//                             <label key={item} className="flex items-center gap-3">
//                                 <input
//                                     type="checkbox"
//                                     checked={selectedCategories.includes(item.toLowerCase())}
//                                     onChange={() => handleCategory(item.toLowerCase())}
//                                     value={item.toLowerCase()}
//                                     className="h-5 w-5 rounded border-gray-300 accent-[#0f5a55]"
//                                 />
//                                 <span>{item}</span>
//                             </label>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="mt-8">
//                     <h3 className="text-sm font-semibold tracking-wider text-gray-700">
//                         Price Range ($)
//                     </h3>
//                     <input
//                         type="range"
//                         min="40"
//                         max="250"
//                         defaultValue="120"
//                         className="mt-5 w-full accent-[#0f5a55]"
//                     />
//                     <div className="mt-3 flex justify-between text-sm text-gray-600">
//                         <span>$40</span>
//                         <span>$250+</span>
//                     </div>
//                 </div>

//                 <div className="mt-8">
//                     <h3 className="text-sm font-semibold tracking-wider text-gray-700">
//                         Minimum Rating
//                     </h3>
//                     <div className="mt-4 space-y-3">
//                         <button className="flex w-full items-center gap-3 border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-50">
//                             <span className="text-lg text-[#b45309]">☆</span>
//                             <span>4.5 & up</span>
//                         </button>
//                         <button className="flex w-full items-center gap-3 border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-50">
//                             <span className="text-lg text-[#b45309]">☆</span>
//                             <span>4.0 & up</span>
//                         </button>
//                     </div>
//                 </div>
//             </aside>


//             {/* Main content */}
//             <main className="flex-1 p-5 lg:p-6">
//                 <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//                     <div className="relative w-full lg:max-w-190">
//                         <input
//                             type="text"
//                             placeholder="Search by name, expertise, or university..."
//                             className="w-full rounded-xl border border-gray-300 bg-white py-4 pl-12 pr-4 text-sm outline-none ring-0 placeholder:text-gray-400 focus:border-[#0f5a55]"
//                         />
//                         <svg
//                             className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             viewBox="0 0 24 24"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="m21 21-4.35-4.35m1.35-5.15a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
//                             />
//                         </svg>
//                     </div>

//                     <div className="flex items-center gap-2 text-sm text-gray-600 text-nowrap">
//                         <span>Sort by:</span>
//                         <button className="flex items-center gap-2 font-semibold text-[#173f3c]">
//                             Highest Rated
//                             <svg
//                                 className="h-4 w-4"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 viewBox="0 0 24 24"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="m19 9-7 7-7-7"
//                                 />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>

//                 <div className="mt-8 flex items-center justify-between">
//                     <p className="text-sm text-gray-600">
//                         Showing <span className="font-semibold text-gray-900">{tutors.length}</span>{" "}
//                         qualified tutors
//                     </p>
//                 </div>

//                 {/* <TutorsCard tutors={tutors} /> */}

//                 <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
//                     {tutors.map((tutor, index) => {
//                         const slug = tutor.tutor_name.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
//                         return (
//                             // <Suspense key={index} fallback={<CardSkeleton />}>
//                                 <Link key={index} href={`tutors/${slug}`} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
//                                     <div className="relative h-57.5 w-full bg-gray-200 overflow-hidden">
//                                         <div className="block">
//                                             <Image
//                                                 src={tutor.photo}
//                                                 alt={tutor.tutor_name}
//                                                 // fill
//                                                 height={500}
//                                                 width={500}
//                                                 loading="eager"
//                                                 className="object-fit"
//                                             />
//                                         </div>
//                                         <div className="absolute right-3 top-3 rounded bg-white/90 px-2 py-1 text-xs font-medium text-gray-700 shadow">
//                                             <Star className='text-secondary' />
//                                         </div>
//                                     </div>

//                                     <div className="p-4">
//                                         <h3 className="text-2xl font-medium text-primary">
//                                             {tutor.tutor_name}
//                                         </h3>
//                                         <p title={tutor.institution_experience}
//                                             className="mt-1 text-sm tracking-wide text-gray-600 truncate">
//                                             {tutor.institution_experience}
//                                         </p>

//                                         <div className="my-4 border-t border-gray-200" />

//                                         <div className="flex items-end justify-between">
//                                             <div>
//                                                 <p className="text-sm text-gray-500">Hourly Fee</p>
//                                                 <p className="text-3xl font-light text-gray-900">
//                                                     ${tutor.hourly_fee}
//                                                 </p>
//                                             </div>

//                                             <button className="rounded-full bg-[#f46d5d] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#eb5f4f]">
//                                                 Book Session
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </Link>
//                             // </Suspense>

//                         )
//                     }
//                     )}
//                 </div>



//                 <div className="mt-10 flex items-center justify-center gap-3">
//                     {["‹", "1", "2", "3", "…", "12", "›"].map((item, index) => (
//                         <button
//                             key={index}
//                             className={`h-10 min-w-10 rounded border px-3 text-sm ${item === "1"
//                                 ? "border-[#0f5a55] bg-[#0f5a55] text-white"
//                                 : "border-gray-300 bg-white text-gray-700"
//                                 }`}
//                         >
//                             {item}
//                         </button>
//                     ))}
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default TuMainContent;