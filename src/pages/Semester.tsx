import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { subs } from "../assets/subjects"; // Adjust the import path as necessary

const SemesterPage = () => {
    const navigate = useNavigate();

    const handleCardClick = (semester: string) => {
        // Encode the semester string to handle spaces and special characters
        const encodedSemester = encodeURIComponent(semester);
        navigate(`/videos/${encodedSemester}`);
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black">
                <h1 className="text-4xl font-bold mb-8 text-white font-mono">Select a Semester</h1>
                <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {subs.map((semester) => (
                        <div
                            key={semester.title}
                            className="bg-white shadow-lg rounded-lg p-6 text-center cursor-pointer hover:bg-blue-200 transition-transform transform hover:scale-105"
                            style={{ width: "300px", height: "300px" }}
                            onClick={() => handleCardClick(semester.title)}
                        >
                            <h2 className="text-2xl font-semibold text-gray-800">{semester.title}</h2>
                            <ul className="text-gray-600 mt-4">
                                {semester.subjects.map((subject, index) => (
                                    <li key={index}>{subject}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SemesterPage;
