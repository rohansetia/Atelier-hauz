"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <main className="fixed inset-0 bg-[#0B0B0B] flex items-center justify-center overflow-hidden">

      <div className="text-center">

        <motion.h1
          initial={{ opacity: 0, scale: .9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
          className="text-6xl md:text-7xl font-light text-[#C8A96A]"
        >
          AH
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: .9 }}
          transition={{ delay: .3 }}
          className="mt-5 tracking-[0.35em] uppercase text-gray-400"
        >
          AtelierHauz
        </motion.p>

        <div className="mt-10 w-56 h-[2px] bg-white/10 mx-auto overflow-hidden rounded-full">

          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear",
            }}
            className="h-full w-24 bg-[#C8A96A]"
          />

        </div>

        <motion.p
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mt-8 text-gray-500 tracking-[0.25em] uppercase text-xs"
        >
          Loading Experience...
        </motion.p>

      </div>

    </main>
  );
}