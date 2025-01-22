export default function About() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#16404D] to-[#0E2A33] flex flex-col items-center justify-center">
      <div className="w-full max-w-[280px] sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mb-6 sm:mb-8 md:mb-12 text-[#DDA853] fredericka-the-great-regular drop-shadow-lg">
          About Me
        </h1>

        <div className="space-y-4 sm:space-y-6 text-[#EDCA95] backdrop-blur-sm bg-[#16404D]/10 p-6 rounded-xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-[#DDA853] font-poppins drop-shadow-md">
            Hi, I&apos;m Rahul Chauhan
          </h2>

          <h3 className="text-lg sm:text-xl text-[#E5B974] font-poppins">
            Full-Stack Web Developer | Freelancer
          </h3>

          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
            <p className="bg-[#16404D]/20 p-4 rounded-lg">
              I&apos;m a passionate Full-Stack Web Developer based in Ahmedabad,
              India. Currently in my final semester at Indira Gandhi Delhi
              Technical University, I specialize in creating dynamic and
              responsive web applications.
            </p>

            <p className="text-[#DDA853] font-semibold">
              My expertise includes:
            </p>

            <ul className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 sm:ml-4 bg-[#16404D]/20 p-4 rounded-lg">
              <li>Frontend Development with React.js and Next.js</li>
              <li>Backend Development with Node.js and Express</li>
              <li>Database Management with MongoDB and PostgreSQL</li>
              <li>UI/UX Design with Tailwind CSS and Material-UI</li>
              <li>Version Control with Git and GitHub</li>
            </ul>

            <p className="bg-[#16404D]/20 p-4 rounded-lg">
              I&apos;m always eager to learn new technologies and take on
              challenging projects. My goal is to create web applications that
              not only look great but also provide an exceptional user
              experience.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
            <a
              href="/contact"
              className="w-full sm:w-auto text-center px-6 py-3 bg-[#DDA853] text-[#16404D] rounded-lg font-semibold hover:bg-[#E5B974] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Me
            </a>
            <a
              href="/projects"
              className="w-full sm:w-auto text-center px-6 py-3 border-2 border-[#DDA853] text-[#DDA853] rounded-lg font-semibold hover:bg-[#DDA853]/10 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
