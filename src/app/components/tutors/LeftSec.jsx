'use client'

import { useState } from "react";

const LeftSec = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategory = (category) => {
        setSelectedCategories((prev) => {
            if (prev.includes(category)) {
                return prev.filter((item) => item !== category);
            }

            return [...prev, category];
        });
    };
    // console.log(selectedCategories);

    return (
        <aside className="w-full border-b border-gray-200 p-5 lg:w-67.5 lg:border-b-0 lg:border-r">
            <div className="">
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
                                    type="checkbox"
                                    checked={selectedCategories.includes(item.toLowerCase())}
                                    onChange={() => handleCategory(item.toLowerCase())}
                                    value={item.toLowerCase()}
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
            </div>
        </aside>
    );
};

export default LeftSec;