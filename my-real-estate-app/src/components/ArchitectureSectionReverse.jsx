import React from "react";
import { motion } from "framer-motion";

export default function ArchitectureSectionReverse({ image, title, text }) {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="md:order-1 order-2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3, once: false }} // animate every time in view
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-yellow-600 mb-4">
            {title}
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">{text}</p>
        </motion.div>

        <motion.div
          className="md:order-2 order-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3, once: false }} // animate every time in view
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={image}
            alt={title}
            className="rounded-2xl shadow-xl border border-gray-200"
          />
        </motion.div>
      </div>
    </section>
  );
}
