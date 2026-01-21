import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Portfolio from "@/components/Portfolio";
import Clients from "@/components/Clients";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Clients />
      <Contact />
    </>
  );
}
