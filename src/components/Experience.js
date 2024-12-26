import React from 'react';

const Experience = () => {
    const experiences = [
        {
            role: 'MERN stack developer Intern',
            company: 'CODTECH IT SOLUTIONS',
            date: 'Dec 2024',
            description: 'Developed an interactive web application for a client using MERN stack.',
        },
        {
            role: 'Full Stack Developer Intern',
            company: 'VaultofCodes',
            date: 'Nov 2024',
            description: 'Developed a web application for managing tasks and projects.',
        },
        {
            role: 'Full Stack Web Developer Intern',
            company: 'Prodigy InfoTech',
            date: 'Sep 2024',
            description: 'Built a dynamic web application like a chat application , Employee Management System , Chat Webapp.',
        },
    ];

    return (
        <div id="experience" className="min-h-screen bg-gray-900 text-white p-10">
            <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>
            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold">{exp.role}</h3>
                        <p className="text-gray-400">{exp.company}</p>
                        <p className="text-gray-400">{exp.date}</p>
                        <p className="mt-4">{exp.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
