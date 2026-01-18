"use client";
import { useRouter } from "next/navigation";
import React from "react";
import {
  FaHamburger,
  FaCheese,
  FaPepperHot,
  FaPizzaSlice,
} from "react-icons/fa";

const categories = [
  {
    title: "Delish Burger",
    items: "25 items",
    icon: <FaHamburger />,
  },
  {
    title: "Sandwiches",
    items: "20 items",
    icon: <FaCheese />,
  },
  {
    title: "Mexican Cuisine",
    items: "30 items",
    icon: <FaPepperHot />,
  },
  {
    title: "Italian Cuisine",
    items: "19 items",
    icon: <FaPizzaSlice />,
  },
];

export default function Category() {
  const router = useRouter();
  return (
    <section className="w-full md:w-10/12 px-2 md:px-8 mx-auto py-12 md:py-25 bg-slate-50 dark:bg-[#0a0a0a] transition-colors duration-500 rounded-3xl">
      <div className="flex items-center justify-between gap-4 mb-12">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white uppercase transition-colors">
          OUR CATEGORIES
        </h2>

        <button
          onClick={() => router.push("/foods")}
          className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg border-2 border-red-500 text-red-500 font-bold hover:bg-red-600 hover:text-white transition-all whitespace-nowrap active:scale-95">
          See More
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl p-4 sm:p-6 flex items-center gap-3 sm:gap-5 hover:shadow-xl dark:hover:shadow-none transition-all py-5 md:py-10 hover:bg-red-600 dark:hover:bg-red-600 cursor-pointer"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white text-[18px] sm:text-[22px] group-hover:bg-white/20 group-hover:text-white transition-colors">
              {cat.icon}
            </div>

            <div className="min-w-0">
              <h3 className="text-sm sm:text-[18px] font-bold text-slate-900 dark:text-white group-hover:text-white transition truncate sm:whitespace-normal leading-tight">
                {cat.title}
              </h3>
              <p className="text-xs sm:text-[15px] font-medium text-slate-500 dark:text-gray-400 group-hover:text-white/80 transition mt-1">
                {cat.items}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
