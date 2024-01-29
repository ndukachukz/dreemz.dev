import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export function PageWrapper(props: PropsWithChildren & { className?: string }) {
  return (
    <main className={twMerge("max-w-screen-lg mx-auto", props.className)}>
      {props.children}
    </main>
  );
}
