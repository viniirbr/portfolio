import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { NavLink } from "./components/UI/NavLink";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} bg-gray-900`}>
        <header>
          <nav className="flex items-center absolute right-4 top-4 gap-6">
            <NavLink href="/" text="Home" />
            <NavLink href="/contact" text="Reach out to me" />
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
