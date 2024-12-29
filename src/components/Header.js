import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('theme') === 'dark'
    );
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg fixed w-full z-10">
            <h1 className="text-white text-2xl font-bold">Portfolio</h1>
            {/* Mobile Menu Toggle */}
            <button
                onClick={toggleMenu}
                className="text-white text-2xl md:hidden"
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
            {/* Navigation Links */}
            <ul
                className={`flex flex-col md:flex-row md:items-center md:space-x-6 absolute md:relative bg-gradient-to-r from-blue-500 to-purple-600 md:bg-transparent top-16 md:top-0 left-0 w-full md:w-auto transition-transform duration-300 ${
                    menuOpen ? 'transform translate-y-0' : 'transform -translate-y-full md:translate-y-0'
                }`}
            >
                {[
                    'Home',
                    'Projects',
                    'Skills',
                    'Education',
                    'Experience',
                    'Certifications',
                    'Achievements',
                    'Resume',
                    'Contact',
                ].map((section) => (
                    <li key={section}>
                        <Link
                            to={section.toLowerCase()}
                            smooth={true}
                            duration={500}
                            className="cursor-pointer hover:text-gray-300 block py-2 md:py-0 text-center"
                            onClick={() => setMenuOpen(false)}
                        >
                            {section}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* Dark Mode Toggle */}
            <button onClick={toggleDarkMode} className="text-white ml-4">
                {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
        </nav>
    );
};

export default Header;
