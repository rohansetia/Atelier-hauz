"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const points=[
"Thoughtfully planned residential township",
"30 & 40 ft wide internal roads",
"Premium residential plots",
"Transparent documentation",
"Future-ready infrastructure",
"Excellent long-term investment potential"
];

export default function ProjectOverview(){
return(
<section className="bg-[#0B0B0B] text-white py-24">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
<p className="uppercase tracking-[6px] text-[#C8A96A] text-sm">Project Overview</p>
<h2 className="mt-4 text-5xl font-light">Designed for Modern Living.</h2>
<p className="mt-8 text-gray-300 leading-8">Shri Sai Enclave is a thoughtfully planned residential development that combines strategic location, premium planning and transparent processes. Every aspect has been designed to provide a secure environment for families while creating long-term value for investors.</p>
<p className="mt-6 text-gray-400 leading-8">From wide internal roads to organized plot planning, the project reflects AtelierHauz's commitment to quality and customer satisfaction.</p>
<div className="grid sm:grid-cols-2 gap-4 mt-10">
{points.map(p=><div key={p} className="flex gap-3 items-start"><CheckCircle2 className="text-[#C8A96A] mt-1" size={20}/><span className="text-gray-300">{p}</span></div>)}
</div>
</motion.div>
<motion.div initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
<div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
<Image src="/images/projects/shri-sai-enclave/overview.jpg" alt="Overview" fill className="object-cover"/>
</div>
</motion.div>
</div>
</section>
)}