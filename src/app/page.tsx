import { Inter } from "next/font/google";
import { Tab } from "./components/UI/Tab";
import { ProjectsGrid } from "./components/Project/ProjectsGrid";
import { HorizontalScroll } from "./components/UI/HorizontalScroll/HorizontalScroll";
import { ArticlesGrid } from "./components/Article/ArticlesGrid";

const inter = Inter({ subsets: ["latin"], weight: ["500", "700", "800"] });

export default async function Home() {
  return (
    <main className={`${inter.className} flex min-h-screen flex-col gap-14`}>
      <header className="flex flex-col items-start md:mb-8">
        <h1 className="font-extrabold text-4xl w-full text-white xl:text-5xl">
          Hi, I&apos;m{" "}
        </h1>
        <h2
          className="bg-gradient-to-r from-purple-600 via-orange-400 to-white bg-clip-text text-transparent
        font-extrabold text-4xl xl:text-5xl"
        >
          VINICIUS RIBEIRO
        </h2>
        <h3 className="text-white text-lg xl:text-xl">FULLSTACK DEVELOPER</h3>
        <p className="mt-4 text-white font-medium text-lg lg:text-xl">
          I&apos;m a software developer experienced in building applications for{" "}
          <b>Web</b> and <b>Mobile</b> using <b>JavaScript</b>
        </p>
      </header>
      <HorizontalScroll />
      <Tab
        tabs={[
          {
            title: "My Projects",
            // @ts-expect-error Server Component
            content: <ProjectsGrid />,
          },
          {
            title: "Articles",
            // @ts-expect-error Server Component
            content: <ArticlesGrid />,
          },
        ]}
      />
    </main>
  );
}
