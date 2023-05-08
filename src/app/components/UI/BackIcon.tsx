"use client";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

interface Props {
  href: string;
  className?: string;
  color?: string;
  size?: number;
}

export function BackIcon({ href, className, color, size }: Props) {
  return (
    <Link
      href={href}
      className={`${className} hover:scale-[1.1] active:translate-x-2 transition-transform ease-in-out duration-500`}
    >
      <ArrowLeft size={size || 32} color={color || "white"} />
    </Link>
  );
}
