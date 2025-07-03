import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* LEFT TEXT CONTENT */}
        <div className="md:w-1/2 text-center md:mx-5 md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Hi, I'm <span className="text-blue-400">Yashwant Kumar Das</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            I'm a Software Engineer specializing in building modern, scalable, and user-friendly web applications using the latest technologies like React, Django, and Node.js.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              View Projects
            </a>
            <a href="#contact" className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300">
              Contact Me
            </a>
            <a href="/path/to/your/resume.pdf" download className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              Download Resume
            </a>
          </div>
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-2xl">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-2xl">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE/ICON */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
            alt="Developer Icon"
            className="w-64 h-64 object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
