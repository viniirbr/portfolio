import { Project } from "@/types/Project";
import Image from "next/image";
import Link from "next/link";

interface Props {
  project: Project;
}

export function ProjectItem({ project }: Props) {
  return (
    <Link
      href={`projects/${project.slug}`}
      className="bg-white rounded-md w-full h-fit p-4 shadow-md shadow-black hover:shadow-md hover:shadow-purple-500 hover:scale-[1.01] active:shadow-none transition-all duration-500 ease-out hover:ease-in"
    >
      {project.image && (
        <Image
          src={project.image}
          alt={project.alt || project.name}
          width={200}
          height={200}
          className="w-full rounded-md"
        />
      )}
      <h3 className="text-gray-900 font-semibold">{project.name}</h3>
    </Link>
  );
}
