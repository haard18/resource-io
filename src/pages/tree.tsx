import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Tree from 'react-d3-tree';
import { WEBDEVELOPMENT, MOBILEAPPDEVELOPMENT, DATASCIENCE, MACHINELEARNING, ARTIFICIALINTELLIGENCE, COMPUTERFUNDAMENTALS } from '../assets/roadmap';
import Navbar from '../Components/Navbar';
interface RawNodeDatum {
    name: string;
    attributes?: Record<string, string | number | boolean>;
    children?: RawNodeDatum[];
  }
// Use consistent keys in the skillMap, with hyphens
const skillMap: { [key: string]: RawNodeDatum  } = {
    'Web-Development': WEBDEVELOPMENT,
    'Mobile-App-Development': MOBILEAPPDEVELOPMENT,
    'Data-Science': DATASCIENCE,
    'Machine-Learning': MACHINELEARNING,
    'Artificial-Intelligence': ARTIFICIALINTELLIGENCE,
    'Computer-Fundamentals': COMPUTERFUNDAMENTALS,
};

const TreePage: React.FC = () => {
    const { skill } = useParams<{ skill: string }>(); // Get the skill from the URL params

    if (!skill) {
        return <h1 className="text-2xl">Skill not found</h1>;
    }

    // No need to remove hyphens; use skill directly as key
    const roadmap = skillMap[skill];

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-white text-white">
                <div id="treeWrapper" className='flex items-center' style={{ width: '100vw', height: '100vh' }}>
                    <Link to="/skills" className="absolute top-4 left-4 bg-blue-500 text-white py-2 px-4 rounded">
                        Back to Skills
                    </Link>
                    {roadmap ? (
                        <Tree
                            orientation="vertical"
                            initialDepth={0}
                            translate={{ x: 800, y: 300 }}
                            zoom={1.5}
                            separation={{ siblings: 5, nonSiblings: 3 }}
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
