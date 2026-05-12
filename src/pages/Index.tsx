import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import FreelanceProjectsSection from "@/components/FreelanceProjectsSection";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="home" className="outline-none" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <FreelanceProjectsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
