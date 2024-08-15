import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { subs } from "../assets/subjects"; // Adjust the import path as necessary

const SemesterPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (semester: string) => {
    const encodedSemester = encodeURIComponent(semester);
    navigate(`/videos/${encodedSemester}`);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black">
        <h1 className="text-4xl font-bold mb-8 text-white pt-4">
          Select a Semester
        </h1>
        <div className="flex justify-center items-center w-full max-w-screen-xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {subs.map((semester) => (
              <div
                key={semester.title}
                className="bg-gray-800 shadow-lg rounded-lg p-6 text-center cursor-pointer hover:bg-blue-700 transition-transform transform hover:scale-105"
                onClick={() => handleCardClick(semester.title)}
              >
                <h2 className="text-2xl font-semibold text-white">
                  {semester.title}
                </h2>
                <ul className="text-gray-400 mt-4">
                  {semester.subjects.map((subject, index) => (
                    <li key={index}>{subject}</li>
                  ))}
                </ul>
                <button className="px-4 py-2 rounded-lg bg-slate-400 mt-5">
                  Go to Resources
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SemesterPage;
