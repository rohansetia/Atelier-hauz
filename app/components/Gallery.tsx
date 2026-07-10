"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
];

export default function Gallery() {
  return (
    <section className="bg-[#0B0B0B] py-32 px-6">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:.7}}
          viewport={{once:true}}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[8px] text-[#C8A96A] text-sm mb-4">
            Gallery
          </p>

          <h2 className="text-6xl font-light text-white">
            Crafted Details
          </h2>

          <p className="text-gray-500 mt-8 max-w-2xl mx-auto leading-8">
            Every project reflects timeless architecture,
            thoughtful planning and an uncompromising attention
            to detail.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {images.map((image,index)=>(
            <motion.div

              key={index}

              initial={{opacity:0,y:50}}

              whileInView={{opacity:1,y:0}}

              transition={{
                duration:.6,
                delay:index*.08
              }}

              viewport={{once:true}}

              className="overflow-hidden rounded-[30px]"
            >

              <Image
                src={image}
                alt=""
                width={700}
                height={700}
                className="hover:scale-110 duration-700 cursor-pointer"
              />

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}