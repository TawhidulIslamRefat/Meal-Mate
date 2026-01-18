"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Utensils, Clock, Users, Star, Award, Heart } from "lucide-react";
import Chefs from "../Components/Chefs/Chefs";
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] transition-colors duration-500 overflow-x-hidden">

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-200 bg-[#FFB200]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#FFB200] font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-4 block">
              Since 2010
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">
              Crafting <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FFB200] to-orange-500 italic">Culinary</span> <br />
              Memories
            </h1>
            <p className="max-w-2xl mx-auto text-slate-700 dark:text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
              We dont just cook food; we design experiences. Every dish tells a story of tradition, innovation, and passion.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                Our Journey from <br />
                <span className="text-orange-500 italic">Kitchen to Heart</span>
              </h2>
              <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
                Founded with a simple mission: to bring authentic, high-quality gourmet flavors to your doorstep. What started as a small family kitchen has grown into a culinary movement, celebrated for its dedication to freshness and taste.
              </p>
              <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
                We believe that great food brings people together. Thats why we source the finest ingredients, collaborate with world-class chefs, and treat every order as a masterclass in gastronomy.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-zinc-800 overflow-hidden relative">
                <Image src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2080&auto=format&fit=crop" fill className="object-cover" alt="Founder" />
              </div>
              <div>
                <p className="text-slate-900 dark:text-white font-bold text-lg">Marco De Pierre</p>
                <p className="text-[#FFB200] text-sm font-bold uppercase tracking-widest">Head Chef & Founder</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white dark:border-white/5">
              <Image
                src="https://images.stockcake.com/public/f/b/1/fb19e250-2549-4daf-a880-179538d0f7f2_large/chef-cooking-flambe-stockcake.jpg"
                alt="Chefs Cooking"
                width={800}
                height={600}
                className="object-cover"
              />

              <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-black/80 backdrop-blur-xl p-6 rounded-3xl border border-white/20 dark:border-white/10 shadow-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-orange-500 font-bold uppercase text-xs tracking-widest mb-1">Our Philosophy</p>
                    <p className="text-slate-900 dark:text-white font-bold text-lg">Fresh Ingredients, Daily.</p>
                  </div>
                  <div className="w-12 h-12 bg-[#FFB200] rounded-full flex items-center justify-center text-white">
                    <Heart size={20} fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full px-4 py-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-white dark:bg-[#0a0a0a] border border-slate-100 dark:border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100 dark:divide-white/5"
        >
          {[
            { icon: Clock, label: "Years of Service", value: "15+" },
            { icon: Users, label: "Happy Customers", value: "50k+" },
            { icon: Utensils, label: "Dishes Served", value: "1M+" },
            { icon: Award, label: "Awards Won", value: "25+" },
          ].map((stat, i) => (
            <div key={i} className={`flex flex-col items-center text-center ${i % 2 !== 0 ? 'pl-8' : ''}`}>
              <stat.icon className="text-[#FFB200] mb-4" size={32} />
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-2">{stat.value}</h3>
              <p className="text-slate-700 dark:text-gray-500 font-bold uppercase tracking-wider text-xs">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <Chefs />

    </div>
  );
}
