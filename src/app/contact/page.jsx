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
        background: "white",
        color: "#0f172a",
        customClass: {
          popup: 'rounded-[2rem] border border-slate-200 shadow-2xl'
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
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0a] transition-colors duration-500 py-16 md:py-32 relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#FFB200]/10 dark:bg-[#FFB200]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-red-500/5 dark:bg-red-600/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 w-full md:w-11/12 xl:w-10/12 mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-38">

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 bg-[#FFB200]/10 dark:bg-[#FFB200]/20 px-4 py-2 rounded-full text-[#FFB200] text-[10px] font-black uppercase tracking-[0.4em] mb-8">
                <ChefHat size={14} /> Artisan Support
              </div>
              <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase text-slate-900 dark:text-white leading-[0.85] mb-8">
                Your <span className="text-[#FFB200]">Direct</span> Connection <br /> To Excellence
              </h1>
              <p className="text-lg text-slate-600 dark:text-gray-400 font-medium leading-relaxed max-w-xl mb-12">
                Have a bespoke request or a culinary vision to share? Our team of masters is ready to bring your dining experience to new heights.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-6 mb-12">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: item.delay }}
                    className="flex items-center gap-6 group"
                  >
                    <div className={`w-16 h-16 rounded-3xl ${item.color} flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-6`}>
                      <item.icon size={28} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-1">{item.label}</p>
                      <p className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#FFB200] transition-colors">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-gray-500">Social Presence</span>
                <div className="flex items-center gap-4">
                  {[Instagram, Twitter, Facebook].map((SocialIcon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ y: -3, color: "#FFB200" }}
                      className="text-slate-400 dark:text-gray-600 hover:text-[#FFB200] transition-colors"
                    >
                      <SocialIcon size={20} />
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
              className="bg-white/80 dark:bg-white/5 backdrop-blur-3xl border border-white dark:border-white/10 rounded-[3rem] shadow-[0_32px_128px_-32px_rgba(0,0,0,0.1)] dark:shadow-none p-8 md:p-14 relative"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB200]/5 dark:bg-[#FFB200]/10 blur-[100px] rounded-full -mr-32 -mt-32" />

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16">
                  <div>
                    <h2 className="text-3xl font-black italic uppercase tracking-tight text-slate-900 dark:text-white mb-2">Inquiry Form</h2>
                    <div className="h-1 w-20 bg-[#FFB200]" />
                  </div>
                  <div className="flex items-center gap-3 text-[10px] font-black uppercase text-slate-400 dark:text-gray-500 tracking-[0.2em] border border-slate-200 dark:border-white/10 px-4 py-2 rounded-xl">
                    <Clock size={14} className="text-[#FFB200]" /> Typically Responds in 2h
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="group">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-2 block ml-1 transition-colors group-focus-within:text-[#FFB200]">Full Identity</label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          className="w-full bg-slate-50 dark:bg-black/40 border-b-2 border-slate-200 dark:border-white/10 px-6 py-5 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[#FFB200] transition-all rounded-t-2xl"
                          placeholder="Your Master Name"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-2 block ml-1 transition-colors group-focus-within:text-[#FFB200]">Digital Address</label>
                      <div className="relative">
                        <input
                          type="email"
                          required
                          className="w-full bg-slate-50 dark:bg-black/40 border-b-2 border-slate-200 dark:border-white/10 px-6 py-5 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[#FFB200] transition-all rounded-t-2xl"
                          placeholder="chef@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-2 block ml-1 transition-colors group-focus-within:text-[#FFB200]">Your Narrative</label>
                    <textarea
                      required
                      rows="4"
                      className="w-full bg-slate-50 dark:bg-black/40 border-b-2 border-slate-200 dark:border-white/10 px-6 py-5 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[#FFB200] transition-all resize-none rounded-t-2xl"
                      placeholder="Share your culinary vision or inquiry details..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    disabled={loading}
                    className="w-full h-20 bg-[#FFB200] hover:bg-amber-500 text-black rounded-[1.25rem] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-4 transition-all shadow-xl shadow-[#FFB200]/20 text-lg italic disabled:opacity-50"
                  >
                    {loading ? (
                      <div className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={22} className="rotate-12" /> Transmit Signal
                      </>
                    )}
                  </motion.button>
                </form>

                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-[11px] font-bold text-slate-400 dark:text-gray-600 uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Globe size={14} className="text-[#FFB200]" /> Global Support
                  </div>
                  <div className="hidden sm:block w-1.5 h-1.5 bg-slate-200 dark:bg-white/10 rounded-full" />
                  <div className="flex items-center gap-2">
                    <MessageSquare size={14} className="text-[#FFB200]" /> Real-time Chat
                  </div>
                  <div className="hidden sm:block w-1.5 h-1.5 bg-slate-200 dark:bg-white/10 rounded-full" />
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
