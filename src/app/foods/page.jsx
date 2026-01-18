"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  ArrowUpDown,
  ChevronDown,
  Utensils,
  Zap,
  Star,
} from "lucide-react";
import Loading from "@/Components/Loading/Loading";
import FoodCard from "@/Components/FoodCard/FoodCard";


export default function ItemList() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("default");
  const [foods, setFoods] = useState([]);
  const [displayFoods, setDisplayFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const ITEMS_PER_PAGE = 8;

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const res = await fetch(
          "https://meal-mate-server-seven.vercel.app/foods",
        );
        const data = await res.json();
        setFoods(data);
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setLoading(false);
      }
    };
    fetchFoods();
  }, []);

  const processedFoods = foods
    .filter((food) => {
      const matchesSearch = food.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesCategory = category === "" || food.category === category;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "rating") return (b.rating || 0) - (a.rating || 0);
      return 0;
    });

  useEffect(() => {
    setPage(1);
    setDisplayFoods(processedFoods.slice(0, ITEMS_PER_PAGE));
    setHasMore(processedFoods.length > ITEMS_PER_PAGE);
  }, [search, category, sort, foods, processedFoods]);

  const loadMore = useCallback(() => {
    if (displayFoods.length >= processedFoods.length) {
      setHasMore(false);
      return;
    }
    const nextPage = page + 1;
    const newItems = processedFoods.slice(0, nextPage * ITEMS_PER_PAGE);
    setDisplayFoods(newItems);
    setPage(nextPage);
    setHasMore(newItems.length < processedFoods.length);
  }, [displayFoods, processedFoods, page]);

  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, loadMore],
  );

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#050505] text-slate-900 dark:text-white selection:bg-[#FFB200]/30 transition-colors duration-500">
      <section className="relative h-[55vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.8] dark:brightness-[0.4] scale-105 transition-all duration-700"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-white/20 via-slate-30/30 to-gray-200 dark:from-black/30 dark:via-black/50 dark:to-[#050505]" />

        <div className="relative z-10 text-center px-6 md:px-4 mt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-[#FFB200] text-black text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6 inline-block shadow-lg">
              Exquisite Flavors
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black  uppercase mb-6 text-slate-900 dark:text-white drop-shadow-sm">
              The{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FFB200] to-orange-500">
                Culinary
              </span>{" "}
              <br className="hidden md:block" />
              Collection
            </h1>
            <p className="max-w-md md:max-w-xl mx-auto text-slate-800 dark:text-gray-300 font-bold text-base md:text-lg italic">
              Explore our curated selection of gourmet masterpieces, crafted
              with passion and precision.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="px-4 md:px-8 -mt-10 md:-mt-16 relative z-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full md:w-11/12 lg:w-10/12 mx-auto bg-white/80 dark:bg-white/5 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-4xl p-4 md:p-6 shadow-2xl flex flex-col lg:flex-row gap-4 items-center ring-1 ring-slate-900/5 dark:ring-0"
        >
          <div className="relative w-full grow group">
            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-gray-500 group-focus-within:text-[#FFB200] transition-colors"
              size={20}
            />
            <input
              type="text"
              placeholder="Search by flavor, name, or ingredient..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-100 dark:bg-black/20 border-none rounded-2xl pl-12 pr-4 py-4 text-sm md:text-base text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-500 focus:ring-2 focus:ring-[#FFB200] transition-all font-bold"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <div className="relative w-full sm:w-56 group">
              <Filter
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-gray-500 group-focus-within:text-[#FFB200] transition-colors"
                size={18}
              />
              <select
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-slate-100 dark:bg-black/20 border-none rounded-2xl pl-12 pr-10 py-4 text-slate-900 dark:text-white appearance-none focus:ring-2 focus:ring-[#FFB200] transition-all font-black uppercase text-[10px] tracking-widest cursor-pointer"
              >
                <option value="" className="bg-white dark:bg-[#141414]">
                  All Cuisines
                </option>
                <option value="Pizza" className="bg-white dark:bg-[#141414]">
                  Pizza
                </option>
                <option value="Snacks" className="bg-white dark:bg-[#141414]">
                  Snacks
                </option>
                <option value="Drinks" className="bg-white dark:bg-[#141414]">
                  Drinks
                </option>
                <option value="Desserts" className="bg-white dark:bg-[#141414]">
                  Desserts
                </option>
              </select>
              <ChevronDown
                className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-gray-500 pointer-events-none"
                size={16}
              />
            </div>

            <div className="relative w-full sm:w-56 group">
              <ArrowUpDown
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-gray-500 group-focus-within:text-[#FFB200] transition-colors"
                size={18}
              />
              <select
                onChange={(e) => setSort(e.target.value)}
                className="w-full bg-slate-100 dark:bg-black/20 border-none rounded-2xl pl-12 pr-10 py-4 text-slate-900 dark:text-white appearance-none focus:ring-2 focus:ring-[#FFB200] transition-all font-black uppercase text-[10px] tracking-widest cursor-pointer"
              >
                <option value="default" className="bg-white dark:bg-[#141414]">
                  Sort By
                </option>
                <option
                  value="price-low"
                  className="bg-white dark:bg-[#141414]"
                >
                  Lowest Price
                </option>
                <option
                  value="price-high"
                  className="bg-white dark:bg-[#141414]"
                >
                  Highest Price
                </option>
                <option value="rating" className="bg-white dark:bg-[#141414]">
                  Top Rated
                </option>
              </select>
              <ChevronDown
                className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-gray-500 pointer-events-none"
                size={16}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <section className="w-full px-4 md:w-11/12 xl:w-10/12 mx-auto py-20 relative min-h-[50vh]">
        {displayFoods.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8  gap-y-12 md:gap-y-14">
              {displayFoods.map((food, index) => (
                <div
                  key={food._id}
                  ref={
                    index === displayFoods.length - 1 ? lastElementRef : null
                  }
                  className="h-full"
                >
                  <FoodCard food={food} />
                </div>
              ))}
            </div>

            {hasMore && (
              <div className="flex justify-center mt-24">
                <div className="relative w-16 h-16">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 border-4 border-[#FFB200] border-t-transparent rounded-full shadow-[0_0_15px_#FFB200/50]"
                  />
                </div>
              </div>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-32 bg-slate-100 dark:bg-white/5 rounded-[3rem] border border-dashed border-slate-300 dark:border-white/10 text-center px-4"
          >
            <div className="w-24 h-24 bg-white dark:bg-white/5 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Utensils
                size={40}
                className="text-slate-400 dark:text-gray-500"
              />
            </div>
            <h3 className="text-3xl font-black italic uppercase tracking-widest text-[#FFB200]">
              Chefs Miss
            </h3>
            <p className="text-slate-500 dark:text-gray-400 font-bold mt-2 text-lg">
              No matches found. Try adjusting your flavor profile.
            </p>
          </motion.div>
        )}
      </section>

      <div className="border-t border-slate-200 dark:border-white/5 bg-white dark:bg-[#080808] py-12">
        <div className="w-full md:w-11/12 lg:w-10/12 px-6 md:px-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-2xl bg-[#FFB200]/10 flex items-center justify-center text-[#FFB200] shrink-0 border border-[#FFB200]/20">
              <Utensils size={24} />
            </div>
            <div>
              <p className="text-slate-400 dark:text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">
                Inventory
              </p>
              <p className="text-xl font-black italic text-slate-800 dark:text-white">
                {processedFoods.length} Gourmet Items
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center">
            <div className="w-12 h-12 rounded-2xl bg-red-600/10 flex items-center justify-center text-red-600 shrink-0 border border-red-600/20">
              <Zap size={24} />
            </div>
            <div>
              <p className="text-slate-400 dark:text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">
                Efficiency
              </p>
              <p className="text-xl font-black italic text-slate-800 dark:text-white">
                Instant Kitchen Sync
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-end">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-900 dark:text-white shrink-0 border border-slate-200 dark:border-white/10">
              <Star size={24} />
            </div>
            <div>
              <p className="text-slate-400 dark:text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">
                Standards
              </p>
              <p className="text-xl font-black italic text-slate-800 dark:text-white">
                5-Star Quality Verified
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
