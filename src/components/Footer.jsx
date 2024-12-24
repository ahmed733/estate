import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} />
          <p className="mt-4 text-gray-400">
            Estate simplifies real estate for buyers, sellers, and renters with
            a user-friendly platform and expert insights. Discover your dream
            home or next investment with ease.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2">
            <a href="#header" className="text-gray-400 hover:text-white">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-white">
              About Us
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white">
              Contact Us
            </a>
            <a href="#header" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 rounded bg-slate-800 text-gray-400 border border-gray-700 
            focus:outline-none w-full md:w-auto"
            />
            <button className="py-2 px-4 rounded bg-blue-500 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        <p>Copyright 2024 © Estate. All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
