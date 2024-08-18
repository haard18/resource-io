import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Tree from 'react-d3-tree';
import { WEBDEVELOPMENT, MOBILEAPPDEVELOPMENT, DATASCIENCE, MACHINELEARNING, ARTIFICIALINTELLIGENCE, COMPUTERFUNDAMENTALS, UIUXROADMAP } from '../assets/roadmap';
import Navbar from '../Components/Navbar';
import useMediaQuery from '../hooks/useMediaQuery'; // Custom hook for media query

interface RawNodeDatum {
    name: string;
    attributes?: Record<string, string | number | boolean>;
    children?: RawNodeDatum[];
}

// Use consistent keys in the skillMap, with hyphens
const skillMap: { [key: string]: RawNodeDatum } = {
    'Web-Development': WEBDEVELOPMENT,
    'Mobile-App-Development': MOBILEAPPDEVELOPMENT,
    'Data-Science': DATASCIENCE,
    'Machine-Learning': MACHINELEARNING,
    'Artificial-Intelligence': ARTIFICIALINTELLIGENCE,
    'Computer-Fundamentals': COMPUTERFUNDAMENTALS,
    'UI-UX':UIUXROADMAP
};

const TreePage: React.FC = () => {
    const { skill } = useParams<{ skill: string }>(); // Get the skill from the URL params
    const isMobile = useMediaQuery('(max-width: 768px)'); // Check if the screen width is <= 768px

    if (!skill) {
        return <h1 className="text-2xl">Skill not found</h1>;
    }

    const roadmap = skillMap[skill];

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-white text-white">
                <div id="treeWrapper" className='flex items-center' style={{ width: '100vw', height: '100vh' }}>
                    <Link
                        to="/skills"
                        className={`absolute top-4 ${isMobile ? 'left-4' : 'left-4'} bg-blue-500 text-white py-2 px-4 rounded flex items-center`}
                    >
                        {isMobile ? (
                            <svg
                                className="w-6 h-6 "
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        ) : (
                            'Skills'
                        )}
                    </Link>
                    {roadmap ? (
                        <Tree
                            orientation='vertical' // Use horizontal orientation for mobile
                            initialDepth={1}
                            translate={isMobile ? { x: 200, y: 200 } : { x: 800, y: 300 }}
                            zoom={isMobile ? 0.5 : 1}
                            separation={isMobile ? { siblings: 4, nonSiblings: 4 } : { siblings: 5, nonSiblings: 3 }}
                            enableLegacyTransitions
                            data={roadmap} // Render the correct roadmap
                        />
                    ) : (
                        <h1 className="text-2xl">Roadmap not found for {skill}</h1>
                    )}
                </div>
            </div>
        </>
    );
};

export default TreePage;
