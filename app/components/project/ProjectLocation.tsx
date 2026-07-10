 "use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function ProjectLocation() {
  const lat = 29.624861;
  const lng = 74.045322;

  return (
    <section className="bg-[#0B0B0B] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{opacity:0,y:20}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="mb-10 text-center"
        >
          <p className="uppercase tracking-[6px] text-[#C8A96A] text-sm">
            Project Location
          </p>
          <h2 className="mt-4 text-5xl font-light">Visit Shri Sai Enclave</h2>
          <p className="mt-5 text-gray-400">
            29°37'29.50"N, 74°02'43.16"E
          </p>
        </motion.div>

        <div className="overflow-hidden rounded-3xl border border-white/10">
          <iframe
            title="Project Location"
            src={`https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`}
            className="h-[500px] w-full border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={`https://www.google.com/maps?q=${lat},${lng}`}
            target="_blank"
            className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 hover:border-[#C8A96A]"
          >
            <MapPin size={18}/>
            Open in Google Maps
          </a>

          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
            target="_blank"
            className="flex items-center gap-2 rounded-full bg-[#C8A96A] px-6 py-3 text-black"
          >
            <Navigation size={18}/>
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}