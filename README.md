# Learning Project Portfolio

A modern, responsive portfolio web application built with React, Vite, and Tailwind CSS. This project showcases a developer's journey through various learning milestones, projects, and skills, with a focus on clean design, user experience, and dynamic navigation.

## Features

- **Project Showcase:** Browse a curated list of projects with descriptions, tech stacks, images, and live/demo links.
- **Learning Journey Timeline:** Explore a visually engaging timeline of key milestones, challenges, solutions, and lessons learned, each with related project cards.
- **Skills Section:** View categorized technical and soft skills with icons.
- **Blog & Contact:** Sections for sharing insights and connecting with visitors.
- **Responsive Design:** Fully responsive layout for desktop and mobile devices.
- **Dynamic Navigation:** Seamless navigation using React Router, with context-aware navbar links.

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Routing:** React Router DOM
- **Icons:** Devicon, Icons8, custom SVGs

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/your-portfolio-repo.git
   cd your-portfolio-repo
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the development server:**
   ```sh
   npm run dev
   ```
4. **Open in your browser:**
   Visit `http://localhost:5173` (or the port shown in your terminal).

## Project Structure

- `src/components/` — All React components (Projects, Skills, LearningJourney, Navbar, etc.)
- `src/App.jsx` — Main app with routing and layout
- `src/main.jsx` — Entry point, wraps app in router
- `public/` — Static assets

## Customization

- **Add/Edit Projects:** Update the `projects` array in `src/components/Projects.jsx`.
- **Edit Learning Journey:** Update the `journeyData` array in `src/components/LearningJourney.jsx`.
- **Skills:** Edit the `skills` object in `src/components/Skills.jsx`.
- **Navbar Links:** Adjust in `src/components/Navbar.jsx`.

## Deployment

You can deploy this app easily to Vercel, Netlify, or any static hosting provider:

- Build for production:
  ```sh
  npm run build
  ```
- Deploy the `dist/` folder to your chosen platform.

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Created by Yashwant Kumar Das**

For questions or feedback, please open an issue or contact via [LinkedIn](https://linkedin.com/in/yashwant-das-b20a51181).
