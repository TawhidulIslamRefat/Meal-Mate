"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const features = [
  {
    title: "Hygienic Food",
    desc: "We are passionate about serving fresh, flavorful",
    icon: "https://i.ibb.co.com/B2Dy2pmL/Whats-App-Image-2026-01-17-at-6-40-11-PM.jpg",
    active: false,
  },
  {
    title: "Fresh Environment",
    desc: "We are passionate about serving fresh, flavorful",
    icon: "https://i.ibb.co.com/VpNMqPbr/image2.jpg",
    active: true,
  },
  {
    title: "Skilled Chefs",
    desc: "We are passionate about serving fresh, flavorful",
    icon: "https://i.ibb.co.com/QvYXbjyK/Whats-App-Image-2026-01-17-at-6-40-12-PM.jpg",
    active: false,
  },
  {
    title: "Event & Party",
    desc: "We are passionate about serving fresh, flavorful",
    icon: "https://i.ibb.co.com/ymjJvy5L/image1.jpg",
    active: false,
  },
];

export default function WhyChooseUs() {
  const cardsRef = useRef([]);


  return (
    <section className="bg-white dark:bg-[#0a0a0a] py-25 transition-colors duration-500">
      <div className="w-full md:w-10/12  mx-auto px-4 md:px-8 text-center">
        <p className="text-[#FFB200]  font-semibold mb-3">WHY CHOOSE US</p>

        <h2 className="text-4xl lg:text-5xl font-extrabold mb-16 text-gray-900 dark:text-white transition-colors">
          WHY WE&apos;RE YOUR BEST CHOICE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group rounded-2xl px-8 py-12 shadow-sm cursor-pointer mx-auto hover:bg-[#D61C1C] hover:text-white bg-white dark:bg-white/5 border border-transparent dark:border-white/5 transition-all"

            >
              <Image src={item.icon} alt="picture"
                width={220}
                height={50}
                className="mx-auto mb-5 rounded-lg"
              />

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-100 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-semibold group-hover:text-gray-100 transition-colors">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
