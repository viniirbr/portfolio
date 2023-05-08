"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const logos = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/polygon/polygon-original.svg",
];

export function HorizontalScroll() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    setScrolling(window.innerWidth < 82 * logos.length);
    window.addEventListener("resize", () => {
      setScrolling(window.innerWidth < 82 * logos.length);
    });
  }, [scrolling]);

  return (
    <section className="relative py-3 w-full overflow-hidden">
      <div
        className={`${
          scrolling ? "animate-automaticScrollX" : ""
        } flex w-[calc(280px*14)] gap-8 h-full ${styles.slider}`}
      >
        <span className="flex items-center gap-8">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              width={50}
              height={50}
              alt={index.toString()}
              className="hover:scale-110 transition-transform ease-in-out duration-500 lg:w-16"
            />
          ))}
        </span>
        {scrolling && (
          <span className="flex items-center gap-8">
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo}
                width={50}
                height={50}
                alt={index.toString()}
                className="hover:scale-110 transition-transform ease-in-out duration-500"
              />
            ))}
          </span>
        )}
      </div>
    </section>
  );
}
