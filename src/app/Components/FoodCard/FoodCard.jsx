"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FoodCard({ food }) {
  const router = useRouter();
  if (!food) return null;

  const renderCategory = (text) => {
    if (!text) return <span className="text-orange-500">Special</span>;
    const words = text.split(" ");
    return (
      <>
        <span className="text-orange-500">{words[0]}</span>{" "}
        <span className="text-slate-700 dark:text-slate-300">
          {words.slice(1).join(" ")}
        </span>
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="bg-[#faece6] dark:bg-zinc-900 rounded-[2.5rem] p-8 pt-0 relative group hover:shadow-xl transition-all duration-300 mt-24 h-73 flex flex-col justify-between"
    >
      <div>
        <div className="relative -mt-24  flex justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-[3px] border-dashed border-orange-500 rounded-full animate-[spin_10s_linear_infinite]" />

          <div className="w-40 h-40 rounded-full overflow-hidden shadow-2xl relative z-10 border-4 border-white dark:border-zinc-800 bg-white dark:bg-zinc-800">
            <Image
              src={
                food.image ||
                "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop"
              }
              alt={food.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        <div className="text-left space-y-2">
          <div className="text-lg font-bold">
            {renderCategory(food.category)}
          </div>
          <h3 className="font-bold text-2xl text-slate-800 dark:text-white leading-tight cursor-pointer hover:text-orange-500 transition-colors" onClick={() => router.push(`/foods/${food._id}`)}>
            {food.name}
          </h3>

          <div className="flex items-center gap-2 text-sm mt-2">
            <div className="flex text-yellow-400 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill="currentColor"
                  className={i < Math.floor(food.rating || 5) ? "text-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-gray-600 font-medium">({food.totalReviews || food.reviews || 0})</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-orange-500/10">
        <span className="text-3xl font-black text-slate-800 dark:text-white">
          ${food.price}
        </span>
        <button
          onClick={() => router.push(`/foods/${food._id}`)}
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-1 flex items-center gap-2"
        >
          <ShoppingCart size={18} /> Buy Now
        </button>
      </div>
    </motion.div>
  );
}
