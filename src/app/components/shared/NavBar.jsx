'use client'
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../ui/Themetoggle";
import { authClient } from "@/lib/auth-client";
import { CircleUser, LogOut, User } from "lucide-react";

const NavBar = ({ bookingData }) => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { data: session, error, isPending } = authClient.useSession();
    const userId = session?.user?.id
    const matching = bookingData?.find((b) => {
        return b.whoBooked.id === userId
    });

    const links = !session
        ? [
            { name: "Home", href: "/" },
            { name: "Tutors", href: "/tutors" },
        ]
        : [
            { name: "Home", href: "/" },
            { name: "Tutors", href: "/tutors" },
            { name: "Add Tutor", href: "/add-tutor" },
            { name: "My Tutors", href: "/my-tutors" },
            { name: "My Booked Tutors", href: "/my-booked-tutors" },
        ];

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const renderedLinks = links.map((link) => (
        <Link
            key={link.name}
            href={link.href}
            className={`nav-link font-medium no-underline hover:text-acent transition-colors duration-200
            ${pathname === link.href ? 'text-secondary underline underline-offset-4 font-bold!' : ''}`}
            onClick={closeMobileMenu}
        >
            {link.name}
        </Link>
    ));

    const renderedAuth = (
        <div className="lg:flex gap-2 space-y-5 lg:space-y-0 justify-center items-center">
            {
                session ?
                    <>
                        <div className="lg:flex hidden justify-center items-center gap-2">

                            <p>Wecome, {session.user.name} </p>
                            <CircleUser
                                onClick={() => setIsMobileMenuOpen(true)}
                                size={30} className="hover:text-secondary" />

                        </div>
                        <div onClick={async () => await authClient.signOut()} className="lg:hidden w-30 mx-auto text-center border rounded-full border-gray-600 hover:border-none">
                            <Link href="/signin" className="no-underline hover:bg-acent transition-all duration-300 block rounded-full p-1.5 px-5 hover:text-white">
                                Log Out
                            </Link>
                        </div>
                    </> : <>
                        <div className="w-30 mx-auto text-center border rounded-full border-gray-600 hover:border-none">
                            <Link href="/signin" className="no-underline hover:bg-acent transition-all duration-300 block rounded-full p-1.5 px-5 hover:text-white">
                                Log In
                            </Link>
                        </div>
                        <button className="w-30">
                            <Link href="/signup" className="no-underline text-white bg-secondary hover:bg-acent transition-all duration-300 p-2 px-5 rounded-full">
                                Sign Up
                            </Link>
                        </button>
                    </>

            }

        </div>
    );

    return (
        <nav className="px-4 lg:px-12 py-7 flex justify-between items-center relative shadow-xl">
            <div className="flex justify-center items-center">
                <Link href='/' className="font-serif text-xl font-bold italic text-ink :text-parchment no-underline tracking-snug">
                    Medi Queue
                </Link>
            </div>

            <div className="hidden lg:flex items-center gap-9">
                <div className="flex items-center gap-5">
                    {renderedLinks}
                </div>

            </div>
            <div className="lg:flex items-center gap-3 hidden">
                {
                    isPending ?
                        <div className="w-30 mx-auto text-center border rounded-full border-gray-600 hover:border-none">
                            <Link href="/signin" className="no-underline hover:bg-acent transition-all duration-300 block rounded-full p-1.5 px-5 hover:text-white">
                                Loading...
                            </Link>
                        </div> :
                        <>
                            {renderedAuth}
                            <ThemeToggle />
                            <div>
                                <LogOut onClick={async () => await authClient.signOut()} className="hover:text-secondary" />
                            </div>
                        </>
                }

            </div>

            <button
                className="lg:hidden p-2 text-ink  focus:outline-none"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
            >

                {
                    session ? <>
                        <div className="flex justify-center items-center gap-2">
                            <div>{session.user.name}</div>
                            <CircleUser size={30} />
                        </div>
                    </> :
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                }
            </button>

            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={closeMobileMenu}
            />

            <div className={`fixed top-0 right-0 h-full w-72 bg-white text-black  z-50 transform transition-transform duration-300 ease-in-out shadow-xl ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-end p-4">
                    <button
                        onClick={closeMobileMenu}
                        className="p-1 hover:opacity-70 transition-opacity flex justify-between w-full"
                        aria-label="Close navigation menu"
                    >
                        <CircleUser size={30} />
                        <div className="flex items-center justify-center gap-2">
                            <ThemeToggle />
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>

                    </button>
                </div>

                <div className="flex flex-col gap-2 px-6 py-2">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium tracking-widest uppercase py-2 border-b border-gray-200 ${pathname === link.href ? 'text-red font-bold' : 'text-ink '}`}
                            onClick={closeMobileMenu}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="px-6 py-6 flex flex-col gap-4 items-center">
                    {renderedAuth}

                </div>
            </div>
        </nav>
    );
};

export default NavBar;