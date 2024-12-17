import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container bg-black mx-auto flex justify-between items-center px-20 py-5 fixed w-full z-10 top-0 shadow-lg">
        <span className="cursor-pointer">
          <span className="text-red-600 font-bold hover:underline decoration-red-600 cursor-pointer">
            K
          </span>
          eshav
        </span>
        <ul className="flex gap-5 font-bold ">
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
      </div>
    </>
  );
};

export default Navbar;
