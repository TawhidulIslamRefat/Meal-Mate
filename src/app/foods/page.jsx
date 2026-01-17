"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ArrowUpDown, ChevronDown, Utensils, Zap, Star } from "lucide-react";
import Loading from "../Components/Loading/Loading";
import FoodCard from "../Components/FoodCard/FoodCard";

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
        const res = await fetch("http://localhost:5000/foods");
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

  // Filter and Sort Logic
  const processedFoods = foods
    .filter((food) => {
      const matchesSearch = food.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "" || food.category === category;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "rating") return (b.rating || 0) - (a.rating || 0);
      return 0;
    });

  // Infinite Scroll Logic (Handling client-side pagination for this demo)
  useEffect(() => {
    setPage(1);
    setDisplayFoods(processedFoods.slice(0, ITEMS_PER_PAGE));
    setHasMore(processedFoods.length > ITEMS_PER_PAGE);
  }, [search, category, sort, foods,processedFoods]);

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
    [loading, hasMore, loadMore]
  );

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-red-600/30">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.3] scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-[#0a0a0a]" />

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.4em] px-4 py-2 rounded-full mb-6 inline-block">
              Exquisite Flavors
            </span>
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.85] mb-6">
              The <span className="text-[#FFB200]">Culinary</span> <br />
              Collection
            </h1>
            <p className="max-w-xl mx-auto text-gray-200 font-medium text-lg italic">
              Explore our curated selection of gourmet masterpieces, crafted
              with passion and precision by world-class chefs.
            </p>
          </motion.div>
        </div>

        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-red-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 -right-20 w-80 h-80 bg-[#FFB200]/10 rounded-full blur-[120px]" />
      </section>
      <div className="px-4 md:px-8 -mt-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full px-4 md:w-10/12 md:px-8 mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 md:p-6 shadow-2xl flex flex-col lg:flex-row gap-4 items-center"
        >
          <div className="relative w-full grow group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#FFB200] transition-colors" size={20} />
            <input
              type="text"
              placeholder="Search by flavor, name, or ingredient..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/5 rounded-2xl pl-12 pr-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#FFB200]/40 transition-all font-semibold italic tracking-tight"
            />
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-4 w-full lg:w-auto">
            <div className="relative w-full md:w-48 group">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#FFB200] transition-colors" size={18} />
              <select
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-white/5 border border-white/5 rounded-2xl pl-12 pr-10 py-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#FFB200]/40 transition-all font-bold uppercase text-[10px] tracking-widest cursor-pointer"
              >
                <option value="" className="bg-[#141414]">All Cuisines</option>
                <option value="Pizza" className="bg-[#141414]">Pizza</option>
                <option value="Snacks" className="bg-[#141414]">Snacks</option>
                <option value="Drinks" className="bg-[#141414]">Drinks</option>
                <option value="Desserts" className="bg-[#141414]">Desserts</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
            </div>

            <div className="relative w-full md:w-48 group">
              <ArrowUpDown className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#FFB200] transition-colors" size={18} />
              <select
                onChange={(e) => setSort(e.target.value)}
                className="w-full bg-white/5 border border-white/5 rounded-2xl pl-12 pr-10 py-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#FFB200]/40 transition-all font-bold uppercase text-[10px] tracking-widest cursor-pointer"
              >
                <option value="default" className="bg-[#141414]">Sort By</option>
                <option value="price-low" className="bg-[#141414]">Lowest Price</option>
                <option value="price-high" className="bg-[#141414]">Highest Price</option>
                <option value="rating" className="bg-[#141414]">Top Rated</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
            </div>
          </div>
        </motion.div>
      </div>

      <section className="w-full px-4 md:w-10/12 md:px-8 mx-auto py-20 relative min-h-[50vh]">
        {displayFoods.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              {displayFoods.map((food, index) => (
                <div key={food._id} ref={index === displayFoods.length - 1 ? lastElementRef : null}>
                  <FoodCard food={food} />
                </div>
              ))}
            </div>

            {hasMore && (
              <div className="flex justify-center mt-16">
                <div className="relative w-16 h-16">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-4 border-[#FFB200] border-t-transparent rounded-full shadow-[0_0_15px_#FFB200/20]"
                  />
                </div>
              </div>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 bg-white/5 rounded-[3rem] border border-dashed border-white/10"
          >
            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6">
              <Utensils size={40} className="text-gray-600" />
            </div>
            <h3 className="text-3xl font-black italic uppercase tracking-widest text-[#FFB200]">
              Chefs Miss
            </h3>
            <p className="text-gray-500 font-medium mt-2">
              No matches found. Try adjusting your flavor profile.
            </p>
          </motion.div>
        )}
      </section>

      <div className="border-t border-white/5 bg-[#080808] py-12">
        <div className="w-full md:w-10/12 px-4 md:px-8 mx-auto  flex flex-wrap justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFB200]/10 flex items-center justify-center text-[#FFB200]">
              <Utensils size={24} />
            </div>
            <div>
              <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">Inventory</p>
              <p className="text-xl font-bold italic">{processedFoods.length} Gourmet Items</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-600/10 flex items-center justify-center text-red-600">
              <Zap size={24} />
            </div>
            <div>
              <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">Efficiency</p>
              <p className="text-xl font-bold italic">Instant Kitchen Sync</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white">
              <Star size={24} />
            </div>
            <div>
              <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">Standards</p>
              <p className="text-xl font-bold italic">5-Star Quality Verified</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
