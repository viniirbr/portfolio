import "../globals.css";
import { Inter } from "next/font/google";
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
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
