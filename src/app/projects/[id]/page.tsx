import { BackIcon } from "@/app/components/BackIcon";
import { Button } from "@/app/components/Button";
import { getProjectBySlug } from "@/base/sanity/sanity-utils";
import { getTimeSincePosted } from "@/utils/getTimeSincePosted";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};
export default async function Project({ params }: Props) {
  const project = await getProjectBySlug(params.id);

  return (
    <main className="flex min-h-screen flex-col gap-14 py-20 px-4">
      <BackIcon href="" className="absolute top-6 left-2 font-extrabold" />
      <header className="flex gap-1 sm:gap-0 items-start sm:items-center flex-col justify-between sm:flex-row md:justify-around">
        <div>
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-orange-400 to-white bg-clip-text text-transparent">
            {project.name}
          </h1>
          <h4 className="text-white font-light">
            {getTimeSincePosted(project._createdAt)}
          </h4>
          <Link
            href={project.url}
            className="text-orange-400 font-semibold underline"
          >
            {project.url}
          </Link>
        </div>
        <Button
          text="Repository"
          href="https://github.com/viniirbr/country-search"
          imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
        />
      </header>
      <Image
        src={project.image}
        alt={project.alt}
        width={500}
        height={0}
        className="rounded-md w-full max-w-lg self-center sm:w-3/4"
      />
      <div className="text-white text-justify">
        <PortableText value={project.content} />
      </div>
    </main>
  );
}
