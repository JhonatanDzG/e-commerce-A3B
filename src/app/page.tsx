"use client";

import Navbar from "./ui/Navbar";
import Carousel from "./ui/Carousel";

export default function Home() {
  const topPics = [
    {
      src: "/next.svg",
      alt: "next",
      description: "Some description",
    },
    {
      src: "/window.svg",
      alt: "window",
      description: "Some description",
    },
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <div className="mt-24 top-full">
        <Carousel title="Top pics" images={topPics} />
      </div>
    </div>
  );
}
