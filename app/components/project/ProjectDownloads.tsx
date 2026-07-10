"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function ProjectDownloads() {
  return (
    <section className="bg-[#080808] py-24">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-[#111111] px-8 py-16 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[6px] text-[#C8A96A] text-sm"
        >
          Project Brochure
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-5 text-5xl font-light text-white"
        >
          Download Brochure
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400"
        >
          Get complete information about Shri Sai Enclave including
          the master plan, project highlights, amenities,
          location and investment opportunity.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          viewport={{ once: true }}
          href="/brochures/shri-sai-enclave.pdf"
          download
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#C8A96A] px-8 py-4 font-medium text-black transition hover:scale-105"
        >
          <Download size={20} />
          Download Brochure
        </motion.a>

      </div>
    </section>
  );
}