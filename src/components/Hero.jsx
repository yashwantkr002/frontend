import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-gray-900 md:px-8 text-white py-20">
      <div className="w-full px-4 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Hi, I'm <span className="text-blue-400">Yashwant Kumar Das</span>,
            <br />a Software Engineer specializing in Web Development.
          </h1>
          <p className="text-lg md:text-xl mb-8">
            I build innovative and efficient web applications using modern technologies.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
            <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-center">View Projects</a>
            <a href="#contact" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-center">Contact Me</a>
            <a href="/path/to/your/resume.pdf" download className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-center">Download Resume</a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          {/* Placeholder for professional headshot or avatar */}
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QwQTIfQ-YyiKilfWsRb-rwHaEP%26pid%3DApi&f=1&ipt=c1d9a20d357fa84472dca91d1dab5d2082f1bbee12328b45354d480fbd5d0bce&ipo=images"
            alt="Yashwant Kumar Das"
            className="rounded-full w-64 h-64 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;