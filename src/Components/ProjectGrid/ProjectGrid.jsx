import { useState } from "react";
import PropTypes from "prop-types";
import img1 from "../../assets/vedshoka.png";
import img2 from "../../assets/sb.png";
import img3 from "../../assets/robo.png";
import img4 from "../../assets/shopping.png";
import img5 from "../../assets/gradient.png";
import img6 from "../../assets/gym.png";

const projects = [
  {
    id: 1,
    title: "Vedshoka PG",
    description:
      "PG website for Vedshoka, With nodemailer,and react hook form for contact form and react-slick for image slider.",
    image: img1,
    technologies: ["React", "Node.js", "Express.js", "Tailwind"],
    liveLink: "https://vedshoka.vercel.app/",
    githubLink: "https://github.com/iamrahul-1/Vedshoka",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Smart Brain",
    description:
      "A face recognition app using the Clarifai API. Previously SQL database was used, coverted from SQL to MogoDB.",
    image: img2,
    technologies: ["React.js", "JavaScript", "Tachyons", "MongoDB"],
    liveLink: "https://face-recognition-xi-pink.vercel.app/",
    githubLink: "https://github.com/iamrahul-1/FaceRecognition",
    category: "Full Stack",
  },
  {
    id: 3,
    title: "RoboFriends",
    description:
      "Complete react with dynamic filtering and search functionality. Using Robohash Api for image generation.",
    image: img3,
    technologies: ["React.js"],
    liveLink: "https://iamrahul-1.github.io/Robofriends/",
    githubLink: "https://github.com/iamrahul-1/Robofriends",
    category: "Web App",
  },
  {
    id: 4,
    title: "Shopping List",
    description:
      "A shopping list webapp build with javascript, html and css. Learned DOM and event handling in this project.",
    image: img4,
    technologies: ["Javascript", "HTML", "CSS"],
    liveLink: "https://iamrahul-1.github.io/Shopping_List/",
    githubLink: "https://github.com/iamrahul-1/Shopping_List",
    category: "Web App",
  },
  {
    id: 5,
    title: "CSS Gradient",
    description: "Gradient Background Generator",
    image: img5,
    technologies: ["Javascript", "HTML", "CSS"],
    liveLink: "https://iamrahul-1.github.io/backgroundGenerator/",
    githubLink: "https://github.com/iamrahul-1/backgroundGenerator",
    category: "Frontend",
  },
  {
    id: 6,
    title: "Downtown Fitness(Under Development)",
    description:
      "Complete gym management system with features like seperate admin panel and login for diffrent users, Notification, Report, and payment gateway.",
    image: img6,
    technologies: ["React.js", "MongoDB", "Express.js", "Node.js"],
    liveLink: "#",
    githubLink: "#",
    category: "Full Stack",
  },
];

const categories = ["All", "Web App", "Frontend", "Full Stack"];

const ExternalLinkIcon = () => (
  <svg
    className="w-4 h-4 transition-transform duration-300 group-hover:scale-110"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const GithubIcon = () => (
  <svg
    className="w-4 h-4 transition-transform duration-300 group-hover:scale-110"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ProjectCard = ({ project }) => {
  ProjectCard.propTypes = {
    project: PropTypes.object.isRequired,
  };

  return (
    <div className="group relative bg-[#16404D] rounded-xl overflow-hidden backdrop-blur-sm border-2 border-[#DDA853]/40 transition-all duration-500 hover:border-[#DDA853] hover:shadow-xl hover:shadow-[#DDA853]/20">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[#16404D]/30 group-hover:bg-[#16404D]/20 transition-all duration-500" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-[#DDA853] mb-2 group-hover:text-[#E5B974] transition-colors">
          {project.title}
        </h3>
        <p className="text-white text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-[#DDA853]/20 text-[#DDA853] border border-[#DDA853]/40 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto pt-4 border-t border-[#DDA853]/40">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#DDA853] hover:text-[#E5B974] transition-colors group"
          >
            <ExternalLinkIcon />
            <span className="hidden sm:inline">Live Demo</span>
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#DDA853] hover:text-[#E5B974] transition-colors group ml-auto"
          >
            <GithubIcon />
            <span className="hidden sm:inline">Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default function ProjectGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? "bg-[#DDA853] text-[#16404D] shadow-lg scale-105"
                : "bg-[#16404D]/30 text-[#EDCA95] hover:bg-[#DDA853]/20 hover:text-[#DDA853]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
