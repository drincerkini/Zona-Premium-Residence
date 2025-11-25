// components/GallerySection.jsx
import React from "react";

export default function GallerySection({
  images,
  title = "Our Vision in Images",
}) {
  return (
    <section className="bg-white text-center py-20 px-5">
      <h2 className="text-3xl text-yellow-600 mb-10">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-items-center max-w-5xl mx-auto">
        {images.map((img, idx) => (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            key={idx}
            src={img}
            alt={`Gallery image ${idx + 1}`}
            className="w-full max-w-[380px] h-[250px] object-cover rounded-lg shadow-md
                       transition-transform duration-400 ease-in-out hover:scale-105 hover:shadow-xl"
          />
        ))}
      </div>
    </section>
  );
}
