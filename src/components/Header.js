import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('theme') === 'dark' // Persist dark mode
    );
    const [menuOpen, setMenuOpen] = useState(false); // For mobile menu toggle

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

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="flex justify-between items-center p-5 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg fixed w-full z-10">
            <h1 className="text-white text-2xl font-bold">Portfolio</h1>
            {/* Hamburger Icon for Mobile */}
            <button
                onClick={toggleMenu}
                className="text-white text-2xl md:hidden"
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <ul
                className={`flex flex-col md:flex-row md:space-x-6 text-white bg-gradient-to-r from-blue-500 to-purple-600 md:bg-transparent absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto md:items-center transition-transform duration-300 ${
                    menuOpen ? 'transform translate-y-0' : 'transform -translate-y-full md:translate-y-0'
                }`}
            >
                <li>
                    <Link
                        to="hero"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-gray-300 block py-2 md:py-0 text-center"
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-gray-300 block py-2 md:py-0 text-center"
                        onClick={() => setMenuOpen(false)}
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        to="skills"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-gray-300 block py-2 md:py-0 text-center"
                        onClick={() => setMenuOpen(false)}
                    >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link
                        to="Education"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-gray-300 block py-2 md:py-0 text-center"
                        onClick={() => setMenuOpen(false)}
                    >
                        Education
                    </Link>
                </li>
                <li>
                    <Link
                        to="Experience"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-gray-300 block py-2 md:py-0 text-center"
                        onClick={() => setMenuOpen(false)}
                    >
                        Experience
                    </Link>
                </li>
                <li>
                    <Link
                        to="Certifications"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-gray-300 block py-2 md:py-0 text-center"
                        onClick={() => setMenuOpen(false)}
                    >
                        Certifications
                    </Link>
                </li>
                <li>
                    <Link
                        to="Achievements"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-gray-300 block py-2 md:py-0 text-center"
                        onClick={() => setMenuOpen(false)}
                    >
                        Achievements
                    </Link>
                </li>
                <li>
                    <Link
                        to="resume"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-gray-300 block py-2 md:py-0 text-center"
                        onClick={() => setMenuOpen(false)}
                    >
                        Resume
                    </Link>
                </li>
                <li>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-gray-300 block py-2 md:py-0 text-center"
                        onClick={() => setMenuOpen(false)}
                    >
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
