"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const chefs = [
  {
    name: "David Liam",
    role: "Master Chef",
    image: "https://pixelfit.agency/wp/foodix/wp-content/uploads/2025/12/team-14.jpg",
    socials: [FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn]
  },
  {
    name: "Alex Mika",
    role: "Executive Chef",
    image: "https://pixelfit.agency/wp/foodix/wp-content/uploads/2025/12/team-15.jpg",
    socials: [FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn]
  },
  {
    name: "John Smith",
    role: "Pastry Chef",
    image: "https://pixelfit.agency/wp/foodix/wp-content/uploads/2025/12/team-16.jpg",
    socials: [FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn]
  }
];

export default function Chefs() {
  return (
    <section className="dark:bg-[#050505] py-20 md:py-25 transition-colors duration-500 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-10 md:mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[#FFB200] text-sm font-bold tracking-[0.2em] uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full  animate-pulse" />
            Culinary Artists
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase  leading-none"
          >
            Masters of <span>Taste</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 font-medium text-lg leading-relaxed"
          >
            Meet the visionaries behind every exquisite dish, blending tradition with modern culinary innovation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {chefs.map((chef, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative h-120 md:h-137.5 w-full rounded-[2.5rem] overflow-hidden bg-slate-200 dark:bg-zinc-900 shadow-xl dark:shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">

                <div className="absolute inset-0">
                  <Image
                    src={chef.image}
                    alt={chef.name}
                    fill
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0 grayscale-0 sm:grayscale sm:group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">

                  <div className="w-12 h-1 bg-[#FFB200] mb-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />

                  <h3 className="text-3xl font-black text-white uppercase italic tracking-wide mb-1 drop-shadow-lg">
                    {chef.name}
                  </h3>
                  <p className="text-[#FFB200] font-bold uppercase tracking-[0.2em] text-xs mb-6 opacity-80">
                    {chef.role}
                  </p>

                  <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                    {chef.socials.map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#FFB200] hover:border-[#FFB200] hover:text-black transition-all duration-300"
                        aria-label="Social Link"
                      >
                        <Icon size={14} />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-45 group-hover:rotate-0">
                  <div className="w-2 h-2 bg-[#FFB200] rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
