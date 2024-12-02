import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { videosArray } from "../assets/videos";
import { Footer } from "./Home";
import Navbar from "../Components/Navbar";

const VideoList: React.FC = () => {
    const { semester } = useParams<{ semester: string }>();

    // Decode and format the semester string
    const formattedSemester = decodeURIComponent(semester || "").replace(/%20/g, " ");

    // Find the videos for the selected semester
    const selectedSemester = videosArray.find(
        (sem) => sem.semester.toLowerCase() === formattedSemester.toLowerCase()
    );

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white p-6 flex flex-col">
                <div className="flex-1 overflow-y-auto">
                    {selectedSemester ? (
                        <>
                            <h2 className="text-3xl font-bold mb-6 text-center">
                                Videos for {selectedSemester.semester}
                            </h2>
                            <div className="flex flex-col gap-4 mx-auto w-full max-w-4xl">
                                {selectedSemester.videos.map((video, index) => (
                                    <div
                                        key={index}
                                        className="bg-slate-900 shadow-lg rounded-lg p-4 border border-gray-200"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-lg font-semibold text-white">
                                                {video.title}
                                            </h3>
                                            <button
                                                onClick={() => handleToggle(index)}
                                                className="text-blue-500 hover:text-blue-700 transition"
                                            >
                                                {openIndex === index ? "−" : "+"}
                                            </button>
                                        </div>
                                        {openIndex === index && (
                                            <div className="flex flex-col">
                                                {/* Render the first iframe */}
                                                <div
                                                    className="iframe-container w-full mb-4 bg-gray-800 flex justify-center rounded-lg"
                                                    dangerouslySetInnerHTML={{ __html: video.iframe }}
                                                />
                                                {/* Check for iframe2 and render it if present */}
                                                {video.iframe2 && (
                                                    <div
                                                        className="iframe-container w-full mb-4 bg-gray-800 flex justify-center rounded-lg"
                                                        dangerouslySetInnerHTML={{ __html: video.iframe2 }}
                                                    />
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <p className="text-center text-white text-5xl">No videos available for this semester.</p>
                    )}
                </div>
                {/* Spacer to push footer to the bottom */}
                <div className="h-16"></div>
                <div className="p-4 mobile:p-4 ml-[-10%] laptop:p-8 bg-gradient-to-r from-black via-gray-900 to-black">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default VideoList;
