import { useState } from 'react';
import img1 from "../../assets/gradient.png";
import img2 from "../../assets/sb.png";
import img3 from "../../assets/robo.png";
import img4 from "../../assets/shopping.png";
import img5 from "../../assets/startup.png";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A brief description of project 1 and its key features. Highlight the main technologies used and the problems solved.",
    image: img1,
    technologies: ["React", "Node.js", "MongoDB"],
    liveLink: "https://project1.com",
    githubLink: "https://github.com/yourusername/project1",
    category: "Web App"
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of project 2 showcasing your development skills and the value it provides to users.",
    image: img2,
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    liveLink: "https://project2.com",
    githubLink: "https://github.com/yourusername/project2",
    category: "Frontend"
  },
  {
    id: 3,
    title: "Project 3",
    description: "Overview of project 3 explaining the technical challenges overcome and the solutions implemented.",
    image: img3,
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    liveLink: "https://project3.com",
    githubLink: "https://github.com/yourusername/project3",
    category: "Full Stack"
  },
  {
    id: 4,
    title: "Project 4",
    description: "Details about project 4 highlighting your problem-solving abilities and coding practices.",
    image: img4,
    technologies: ["React Native", "Firebase", "Redux"],
    liveLink: "https://project4.com",
    githubLink: "https://github.com/yourusername/project4",
    category: "Mobile App"
  },
  {
    id: 5,
    title: "Project 5",
    description: "Description of project 5 demonstrating your ability to create efficient and scalable solutions.",
    image: img5,
    technologies: ["Angular", "Django", "AWS"],
    liveLink: "https://project5.com",
    githubLink: "https://github.com/yourusername/project5",
    category: "Full Stack"
  }
];

const categories = ["All", "Web App", "Frontend", "Full Stack", "Mobile App"];

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ProjectCard = ({ project }) => (
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

export default function ProjectGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-[#DDA853] text-[#16404D] shadow-lg scale-105'
                : 'bg-[#16404D]/30 text-[#EDCA95] hover:bg-[#DDA853]/20 hover:text-[#DDA853]'
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
