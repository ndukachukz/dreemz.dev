"use client";
import Image from "next/image";
import React from "react";

import typescriptDarkLogo from "../../../public/typescript-dark.png";
import typescriptLogo from "../../../public/typescript-light.png";
import reactDarkLogo from "../../../public/react-dark.png";
import reactLogo from "../../../public/react-light.png";
import awsDarkLogo from "../../../public/aws-dark.png";
import awsLogo from "../../../public/aws-light.png";
import useColorScheme from "~/hooks/useColorScheme";

const imgs = [
  {
    alt: "typescript lang skill",
    srcDark: typescriptDarkLogo,
    srcLight: typescriptLogo,
  },
  {
    alt: "react framework skill",
    srcDark: reactDarkLogo,
    srcLight: reactLogo,
  },
  {
    alt: "cloud skill",
    srcDark: awsDarkLogo,
    srcLight: awsLogo,
  },
];

export function Hero() {
  const isDarkMode = useColorScheme();

  return (
    <header className="my-16 md:my-36">
      <div className="flex justify-center">
        <div className="max-w-screen-lg">
          <h1 className="uppercase text-center text-xl sm:text-2xl md:text-4xl lg:leading-10  font-extrabold">
            Hi, <br className="sm:hidden" /> I am Daniel Nduka, <br /> I am a
            software engineer from Nigeria
          </h1>
        </div>
      </div>
      <div className="lg:flex items-center px-5 mt-28">
        <div className="hidden lg:flex">
          {imgs.map((img, i) => (
            <Image
              key={i}
              alt={img.alt}
              src={isDarkMode ? img.srcDark : img.srcLight}
              className="object-contain h-40"
            />
          ))}
        </div>

        <p className="dark:text-gray-300 text-base max-w-3xl">
          Welcome to my portfolio. Here, artistry meets functionality. Dive into
          a curated showcase of distinctive branding and web designs, each
          crafted to captivate and inspire.
        </p>
      </div>
    </header>
  );
}
