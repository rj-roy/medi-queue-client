'use client';

import { useState } from 'react';

export default function NewsletterS() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Subscribed:', email);
        setEmail('');
    };

    return (
        <section className="py-16 bg-teal-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Newsletter Container */}
                <div className="bg-teal-900/50 rounded-3xl p-8 lg:p-12 border border-teal-800">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                        {/* Left Content */}
                        <div className="flex-1">
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                                Stay at the Forefront of Medicine
                            </h2>
                            <p className="text-teal-200 text-base leading-relaxed max-w-xl">
                                Weekly clinical insights, tutor spotlights, and professional growth
                                strategies delivered to your inbox.
                            </p>
                        </div>

                        {/* Right Content - Form */}
                        <div className="flex-shrink-0 w-full lg:w-auto">
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your professional email"
                                    required
                                    className="flex-1 px-5 py-3 bg-teal-800/50 border border-teal-700 rounded-lg text-white placeholder-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-[#8B3A3A] hover:bg-[#7A3232] text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
                                >
                                    Subscribe Now
                                </button>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}