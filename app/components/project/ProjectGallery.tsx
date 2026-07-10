"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images=[
"/images/projects/shri-sai-enclave/gallery/gallery1.jpg",
"/images/projects/shri-sai-enclave/gallery/gallery2.jpg",
"/images/projects/shri-sai-enclave/gallery/gallery3.jpg",
"/images/projects/shri-sai-enclave/gallery/gallery4.jpg",
"/images/projects/shri-sai-enclave/gallery/gallery5.jpg",
"/images/projects/shri-sai-enclave/gallery/gallery6.jpg",
];

export default function ProjectGallery(){
return(
<section className="bg-[#0B0B0B] py-24 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-14">
<p className="uppercase tracking-[6px] text-[#C8A96A] text-sm">Project Gallery</p>
<h2 className="mt-4 text-5xl font-light">Experience Shri Sai Enclave</h2>
<p className="mt-6 max-w-3xl mx-auto text-gray-400">Explore our premium collection of project visuals.</p>
</div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
{images.map((src,i)=>(
<motion.div key={i} initial={{opacity:0,scale:.95}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
<Image src={src} alt={"Gallery "+(i+1)} fill className="object-cover transition duration-700 group-hover:scale-110"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition"/>
</motion.div>
))}
</div>
</div>
</section>
)}