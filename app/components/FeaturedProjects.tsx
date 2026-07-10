"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FeaturedProject() {
  return (
    <section className="bg-[#0B0B0B] py-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl"
        >
          <Image
            src="/masterplan/layout.jpg"
            alt="Shri Sai Enclave"
            width={1800}
            height={1200}
            className="w-full h-full object-cover hover:scale-105 duration-700"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[8px] text-[#C8A96A] text-sm mb-4">
            Featured Project
          </p>

          <h2 className="text-white text-5xl font-light leading-tight">
            Shri Sai Enclave
          </h2>

          <p className="text-gray-400 mt-8 leading-8 text-lg">
            A thoughtfully planned residential development with wide roads,
            premium infrastructure, landscaped surroundings and carefully
            designed plots that offer a balanced lifestyle for modern families.
          </p>

          <div className="grid grid-cols-2 gap-8 mt-12">

            <div>
              <p className="text-[#C8A96A] text-3xl font-light">
                99
              </p>
              <span className="text-gray-500">
                Residential Plots
              </span>
            </div>

            <div>
              <p className="text-[#C8A96A] text-3xl font-light">
                11
              </p>
              <span className="text-gray-500">
                Commercial Shops
              </span>
            </div>

            <div>
              <p className="text-[#C8A96A] text-3xl font-light">
                60 ft
              </p>
              <span className="text-gray-500">
                Main Road
              </span>
            </div>

            <div>
              <p className="text-[#C8A96A] text-3xl font-light">
                Premium
              </p>
              <span className="text-gray-500">
                Location
              </span>
            </div>

          </div>

          <Link
            href="/projects/shri-sai-enclave"
            className="inline-block mt-12 border border-[#C8A96A] text-[#C8A96A] px-10 py-4 rounded-full hover:bg-[#C8A96A] hover:text-black duration-300"
          >
            Explore Project
          </Link>

        </motion.div>

      </div>
    </section>
  );
}