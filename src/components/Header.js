import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('theme') === 'dark' // Persist dark mode
    );

    // Apply dark mode class to the HTML element
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark'); // Save preference
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light'); // Save preference
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <nav className="flex justify-between items-center p-5 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg fixed w-full z-10">
            <h1 className="text-white text-2xl font-bold">Portfolio</h1>
            <ul className="flex space-x-6 text-white">
                <li>
                    <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="Education" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">
                        Education
                    </Link>
                </li>
                <li>
                <Link to="Experience" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">
                Experience
                    </Link>
                    </li>
                    <li>
                    <Link to="Certifications" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">
                Certifications
                    </Link>
                    </li>
                    <li>
                    <Link to="Achievements" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">
                Achievements
                    </Link>
                    </li>
                <li>
                    <Link to="resume" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">
                        Resume
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">
                        Contact
                    </Link>
                </li>
            </ul>
            <button onClick={toggleDarkMode} className="text-white ml-4">
                {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
        </nav>
    );
};

export default Header;
