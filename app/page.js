import { useNavigation } from "next/navigation";
import Image from "next/image";
import HeroSection from "./components/HeroSection";  
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import ExperienceSection from "./components/ExperienceSection";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col bg-[#c3ebe3]">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}