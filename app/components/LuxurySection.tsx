"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Trees,
  Building2,
  ShieldCheck,
  CarFront,
  Landmark,
  MapPinned,
} from "lucide-react";

const features = [
  {
    icon: Trees,
    title: "Green Spaces",
    text: "Wide landscaped open areas designed for a peaceful lifestyle.",
  },
  {
    icon: CarFront,
    title: "Wide Roads",
    text: "30, 40 & 60 ft internal roads for smooth accessibility.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Investment",
    text: "Clear documentation and thoughtfully planned development.",
  },
  {
    icon: Landmark,
    title: "Premium Planning",
    text: "Designed for long-term value and modern living.",
  },
  {
    icon: Building2,
    title: "Commercial Zone",
    text: "Dedicated shopping area serving the entire community.",
  },
  {
    icon: MapPinned,
    title: "Prime Location",
    text: "Excellent connectivity to schools, markets and daily conveniences.",
  },
];

export default function LuxurySection() {
  return (
    <section className="relative h-[130vh] overflow-hidden">

      <Image
        src="/images/luxury-bg.jpg"
        alt=""
        fill
        className="object-cover scale-110"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[8px] text-[#C8A96A] mb-5">

            Why Choose Us

          </p>

          <h2 className="text-6xl text-white font-light leading-tight max-w-3xl">

            Designed Around
            <br />
            Modern Living.

          </h2>

        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * .08,
                  duration: .6,
                }}
                viewport={{ once: true }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-8"
              >

                <Icon
                  size={42}
                  className="text-[#C8A96A]"
                />

                <h3 className="text-white text-2xl mt-8">

                  {item.title}

                </h3>

                <p className="text-gray-400 mt-4 leading-8">

                  {item.text}

                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}