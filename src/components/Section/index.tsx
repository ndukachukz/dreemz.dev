import { PropsWithChildren } from "react";
import { SectionHeader } from "..";
import { twMerge } from "tailwind-merge";

interface Props extends PropsWithChildren {
  heading: string;
  className?: string;
}

export function Section({ children, heading, className }: Props) {
  return (
    <section className={twMerge("my-28 px-3", className)}>
      <SectionHeader heading={heading} />
      {children}
    </section>
  );
}
