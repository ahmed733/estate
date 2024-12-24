import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 z-10 w-full">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#header" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#testimonials" className="hover:text-gray-400">
            Testimonials
          </a>
        </ul>
        <a href="#contact">
          <button className="hidden md:block bg-white rounded-full px-8 py-2">
            Sign Up
          </button>
        </a>
        <img
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          onClick={() => setShowMobileMenu(true)}
        />
      </div>

      {/* ----------------------Mobile Menu------------------------ */}
      <div
        className={`${
          !showMobileMenu ? "w-0 h-0" : "fixed w-full"
        } md:hidden top-0 right-0 bottom-0 transition-all 
      bg-white overflow-hidden`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            src={assets.cross_icon}
            className="w-6"
            onClick={() => setShowMobileMenu(false)}
          />
        </div>
        <ul className="flex flex-col gap-2 items-center mt-5 px-5 font-medium text-lg">
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#header"
            className="px-4 py-2 rounded-full inline-block cursor-pointer"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#about"
            className="px-4 py-2 rounded-full inline-block cursor-pointer"
          >
            About
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#projects"
            className="px-4 py-2 rounded-full inline-block cursor-pointer"
          >
            Projects
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#testimonials"
            className="px-4 py-2 rounded-full inline-block cursor-pointer"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
