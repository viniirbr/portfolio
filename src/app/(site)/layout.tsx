import "../globals.css";
import { Inter } from "next/font/google";
import { NavLink } from "../components/UI/NavLink";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"], weight: ["500", "700", "800"] });

export const metadata = {
  title: "My portfolio",
  description: "Projects developer by Vinicius Ribeiro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-900 py-20 px-4 lg:px-12 lg:py-28`}
      >
        <header>
          <nav className="flex items-center absolute right-6 top-4 gap-6 lg:right-14 lg:top-8">
            <NavLink
              href="/"
              text="Home"
              className="after:right-40 lg:after:right-[182px] after:w-14"
            />
            <NavLink
              href="/contact"
              text="Reach out to me"
              className="after:-right-1 lg:after:right-1 after:w-36 lg:after:w-[152px]"
            />
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
