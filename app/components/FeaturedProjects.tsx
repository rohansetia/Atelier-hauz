export default function FeaturedProjects() {
  const projects = [
    {
      name: "Shri Sai Enclave",
      location: "Hanumangarh, Rajasthan",
      status: "Ongoing",
    },
    {
      name: "Luxury Villa Community",
      location: "Coming Soon",
      status: "Upcoming",
    },
    {
      name: "Green Valley Residences",
      location: "Coming Soon",
      status: "Upcoming",
    },
  ];

  return (
    <section className="bg-[#111111] text-white py-28 px-8">
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[0.4em] text-[#C8A56B] mb-3">
          Signature Developments
        </p>

        <h2 className="text-5xl font-bold mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-3xl overflow-hidden bg-[#1a1a1a] border border-white/10 hover:border-[#C8A56B] transition-all"
            >
              <div className="h-64 bg-gradient-to-br from-neutral-700 to-neutral-900"></div>

              <div className="p-8">

                <span className="text-[#C8A56B] text-sm uppercase">
                  {project.status}
                </span>

                <h3 className="text-2xl font-semibold mt-3">
                  {project.name}
                </h3>

                <p className="text-gray-400 mt-2">
                  {project.location}
                </p>

                <button className="mt-8 border border-[#C8A56B] px-5 py-3 rounded-full hover:bg-[#C8A56B] hover:text-black transition">
                  View Project
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}