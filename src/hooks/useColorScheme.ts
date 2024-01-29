"use client";
import { useEffect, useState } from "react";

export default function useColorScheme() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme:dark)")
      .addEventListener("change", (ev) => setIsDarkMode(ev.matches));

    return () =>
      window
        .matchMedia("(prefers-color-scheme:dark)")
        .removeEventListener("change", (ev) => setIsDarkMode(ev.matches));
  }, []);

  return isDarkMode;
}
