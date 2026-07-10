"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInquiry } from "../GlobalInquiryProvider";
import Link from "next/link";
import { MapPin } from "lucide-react";


export default function ProjectHero() {
    const { openInquiry } = useInquiry();
  return (
    <section className="relative h-screen overflow-hidden">
      <Image src="/images/projects/shri-sai-enclave/hero.jpg" 
      alt="Shri Sai Enclave" fill priority className="object-cover"/>
      <div className="absolute inset-0 bg-black/60"/>
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6">
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
           className="uppercase tracking-[6px] text-[#C8A96A] text-sm">
            AtelierHauz Presents</motion.p>
          <motion.h1 initial={{opacity:0,y:20}} 
          animate={{opacity:1,y:0}} className="mt-5 text-5xl md:text-7xl font-light text-white">Shri Sai<br/>Enclave</motion.h1>
          <div className="mt-6 flex items-center gap-2 text-gray-200"><MapPin size={18}/><span>Goluwala, Rajasthan</span></div>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">A thoughtfully planned residential township offering premium plots, wide roads and long-term investment value.</p>
          <div className="mt-10 flex flex-wrap gap-4">
           <button
  onClick={openInquiry}
  className="rounded-full bg-[#C8A96A] px-8 py-4 text-black font-medium"
>
  Schedule a Visit
</button>
           
          </div>
        </div>
      </div>
    </section>
  );
}