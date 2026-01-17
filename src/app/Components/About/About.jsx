"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function About() {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { scale: 0.8, rotate: -10, opacity: 0 },
      {
        scale: 1,
        rotate: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    );
  }, []);
  return (
    <section className="bg-white pb-25">
      <div className="w-full md:w-12/12 mx-auto px-4 md:px-8 grid  grid-cols-1 lg:grid-cols-2 items-center gap-12 md:gap-30">
        <div ref={imageRef} className="flex justify-center">
          <Image
            src="https://pixelfit.agency/wp/foodix/wp-content/uploads/2025/12/about-6.png"
            alt="Food"
            width={520}
            height={520}
            className="max-w-xl w-full drop-shadow-xl"
          />
        </div>

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-[#FFB200] font-semibold flex items-center gap-2 mb-3">
            <span className="w-2 h-2 text-[#FFB200]  rounded-full"></span>
            ABOUT US
          </p>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            DELICIAS ABOUT FRESH <br /> FLAVORFUL DINING
          </h2>

          <p className="text-gray-500 leading-relaxed mb-10 max-w-xl font-semibold">
            We are passionate about serving fresh, flavorful dishes crafted with
            the finest ingredients. Every meal is thoughtfully prepared to
            deliver a memorable dining experience youll love.
          </p>

          <div className="flex md:flex-wrap gap-6 mb-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-gray-50 px-6 py-5 rounded-xl shadow-sm"
            >
              <div className="text-3xl">
                <Image
                  src="https://pixelfit.agency/wp/foodix/wp-content/uploads/2025/12/Icon.png"
                  alt="Berger"
                  height={40}
                  width={40}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">1500+</h3>
                <p className="text-gray-500 text-sm">Total Food Item</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-gray-50 px-6 py-5 rounded-xl shadow-sm"
            >
              <div className="text-3xl">
                <Image
                  src="https://pixelfit.agency/wp/foodix/wp-content/uploads/2025/12/Group-1171275398.png"
                  alt="Berger"
                  height={40}
                  width={40}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">500+</h3>
                <p className="text-gray-500 text-sm">Branch Office</p>
              </div>
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 text-white px-10 py-4 rounded-lg font-semibold shadow-lg"
          >
            Read More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
