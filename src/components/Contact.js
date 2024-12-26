import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <div id="contact" className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-10">
            <div className="w-full max-w-3xl">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl font-bold text-center mb-10"
                >
                    Contact Me
                </motion.h2>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-6 mb-10">
                    <motion.a
                        href="https://www.linkedin.com/in/ganeshraja2005"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-blue-500 text-3xl hover:text-blue-600"
                    >
                        <FaLinkedin />
                    </motion.a>
                    <motion.a
                        href="https://github.com/Ganeshraja05"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-white text-3xl hover:text-gray-400"
                    >
                        <FaGithub />
                    </motion.a>
                    <motion.a
                        href="https://instagram.com/__ace__of_spade"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-pink-500 text-3xl hover:text-pink-600"
                    >
                        <FaInstagram />
                    </motion.a>
                    <motion.a
                        href="tel:+919940082233"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-green-500 text-3xl hover:text-green-600"
                    >
                        <FaPhoneAlt />
                    </motion.a>
                </div>

                {/* Direct Email Button */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <a
                        href="mailto:ganeshrajar2005@gmail.com"
                        className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600"
                    >
                        <FaEnvelope className="mr-2" />
                        Send Email
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
