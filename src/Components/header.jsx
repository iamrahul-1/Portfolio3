import { useEffect, useState } from "react";
import logo from "./../assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={"flex justify-center items-center"}>
      <div
        className={`fixed top-0 z-10 w-[90%] rounded-3xl transition-all duration-300 ${
          isScrolled
            ? "bg-gray-800 bg-opacity-40 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="flex-col md:flex-row container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <img className="h-11 md:h-20 pb-2 w-auto" src={logo} />
          </div>
          <nav className="md:text-lg md:space-x-10 text-xs space-x-6">
            <a href="/" className="text-white hover:text-[#F2E5BF]">
              Home
            </a>
            <a href="#projects" className="text-white hover:text-[#F2E5BF]">
              Projects
            </a>
            <a href="/about" className="text-white hover:text-[#F2E5BF]">
              About
            </a>
            <a href="/contact" className="text-white hover:text-[#F2E5BF]">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
