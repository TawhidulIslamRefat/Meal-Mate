"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ShoppingCart, Heart, InfoIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function FoodCard({ food }) {
  const router = useRouter();
  if (!food) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="group relative bg-[#121212] rounded-4xl p-5 shadow-2xl border border-white/5 overflow-hidden flex flex-col h-full"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB200]/5 rounded-full blur-3xl group-hover:bg-[#FFB200]/10 transition-colors duration-500" />

      <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="bg-[#FFB200] text-black text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
          {food.category || "General"}
        </span>
        <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-red-600 transition-colors">
          <Heart size={18} />
        </button>
      </div>

      <div className="relative w-full aspect-square mb-6 group-hover:scale-105 transition-transform duration-700">
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent z-1 rounded-2xl" />
        <div className="relative w-full h-full p-2 border border-white/10 rounded-2xl">
          <Image
            src={
              food.image ||
              "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop"
            }
            alt={food.name}
            fill
            className="rounded-xl"
            priority
          />
        </div>
      </div>

      <div className="grow flex flex-col items-center text-center px-2">
        <h3 className="text-xl font-extrabold text-white uppercase italic tracking-tighter leading-tight line-clamp-2 min-h-12 group-hover:text-[#FFB200] transition-colors duration-300">
          {food.name}
        </h3>

        <div className="flex items-center gap-1.5 mt-3 mb-4">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={`${i < Math.floor(food.rating || 5) ? "fill-[#FFB200] text-[#FFB200]" : "text-gray-700"}`}
              />
            ))}
          </div>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            ({food.totalReviews || 0} reviews)
          </span>
        </div>
        <div className="w-full flex items-center justify-between mt-auto pt-4 border-t border-white/5">
          <div className="text-left">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">
              Price
            </span>
            <span className="text-2xl font-black text-white italic tracking-tighter">
              ${food.price}
            </span>
          </div>

          <motion.button
            onClick={() => router.push(`/foods/${food._id}`)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-red-900/20 transition-colors"
          >
            <InfoIcon size={20}></InfoIcon>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
