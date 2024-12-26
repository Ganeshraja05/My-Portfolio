import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
    const education = [
        {
            degree: 'Bachelor of Science in Computer Science with Cognitive Systems',
            institution: 'Sri Krishna Arts and Science College',
            year: '2023 - 2026',
            description: 'Studying core programming languages, data structures, web development, AI technologies , Cloud Computing , Automation.',
        },
        {
            degree: 'Higher Secondary Certificate (HSC)',
            institution: 'Bharathi Matric.HR.Sec School',
            year: '2022 - 2023',
            description: 'Completed coursework in Commerce , Accounts , Economics and Computer Application.',
        }
    ];

    return (
        <div id="education" className="min-h-screen bg-gray-900 text-white p-10">
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl font-bold text-center mb-10"
            >
                Education
            </motion.h2>

            <div className="flex flex-col gap-10 items-center">
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="w-full max-w-3xl p-6 bg-gray-800 rounded-lg shadow-lg text-center"
                    >
                        <div className="flex items-center justify-center mb-4">
                            <FaGraduationCap className="text-4xl text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-semibold">{edu.degree}</h3>
                        <p className="text-lg text-gray-400 mt-2">{edu.institution}</p>
                        <p className="text-md text-gray-500 mt-1">{edu.year}</p>
                        <p className="text-sm text-gray-300 mt-3">{edu.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Education;
