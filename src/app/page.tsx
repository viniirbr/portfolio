import { Inter } from "next/font/google";
import { getProjects } from "@/base/sanity/sanity-utils";
import { Tab } from "./components/Tab";
import { ProjectsGrid } from "./components/ProjectsGrid";
import { HorizontalScroll } from "./components/HorizontalScroll/HorizontalScroll";

const inter = Inter({ subsets: ["latin"], weight: ["500", "700", "800"] });

export default async function Home() {
  const projects = await getProjects();
  return (
    <main
      className={`${inter.className} flex min-h-screen flex-col gap-14 py-20 px-4`}
    >
      <header className="flex flex-col items-start md:mb-8">
        <h1 className="font-extrabold text-4xl w-full text-white">
          Hi, I&apos;m{" "}
        </h1>
        <h2
          className="bg-gradient-to-r from-purple-600 via-orange-400 to-white bg-clip-text text-transparent
        font-extrabold text-4xl"
        >
          VINICIUS RIBEIRO
        </h2>
        <h3 className="text-white text-lg">FULLSTACK DEVELOPER</h3>
        <p className="mt-4 text-white font-medium text-md">
          I&apos;m a software developer experienced in building applications for{" "}
          <b>Web</b> and <b>Mobile</b> using <b>JavaScript</b>
        </p>
      </header>
      <HorizontalScroll />
      <Tab
        tabs={[
          {
            title: "My Projects",
            content: <ProjectsGrid projects={projects} />,
          },
          { title: "Articles", content: <p>Articles Grid</p> },
        ]}
      />
    </main>
  );
}
