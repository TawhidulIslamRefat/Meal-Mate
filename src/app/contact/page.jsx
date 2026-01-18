"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Clock,
  MessageSquare,
  Globe,
  ArrowRight,
  ChefHat,
  Instagram,
  Twitter,
  Facebook
} from "lucide-react";
import Swal from "sweetalert2";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      Swal.fire({
        title: "Message Received!",
        text: "Our culinary concierge will reach out to you shortly.",
        icon: "success",
        confirmButtonColor: "#FFB200",
        background: "#ffffff",
        color: "#0f172a",
        customClass: {
          popup: 'rounded-[2rem] border border-slate-100 shadow-2xl dark:bg-[#1a1a1a] dark:text-white dark:border-white/10'
        }
      });
      e.target.reset();
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "The Culinary Hub",
      value: "123 Gourmet Ave, Culinary Heights, NY",
      color: "text-[#FFB200] bg-[#FFB200]/10",
      delay: 0.1
    },
    {
      icon: Phone,
      label: "Imperial Hotline",
      value: "+1 (555) MEAL-MATE",
      color: "text-[#FFB200] bg-[#FFB200]/10",
      delay: 0.2
    },
    {
      icon: Mail,
      label: "Digital Concierge",
      value: "hello@mealmate.com",
      color: "text-[#FFB200] bg-[#FFB200]/10",
      delay: 0.3
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] transition-colors duration-500 py-16 md:py-32 relative overflow-hidden font-sans">

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-150 h-150 bg-[#FFB200]/10 dark:bg-[#FFB200]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-150 h-150 bg-red-600/10 dark:bg-red-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full md:w-11/12 xl:w-10/12 mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 bg-[#FFB200]/10 dark:bg-[#FFB200]/20 px-4 py-2 rounded-full text-[#FFB200] text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-6 md:mb-8 border border-[#FFB200]/20">
                <ChefHat size={14} /> Artisan Support
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black  tracking-tighter uppercase text-slate-900 dark:text-white leading-[1.1] md:leading-[0.9] mb-6 md:mb-8">
                Your <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FFB200] to-yellow-600">Direct</span> Connection
              </h1>

              <p className="text-base md:text-lg text-slate-900 dark:text-slate-400 font-medium leading-relaxed max-w-xl mb-10 md:mb-12">
                Have a bespoke request or a culinary vision to share? Our team of masters is ready to bring your dining experience to new heights.
              </p>

              <div className="space-y-8 mb-12">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: item.delay }}
                    className="flex items-center gap-6 group"
                  >
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl md:rounded-3xl ${item.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shrink-0 border border-[#FFB200]/20`}>
                      <item.icon size={24} className="md:w-7 md:h-7" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-700 dark:text-slate-500 mb-1">{item.label}</p>
                      <p className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#FFB200] transition-colors">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-700 dark:text-slate-500">Social Presence</span>
                <div className="flex items-center gap-4">
                  {[Instagram, Twitter, Facebook].map((SocialIcon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ y: -3, backgroundColor: "#FFB200", color: "#000" }}
                      className="w-10 h-10 rounded-full bg-slate-600 dark:bg-white/5 flex items-center justify-center text-slate-800 dark:text-slate-500 hover:text-black transition-all duration-300"
                    >
                      <SocialIcon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-12 xl:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 dark:bg-white/5 backdrop-blur-3xl border border-white/20 dark:border-white/10 rounded-[2.5rem] shadow-2xl p-6 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB200]/10 blur-[80px] rounded-full -mr-20 -mt-20 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 md:mb-12">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tight text-slate-900 dark:text-white mb-2">Inquiry Form</h2>
                    <div className="h-1.5 w-16 md:w-20 bg-[#FFB200] rounded-full" />
                  </div>
                  <div className="inline-flex items-center self-start sm:self-auto gap-3 text-[10px] font-black uppercase text-slate-700 dark:text-slate-500 tracking-[0.2em] border border-slate-200 dark:border-white/10 px-4 py-2 rounded-xl bg-slate-50 dark:bg-black/20">
                    <Clock size={14} className="text-[#FFB200]" /> Typically Responds in 2h
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-700 dark:text-slate-500 ml-1 transition-colors group-focus-within:text-[#FFB200]">Full Identity</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 px-5 py-4 text-sm md:text-base text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[#FFB200] focus:ring-1 focus:ring-[#FFB200] transition-all rounded-xl placeholder-slate-500 dark:placeholder-slate-600"
                        placeholder="Your Master Name"
                      />
                    </div>
                    <div className="group space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-700 dark:text-slate-500 ml-1 transition-colors group-focus-within:text-[#FFB200]">Digital Address</label>
                      <input
                        type="email"
                        required
                        className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 px-5 py-4 text-sm md:text-base text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[#FFB200] focus:ring-1 focus:ring-[#FFB200] transition-all rounded-xl placeholder-slate-500 dark:placeholder-slate-600"
                        placeholder="chef@example.com"
                      />
                    </div>
                  </div>

                  <div className="group space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-700 dark:text-slate-500 ml-1 transition-colors group-focus-within:text-[#FFB200]">Your Narrative</label>
                    <textarea
                      required
                      rows="5"
                      className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 px-5 py-4 text-sm md:text-base text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[#FFB200] focus:ring-1 focus:ring-[#FFB200] transition-all resize-none rounded-xl placeholder-slate-500 dark:placeholder-slate-600"
                      placeholder="Share your culinary vision or inquiry details..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                    className="w-full py-5 bg-[#FFB200] hover:bg-[#e6a100] text-black rounded-xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 md:gap-4 transition-all shadow-lg shadow-[#FFB200]/20 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={18} className="-rotate-45 mb-1" /> Transmit Signal
                      </>
                    )}
                  </motion.button>
                </form>

                <div className="mt-10 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-center gap-6 text-[10px] font-bold text-slate-700 dark:text-slate-500 uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Globe size={14} className="text-[#FFB200]" /> Global Support
                  </div>
                  <div className="hidden sm:block w-1 h-1 bg-slate-300 dark:bg-white/20 rounded-full" />
                  <div className="flex items-center gap-2">
                    <MessageSquare size={14} className="text-[#FFB200]" /> Real-time Chat
                  </div>
                  <div className="hidden sm:block w-1 h-1 bg-slate-300 dark:bg-white/20 rounded-full" />
                  <div className="flex items-center gap-2">
                    <ArrowRight size={14} className="text-[#FFB200]" /> Social Sync
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
