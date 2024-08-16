"use client";

import { motion } from "framer-motion";

import { AuroraBackground } from "../Components/ui/aurora-background";

import { useNavigate } from "react-router-dom";

export function AuroraBackgroundDemo() {
    const navigate = useNavigate()
    const handleclick = () => {
        navigate('/notes')
    }
    return (
        <>

            <AuroraBackground>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <div className="text-3xl md:text-7xl large:text-4xl font-bold dark:text-white text-center tracking-widest" style={{ fontFamily: "'Jersey 10', sans-serif" }}>
                        One stop solution for your University study resources <br /> PYQs and Rounded Skills for your personal growth Resource-IO is here with you
                    </div>

                    <button style={{ fontFamily: "'Edu VIC WA NT Beginner'" }} onClick={handleclick} className="bg-black text-2xl tracking-widest dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                        Get Started
                    </button>
                </motion.div>
            </AuroraBackground>
        </>
    );
}
