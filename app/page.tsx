import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PatchyShowcase from "@/components/PatchyShowcase";
import ProjectCanvas from "@/components/ProjectCanvas";
import HowIBuild from "@/components/HowIBuild";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <PatchyShowcase />
        <ProjectCanvas />
        <HowIBuild />
        <About />
      </main>
      <Footer />
    </>
  );
}
