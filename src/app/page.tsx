"use client";

import Navbar from "./ui/Navbar";
import Carousel from "./ui/Carousel";

export default function Home() {
  const topPics = [
    {
      src: "/next.svg",
      alt: "next",
      description: "Some descriptionSome descriptionSome descriptionvSome descriptionSome descriptionSome descriptionvvSome descriptionSome descriptionSome descriptionSome descriptionvSome descriptionvvvSome descriptionSome description",

    },
    {
      src: "/window.svg",
      alt: "window",
      description: "Some description",
    },
  ];

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className=" mt-20">
        <Carousel title="Top pics" images={topPics}  />
      </div>
    </>
  );
}
