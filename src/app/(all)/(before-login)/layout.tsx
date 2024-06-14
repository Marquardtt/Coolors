"use client";

import { Header } from "@/components/Header";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { project: number };
}) {

  return (
    <>
      <Header></Header>
      <main className="w-screen h-screen flex">
        {children}
      </main>
    </>
  );
}
