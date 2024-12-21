import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="nav bg-black mx-auto flex justify-between items-center px-5 md:px-20 py-5 fixed z-10 top-0 shadow-lg w-full">
        <span className="cursor-pointer text-white text-xl font-bold">
          <span className="text-red-600 font-bold hover:underline decoration-red-600 cursor-pointer">
            K
          </span>
          eshav
        </span>

        {/* Hamburger menu for small screens */}
        <div className="md:hidden">
          <button
            onClick={toggleDropdown}
            className="text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-5 font-bold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "underline decoration-red-600 font-bold"
                  : "hover:underline decoration-red-600"
              }
            >
              <span className="text-red-600">H</span>ome
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "underline decoration-red-600 font-bold"
                  : "hover:underline decoration-red-600"
              }
            >
              <span className="text-red-600">A</span>bout
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "underline decoration-red-600 font-bold"
                  : "hover:underline decoration-red-600"
              }
            >
              <span className="text-red-600">C</span>ontact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "underline decoration-red-600 font-bold"
                  : "hover:underline decoration-red-600"
              }
            >
              <span className="text-red-600">P</span>rojects
            </NavLink>
          </li>
        </ul>

        {/* Dropdown Menu */}
        {isOpen && (
          <ul className="absolute top-16 left-0 bg-black w-full p-5 flex flex-col gap-4 font-bold md:hidden">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-red-600 font-bold text-white"
                    : "hover:underline decoration-red-600 text-white"
                }
                onClick={() => setIsOpen(false)}
              >
                <span className="text-red-600">H</span>ome
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-red-600 font-bold text-white"
                    : "hover:underline decoration-red-600 text-white"
                }
                onClick={() => setIsOpen(false)}
              >
                <span className="text-red-600">A</span>bout
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-red-600 font-bold text-white"
                    : "hover:underline decoration-red-600 text-white"
                }
                onClick={() => setIsOpen(false)}
              >
                <span className="text-red-600">C</span>ontact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-red-600 font-bold text-white"
                    : "hover:underline decoration-red-600 text-white"
                }
                onClick={() => setIsOpen(false)}
              >
                <span className="text-red-600">P</span>rojects
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
