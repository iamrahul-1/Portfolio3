export default function Home() {
  return (
    <div
      className="min-h-screen w-full bg-gradient-to-br from-[#16404D] to-[#0E2A33] flex flex-col items-center justify-center"
      id="home"
    >
      <div className="w-full max-w-[280px] sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto space-y-3 sm:space-y-4 md:space-y-5">
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#DDA853] font-playfair animate-fade-in fredericka-the-great-regular drop-shadow-lg">
          Hi, I&apos;m Rahul Chauhan.
        </h1>

        <h2 className="text-lg sm:text-2xl md:text-3xl text-[#E5B974] font-poppins tracking-wide drop-shadow-md">
          FullStack Web Developer.
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-[#EDCA95] font-inter leading-relaxed backdrop-blur-sm bg-[#16404D]/10 p-4 rounded-lg">
          Welcome to my digital portfolio! I specialize in building dynamic and
          responsive web applications that provide seamless user experiences.
          Feel free to explore my work, check out my projects, and get in touch
        </p>
      </div>
    </div>
  );
}
