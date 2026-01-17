"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-200 max-h-200">
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
          className="absolute inset-0 bg-red-600 rounded-full blur-[120px]"
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
          className="absolute inset-0 bg-[#FFB200] rounded-full blur-[150px] delay-1000"
        />
      </div>

      <div className="relative flex flex-col items-center">
        <div className="relative mb-8">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-t-[#FFB200] border-r-transparent border-b-red-600 border-l-transparent shadow-[0_0_30px_rgba(255,178,0,0.2)]"
          />
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
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-lg transform rotate-45 shadow-[0_0_15px_rgba(220,28,28,0.5)]" />
          </motion.div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-black text-white italic tracking-tighter uppercase"
          >
            MEAL <span className="text-[#FFB200]">MATE</span>
          </motion.h2>

          <div className="h-1 w-48 sm:w-64 bg-white/10 rounded-full overflow-hidden relative">
            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-linear-to-r from-transparent via-red-600 to-transparent"
            />
          </div>

          <motion.p
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-[0.5em] mt-2 translate-x-[0.25em]"
          >
            Preparing Perfection
          </motion.p>
        </div>
      </div>

      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pollen.png')] opacity-30" />
      </div>
    </div>
  );
}
