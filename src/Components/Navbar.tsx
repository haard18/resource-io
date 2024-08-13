import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-600 text-white shadow-md w-full">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-lg font-bold">
                    <a href="/" className="hover:text-gray-200">Study Manager</a>
                </div>
                <div className="hidden laptop:flex space-x-8">
                    <a href="/resources" className="hover:text-gray-200">Resources</a>
                    <a href="/notes" className="hover:text-gray-200">Notes</a>
                    <a href="/assignments" className="hover:text-gray-200">Assignments</a>
                </div>
                {/* have to add the github logo + contribute button */}
                {/* <div className="hidden laptop:flex space-x-4">
                    <button className="bg-blue-800 px-4 py-2 rounded hover:bg-blue-700">Login</button>
                    <button className="bg-blue-800 px-4 py-2 rounded hover:bg-blue-700">Sign Up</button>
                </div> */}
                <div className="laptop:hidden flex items-center">
                    <button onClick={toggleMenu} className="outline-none mobile-menu-button">
                        <svg
                            className="w-6 h-6 text-white"
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
            <div className={`mobile-menu ${isOpen ? 'block' : 'hidden'} laptop:hidden`}>
                <a href="/resources" className="block px-4 py-2 text-sm hover:bg-blue-700">Resources</a>
                <a href="/notes" className="block px-4 py-2 text-sm hover:bg-blue-700">Notes</a>
                <a href="/assignments" className="block px-4 py-2 text-sm hover:bg-blue-700">Assignments</a>
                <a href="/login" className="block px-4 py-2 text-sm hover:bg-blue-700">Login</a>
                <a href="/signup" className="block px-4 py-2 text-sm hover:bg-blue-700">Sign Up</a>
            </div>
        </nav>
    );
};

export default Navbar;
