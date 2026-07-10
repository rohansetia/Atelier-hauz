"use client";
import {motion} from "framer-motion";
import {MapPin,Ruler,Route,LayoutGrid,FileCheck,TrendingUp} from "lucide-react";
const items=[
{icon:MapPin,title:"Location",value:"Goluwala, Rajasthan"},
{icon:Ruler,title:"Plot Sizes",value:"25×50 & More"},
{icon:Route,title:"Road Width",value:"30 & 40 ft"},
{icon:LayoutGrid,title:"Project Type",value:"Residential Township"},
{icon:FileCheck,title:"Documentation",value:"Transparent & Verified"},
{icon:TrendingUp,title:"Investment",value:"High Growth Potential"},
];
export default function ProjectFacts()
{return <section className="bg-[#080808] py-24 text-white">
    <div className="max-w-7xl mx-auto px-6"><h2 className="text-5xl font-light mb-12">
        Project Facts
        </h2><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((i,idx)=>{const I=i.icon;return <motion.div key={i.title} 
            initial={{opacity:0,y:30}} 
            whileInView={{opacity:1,y:0}} 
            transition={{delay:idx*.08}} viewport={{once:true}}
             className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <I className="text-[#C8A96A]" size={30}/><p
                 className="mt-6 text-gray-400">{i.title}
                 </p><h3 className="text-2xl mt-2">{i.value}</h3></motion.div>})}
                 </div></div></section>}