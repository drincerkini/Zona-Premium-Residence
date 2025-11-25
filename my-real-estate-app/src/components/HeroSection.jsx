// components/HeroSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.jpg";
import backgroundImage from "../images/img2.jpeg";

export default function HeroSection() {
  return (
    <header className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center 
                       animate-bgReveal"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-white animate-logoElegant">
        <img
          src={logo}
          alt="Logo"
          className="max-w-[90vw] mb-8 sm:w-[200px] md:w-[260px] lg:w-[340px]"
        />
      </div>

      <div className="relative z-20 animate-buttonFadeUp mt-4">
        <Link
          to="/info"
          className="inline-flex items-center justify-center
                     bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-300
                     text-gray-900 font-semibold text-xl px-8 py-3 rounded-full
                     shadow-md hover:scale-105 transition-transform duration-300"
        >
          Learn More →
        </Link>
      </div>
    </header>
  );
}
