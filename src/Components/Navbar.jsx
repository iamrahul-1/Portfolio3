import { useState, useEffect, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import PropTypes from 'prop-types';

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const NavLink = memo(({ to, isActive, children, isMobile }) => {
  if (isMobile) {
    return (
      <Link
        to={to}
        className={`flex flex-col items-center transition-all duration-300 ${
          isActive ? "text-[#DDA853] scale-105" : "text-[#EDCA95]"
        }`}
      >
        <span className="text-sm font-medium">{children}</span>
        {isActive && (
          <span className="w-1 h-1 bg-[#DDA853] rounded-full mt-1" />
        )}
      </Link>
    );
  }

  return (
    <Link
      to={to}
      className={`
        relative px-4 py-2 text-lg font-medium
        ${
          isActive
            ? "text-[#DDA853] after:block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-[#DDA853]"
            : "text-[#EDCA95] hover:text-[#DDA853]"
        }
        transition-all duration-300 hover:scale-105
      `}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
});

NavLink.propTypes = {
  isActive: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isMobile: PropTypes.bool,
};

NavLink.displayName = 'NavLink';

const DesktopNav = memo(({ location }) => (
  <div className="hidden md:block max-w-7xl mx-auto px-6">
    <div className="flex items-center justify-between h-16">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </Link>

      <div className="flex items-center space-x-8">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            isActive={location.pathname === link.path}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </div>
  </div>
));

DesktopNav.propTypes = {
  location: PropTypes.object.isRequired,
};

DesktopNav.displayName = 'DesktopNav';

const MobileNav = memo(({ location }) => (
  <>
    <div className="bg-[#16404D]/95 md:hidden">
      <div className="flex justify-center py-3">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </Link>
      </div>
    </div>
    <div className="fixed bottom-0 left-0 right-0 bg-[#16404D]/95 backdrop-blur-sm shadow-lg md:hidden">
      <div className="flex justify-around py-3">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            isActive={location.pathname === link.path}
            isMobile
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </div>
  </>
));

MobileNav.propTypes = {
  location: PropTypes.object.isRequired,
};

MobileNav.displayName = 'MobileNav';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <nav
      className={`
        fixed w-full z-50 transition-all duration-300 backdrop-blur-sm
        ${scrolled ? "bg-[#16404D]/95 shadow-lg" : "bg-transparent"}
      `}
    >
      <DesktopNav location={location} />
      <MobileNav location={location} />
    </nav>
  );
}

Navbar.propTypes = {};
