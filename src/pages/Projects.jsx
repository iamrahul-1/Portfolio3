import ProjectGrid from "../Components/ProjectGrid/ProjectGrid";

export default function Projects() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#16404D] to-[#0E2A33] flex flex-col items-start">
      <div className="w-full max-w-[280px] sm:max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto mt-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mb-6 sm:mb-8 md:mb-12 text-[#DDA853] fredericka-the-great-regular drop-shadow-lg">
          My Projects
        </h1>
        <div className="backdrop-blur-sm bg-[#16404D]/10 p-6 rounded-xl shadow-lg">
          <ProjectGrid />
        </div>
      </div>
    </div>
  );
}
