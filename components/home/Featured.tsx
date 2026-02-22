"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PROPERTIES } from "@/constants";

const Featured = () => {
  // Only show the first 3 properties on the home page
  const featuredList = PROPERTIES.slice(0, 3);

  return (
    <section className="py-24 bg-brand-dark px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl font-light tracking-tight mb-4">
              Featured Listings
            </h2>
            <div className="h-1 w-20 bg-white" />
          </div>
          <Link
            href="/properties"
            className="text-xs uppercase tracking-widest border-b border-white/20 pb-2 hover:border-white transition-all"
          >
            View All Properties
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredList.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 mb-6">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest">
                  {property.category}
                </div>
              </div>

              <h3 className="text-xl font-light mb-1">{property.title}</h3>
              <p className="text-white/50 text-xs uppercase tracking-widest mb-4">
                {property.location}
              </p>

              <div className="flex justify-between items-center pt-4 border-t border-white/10">
                <span className="text-sm font-medium">{property.price}</span>
                <span className="text-[10px] text-white/40 uppercase tracking-tighter">
                  {property.specs.beds} BD | {property.specs.baths} BA
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
