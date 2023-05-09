import Link from "next/link";

interface Props {
  text: string;
  href: string;
  className?: string;
}

export function NavLink({ text, href, className }: Props) {
  return (
    <Link
      href={href}
      className={`text-orange-400 font-bold text-lg lg:text-xl after:bg-orange-400 after:absolute after:top-7 ${className} after:h-[2px] after:scale-0 hover:after:scale-100 after:transition-transform after:duration-500 after:origin-left active:text-orange-600`}
    >
      {text}
    </Link>
  );
}
