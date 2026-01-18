"use client";
import React from "react";
import Image from "next/image";
import image from "../../assets/food img.png";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Hero() {
    const router = useRouter();
  return (
    <section className="w-full flex items-center py-10 bg-gray-950 dark:bg-black light:bg-[#f8f8f8]  relative overflow-hidden">
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center w-full md:w-10/12 mx-auto px-4 md:px-8 gap-10 md:gap-90">
        <div>
          <p className="text-[#f9b233] font-semibold tracking-widest mb-4">
            HOT FOR EVERY SUNDAY
          </p>

          <h1 className="text-[64px] leading-tight font-extrabold text-gray-100 dark:text-white light:text-black">
            Enjoy Our <br />
            <span className="text-[#d61c1c]">Delicious</span>{" "}
            <span className="text-dark-600 dark:text-white light:text-black">
              Food
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-gray-200 dark:text-gray-300 light:text-gray-600 leading-relaxed font-semibold">
            Savor the taste of our delicious, expertly crafted dishes made with
            the finest ingredients, offering a perfect blend of flavors.
          </p>

          <div>
            <button
              onClick={() => router.push("/foods")}
              className="mt-8 px-8 py-4 bg-[#d61c1c] rounded-xl text-white font-semibold hover:bg-red-700 transition"
            >
              Order Now
            </button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className=" rounded-full overflow-hidden shadow-2xl">
            <Image src={image} alt="Dish Food" width={550} height={350} />
          </div>
        </div>
      </div>
    </section>
  );
}
