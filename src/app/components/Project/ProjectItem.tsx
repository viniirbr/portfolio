import { Project } from "@/types/Project";
import Image from "next/image";
import { Item } from "../UI/Item";
import { Button } from "../UI/Button";

interface Props {
  project: Project;
}

export function ProjectItem({ project }: Props) {
  return (
    <Item
      href={project.deployedUrl}
      imageAlt={"" || project.alt}
      title={project.name}
      imageSrc={project.image}
      openNewTab
    >
      <Button
        text="Repository and README"
        href={project.repositoryUrl}
        imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
      />
      <section className="flex items-center">
        {project.stacks.map((stack, id) => (
          <Image key={id} src={stack} width={50} height={50} alt="" />
        ))}
      </section>
    </Item>
  );
}
