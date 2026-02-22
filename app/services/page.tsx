"use client";
import CTA from "@/components/shared/CTA";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Property Management",
    description:
      "We provide comprehensive oversight for high-value estates, ensuring your investment is maintained to the highest architectural standards.",
    image: "/service-1.jpg", // Placeholder
  },
  {
    title: "Interior Consulting",
    description:
      "Our team collaborates with world-renowned designers to harmonize your living space with the minimalist aesthetic of your home.",
    image: "/service-2.jpg",
  },
  {
    title: "Investment Strategy",
    description:
      "Data-driven insights into the luxury market to help you acquire assets that offer both lifestyle and long-term financial growth.",
    image: "/service-3.jpg",
  },
];

const ServicesPage = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-light mb-8 tracking-tighter"
          >
            Our <span className="italic font-serif">Expertise</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/50 text-xl font-light leading-relaxed"
          >
            Beyond a brokerage, we are curators of a lifestyle. Our services are
            designed to streamline the acquisition and maintenance of
            exceptional architecture.
          </motion.p>
        </div>

        {/* Services List */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 md:gap-24 items-center`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[16/10] bg-zinc-900 overflow-hidden border border-white/5">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2">
                <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-4 block">
                  Service 0{index + 1}
                </span>
                <h2 className="text-3xl font-light mb-6 tracking-tight">
                  {service.title}
                </h2>
                <p className="text-white/50 leading-relaxed font-light text-lg max-w-md">
                  {service.description}
                </p>
                <div className="mt-8 h-[1px] w-12 bg-white/20" />
              </div>
            </motion.div>
          ))}
          <CTA></CTA>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
