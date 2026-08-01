"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import InquiryDrawer from "./InquiryDrawer";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6"
      >
        <div
          className={`transition-all duration-500 w-full max-w-7xl rounded-full border ${
            scrolled
              ? "bg-black/70 backdrop-blur-2xl border-white/10 shadow-2xl"
              : "bg-transparent border-transparent"
          }`}
        >
          <div className="flex items-center justify-between px-8 py-4">

            {/* Logo */}

            <Link href="/" className="flex items-center gap-3">

              <Image
                src="/logo.svg"
                alt="AtelierHauz"
                width={46}
                height={46}
                className="rounded-full"
              />

              <span className="text-white text-xl tracking-[4px]">
                ATELIERHAUZ
              </span>

            </Link>

            {/* Navigation */}

            <nav className="hidden md:flex items-center gap-10 text-sm tracking-[2px] uppercase text-white">

              <Link href="/" className="hover:text-[#C8A96A] transition">
                Home
              </Link>

             <Link href="#about">
  About
</Link>
  

              <Link href="/projects" className="hover:text-[#C8A96A] transition">
                Projects
              </Link>

            

            </nav>

            {/* CTA */}

            <button
              onClick={() => setOpen(true)}
              className="hidden md:flex items-center justify-center rounded-full border border-[#C8A96A] px-6 py-3 text-[#C8A96A] hover:bg-[#C8A96A] hover:text-black transition duration-300"
            >
              Schedule a Visit
            </button>

          </div>
        </div>
      </motion.header>

      {/* Inquiry Drawer */}

      <InquiryDrawer
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}