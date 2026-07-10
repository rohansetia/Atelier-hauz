export default function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#171717] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#C8A56B]">
      {children}
    </div>
  );
}