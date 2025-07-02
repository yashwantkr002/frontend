import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="w-full px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/3 mb-8 md:mb-0 md:mr-8">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4bPLxmrpQ2-mIBxBKIqx3wHaLu%26pid%3DApi&f=1&ipt=53042cc067a516c58270814514ca069c9478665c29d972992a835e790d77678a&ipo=images"
              alt="Yashwant Kumar Das"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg text-gray-700 mb-6">
              I’m Yashwant Kumar Das, a mechanical engineering graduate from NM Institute of Engineering and Technology. Over the past few months, I’ve developed a strong passion for software engineering and have dedicated myself to learning key technologies, including HTML, CSS, JavaScript, Python, Django, React, and Node.js. I’ve built several projects to apply these skills and am excited to transition into a software engineering role where I can continue to grow and contribute.
            </p>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Education</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li><strong>Bachelor of Technology in Mechanical Engineering</strong> (2017 - 2022)</li>
              <li>NM Institute of Engineering Technology, Bhubaneswar</li>
              <li>Biju Patnaik University of Technology, Odisha</li>
              <li>CGPA: 7.42</li>
            </ul>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Work Experience</h3>
            <p className="text-gray-700 mb-6">
              {/* Add work experience details here if available, or keep it concise as per the resume */}
              Currently seeking an entry-level software engineering role to leverage my skills and contribute to impactful projects.
            </p>
            <a href="/path/to/your/resume.pdf" download className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">Download Full Resume (PDF)</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;