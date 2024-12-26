import React from 'react';

const Certifications = () => {
    const certifications = [
        {
            title: 'Meta Frontend Developer',
            organization: 'META',
            date: 'Jun 2024',
            link: 'https://coursera.org/verify/professional-cer/9UFG3EWWVW6E',
        },
        {
            title: 'Scrum Master Certification',
            organization: 'LearnQuest',
            date: 'Dec 2024',
            link: 'https://coursera.org/verify/specialization/R1F3XKBYHCR1',
        },
        {
            title: 'Jenkins - From Zero to Hero',
            organization: 'LearnKartS',
            date: 'Dec 2024',
            link: 'https://coursera.org/verify/specialization/CGJOU7NPXKZW',
        },
        {
            title: 'ChatGPT for Project Management',
            organization: 'Vanderbilt University',
            date: 'Dec 2024',
            link: 'https://coursera.org/verify/specialization/P9QTYQ71517Q',
        },
        {
            title: 'AWS Fundamentals',
            organization: 'Amazon Web Services',
            date: 'Nov 2024',
            link: 'https://coursera.org/verify/specialization/Q12AN61JWVMS',
        },
        {
            title: 'Cloud Computing Skill Badges',
            organization: 'Google Cloud Platform',
            date: 'Sep 2023',
            link: 'https://www.cloudskillsboost.google/public_profiles/e0318f33-57be-46f2-ab8a-9cc119804258',
        },
        {
            title: 'GCP GenAI Skill Badges',
            organization: 'Google Cloud Platform',
            date: 'Oct 2024',
            link: 'https://www.cloudskillsboost.google/public_profiles/5362d71d-41a8-4e6c-a2c0-f40adbb8506c',
        },
    ];

    return (
        <div id="certifications" className="min-h-screen bg-gray-900 text-white p-10">
            <h2 className="text-4xl font-bold text-center mb-10">Certifications</h2>
            <div className="space-y-6">
                {certifications.map((cert, index) => (
                    <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold">{cert.title}</h3>
                        <p className="text-gray-400">{cert.organization}</p>
                        <p className="text-gray-400">{cert.date}</p>
                        <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            View Certificate
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
