import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <Link
          href="/"
          className="text-white text-2xl font-semibold tracking-[0.35em]"
        >
          ATELIER HAUZ
        </Link>

        <nav className="hidden lg:flex gap-10 text-sm uppercase tracking-[0.2em] text-white">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button className="rounded-full bg-[#C8A56B] px-6 py-3 text-black font-medium hover:scale-105 transition">
          Book Consultation
        </button>

      </div>
    </header>
  );
}