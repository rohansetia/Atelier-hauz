"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const features=[
    {title:"Transparent Dealings",text:"Every transaction is handled with honesty, clarity and complete documentation."},
    {title:"Premium Planning",text:"Thoughtfully planned communities with wide roads and future-ready infrastructure."},
    {title:"Strategic Locations",text:"Projects selected for connectivity, convenience and long-term growth potential."},
    {title:"Long-Term Value",text:"Designed for families and investors seeking sustainable appreciation."},
  ];
  return (
    <section id="about" className="bg-[#0B0B0B] text-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 gap-14 items-center">
        <motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10">
            <Image src="/images/about.jpg" alt="About" fill className="object-cover"/>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
          <p className="uppercase tracking-[6px] text-[#C8A96A] text-sm">About AtelierHauz</p>
          <h2 className="mt-5 text-5xl font-light">Crafting Landmarks.<br/>Building Trust.</h2>
          <p className="mt-8 text-gray-300 leading-8">AtelierHauz creates thoughtfully planned communities with transparency, premium design and long-term value. Every project is built with quality, trust and customer satisfaction at its core.</p>
          <p className="mt-6 text-gray-400 leading-8">We believe buying land is more than an investment—it is the beginning of a family's future. Our developments combine strategic locations, organized infrastructure and honest dealings.</p>
          <div className="grid sm:grid-cols-2 gap-5 mt-10">
            {features.map(f=>(
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-[#C8A96A] transition">
                <h3 className="text-[#C8A96A] font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{f.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
           