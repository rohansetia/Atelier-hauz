import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-12">Our Projects</h1>

        <Link
          href="/projects/shri-sai-enclave"
          className="block rounded-3xl border border-white/10 bg-[#181818] p-8 hover:border-[#C8A56B] transition"
        >
          <h2 className="text-3xl font-semibold">Shri Sai Enclave</h2>
          <p className="mt-3 text-gray-400">
            Premium Residential Township, Hanumangarh
          </p>
        </Link>
      </div>
    </main>
  );
}