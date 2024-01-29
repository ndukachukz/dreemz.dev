import Image from "next/image";
import { About, Hero, PageWrapper, Expertise } from "~/components";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <Expertise />
      <About />
    </PageWrapper>
  );
}
