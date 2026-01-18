"use Client"
import React from "react";
import { User, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Blog() {
  return (
    <section className="w-full bg-white dark:bg-[#0a0a0a] pb-25 transition-colors duration-500">
      <div className="w-full md:w-10/12 px-2 md:px-8 mx-auto">
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="text-[#FFB200] text-sm font-semibold uppercase">
            Our Latest Blog
          </span>
        </div>

        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-16 transition-colors">
          Discover Our Latest Blog <br /> Posts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-[#F5F5F5] dark:bg-white/5 shadow-sm transition-colors group">
            <Image
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              alt="Smoked Paprika Sirloin"
              width={200}
              height={200}
              className="w-full h-60  object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-4 transition-colors">
                <div className="flex items-center gap-2 font-semibold">
                  <User size={16} />
                  <span>Meal Mate</span>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <MessageCircle size={16} />
                  <span>No Comments</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 uppercase transition-colors group-hover:text-[#FFB200]">
                Smoked Paprika Sirloin
              </h3>

              <p className="text-gray-800 dark:text-gray-300 text-sm leading-relaxed font-semibold transition-colors">
                This steak dinner is the definition of “fine dining at home,”
                featuring a
              </p>
            </div>
          </div>

          <div className="bg-[#F5F5F5] dark:bg-white/5 shadow-sm transition-colors group">
            <Image
              src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351"
              alt="Sushi Assortment Italian"
              width={200}
              height={200}
              className="w-full h-60  object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-4 transition-colors">
                <div className="flex items-center gap-2 font-semibold">
                  <User size={16} />
                  <span>Meal Mate</span>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <MessageCircle size={16} />
                  <span>No Comments</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 uppercase transition-colors group-hover:text-[#FFB200]">
                Sushi Assortment Italian
              </h3>

              <p className="text-gray-800 dark:text-gray-300 text-sm leading-relaxed font-semibold transition-colors">
                This sushi platter is a masterclass in delicate Japanese artistry
                featuring a vibrant
              </p>
            </div>
          </div>

          <div className="bg-[#F5F5F5] dark:bg-white/5 shadow-sm transition-colors group">
            <Image
              src="https://images.unsplash.com/photo-1550547660-d9450f859349"
              alt="Burger and Soft Drinks"
              width={200}
              height={200}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-4 transition-colors">
                <div className="flex items-center gap-2 font-semibold">
                  <User size={16} />
                  <span>Meal Mate</span>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <MessageCircle size={16} />
                  <span>No Comments</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 uppercase transition-colors group-hover:text-[#FFB200]">
                Burger and Soft Drinks
              </h3>

              <p className="text-gray-800 dark:text-gray-300 text-sm leading-relaxed font-semibold transition-colors">
                This burger is a culinary masterpiece featuring a perfectly
                seared, thick beef patty
              </p>
            </div>
          </div>
          <div className="bg-[#F5F5F5] dark:bg-white/5 shadow-sm transition-colors group">
            <Image
              src="https://demo.gloriathemes.com/bouffe/demo/wp-content/uploads/2020/12/blog-3-640x685.jpg"
              alt="Burger and Soft Drinks"
              width={200}
              height={200}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-4 transition-colors">
                <div className="flex items-center gap-2 font-semibold">
                  <User size={16} />
                  <span>Meal Mate</span>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <MessageCircle size={16} />
                  <span>No Comments</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 uppercase transition-colors group-hover:text-[#FFB200]">
                Burger and Soft Drinks
              </h3>

              <p className="text-gray-800 dark:text-gray-300 text-sm leading-relaxed font-semibold transition-colors">
                This burger is a culinary masterpiece featuring a perfectly
                seared, thick beef patty
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
