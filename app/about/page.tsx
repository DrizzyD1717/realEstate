"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Julian Voss",
    role: "Principal Architect",
    image: "/images/man1.jpg",
  },
  { name: "Elena Rossi", role: "Interior Lead", image: "/images/woman1.jpg" },
  {
    name: "Marcus Chen",
    role: "Investment Director",
    image: "/images/man3.jpg",
  },
];

const AboutPage = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Philosophy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-6 block">
              Our Ethos
            </span>
            <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-8 leading-tight">
              Architecture as{" "}
              <span className="italic font-serif underline decoration-white/10 underline-offset-8">
                Art.
              </span>
            </h1>
            <p className="text-white/50 text-xl font-light leading-relaxed max-w-lg">
              LuxePath was founded on the belief that a home is not merely a
              structure, but a curated experience. We bridge the gap between
              visionary architecture and the world&apos;s most discerning
              residents.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] bg-zinc-900 border border-white/5 overflow-hidden"
          >
            <Image
              src="/images/team.jpg"
              alt="Minimalist Architecture"
              fill
              className="object-cover opacity-80"
            />
          </motion.div>
        </div>

        {/* The Team Grid */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-3xl font-light tracking-tight">
              The Minds Behind LuxePath
            </h2>
            <p className="text-white/30 text-sm uppercase tracking-widest max-w-xs md:text-right">
              A collective of architects, designers, and market strategists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="relative aspect-[3/4] bg-zinc-900 mb-6 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-light">{member.name}</h3>
                <p className="text-[10px] uppercase tracking-widest text-white/40">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center py-24 border-t border-white/5"
        >
          <p className="text-2xl md:text-4xl font-serif italic text-white/80 max-w-4xl mx-auto leading-relaxed">
            &quot;The detail is not the detail. The detail is the product.&quot;
          </p>
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 mt-8 block">
            — Charles Eames
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
