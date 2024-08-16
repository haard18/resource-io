import React from 'react';
import Navbar from '../Components/Navbar';
import { Footer } from './Home';

const skills = [
    'Web Development',
    'Mobile App Development',
    'Data Science',
    'Machine Learning',
    'Artificial Intelligence',
    'Cloud Computing',
    'Cyber Security',
    'Data Structures and Algorithms',
    // Add more skills as needed
];

const SkillsPage: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white p-6 flex flex-col">
                <div className="flex-1">
                    <h1 className="text-4xl font-bold mb-6 text-center">My Skills</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <h2 className="text-xl font-semibold text-white mb-2">{skill}</h2>
                            </div>
                        ))}
                    </div>
                </div>
                <footer className="bg-gray-800 text-white mt-auto">
                    <Footer />
                </footer>
            </div>
        </>
    );
};

export default SkillsPage;
