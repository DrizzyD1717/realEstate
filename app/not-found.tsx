"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-brand-dark text-white px-6">
      {/* Large background "404" with low opacity */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute text-[20vw] font-bold select-none pointer-events-none"
      >
        404
      </motion.div>

      <div className="relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-4 block"
        >
          Error Code: Residence Not Found
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-light mb-8 tracking-tighter italic font-serif"
        >
          Lost in <span className="not-italic opacity-50">Transition.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/50 max-w-sm mx-auto mb-12 font-light leading-relaxed"
        >
          The architectural space you are looking for has either been moved or
          no longer exists in our current collection.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/">
            <button className="border border-white/20 px-8 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500">
              Return to Gateway
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
