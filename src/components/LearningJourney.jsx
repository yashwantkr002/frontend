import React from "react";
import { projects } from './LearningProject.js';

const journeyData = [
  {
    date: "2023-01-10",
    title: "Getting Started with Web Development",
    description: "Began my journey by learning HTML and CSS. Built my first static webpage and understood the basics of web structure and styling.",
    challenge: "Struggled with page layouts and responsive design.",
    solution: "Discovered Flexbox and Grid, practiced by recreating simple layouts.",
    lesson: "Mastering the fundamentals is crucial for building complex projects later.",
    image: "https://res.cloudinary.com/dtnli5lxb/image/upload/v1751450339/1_r0TkcCU3hKl7yuG5fFcZVA-555473059_yjfgih.png"
  },
  {
    date: "2023-03-05",
    title: "First Interactive Project: Using JavaScript",
    description: "Built a dynamic todo list using JavaScript. Added features like add, delete, and mark as complete.",
    challenge: "Managing state and DOM updates became messy as features grew.",
    solution: "Learned about modular code and started using functions to organize logic.",
    lesson: "Code organization and separation of concerns make scaling easier.",
    image: "https://res.cloudinary.com/dtnli5lxb/image/upload/v1751450497/javascript-285142680_pfkuwq.png"
  },
  {
    date: "2023-06-20",
    title: "Diving into React & Modern Tooling",
    description: "Transitioned to React for component-based development. Built a portfolio site and small apps using Vite and Tailwind CSS.",
    challenge: "Understanding state, props, and component lifecycles was confusing at first.",
    solution: "Followed React documentation, built mini-projects, and debugged with React DevTools.",
    lesson: "Hands-on practice and debugging are the best ways to learn new frameworks.",
    image: "https://res.cloudinary.com/dtnli5lxb/image/upload/v1751450711/OIP_gfkvge.jpg"
  },
  {
    date: "2023-10-15",
    title: "Full-Stack Adventure: YouTube Clone",
    description: "Built a YouTube-like platform with video uploads, authentication, and comments using React, Node.js, and MongoDB.",
    challenge: "Faced issues with backend integration, authentication, and file uploads.",
    solution: "Learned REST APIs, JWT authentication, and used Cloudinary for media storage.",
    lesson: "Persistence and seeking help from the community accelerates problem-solving.",
    image: "https://res.cloudinary.com/dtnli5lxb/image/upload/v1751450853/image_ox37zv.jpg"
  },
  {
    date: "2024-03-01",
    title: "Deployment & Real-World Feedback",
    description: "Deployed projects using Vercel and Render. Collected feedback from users and iterated on UI/UX improvements.",
    challenge: "Handling deployment errors and cross-browser issues.",
    solution: "Read deployment logs, fixed bugs, and tested on multiple browsers/devices.",
    lesson: "Deployment is a learning process—embrace feedback and keep improving.",
    image: "https://res.cloudinary.com/dtnli5lxb/image/upload/v1751451001/webSiftware_orkier.jpg"
  }
];

const getProjectsForMilestone = (idx) => {
  if (projects.length < 3) return [];
  const start = (idx * 3) % projects.length;
  return [
    projects[start],
    projects[(start + 1) % projects.length],
    projects[(start + 2) % projects.length],
  ];
};

const LearningJourney = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center text-blue-900 mb-12 drop-shadow-lg">
          My Learning Project Journey
        </h1>
        <div className="border-l-4 border-blue-400 pl-8">
          {journeyData.map((milestone, idx) => (
            <div key={idx} className="mb-16 relative">
              <div className="flex flex-col md:flex-row items-start group mb-6">
                <div className="w-24 flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className="rounded-xl shadow-md w-24 h-24 object-cover border-2 border-blue-200 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <span className="text-blue-700 font-bold text-lg mr-4">
                      {milestone.date}
                    </span>
                    <span className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {milestone.title}
                    </span>
                  </div>
                  <p className="text-gray-800 mb-2"><strong>Description:</strong> {milestone.description}</p>
                  <p className="text-red-700 mb-1"><strong>Challenge:</strong> {milestone.challenge}</p>
                  <p className="text-green-700 mb-1"><strong>Solution:</strong> {milestone.solution}</p>
                  <p className="text-blue-800 mb-4"><strong>Lesson Learned:</strong> {milestone.lesson}</p>
                  {idx < journeyData.length - 1 && (
                    <div className="absolute left-0 w-1 h-24 bg-blue-300 ml-2 mt-2"></div>
                  )}
                </div>
              </div>
              {/* Project Cards */}
              {milestone.date !== "2024-03-01" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                  {getProjectsForMilestone(idx).map((project, pidx) => (
                    <div key={pidx} className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <img
                        src={project.image || "/default-image.png"}
                        alt={project.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="text-xl font-bold text-gray-800 mb-1">{project.title}</h4>
                        <p className="text-gray-600 mb-2 text-sm">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {project.techStack?.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-0.5 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex space-x-2">
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline text-sm"
                          >
                            GitHub
                          </a>
                          {project.liveDemoLink && (
                            <a
                              href={project.liveDemoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:underline text-sm"
                            >
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600">
            The journey continues... Stay curious and keep building!
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;
