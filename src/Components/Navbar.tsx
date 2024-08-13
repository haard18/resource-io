import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white shadow-md w-[100%]">
            <div className="container mx-auto flex justify-between items-center py-4 px-6 ">
                <div className="text-lg font-bold">
                    <a href="/" className="hover:text-gray-200">Study Manager</a>
                </div>
                <div className="space-x-8">
                    
                    <a href="/resources" className="hover:text-gray-200">Resources</a>
                    <a href="/notes" className="hover:text-gray-200">Notes</a>
                    <a href="/assignments" className="hover:text-gray-200">Assignments</a>
                   
                </div>
                <div className="space-x-4">
                    <button className="bg-blue-800 px-4 py-2 rounded hover:bg-blue-700">Login</button>
                   
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
