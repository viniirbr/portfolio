"use client";
import { CircleNotch } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
  href?: string;
  className?: string;
  imgSrc?: string;
  loading?: boolean;
}

const defaultStyles =
  "bg-gray-300 p-2 rounded-sm font-bold flex items-center gap-2 text-sm hover:bg-gray-400 transition-all ease-in-out";

export function Button({
  href,
  text,
  className,
  imgSrc,
  loading,
  ...rest
}: Props) {
  if (href) {
    return (
      <Link
        href={href}
        className={`${defaultStyles} ${className}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        {imgSrc && <Image src={imgSrc} width={30} height={30} alt="" />}
        <h2 className="text-gray-500">{text}</h2>
      </Link>
    );
  }

  if (rest.onClick) {
    return (
      <button {...rest} className={`${defaultStyles} ${className}`}>
        {loading ? <CircleNotch className="animate-spin" /> : text}
      </button>
    );
  }

  throw new Error("You must provide either href or onClick props");
}
