"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background with a subtle scale-up animation */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/heroImg.jpg" // Add a high-end architectural photo here
          alt="Modern Luxury Architecture"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.5em] text-white/60 mb-6"
        >
          Established MMXXVI
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-light tracking-tighter leading-tight"
        >
          Exceptional Living <br />
          <span className="italic font-serif">Redefined.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <button className="bg-white text-black px-10 py-4 rounded-full text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all">
            Explore Collection
          </button>
          <div className="h-[1px] w-12 bg-white/30 hidden md:block" />
          <p className="text-xs text-white/50 tracking-widest uppercase">
            Curated Listings
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
