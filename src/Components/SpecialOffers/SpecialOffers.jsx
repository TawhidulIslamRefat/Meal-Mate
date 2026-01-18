"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SpecialOffers() {
  const router = useRouter();
  const foodRef = useRef(null);

  useEffect(() => {
    gsap.to(foodRef.current, {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section className="relative bg-[#0e0e0e] py-12 md:py-25 overflow-hidden">
      <div className="absolute inset-0 opacity-20" />

      <div className="relative w-full md:w-10/12 mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-40">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 sm:mb-10">
            GET 25% DISCOUNT
          </h2>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-10">
            {[
              { value: "1434", label: "Days" },
              { value: "13", label: "Hours" },
              { value: "43", label: "Min" },
              { value: "45", label: "Sec" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#1b1b1b] text-center px-4 sm:px-6 py-4 sm:py-5 rounded-xl min-w-18.75 sm:min-w-22.5"
              >
                <h3 className="text-white text-xl sm:text-2xl font-bold">{item.value}</h3>
                <p className="text-gray-400 text-xs sm:text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          <motion.button
          onClick={() => router.push("/foods")}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 text-white px-10 py-4 rounded-lg font-semibold shadow-lg"
          >
            Read More
          </motion.button>
        </motion.div>

        <div
          ref={foodRef}
          className="relative flex justify-center mt-6 lg:mt-0"
        >
          <Image
            src="https://pixelfit.agency/wp/foodix/wp-content/uploads/2025/12/offer-img1.png"
            alt="Burger Combo"
            width={420}
            height={420}
            className="drop-shadow-2xl w-full max-w-[320px] sm:max-w-105 h-auto"
          />
        </div>
      </div>
      <Image
        src="https://pixelfit.agency/wp/foodix/wp-content/uploads/2025/12/bn-img-6.png"
        alt="Burger Combo"
        width={220}
        height={220}
        className="drop-shadow-2xl absolute top-0 right-0 hidden lg:block opacity-50 lg:opacity-100"
      />
    </section>
  );
}
