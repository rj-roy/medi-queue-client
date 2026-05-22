// components/Footer.jsx
import Link from 'next/link';
import {
    Globe,
    Share2,
    Users,
    ChevronRight
} from 'lucide-react';

export default function FooterC() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        platform: [
            { name: 'How it Works', href: '/how-it-works' },
            { name: 'For Institutions', href: '/institutions' },
            { name: 'Pricing', href: '/pricing' },
        ],
        tutors: [
            { name: 'Become a Tutor', href: '/become-tutor' },
            { name: 'Tutor Directory', href: '/tutors' },
            { name: 'Support Center', href: '/support' },
        ],
        legal: [
            { name: 'Privacy Policy', href: '/privacy' },
            { name: 'Terms of Service', href: '/terms' },
            { name: 'Compliance', href: '/compliance' },
        ],
    };

    return (
        <footer className="bg-white border-t border-gray-200">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                            MediQueue
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Advancing medical excellence through elite mentorship and evidence-based learning protocols.
                        </p>

                        {/* Social Icons */}
                        <div className="flex space-x-4 pt-2">
                            <a
                                href="#"
                                className="text-gray-600 hover:text-emerald-600 transition-colors"
                                aria-label="Website"
                            >
                                <Globe className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-emerald-600 transition-colors"
                                aria-label="Share"
                            >
                                <Share2 className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-emerald-600 transition-colors"
                                aria-label="Community"
                            >
                                <Users className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Platform Links */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Platform</h4>
                        <ul className="space-y-3">
                            {footerLinks.platform.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 hover:text-emerald-600 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tutors Links */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Tutors</h4>
                        <ul className="space-y-3">
                            {footerLinks.tutors.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 hover:text-emerald-600 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 hover:text-emerald-600 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-600 text-sm">
                            © {currentYear} MediQueue Medical Education. All rights reserved.
                        </p>

                        <div className="flex space-x-6">
                            <Link
                                href="/legal"
                                className="text-gray-600 hover:text-emerald-600 transition-colors text-sm font-medium"
                            >
                                Legal
                            </Link>
                            <Link
                                href="/privacy"
                                className="text-gray-600 hover:text-emerald-600 transition-colors text-sm font-medium"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/newsletter"
                                className="text-gray-600 hover:text-emerald-600 transition-colors text-sm font-medium"
                            >
                                Newsletter
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}