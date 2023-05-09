import { ProjectItem } from "./ProjectItem";
import { Grid } from "../UI/Grid";
import { getProjects } from "@/base/sanity/sanity-utils";

export async function ProjectsGrid() {
  const projects = await getProjects();

  return (
    <section className="">
      <Grid>
        {projects.map((project) => {
          return <ProjectItem key={project.name} project={project} />;
        })}
      </Grid>
    </section>
  );
}
