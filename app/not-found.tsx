import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white flex items-center justify-center px-6">

      <div className="text-center max-w-2xl">

        <p className="tracking-[0.4em] uppercase text-[#C8A96A] mb-5">
          Error 404
        </p>

        <h1 className="text-6xl md:text-7xl font-light leading-tight">
          Page
          <br />
          Not Found
        </h1>

        <p className="mt-8 text-gray-400 leading-8 text-lg">
          The page you are looking for doesn't exist or has been moved.
          Return to the AtelierHauz homepage and continue exploring
          premium real estate opportunities.
        </p>

        <Link
          href="/"
          className="inline-block mt-12 rounded-full bg-[#C8A96A] px-10 py-4 font-medium text-black transition hover:scale-105"
        >
          Return Home
        </Link>

      </div>

    </main>
  );
}