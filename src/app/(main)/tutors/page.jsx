import LeftSec from "@/app/components/tutors/LeftSec";
import TutorsCard from "@/app/components/ui/TutorsCard";
import { getAllTuros } from "@/lib/getData";

export const metadata = {
    title: 'Medi Vibe Tutors | All Tutors',
    description: 'Find Your Favourite Tutor',
};

const Tutors = async () => {
    const tutors = await getAllTuros();
    console.log(tutors);
    return (
        <div className="min-h-screen bg-[#f8f8f6] px-4 py-6">
            <div className="mx-auto max-w-312.5 rounded-2xl border border-gray-200 bg-white shadow-sm">
                <div className="flex flex-col lg:flex-row">
                    {/* Sidebar */}
                    {/* <aside className="w-full border-b border-gray-200 p-5 lg:w-67.5 lg:border-b-0 lg:border-r">
                         <h2 className="text-2xl font-semibold text-[#173f3c]">Filters</h2>

                        <div className="mt-8">
                            <h3 className="text-sm font-semibold tracking-wider text-gray-700">
                                Subject Specialty
                            </h3>
                            <div className="mt-4 space-y-3 text-sm text-gray-700">
                                {[
                                    "Physics",
                                    "Biology",
                                    "Math",
                                    "Chemistry",
                                    "Bangla",
                                    "BBA",
                                ].map((item, index) => (
                                    <label key={item} className="flex items-center gap-3">
                                        <input
                                            value={item.toLowerCase()}
                                            type="checkbox"
                                            defaultChecked={index === 2}
                                            className="h-5 w-5 rounded border-gray-300 accent-[#0f5a55]"
                                        />
                                        <span>{item}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-sm font-semibold tracking-wider text-gray-700">
                                Price Range ($)
                            </h3>
                            <input
                                type="range"
                                min="40"
                                max="250"
                                defaultValue="120"
                                className="mt-5 w-full accent-[#0f5a55]"
                            />
                            <div className="mt-3 flex justify-between text-sm text-gray-600">
                                <span>$40</span>
                                <span>$250+</span>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-sm font-semibold tracking-wider text-gray-700">
                                Minimum Rating
                            </h3>
                            <div className="mt-4 space-y-3">
                                <button className="flex w-full items-center gap-3 border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-50">
                                    <span className="text-lg text-[#b45309]">☆</span>
                                    <span>4.5 & up</span>
                                </button>
                                <button className="flex w-full items-center gap-3 border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-50">
                                    <span className="text-lg text-[#b45309]">☆</span>
                                    <span>4.0 & up</span>
                                </button>
                            </div>
                        </div>
                    </aside> */}
                    <div>
                        <LeftSec />
                    </div>

                    <main className="flex-1 p-5 lg:p-6">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                            <div className="relative w-full lg:max-w-190">
                                <input
                                    type="text"
                                    placeholder="Search by name, expertise, or university..."
                                    className="w-full rounded-xl border border-gray-300 bg-white py-4 pl-12 pr-4 text-sm outline-none ring-0 placeholder:text-gray-400 focus:border-[#0f5a55]"
                                />
                                <svg
                                    className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m21 21-4.35-4.35m1.35-5.15a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
                                    />
                                </svg>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-gray-600 text-nowrap">
                                <span>Sort by:</span>
                                <button className="flex items-center gap-2 font-semibold text-[#173f3c]">
                                    Highest Rated
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m19 9-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center justify-between">
                            <p className="text-sm text-gray-600">
                                Showing <span className="font-semibold text-gray-900">{tutors.length}</span>{" "}
                                qualified tutors
                            </p>
                        </div>
                        <TutorsCard />
                        <div className="mt-10 flex items-center justify-center gap-3">
                            {["‹", "1", "2", "3", "…", "12", "›"].map((item, index) => (
                                <button
                                    key={index}
                                    className={`h-10 min-w-10 rounded border px-3 text-sm ${item === "1"
                                        ? "border-[#0f5a55] bg-[#0f5a55] text-white"
                                        : "border-gray-300 bg-white text-gray-700"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};
export default Tutors;