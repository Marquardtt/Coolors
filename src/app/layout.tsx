import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "black project",
  description: "black project",
  keywords: "black project",
  robots: "black project",
  abstract: "black project",
  category: "black project",
  creator: "black project",
  generator: "black project"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className="w-screen h-screen">
      {children}
    </html>
  )
}