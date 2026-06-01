import { useSeo } from "@/seo/useSeo";
import { useI18n } from "@/i18n/context";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import FreelanceProjectsSection from "@/components/FreelanceProjectsSection";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Footer from "@/components/Footer";

const BASE_URL = "https://ricardorohrs.github.io";

const Index = () => {
  const { t } = useI18n();
  useSeo({
    title: t("home.seo.title"),
    description: t("home.seo.description"),
    canonical: BASE_URL,
    ogTitle: t("home.seo.ogTitle"),
    ogDescription: t("home.seo.ogDescription"),
    ogImage: `${BASE_URL}/favicon.svg`,
    ogType: "website",
    ogLocale: "pt_BR",
    ogLocaleAlternate: ["en_US"],
    twitterCard: "summary_large_image",
    keywords: t("home.seo.keywords"),
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    ldJson: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": `${BASE_URL}#person`,
          name: "Ricardo Röhrs",
          image: {
            "@type": "ImageObject",
            url: `${BASE_URL}/favicon.svg`,
          },
          description: t("home.seo.description"),
          jobTitle: "Full Stack Developer",
          url: BASE_URL,
          sameAs: [
            "https://github.com/ricardorohrs",
            "https://gitlab.com/ricardoerohrs",
            "https://linkedin.com/in/ricardorohrs",
          ],
          knowsAbout: ["Web Development", "React", "TypeScript", "Node.js", "API Design"],
          worksFor: {
            "@type": "Organization",
            name: "Freelancer",
            url: BASE_URL,
          },
        },
        {
          "@type": "WebSite",
          "@id": `${BASE_URL}#website`,
          url: BASE_URL,
          name: "Ricardo Röhrs",
          description: "Portfolio de Full Stack Developer",
          creator: {
            "@id": `${BASE_URL}#person`,
          },
        },
      ],
    },
  });

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
