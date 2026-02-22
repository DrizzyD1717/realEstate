"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PROPERTIES } from "@/constants";
import Link from "next/link";

const PropertiesPage = () => {
  const [filter, setFilter] = useState("All");

  // Logic to filter the array based on the selected category
  const filteredProperties =
    filter === "All"
      ? PROPERTIES
      : PROPERTIES.filter((p) => p.category === filter);

  const categories = ["All", "Luxury", "Residential", "Commercial"];

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-light mb-6"
          >
            Our Portfolio
          </motion.h1>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-4 border-b border-white/10 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs uppercase tracking-[0.2em] px-4 py-2 transition-all ${
                  filter === cat
                    ? "bg-white text-black"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((property) => (
              <Link key={property.id} href={`/properties/${property.id}`}>
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                  <div className="relative aspect-square overflow-hidden bg-zinc-900 mb-4">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-light">{property.title}</h3>
                      <p className="text-white/40 text-[10px] uppercase tracking-widest">
                        {property.location}
                      </p>
                    </div>
                    <span className="text-sm font-medium">
                      {property.price}
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertiesPage;
