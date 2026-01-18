"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-50 dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-200 max-h-200 opacity-60 dark:opacity-100 transition-opacity duration-500">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-red-500/80 dark:bg-red-600 rounded-full blur-[100px] md:blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-[#FFB200]/80 dark:bg-[#FFB200] rounded-full blur-[120px] md:blur-[150px] delay-1000"
          />
        </div>
      </div>

      <div className="relative flex flex-col items-center">
        <div className="relative mb-8 md:mb-10">
          {/* Main Spinner Ring */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-4 border-t-[#FFB200] border-r-transparent border-b-red-600 border-l-transparent shadow-[0_0_20px_rgba(255,178,0,0.3)] dark:shadow-[0_0_30px_rgba(255,178,0,0.2)]"
          />

          {/* Inner Pulsing Core */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-red-600 rounded-lg transform rotate-45 shadow-[0_0_15px_rgba(220,28,28,0.5)]" />
          </motion.div>
        </div>

        <div className="flex flex-col items-center gap-2 md:gap-3">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white italic tracking-tighter uppercase transition-colors duration-300"
          >
            MEAL <span className="text-[#FFB200]">MATE</span>
          </motion.h2>

          {/* Loading Bar */}
          <div className="h-1 w-40 sm:w-56 md:w-64 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden relative transition-colors duration-300">
            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFB200] to-transparent dark:via-red-600"
            />
          </div>

          <motion.p
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[10px] sm:text-xs font-bold text-slate-400 dark:text-gray-400 uppercase tracking-[0.4em] md:tracking-[0.5em] mt-2 translate-x-[0.2em]"
          >
            Preparing Perfection
          </motion.p>
        </div>
      </div>

      {/* Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pollen.png')] opacity-30" />
      </div>
    </div>
  );
}
