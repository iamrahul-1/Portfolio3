import ProjectSwiper from "../Components/swiper/swiper";

export default function Projects() {
  return (
    <div
      className="h-screen fredericka-the-great-regular bg-gradient-to-br from-[#092635] to-[#0C0C0C] flex flex-col"
      id="projects"
    >
      <div className="mt-[7rem] h-auto md:mt-28 text-4xl md:text-6xl p-2 text-gray-300 flex justify-center items-center">
        Projects
      </div>
      <div className="flex items-center justify-center h-screen ">
        <ProjectSwiper />
      </div>
    </div>
  );
}
