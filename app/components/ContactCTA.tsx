import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-[#111111] text-white py-28 px-8">
      <div className="max-w-5xl mx-auto text-center">

        <p className="uppercase tracking-[0.35em] text-[#C8A56B] mb-4">
          Get In Touch
        </p>

        <h2 className="text-5xl font-bold mb-8">
          Let's Build Something Extraordinary.
        </h2>

        <p className="text-gray-300 text-lg leading-8 max-w-3xl mx-auto mb-12">
          Whether you're planning a premium plotted development,
          township, architectural project, or land investment,
          our team is ready to help you bring your vision to life.
        </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

  {/* WhatsApp Button */}
  <a
    href="https://whatsapp.com/channel/0029VbBe90g05MUXUETywe04"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(37,211,102,0.35)]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.52 3.48A11.79 11.79 0 0012.04 0C5.4 0 .01 5.38 0 12.02a11.9 11.9 0 001.62 6L0 24l6.19-1.61a12.02 12.02 0 005.84 1.49h.01C18.6 23.88 24 18.5 24 11.86c0-3.2-1.25-6.2-3.48-8.38z"/>
    </svg>

    Join WhatsApp Channel
  </a>

  {/* Instagram Button */}
  <a
    href="https://instagram.com/atelierhauz.in"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 rounded-full border border-[#C8A96A] px-8 py-4 text-[#C8A96A] font-medium transition-all duration-300 hover:bg-[#C8A96A] hover:text-black hover:scale-105"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0120 7.75v8.5A3.75 3.75 0 0116.25 20h-8.5A3.75 3.75 0 014 16.25v-8.5A3.75 3.75 0 017.75 4zm8.88 1a1.12 1.12 0 100 2.24 1.12 1.12 0 000-2.24zM12 6.5A5.5 5.5 0 106 12a5.5 5.5 0 006-5.5zm0 2A3.5 3.5 0 118.5 12 3.5 3.5 0 0112 8.5z"/>
    </svg>

    Follow on Instagram
  </a>

</div>

      </div>
    </section>
  );
}