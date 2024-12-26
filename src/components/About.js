import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div id="about" className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-10">
            <div className="max-w-4xl flex flex-col lg:flex-row items-center">

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="lg:w-1/3 mb-10 lg:mb-0"
                >
                    <img
                        src="/images/profile.jpg"
                        alt="Profile"
                        className="w-64 h-64 object-cover rounded-full border-4 border-blue-500 shadow-lg"
                    />
                </motion.div>

                {/* Content Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="lg:w-2/3 lg:pl-10"
                >
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-lg leading-relaxed">
                        Hello! I'm Ganeshraja R, an aspiring Full-Stack Web Developer with a passion for building dynamic and user-friendly web applications. I have honed my skills in modern front-end and back-end technologies.</p>
                    <p className="text-lg leading-relaxed">
                         I have worked on a range of projects, from developing secure password management systems to designing e-commerce platforms with robust functionality. My knowledge of HTML, CSS, Bootstrap, and React allows me to create responsive and visually appealing websites.</p>

                    <p className="text-lg leading-relaxed">
                        Beyond coding, I am adept at project management, leveraging Agile methodologies to deliver efficient and impactful solutions. I stay updated with the latest trends in cloud computing, network security, and artificial intelligence to bring innovative ideas to life.</p>
                    <p className="text-lg leading-relaxed mt-4">
                        When I’m not coding, you'll find me participating in hackathons,I love learning about new technologies and improving my skills through certifications and personal projects.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
