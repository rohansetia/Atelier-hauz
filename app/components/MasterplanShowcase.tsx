"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MasterplanShowcase() {
  return (
    <section className="bg-black py-40">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{opacity:0,y:60}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:.8}}
          viewport={{once:true}}
          className="text-center"
        >

          <p className="uppercase tracking-[8px] text-[#C8A96A] text-sm">

            Master Plan

          </p>

          <h2 className="text-6xl lg:text-7xl font-light text-white mt-6">

            Every Plot.
            <br/>
            Thoughtfully Planned.

          </h2>

          <p className="text-gray-400 mt-10 max-w-3xl mx-auto leading-9 text-lg">

            Shri Sai Enclave has been designed with a balanced
            layout, generous road network, commercial frontage,
            landscaped open spaces and carefully planned
            residential plots.

          </p>

        </motion.div>

        <motion.div

          initial={{opacity:0,scale:.95}}

          whileInView={{opacity:1,scale:1}}

          transition={{duration:1}}

          viewport={{once:true}}

          className="mt-24"

        >

          <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">

            <Image
              src="/masterplan/layout.jpg"
              alt="Master Plan"
              width={2200}
              height={1500}
              className="w-full"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}