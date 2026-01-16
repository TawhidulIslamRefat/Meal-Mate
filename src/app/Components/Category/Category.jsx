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
  return (
    <section className="w-full md:w-10/12 px-2 md:px-8 mx-auto py-18 bg-white dark:bg-black transition-colors">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-[36px] font-extrabold text-[#0f1221] dark:text-white">
          OUR CATEGORIES
        </h2>

        <button className="px-6 py-3 rounded-lg border border-red-500 text-red-500 font-semibold hover:bg-[#D61C1C] hover:text-white transition">
          See More
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="group bg-[#f5f5f5] dark:bg-[#141414] rounded-xl p-6 flex items-center gap-5 hover:shadow-lg transition py-5 md:py-10 hover:bg-[#D61C1C]"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white dark:bg-black text-gray-700 dark:text-gray-300 text-[22px]">
              {cat.icon}
            </div>

            <div>
              <h3 className="text-[18px] font-semibold text-[#0f1221] dark:text-white group-hover:text-gray-100 transition">
                {cat.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-[15px] font-semibold group-hover:text-gray-100 transition">
                {cat.items}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
