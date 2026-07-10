"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "15+",
    title: "Years of Trust",
  },
  {
    number: "1000+",
    title: "Dreams Delivered",
  },
  {
    number: "25+",
    title: "Land Developments",
  },
  {
    number: "24×7",
    title: "Customer Support",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#111111] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div

          initial={{ opacity: 0, y: 50 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: .8 }}

          viewport={{ once: true }}

          className="grid lg:grid-cols-4 md:grid-cols-2 gap-10"

        >

          {stats.map((item) => (

            <div
              key={item.title}
              className="border border-white/10 rounded-3xl p-10 bg-[#161616]"
            >

              <h2 className="text-[#C8A96A] text-6xl font-light">

                {item.number}

              </h2>

              <p className="text-gray-400 mt-5 text-lg">

                {item.title}

              </p>

            </div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}