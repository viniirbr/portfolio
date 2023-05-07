import { Project } from "@/types/Project";
import { ProjectItem } from "./ProjectItem";

interface Props {
  projects: Project[];
}

export function ProjectsGrid({ projects }: Props) {
  return (
    <section className="">
      <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-4 md:gap-24 lg:grid-cols-3 xl:grid-cols-4 lg:gap-14">
        {projects.map((project) => {
          return <ProjectItem key={project.name} project={project} />;
        })}
      </div>
    </section>
  );
}
