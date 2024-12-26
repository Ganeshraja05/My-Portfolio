import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: 'Real-Time Chat App',
        description: 'A futuristic chat application built with Node.js and WebSockets.',
        image: '/images/project-chat.jpg',
        link: 'https://github.com/Ganeshraja05/Real-Time-Chat-Application.git',
    },
    {
        id: 2,
        title: 'Secure Password Manager',
        description: 'A password manager app with encryption and security features.',
        image: '/images/project-password.jpg',
        link: 'https://github.com/Ganeshraja05/password_management.git',
    },
    {
        id: 3,
        title: 'LEXI:Voice Assistant',
        description: 'A voice assistant built with Python and OpenAI API.',
        image: '/images/project-ecommerce.jpg',
        link: 'https://github.com/Ganeshraja05/Voice-Assisstant-LEXI.git',
    },
    {
        id: 4,
        title: 'ALPHY:Text Summarizer',
        description: 'A text summarizer built with Python and NLTK library.',
        image: '/images/text.jpg',
        link: 'https://github.com/Ganeshraja05/Text-Summarizer-AI.git',
    },
    {
        id: 5,
        title: 'Employee Management System',
        description: 'A simple employee management system built with HTML, CSS, JavaScript and PHP.',
        image: '/images/EMS.jpg',
        link: 'https://github.com/Ganeshraja05/Employee-Management-System.git',
    },
    {
        id: 6,
        title: 'Metamind-extension',
        description: 'A chrome extension that helps to analyse metadata and SEO the content of the webpage.',
        image: '/images/SEO.jpg',
        link: 'https://github.com/Ganeshraja05/Metamind-extension.git',
    },
    {
        id: 7,
        title: 'Task Management System',
        description: 'A  task management system built with MERN stack.',
        image: '/images/TMS.jpg',
        link: 'https://github.com/Ganeshraja05/Task-Management-System.git',
    },
];

const Projects = () => {
    return (
        <div id="projects" className="min-h-screen bg-gray-900 text-white p-10">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold">Projects</h2>
                <p className="text-lg text-gray-400">Here are some of my latest works.</p>
            </div>

            {/* Projects Grid */}
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="relative overflow-hidden rounded-lg shadow-lg bg-gray-800 group"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-56 object-cover transition-transform group-hover:scale-110"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                            >
                                View Project
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
