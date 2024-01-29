"use client";
import Image from "next/image";
import React from "react";

import useColorScheme from "~/hooks/useColorScheme";

import starLight from "../../../public/star-light.svg";
import starDark from "../../../public/star.svg";

export function SectionHeader(props: { heading: string }) {
  const isDarkMode = useColorScheme();
  return (
    <div className="flex items-center gap-2 max-w-fit">
      <Image
        src={isDarkMode ? starDark : starLight}
        alt=""
        width={32}
        height={32}
      />

      <h1 className="text-2xl font-bold ">{props.heading}</h1>
    </div>
  );
}
