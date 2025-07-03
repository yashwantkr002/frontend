import { FaCode, FaGraduationCap, FaCogs } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-white to-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Animated Icon Side */}
        <div className="flex justify-center md:justify-start">
          <div className="bg-blue-100 p-10 rounded-3xl shadow-lg animate-pulse">
            <FaCode className="text-blue-600 w-24 h-24" />
          </div>
        </div>

        {/* Content Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Hello, I'm Yashwant Kumar Das</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            I'm a mechanical engineering graduate from NM Institute of Engineering and Technology who discovered a deep passion for software engineering.
            Over the past few months, I've immersed myself in HTML, CSS, JavaScript, Python, Django, React, and Node.js to build meaningful, real-world projects.
          </p>

          {/* Skills */}
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Technical Skills</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {['HTML', 'CSS', 'JavaScript', 'Python', 'Django', 'React', 'Node.js'].map((tech) => (
              <span key={tech} className="bg-gray-200 text-sm text-gray-800 font-medium px-3 py-1 rounded-full shadow">
                {tech}
              </span>
            ))}
          </div>

          {/* Education */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <FaGraduationCap className="text-indigo-600" /> Education
            </h3>
            <p className="text-gray-700 mt-2">Bachelor of Technology in Mechanical Engineering</p>
            <p className="text-sm text-gray-500">NM Institute of Engineering Technology, Bhubaneswar (2017 - 2022)</p>
            <p className="text-sm text-indigo-600 font-semibold mt-1">CGPA: 7.42</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <a
              href="/your-resume.pdf"
              download
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold px-6 py-2 rounded-lg transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16 text-center">
        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-3xl font-bold text-blue-600">7+</p>
          <p className="text-sm text-gray-600">Technologies Learned</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-3xl font-bold text-purple-600">Multiple</p>
          <p className="text-sm text-gray-600">Projects Built</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-3xl font-bold text-green-600">100%</p>
          <p className="text-sm text-gray-600">Commitment to Growth</p>
        </div>
      </div>
    </section>
  );
};

export default About;
