"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "David Liam",
    role: "CEO",
    image: "https://i.pravatar.cc/100?img=11",
    text: "From the moment we walked in, we were impressed by the warm and inviting atmosphere. ",
  },
  {
    id: 2,
    name: "Sophia Turner",
    role: "Manager",
    image: "https://i.pravatar.cc/100?img=32",
    text: "Absolutely wonderful experience. The staff was attentive. Every dish felt fresh and carefully prepared.",
  },
  {
    id: 3,
    name: "James Carter",
    role: "Entrepreneur",
    image: "https://i.pravatar.cc/100?img=45",
    text: "From the moment we walked in, we were impressed by the warm and inviting atmosphere..",
  },
  {
    id: 4,
    name: "Emily Watson",
    role: "Designer",
    image: "https://i.pravatar.cc/100?img=20",
    text: "The atmosphere was cozy and welcoming. Every bite was a delight.Anyone who loves good food.",
  },
  {
    id: 5,
    name: "Alex Brown",
    role: "Founder",
    image: "https://i.pravatar.cc/100?img=18",
    text: "Amazing service and delicious food. Every dish was perfectly cooked, full of flavor, and beautifully presented.",
  },
  {
    id: 6,
    name: "Emma Wilson",
    role: "Marketing Head",
    image: "https://i.pravatar.cc/100?img=28",
    text: "Such a delightful experience. The ambiance, food, and service were all top-notch.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f8f1e4] dark:bg-[#0a0a0a] py-10 md:py-20 transition-colors duration-500">
      <div className="w-full md:w-10/12 mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 text-[#FFB200]  text-sm font-semibold uppercase mb-3">
            <span>Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white transition-colors">
            OUR GUESTS ARE SAYING
          </h2>
        </div>
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          loop
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
          className="pb-16"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <div className="bg-white dark:bg-white/5 p-8 rounded-xl border border-gray-100 dark:border-white/5 h-full flex flex-col transition-colors">
                <div className="flex gap-1 text-orange-400 text-lg mb-4">
                  ★★★★★
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 flex-1 transition-colors">
                  {item.text}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors">{item.role}</p>
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-xl">
                    ❝
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
