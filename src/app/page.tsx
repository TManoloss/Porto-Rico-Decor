import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Image from "next/image";
import Service from "@/components/Service";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Contact />
    </>
  );
}
