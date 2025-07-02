import React from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "YouTube Clone",
    description:
      "A full-stack YouTube-like platform with video uploads, playback, comments, likes/dislikes, subscriptions, and user authentication. Built with React, Node.js, and MongoDB.",
    techStack: [
      "React",
      "Vite",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
    ],
    githubLink:
      "https://github.com/yashwantkr002/Youtube/tree/main/Youtube_Frontend",
    liveDemoLink: "https://youtube-1-nfeo.onrender.com/",
    image:
      "https://res.cloudinary.com/dtnli5lxb/image/upload/v1751394380/OIP-3813464641_ysnjqe.jpg",
  },
  {
    title: "Netflix Clone Project",
    description:
      "A Netflix clone built with Django backend and React frontend, featuring user authentication, content streaming, and responsive UI design mimicking the popular platform.",
    techStack: ["HTML", "Django", "CSS", "Python", "JavaScript"],
    githubLink: "https://github.com/yashwantkr002/Netflixs",
    liveDemoLink: "https://yashwant002.pythonanywhere.com/",
    image:
      "https://res.cloudinary.com/dtnli5lxb/image/upload/v1751392321/Screenshot_2025-07-01_113331_zgwncz.png",
  },
  {
    title: "Mvideos - Django Video Sharing Platform",
    description:
      "A YouTube-style video sharing platform built with Django, featuring user authentication, video uploads (reels), profile management, and content interaction capabilities.",
    techStack: ["Django", "Python", "SQLite", "HTML/CSS", "JavaScript"],
    githubLink: "https://github.com/yashwantkr002/Mvideos",
    liveDemoLink: "https://sonarai002.pythonanywhere.com/",
    image:
      "https://res.cloudinary.com/dtnli5lxb/image/upload/v1751395596/OIP-3925110786_suv5ip.jpg",
  },
  {
    title: "Currency Converter Application",
    description:
      "A responsive currency converter built with React that provides real-time exchange rates and seamless conversion between multiple global currencies.",
    techStack: ["React", "Vite", "JavaScript", "CSS"],
    githubLink: "https://github.com/yashwantkr002/CurrencyApp/tree/main",
    liveDemoLink: "https://currency-app-gamma.vercel.app/",
    image:
      "https://res.cloudinary.com/dtnli5lxb/image/upload/v1751434265/Screenshot_2025-07-02_105820_pjzuxh.png",
  },
  {
    title: "Modern TodoList App",
    description:
      "A beautiful, responsive todo application with local storage persistence, featuring modern UI/UX with animations, glassmorphism effects, and full CRUD functionality.",
    techStack: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    githubLink: "https://github.com/yashwantkr002/TodoList",
    liveDemoLink: "http://localhost:5173",
    image:
      "https://res.cloudinary.com/dtnli5lxb/image/upload/v1751436443/Screenshot_2025-07-02_113654_bumdhg.png",
  },
  {
    title: "Modern Web Music Player",
    description:
      "A responsive music player with sleek UI featuring neumorphic design, smooth animations, and full playback controls. Supports playlist management and keyboard navigation.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    githubLink: "https://github.com/yashwantkr002/music",
    liveDemoLink: "https://yashwantkr002.github.io/music/",
    image:
      "https://res.cloudinary.com/dtnli5lxb/image/upload/v1751437950/Screenshot_2025-07-02_120203_np0kis.png",
  },

  // Add more projects as needed
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="bg-gray-100 py-20">
      <div className="w-full px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={
                  project.image ||
                  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.jwDYzu2PwRSHQbozEAwv7wHaEK%26pid%3DApi&f=1&ipt=cadd07f679b707dd941955a3650e16c44c331d3b31739914f46c0a01dd7e0cf6&ipo=images"
                }
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-200 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub
                  </a>
                  {project.liveDemoLink && (
                    <a
                      href={project.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          onClick={() => navigate("/journey")}
        >
          More Projects
        </button>
      </div>
    </section>
  );
};

export default Projects;
