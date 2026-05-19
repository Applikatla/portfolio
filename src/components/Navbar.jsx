import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Magnetic } from "./Magnetic";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <div
        className={`mx-auto flex justify-between items-center px-6 md:px-20 py-4 fixed z-50 top-0 w-full transition-all duration-300 ${scrolled ? 'glass-nav shadow-lg' : 'bg-transparent'
          }`}
      >
        <NavLink to="/" className="cursor-pointer text-white text-2xl font-bold tracking-wider">
          <span className="text-primary font-black">K</span>eshav
        </NavLink>

        {/* Hamburger menu for small screens */}
        <div className="md:hidden">
          <button
            onClick={toggleDropdown}
            className="text-white hover:text-primary transition-colors focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-4 font-medium items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Magnetic>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-3 py-1.5 transition-colors hover:text-white ${isActive ? "text-white font-semibold" : "text-gray-400"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <div className="relative">
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="underline"
                          className="absolute left-0 -bottom-1 w-full h-[2px] bg-primary rounded-full shadow-[0_0_8px_rgba(239,68,68,0.5)]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                  )}
                </NavLink>
              </Magnetic>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[68px] left-0 w-full glass-nav flex flex-col items-center py-6 gap-6 z-40 md:hidden border-b border-white/10 overflow-hidden"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-xl font-medium transition-colors ${isActive ? "text-primary" : "text-gray-300 hover:text-white"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
