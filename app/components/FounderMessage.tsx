"use client";

import { motion } from "framer-motion";

export default function FounderMessage() {
  return (
    <section className="bg-[#0B0B0B] py-28">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-20 items-center"
        >
          {/* Left Side */}
          <div>

            <p className="tracking-[0.35em] uppercase text-[#C8A96A] text-sm mb-5">
              Founder's Message
            </p>

            <h2 className="text-5xl md:text-6xl font-light leading-tight text-white">
              Building More Than
              <br />
              Just Developments.
            </h2>

            <div className="mt-10 space-y-6 text-lg leading-9 text-gray-300">
             <p>
    The Rajasthan real estate market is evolving rapidly. Infrastructure expansion,
improved connectivity, and growing urban demand are transforming the way people
invest in land today.
             </p>
             <p>
                Successful real estate investment is no longer defined only by location—it is
driven by careful planning, legal transparency, future development potential,
and long-term value creation.
                
             </p>  

              <p>
                At AtelierHauz, we believe real estate is far more than land,
                roads, or infrastructure—it is about creating places where
                families grow, businesses flourish, and investments become
                lasting legacies.
              </p>

              <p>
                Every township we envision is planned with transparency,
                thoughtful design, and long-term value at its core. We don't
                merely develop projects; we create communities that people are
                proud to call their own.
              </p>

              <p>
                Our commitment has always been simple—deliver exceptional
                locations, uncompromising quality, and complete trust in every
                transaction.
              </p>

            </div>

            <div className="mt-12">
              <h3 className="text-2xl text-white font-medium">
                Rohit Setia
              </h3>

              <p className="text-[#C8A96A] mt-2 tracking-widest uppercase text-sm">
                Founder • AtelierHauz
              </p>
            </div>

          </div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: .95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .9 }}
            viewport={{ once: true }}
            className="rounded-[40px] border border-white/10 bg-[#111111] p-12"
          >

            <h3 className="text-3xl font-light text-white mb-10">
              Leadership Highlights
            </h3>

            

            <div className="mt-14 border-l-2 border-[#C8A96A] pl-6">

              <p className="italic text-gray-300 text-lg leading-8">
                "Our vision is not to sell plots,
                but to create destinations where
                future generations will build
                their dreams."
              </p>

            </div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}