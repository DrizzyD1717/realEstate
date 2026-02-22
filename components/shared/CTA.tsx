"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-32 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.5em] mb-8 text-black/40"
        >
          Begin Your Journey
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-7xl font-light tracking-tighter mb-12 max-w-4xl leading-[1.1]"
        >
          Ready to find your next{" "}
          <span className="italic font-serif">architectural masterpiece?</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/contact">
            <button className="group relative px-12 py-6 border border-black overflow-hidden transition-colors duration-500">
              <span className="relative z-10 text-[11px] uppercase tracking-[0.3em] font-bold group-hover:text-white transition-colors duration-500">
                Contact our Agents
              </span>
              <div className="absolute inset-0 bg-black translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
