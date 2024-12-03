export default function Home() {
  return (
    <div
      className="min-h-screen w-full bg-gradient-to-br from-[#257180] to-[#0C0C0C] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12"
      id="home"
    >
      <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto space-y-4 sm:space-y-5 md:space-y-6">
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair animate-fade-in fredericka-the-great-regular">
          Hi, I&apos;m Rahul Chauhan.
        </h1>

        <h2 className="text-lg sm:text-2xl md:text-3xl text-teal-200 font-poppins tracking-wide">
          FullStack Web Developer.
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-100 font-inter leading-relaxed">
          Welcome to my digital portfolio! I specialize in building dynamic and
          responsive web applications that provide seamless user experiences.
          Feel free to explore my work, check out my projects, and get in touch
        </p>
      </div>
    </div>
  );
}
