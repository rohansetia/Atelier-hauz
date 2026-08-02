import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <Image
            src="/logo.svg"
            alt="Atelier Hauz"
            width={180}
            height={60}
          />

          <div className="text-center md:text-right">
            <p className="text-gray-400">
              Crafting Land. Creating Legacies.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              © 2026 Atelier Hauz. All rights reserved.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}