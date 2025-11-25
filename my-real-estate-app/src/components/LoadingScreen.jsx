// components/LoadingScreen.jsx
import React from "react";

export default function LoadingScreen() {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center 
                    bg-black bg-opacity-90 z-50 animate-fadeOutSlow"
    >
      <div
        className="w-20 h-20 border-4 border-yellow-500 border-t-transparent 
                      rounded-full animate-pulseRing"
      ></div>
      <p className="text-gray-300 mt-4 tracking-wide text-lg animate-fadeIn">
        Loading...
      </p>
    </div>
  );
}
