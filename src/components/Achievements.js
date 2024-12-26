import React from 'react';

const Achievements = () => {
    const achievements = [
        {
            title: 'First Prize in Paper Presentation',
            description: 'Awarded first place at a state-level technical fest for presenting innovative ideas and showcasing technical depth.',
        },
        {
            title: 'National Level Codeathon Participant (2024)',
            description: 'Demonstrated competitive coding and problem-solving skills by participating in a prestigious national-level coding contest.',
        },
        {
            title: 'Second Prize in "Present Your Perceptions" Event',
            description: 'Recognized for presenting unique insights on technical advancements during an event hosted by the IT and Cognitive Department.',
        },
        {
            title: 'Winner of Internal Hackathon (2023 & 2024)',
            description: 'Gained hands-on experience in team collaboration and rapid development during inter-collegiate hackathons.',
        },
        {
            title: 'Coding Skills Workshop Participant',
            description: 'Completed a four-day intensive training to enhance core programming capabilities.',
        },
        {
            title: 'Cybersecurity Basics Workshop Participant',
            description: 'Attended a five-day workshop covering cybersecurity concepts and hacking basics.',
        },{
            title: 'Workshop on OS and Virtualization Participant',
            description: 'Participated in a two-day workshop titled "Osphere: Innovation in OS and Virtualization," focusing on advanced OS concepts and virtualization.',
        },
    ];

    return (
        <div id="achievements" className="min-h-screen bg-gray-900 text-white p-10">
            <h2 className="text-4xl font-bold text-center mb-10">Achievements</h2>
            <div className="space-y-6">
                {achievements.map((ach, index) => (
                    <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold">{ach.title}</h3>
                        <p className="mt-4">{ach.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
