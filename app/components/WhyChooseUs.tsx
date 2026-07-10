"use client";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  MapPin,
  Building2,
  Handshake,
  TrendingUp,
  Headset,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Documentation",
    description:
      "Every project is backed by proper legal documentation and complete transparency.",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description:
      "Strategically selected locations with excellent connectivity and future growth.",
  },
  {
    icon: Building2,
    title: "Premium Infrastructure",
    description:
      "Wide roads, organized layouts and thoughtfully planned developments.",
  },
  {
    icon: Handshake,
    title: "Transparent Dealings",
    description:
      "Honest communication and a customer-first approach from enquiry to registration.",
  },
  {
    icon: TrendingUp,
    title: "High Investment Potential",
    description:
      "Projects designed to deliver sustainable appreciation and long-term value.",
  },
  {
    icon: Headset,
    title: "Dedicated Customer Support",
    description:
      "Our team remains available even after your purchase for continued assistance.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-[#080808] py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[6px] text-[#C8A96A] text-sm">
            Why Choose AtelierHauz
          </p>

          <h2 className="mt-4 text-5xl font-light">
            Built on Trust.
            <br />
            Designed for Tomorrow.
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-8">
            Every development reflects our commitment to quality,
            transparency and creating communities that offer lasting value.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#C8A96A]/15 flex items-center justify-center mb-6">
                  <Icon className="text-[#C8A96A]" size={28} />
                </div>

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}