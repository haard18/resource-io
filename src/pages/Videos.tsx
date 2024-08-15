import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { videosArray } from "../assets/videos";
import { Footer } from "./Home";
import Navbar from "../Components/Navbar";

const VideoList: React.FC = () => {
    const { semester } = useParams<{ semester: string }>();

    // Find the videos for the selected semester
    const selectedSemester = videosArray.find(
        (sem) => sem.semester.toLowerCase() === semester?.toLowerCase()
    );

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900  to-black text-white p-6">
                {selectedSemester ? (
                    <>
                        <h2 className="text-3xl font-bold mb-6 text-center">
                            Videos for {selectedSemester.semester}
                        </h2>
                        <div className="flex flex-col m-auto gap-4 w-1/2 ">
                            {selectedSemester.videos.map((video, index) => (
                                <div
                                    key={index}
                                    className="bg-slate-900 shadow-lg rounded-lg p-4 border border-gray-200"
                                >
                                    <div className="flex items-center justify-between mb-2 ">
                                        <h3 className="text-lg font-semibold text-white ">
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
                                        <div
                                            className="iframe-container w-full bg-gray-800 flex justify-center rounded-lg overflow-hidden"
                                            dangerouslySetInnerHTML={{ __html: video.iframe }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="fixed bottom-0 left-0 right-0">
                            <Footer />
                        </div>
                    </>
                ) : (
                    <p className="text-center text-white text-5xl">No videos available for this semester.</p>
                )}
            </div>
        </>
    );
};

export default VideoList;
