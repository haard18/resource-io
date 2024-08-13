import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-black text-sky-100 shadow-md w-full">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-lg font-bold">
                    <a href="/" className="hover:text-sky-400">Study Manager</a>
                </div>
                <div className="hidden laptop:flex space-x-8">
                    <a href="/resources" className="hover:text-sky-400">Resources</a>
                    <a href="/notes" className="hover:text-sky-400">Notes</a>
                    <a href="/assignments" className="hover:text-sky-400">Assignments</a>
                </div>
                <div className="laptop:hidden flex items-center">
                    <button onClick={toggleMenu} className="outline-none mobile-menu-button">
                        <svg
                            className="w-6 h-6 text-sky-100"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`mobile-menu ${isOpen ? 'block' : 'hidden'} laptop:hidden bg-black text-sky-100`}>
                <a href="/resources" className="block px-4 py-2 text-sm hover:bg-sky-700">Resources</a>
                <a href="/notes" className="block px-4 py-2 text-sm hover:bg-sky-700">Notes</a>
                <a href="/assignments" className="block px-4 py-2 text-sm hover:bg-sky-700">Assignments</a>
                <a href="/login" className="block px-4 py-2 text-sm hover:bg-sky-700">Login</a>
                <a href="/signup" className="block px-4 py-2 text-sm hover:bg-sky-700">Sign Up</a>
            </div>
        </nav>
    );
};

export default Navbar;
