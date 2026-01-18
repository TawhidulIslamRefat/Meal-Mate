"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Star,
  ArrowLeft,
  Clock,
  Users,
  Globe,
  CheckCircle2,
  AlertCircle,
  Flame,
  ChefHat,
  Plus,
  Minus,
  Utensils,
  Leaf,
  Info,
  ChevronRight,
} from "lucide-react";
import Loading from "@/app/Components/Loading/Loading";

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const id = params?.id;
    if (!id) return;

    fetch(`http://localhost:5000/foods/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Food not found");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(true);
        setLoading(false);
      });
  }, [params?.id]);

  if (loading) return <Loading />;

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-slate-50 dark:bg-[#0a0a0a] transition-colors duration-500">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 bg-red-100 dark:bg-red-900/10 rounded-full flex items-center justify-center text-red-600 shadow-xl dark:shadow-[0_0_30px_rgba(220,28,28,0.2)]"
        >
          <AlertCircle size={48} />
        </motion.div>
        <div className="text-center">
          <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-4 text-slate-900 dark:text-white">
            Recipe <span className="text-red-600">Not Found</span>
          </h2>
          <p className="text-slate-500 dark:text-gray-400 max-w-xs mx-auto font-medium">
            This specific masterpiece is currently off the menu.
          </p>
        </div>
        <button
          onClick={() => router.push("/foods")}
          className="bg-slate-900 dark:bg-white text-white dark:text-black font-black uppercase tracking-widest px-8 py-4 rounded-2xl hover:bg-red-600 dark:hover:bg-[#FFB200] transition-colors flex items-center gap-2 group shadow-lg"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Menu
        </button>
      </div>
    );
  }

  const {
    name,
    image,
    price,
    discountPrice,
    category,
    rating,
    totalReviews,
    shortDescription,
    description,
    ingredients = [],
    nutrition = {},
    allergens = [],
    tags = [],
    spicyLevel,
    servingSize,
    prepTime,
    availability,
    customization = { addons: [], remove: [] },
    pairWith = [],
    origin,
    chefNote,
  } = product;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0a] transition-colors duration-500 selection:bg-red-600/30">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-red-500/5 dark:bg-red-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-amber-500/5 dark:bg-[#FFB200]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full md:w-10/12 md:px-8 mx-auto px-4 py-12 md:py-20">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="group flex items-center gap-2 text-[11px] font-black text-slate-600 dark:text-gray-500 hover:text-red-600 dark:hover:text-[#FFB200] uppercase tracking-[0.3em] transition-all duration-300 mb-10"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-2" />
          The Collection
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-2xl dark:shadow-none p-6 md:p-10 flex items-center justify-center overflow-hidden group"
            >
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-slate-100/50 dark:via-black/20 to-slate-200/50 dark:to-black/60 z-1" />

              <Image
                src={image}
                alt={name}
                width={800}
                height={800}
                className="relative z-10 object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-1000 group-hover:rotate-6 group-hover:scale-110"
                priority
              />

              <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20 space-y-2 flex flex-col items-end">
                <div className="bg-slate-900 dark:bg-[#FFB200] text-white dark:text-black px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2">
                  <Leaf size={14} className="text-emerald-400 dark:text-emerald-700" />
                  <p className="text-[10px] font-black uppercase tracking-widest">{category}</p>
                </div>
                {availability ? (
                  <div className="bg-emerald-50 dark:bg-emerald-600/10 backdrop-blur-md border border-emerald-200 dark:border-emerald-500/30 text-emerald-600 dark:text-emerald-400 px-3 py-1.5 rounded-xl flex items-center gap-2">
                    <CheckCircle2 size={12} />
                    <p className="text-[9px] font-bold uppercase tracking-widest">In Stock</p>
                  </div>
                ) : (
                  <div className="bg-red-50 dark:bg-red-600/10 backdrop-blur-md border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 px-3 py-1.5 rounded-xl flex items-center gap-2">
                    <AlertCircle size={12} />
                    <p className="text-[9px] font-bold uppercase tracking-widest">Sold Out</p>
                  </div>
                )}
              </div>

              <div className="absolute bottom-4 left-4 md:bottom-10 md:left-8 z-20 flex flex-wrap gap-2 max-w-[80%]">
                {tags.map((tag, i) => (
                  <span key={i} className="bg-white/80 dark:bg-black/40 backdrop-blur-md border border-slate-200 dark:border-white/10 px-3 py-1 rounded-lg text-[9px] font-bold text-slate-600 dark:text-gray-300 uppercase tracking-widest">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { icon: Clock, label: "Cook Time", value: prepTime, color: "text-blue-500" },
                { icon: Users, label: "Serving", value: servingSize, color: "text-indigo-500" },
                { icon: Globe, label: "Origin", value: origin, color: "text-emerald-500" },
                { icon: Flame, label: "Spiciness", value: spicyLevel || "None", color: "text-red-500" },
              ].map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  key={i}
                  className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 text-center shadow-sm dark:shadow-none group hover:border-red-500/50 transition-colors"
                >
                  <item.icon size={20} className={`mx-auto mb-2 ${item.color}`} />
                  <p className="text-[9px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-xs font-black text-slate-900 dark:text-white uppercase italic tracking-tighter">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-lg shadow-red-600/20">
                <ChefHat size={14} />
                Artisan Crafted
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black italic tracking-tighter uppercase leading-[0.9] text-slate-900 dark:text-white mb-6">
                {name}
              </h1>

              <div className="flex flex-wrap items-center gap-6 md:gap-8 mb-8">
                <div>
                  <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">Premium Price</p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl md:text-5xl font-black italic tracking-tighter text-slate-900 dark:text-white">
                      ${discountPrice || price}
                    </span>
                    {discountPrice && (
                      <span className="text-xl md:text-2xl font-bold text-slate-400 dark:text-gray-600 line-through italic decoration-red-600 decoration-2">
                        ${price}
                      </span>
                    )}
                  </div>
                </div>

                <div className="h-10 md:h-14 w-px bg-slate-200 dark:bg-white/10 hidden md:block" />

                <div>
                  <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">Gourmet Rating</p>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill={i < Math.floor(rating) ? "currentColor" : "none"} className={i >= Math.floor(rating) ? "text-slate-200 dark:text-gray-800" : ""} />
                      ))}
                    </div>
                    <span className="text-xl font-black italic text-slate-900 dark:text-white mt-1">{rating.toFixed(1)}</span>
                  </div>
                  <p className="text-[9px] text-slate-600 font-bold uppercase tracking-widest">Global Reviews ({totalReviews})</p>
                </div>
              </div>

              <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 font-medium italic border-l-4 border-red-600 pl-6 leading-relaxed mb-10 max-w-2xl">
                {shortDescription}
              </p>
            </motion.div>

            <div className="flex bg-slate-100 dark:bg-white/5 p-1 rounded-2xl mb-8 overflow-x-auto">
              {["overview", "nutrition", "chef"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all relative border-none cursor-pointer whitespace-nowrap ${activeTab === tab ? "bg-white dark:bg-white/10 text-red-600 dark:text-[#FFB200] shadow-sm" : "text-slate-500 hover:text-slate-700 dark:text-gray-400"
                    }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div layoutId="tab-active" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-red-600 dark:bg-[#FFB200] rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <div className="min-h-50 mb-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  {activeTab === "overview" && (
                    <div className="space-y-6">
                      <p className="text-slate-600 dark:text-gray-400 leading-relaxed font-medium text-lg">{description}</p>

                      <div className="space-y-3">
                        <h4 className="text-[12px] font-black text-slate-900 dark:text-white uppercase tracking-widest">Key Ingredients</h4>
                        <div className="flex flex-wrap gap-2">
                          {ingredients.map((item, i) => (
                            <span key={i} className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-gray-300 italic">
                              • {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "nutrition" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="text-[12px] font-black text-slate-900 dark:text-white uppercase tracking-widest flex items-center gap-2">
                          <Info size={14} /> Nutrition Analysis
                        </h4>
                        <div className="bg-white dark:bg-white/5 rounded-2xl p-6 shadow-sm dark:shadow-none space-y-4">
                          {Object.entries(nutrition).map(([key, val]) => (
                            <div key={key} className="flex justify-between items-center group">
                              <span className="text-[12px] font-black uppercase tracking-widest text-slate-600 group-hover:text-red-600 transition-colors">
                                {key}
                              </span>
                              <span className="text-lg font-black italic tracking-tighter text-slate-900 dark:text-white">{val}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-[10px] font-black text-red-600 uppercase tracking-widest flex items-center gap-2">
                          <AlertCircle size={14} /> Allergen Advisory
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {allergens.length > 0 ? allergens.map((item, i) => (
                            <div key={i} className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 px-5 py-3 rounded-2xl flex items-center gap-3 w-full">
                              <div className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,28,28,0.5)]" />
                              <span className="text-xs font-black uppercase text-red-900 dark:text-red-400 italic">Contains {item}</span>
                            </div>
                          )) : (
                            <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/20 px-5 py-3 rounded-2xl w-full">
                              <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 italic">No Common Allergens Verified</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "chef" && (
                    <motion.div
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      className="bg-slate-900 dark:bg-[#FFB200]/5 border border-slate-800 dark:border-[#FFB200]/20 rounded-4xl p-10 relative overflow-hidden"
                    >
                      <ChefHat className="absolute -bottom-6 -right-6 text-white/5 dark:text-[#FFB200]/10 w-48 h-48 rotate-12" />
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-12 h-px bg-red-600" />
                          <h4 className="text-[10px] font-black text-red-600 dark:text-[#FFB200] uppercase tracking-[0.4em]">Artisans Insight</h4>
                        </div>
                        <p className="text-xl md:text-2xl text-white dark:text-gray-100 font-extrabold italic leading-snug tracking-tight">
                          {chefNote}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-auto space-y-8 pt-10 border-t border-slate-200 dark:border-white/10">
              {customization.addons.length > 0 && (
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest">Enhance Your Dish</h4>
                  <div className="flex flex-wrap gap-3">
                    {customization.addons.map((addon, i) => (
                      <button key={i} className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-5 py-3 rounded-2xl flex items-center justify-between gap-4 hover:border-red-600 dark:hover:border-[#FFB200] group transition-all">
                        <span className="text-xs font-bold text-slate-700 dark:text-gray-400 group-hover:text-red-600 transition-colors uppercase italic">{addon.name}</span>
                        <div className="flex items-center gap-1">
                          <Plus size={12} className="text-[#FFB200]" />
                          <span className="text-xs font-black text-slate-900 dark:text-white mt-0.5">+${addon.price}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex items-center bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-1.5 shadow-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 flex items-center justify-center transition-colors text-slate-900 dark:text-white"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="w-12 text-center font-black italic text-xl text-slate-900 dark:text-white">{quantity.toString().padStart(2, '0')}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 flex items-center justify-center transition-colors text-slate-900 dark:text-white"
                  >
                    <Plus size={18} />
                  </button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-16 bg-red-600 hover:bg-red-700 text-white rounded-[1.25rem] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 transition-all shadow-xl shadow-red-600/20"
                >
                  <ShoppingCart size={22} />
                  Claim for ${((discountPrice || price) * quantity).toFixed(0)}
                </motion.button>
              </div>

              {pairWith.length > 0 && (
                <div className="bg-amber-50 dark:bg-[#FFB200]/5 border border-amber-100 dark:border-[#FFB200]/10 rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-6 group text-center sm:text-left">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                    <Utensils size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-amber-800 dark:text-gray-500 uppercase tracking-widest mb-1">Kitchen Recommendation</p>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-x-4">
                      {pairWith.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-sm font-black italic text-slate-900 dark:text-[#FFB200] uppercase tracking-tighter cursor-pointer hover:underline underline-offset-4">{item}</span>
                          {i < pairWith.length - 1 && <ChevronRight size={14} className="text-amber-300" />}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <section className="mt-24 pt-16 border-t border-slate-200 dark:border-white/10 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div className="lg:w-1/3">
              <h3 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-slate-900/20 dark:text-white/5 leading-none select-none">
                Pure <br /> Raw <br /> Essence
              </h3>
            </div>
            <div className="grow grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              {ingredients.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  key={i}
                  className="bg-white dark:bg-[#121212] border border-slate-200 dark:border-white/5 px-6 py-5 rounded-3xl flex flex-col items-center text-center shadow-sm hover:shadow-md dark:shadow-none transition-shadow"
                >
                  <div className="w-8 h-8 rounded-full bg-red-600/10 flex items-center justify-center mb-3">
                    <div className="w-2 h-2 rounded-full bg-red-600" />
                  </div>
                  <span className="text-[12px] font-black uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-1">Grown Fresh</span>
                  <span className="text-sm font-black  uppercase tracking-tight text-slate-900 dark:text-white line-clamp-1">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
