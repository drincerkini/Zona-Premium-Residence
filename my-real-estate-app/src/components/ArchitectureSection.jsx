import React from "react";
import { motion } from "framer-motion";

export default function ArchitectureSection({ image, title, text }) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3, once: false }} // animate every time
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={image}
            alt={title}
            className="rounded-2xl shadow-xl border border-gray-200"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3, once: false }} // animate every time
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-yellow-600 mb-4">
            {title}
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">{text}</p>
        </motion.div>
      </div>
    </section>
  );
}
