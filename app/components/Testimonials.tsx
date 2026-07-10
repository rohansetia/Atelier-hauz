"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    text: "The professionalism and transparency throughout the buying process exceeded our expectations.",
  },
  {
    name: "Priya Verma",
    text: "Beautiful planning, premium infrastructure and an excellent investment opportunity.",
  },
  {
    name: "Aman Gupta",
    text: "The entire experience felt premium from our first site visit to final documentation.",
  },
  {
    name: "Rahul Mehta",
    text: "Highly recommended for anyone looking for a trustworthy real estate developer.",
  },
  {
    name: "Sandeep Kaur",
    text: "Exceptional customer support and complete transparency at every step.",
  },
];

export default function Testimonials() {
  const items = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="bg-[#0B0B0B] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <p className="uppercase tracking-[6px] text-[#C8A96A] text-sm">
          Testimonials
        </p>

        <h2 className="mt-4 text-5xl font-light text-white">
          Trusted By Families.
          <br />
          Recommended By Investors.
        </h2>

        <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-8">
          Every project reflects our commitment to transparency, premium
          planning and long-term customer satisfaction.
        </p>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="w-[360px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8"
            >
              <div className="flex gap-1 text-[#C8A96A] mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="text-gray-300 leading-8">
                "{item.text}"
              </p>

              <div className="mt-8">
                <h4 className="text-white font-medium">
                  {item.name}
                </h4>

                <p className="text-sm text-gray-500">
                  Verified Buyer
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}