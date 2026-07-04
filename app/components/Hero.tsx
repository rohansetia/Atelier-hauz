export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#111111]">

      {/* Luxury Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3b3b3b,#111111)]" />

      <div className="relative z-10 flex h-full items-center justify-center">

        <div className="max-w-5xl text-center px-6">

          <p className="uppercase tracking-[0.45em] text-[#C8A56B] text-sm mb-8">
            Spaces That Inspire. Communities That Thrive.
          </p>

          <h1 className="text-white text-6xl md:text-8xl font-bold leading-tight">
            Building
            <br />
            Tomorrow's
            <br />
            Landmarks
          </h1>

          <p className="mt-10 text-gray-300 text-xl max-w-3xl mx-auto leading-8">
            Premium plotted developments designed with architecture,
            nature and community at their core.
          </p>

          <div className="mt-14 flex justify-center gap-5">

            <button className="rounded-full bg-[#C8A56B] px-8 py-4 text-black font-semibold hover:scale-105 transition">
              Explore Projects
            </button>

            <button className="rounded-full border border-white px-8 py-4 text-white hover:bg-white hover:text-black transition">
              Contact Us
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}