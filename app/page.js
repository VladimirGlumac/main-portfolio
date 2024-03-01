import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#1c1c1c]">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    <div></div>
    </main>
  );
}
