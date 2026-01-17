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
    <section className="bg-white dark:bg-[#0a0a0a] py-16 md:py-28 transition-colors duration-300 overflow-hidden">
      <div className="w-full md:w-10/12 px-4 md:px-8 mx-auto relative">

        {/* Background Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#FFB200]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

        {/* Heading */}
        <div className="text-center mb-16 md:mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-[#FFB200] text-sm font-bold uppercase tracking-[0.2em] mb-4"
          >
            <span className="w-8 h-px bg-[#FFB200]" />
            <span>Our Specialist Chefs</span>
            <span className="w-8 h-px bg-[#FFB200]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-[1.1] uppercase italic tracking-tighter"
          >
            MEET OUR CULINARY <span className="text-red-600">MASTERS</span>
          </motion.h2>
        </div>

        {/* Chefs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 relative z-10">
          {chefs.map((chef, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col items-center"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />

                {/* Social Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  {chef.socials.map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ scale: 1.2, backgroundColor: "#FFB200" }}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white transition-all border border-white/30"
                    >
                      <Icon className="text-sm" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Info Box */}
              <div className="relative -mt-10 bg-white dark:bg-[#141414] w-[85%] text-center p-6 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 transform transition-transform duration-300 group-hover:-translate-y-2">
                <h4 className="text-xl font-extrabold text-gray-900 dark:text-white uppercase tracking-tight group-hover:text-red-600 transition-colors italic">
                  {chef.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest mt-1">
                  {chef.role}
                </p>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#FFB200] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
