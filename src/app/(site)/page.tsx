import { Inter } from "next/font/google";
import { Tab } from "../components/UI/Tab";
import { ProjectsGrid } from "../components/Project/ProjectsGrid";
import { HorizontalScroll } from "../components/UI/HorizontalScroll/HorizontalScroll";
import { ArticlesGrid } from "../components/Article/ArticlesGrid";
import Image from "next/image";
import Link from "next/link";

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
        <p className="mt-4 text-white font-medium text-lg lg:text-xl mb-3">
          I&apos;m a software developer experienced in building applications for{" "}
          <b>Web</b> and <b>Mobile</b> using <b>JavaScript</b>
        </p>
        <div className="flex items-center justify-around text-white gap-3">
          <Link
            href="https://www.github.com/viniirbr"
            className="hover:text-orange-400 transition-colors duration-200"
            target="_blank"
          >
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="2em"
              width="2em"
            >
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/vinicius-ribeiro-4a2218135/"
            className="hover:text-orange-400 transition-colors duration-200"
            target="_blank"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="2em"
              width="2em"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </Link>
        </div>
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
