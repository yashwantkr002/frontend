import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isJourney = location.pathname === '/journey';

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="w-full px-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">Yashwant Kumar Das</a>
        <div className="hidden md:flex space-x-4">
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            {!isJourney && <>
              <li><a href="#about" className="hover:text-gray-300">About</a></li>
              <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
              <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
              <li><a href="#blog" className="hover:text-gray-300">Blog</a></li>
            </>}
            <li><Link to="/journey" className="hover:text-yellow-300 font-semibold">Learning Journey</Link></li>
          </ul>
          <div className="flex space-x-4">
            <a href="https://github.com/yashwantkr002" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">GitHub</a>
            <a href="https://linkedin.com/in/yashwant-das-b20a51181" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">LinkedIn</a>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-2 mt-2">
            <li><Link to="/" className="block px-4 py-2 hover:bg-gray-700">Home</Link></li>
            {!isJourney && <>
              <li><a href="#about" className="block px-4 py-2 hover:bg-gray-700">About</a></li>
              <li><a href="#projects" className="block px-4 py-2 hover:bg-gray-700">Projects</a></li>
              <li><a href="#skills" className="block px-4 py-2 hover:bg-gray-700">Skills</a></li>
              <li><a href="#contact" className="block px-4 py-2 hover:bg-gray-700">Contact</a></li>
              <li><a href="#blog" className="block px-4 py-2 hover:bg-gray-700">Blog</a></li>
            </>}
            <li><Link to="/journey" className="block px-4 py-2 hover:bg-yellow-300 font-semibold">Learning Journey</Link></li>
            <li><a href="https://github.com/yashwantdas" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-700">GitHub</a></li>
            <li><a href="https://linkedin.com/in/yashwant-das-b20a51181" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-700">LinkedIn</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;