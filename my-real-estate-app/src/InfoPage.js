import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/Logo.jpg";
import image1 from "./images/img1.jpeg";
import image2 from "./images/img2.jpeg";
import image3 from "./images/img3.jpeg";
import backgroundImage from "./images/img2.jpeg";

function InfoPage() {
  return (
    <div className="font-poppins text-gray-900 bg-gray-100 overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-center h-[90vh]
                   bg-center bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div
          className="relative z-10 text-white animate-fadeIn"
          // animate-fadeIn is custom, will add below
        >
          <img
            src={logo}
            alt="Zona Premium Residence Logo"
            className="w-[180px] rounded-lg mb-5 animate-float mx-auto"
          />
          <h1 className="text-5xl font-bold tracking-wide text-yellow-400">
            Zona Premium Residence
          </h1>
          <p className="mt-2 text-lg">A new chapter of luxury living</p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-[1100px] mx-auto flex flex-wrap justify-center gap-10 my-24 px-5">
        <div className="flex-shrink-0">
          <img
            src={image1}
            alt="Modern Residence"
            className="w-[480px] h-[350px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div className="flex-1 min-w-[280px]">
          <h2 className="text-3xl text-yellow-600 mb-4">About Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            <strong>Zona Premium Residence</strong> represents the future of
            refined living — merging modern architecture, elegance, and comfort.
            Designed for those who appreciate excellence, our residences offer
            panoramic views, sophisticated finishes, and a connection to nature
            without compromising urban convenience.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is to provide spaces that inspire a balanced lifestyle —
            where quality, comfort, and beauty coexist seamlessly.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white flex justify-center px-5 py-20">
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-10 max-w-xl text-center shadow-lg">
          <h2 className="text-yellow-400 text-3xl mb-5">Contact Us</h2>
          <p className="text-lg mb-2">
            <strong>📍 Address:</strong> Ferizaj Kosovo
          </p>
          <p className="text-lg mb-2">
            <strong>📞 Phone:</strong> +1 (234) 567-8900
          </p>
          <p className="text-lg mb-5">
            <strong>✉️ Email:</strong> info@zonapremiumresidence.com
          </p>
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-300
                       text-gray-900 font-semibold text-lg px-7 py-3 rounded-full
                       transition-transform duration-300 hover:scale-105 hover:from-yellow-500 hover:to-yellow-200"
          >
            ← Back Home
          </Link>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white text-center py-20 px-5">
        <h2 className="text-3xl text-yellow-600 mb-10">Our Vision in Images</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-items-center max-w-5xl mx-auto">
          {[image1, image2, image3].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Luxury view ${idx + 1}`}
              className="w-full max-w-[380px] h-[250px] object-cover rounded-lg shadow-md
                         transition-transform duration-400 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-yellow-400 text-center py-6 text-sm">
        &copy; 2025 Zona Premium Residence • Designed with passion
      </footer>
    </div>
  );
}

export default InfoPage;
