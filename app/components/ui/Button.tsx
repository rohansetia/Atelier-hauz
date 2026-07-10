import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function Button({
  href,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full bg-[#C8A56B] px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:shadow-xl"
    >
      {children}
    </Link>
  );
}