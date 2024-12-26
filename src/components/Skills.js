import React from 'react';
import { motion } from 'framer-motion';
import {
    FaPython,
    FaCuttlefish,
    FaJava,
    FaPhp,
    FaDatabase,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaBootstrap,
    FaReact,
    FaGithub,
    FaTools,
    FaCode,
    FaNodeJs,
    FaJenkins,
} from 'react-icons/fa';
import { SiMongodb, SiExpress} from 'react-icons/si';
import { MdOutlineComputer } from 'react-icons/md';

const Skills = () => {
    // Skill categories
    const skills = [
        {
            category: 'Programming Languages',
            items: [
                { name: 'Python', icon: <FaPython />, color: 'text-yellow-400' },
                { name: 'C', icon: <FaCuttlefish />, color: 'text-blue-400' },
                { name: 'Java', icon: <FaJava />, color: 'text-red-500' },
                { name: 'PHP', icon: <FaPhp />, color: 'text-purple-500' },
                { name: 'SQL', icon: <FaDatabase />, color: 'text-green-500' },
            ],
        },
        {
            category: 'Web Technologies',
            items: [
                { name: 'HTML', icon: <FaHtml5 />, color: 'text-orange-500' },
                { name: 'CSS', icon: <FaCss3Alt />, color: 'text-blue-500' },
                { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-500' },
                { name: 'Bootstrap', icon: <FaBootstrap />, color: 'text-purple-400' },
                { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-400' },
                { name: 'React', icon: <FaReact />, color: 'text-blue-400' },
                { name: 'Express', icon: <SiExpress />, color: 'text-gray-500' },
                { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
            ],
        },
        {
            category: 'Tools',
            items: [
                { name: 'VS Code', icon: <FaCode />, color: 'text-blue-500' },
                { name: 'GitHub', icon: <FaGithub />, color: 'text-white' },
                { name: 'Jenkins', icon: <FaJenkins />, color: 'text-red-500' },
                { name: 'Microsoft Office', icon: <MdOutlineComputer />, color: 'text-orange-400' },
            ],
        },
        {
            category: 'Others',
            items: [
                { name: 'Agile & Waterfall', icon: <FaTools />, color: 'text-yellow-500' },
                { name: 'Hosting Web Apps', icon: <FaCode />, color: 'text-green-400' },
            ],
        },
    ];

    return (
        <div id="skills" className="min-h-screen bg-gray-900 text-white p-10">
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl font-bold text-center mb-10"
            >
                Skills
            </motion.h2>

            {skills.map((section, index) => (
                <div key={index} className="mb-10">
                    <h3 className="text-3xl font-semibold mb-6 text-center">{section.category}</h3>
                    <div className="flex flex-wrap justify-center gap-10">
                        {section.items.map((skill, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                className={`flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg ${skill.color}`}
                            >
                                <div className="text-6xl mb-4">{skill.icon}</div>
                                <h4 className="text-xl font-semibold">{skill.name}</h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;
