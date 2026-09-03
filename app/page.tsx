import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PatchesShowcase from "@/components/PatchesShowcase";
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
        <PatchesShowcase />
        <ProjectCanvas />
        <HowIBuild />
        <About />
      </main>
      <Footer />
    </>
  );
}
