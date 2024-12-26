import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
    return (
        <div id="resume" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-10">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold">Resume</h2>
                <p className="text-lg text-gray-400">Check out my resume below.</p>
            </div>

            {/* Resume Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-3xl text-center"
            >
                <p className="text-lg mb-6 leading-relaxed">
                    I have a strong foundation in full-stack web development, focusing on modern frameworks like React.js, Node.js, Express.js and AI technologies.
                    My resume highlights my technical expertise, certifications, and professional experience.
                </p>

                {/* Animated Download Button */}
                <motion.a
                    href="/Resume.pdf"
                    download
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600"
                >
                    Download Resume
                </motion.a>
            </motion.div>
        </div>
    );
};

export default Resume;
