import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>

            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Animated Content */}
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-6xl font-extrabold z-10"
            >
                Hi, I'm Ganeshraja R
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-lg mt-4 z-10"
            >
                Full Stack Developer | Passionate Coder | Visionary Thinker | AI Enthusiast
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="flex space-x-6 mt-8 z-10"
            >
                <a href="#projects" className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600">
                    View Projects
                </a>
                <a href="#contact" className="px-6 py-3 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-black">
                    Contact Me
                </a>
            </motion.div>
        </div>
    );
};

export default Hero;
