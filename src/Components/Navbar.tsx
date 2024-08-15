import { useState } from 'react';
import logo from '../assets/logo.jpeg';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    
    const handleNavigation = (path: string) => {
        navigate(path);
    };
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 text-sky-100 shadow-md w-full ">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo and Name */}
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="" className='w-8 h-18 rounded-full'/>
                    <button
                        onClick={() => handleNavigation('/')}
                        className="text-lg font-bold hover:text-sky-400 focus:outline-none"
                    >
                        Resource.IO
                    </button>
                </div>



                {/* Navigation Buttons */}
                <div className="hidden laptop:flex space-x-4">
                    <button
                        onClick={() => handleNavigation('/resources')}
                        className="bg-gray-600 text-white font-semibold py-2 px-4 rounded hover:bg-sky-600 transition duration-300 ease-in-out focus:outline-none"
                    >
                        Resources
                    </button>
                    <button
                        onClick={() => handleNavigation('/notes')}
                        className="bg-gray-600 text-white font-semibold py-2 px-4 rounded hover:bg-sky-600 transition duration-300 ease-in-out focus:outline-none"
                    >
                        Notes
                    </button>
                    <button
                        onClick={() => handleNavigation('/pyq')}
                        className="bg-gray-600 text-white font-semibold py-2 px-4 rounded hover:bg-sky-600 transition duration-300 ease-in-out focus:outline-none"
                    >
                        PYQs
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="laptop:hidden flex items-center justify-center">
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

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isOpen ? 'block' : 'hidden'} laptop:hidden bg-black text-sky-100`}>
                <button
                    onClick={() => handleNavigation('/resources')}
                    className="block w-full text-left px-4 py-2 text-sm bg-gray-800 text-white font-semibold rounded hover:bg-sky-600 transition duration-300 ease-in-out focus:outline-none"
                >
                    Resources
                </button>
                <button
                    onClick={() => handleNavigation('/notes')}
                    className="block w-full text-left px-4 py-2 text-sm bg-gray-800 text-white font-semibold rounded hover:bg-sky-600 transition duration-300 ease-in-out focus:outline-none"
                >
                    Notes
                </button>
                <button
                    onClick={() => handleNavigation('/assignments')}
                    className="block w-full text-left px-4 py-2 text-sm bg-gray-800 text-white font-semibold rounded hover:bg-sky-600 transition duration-300 ease-in-out focus:outline-none"
                >
                    Assignments
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
