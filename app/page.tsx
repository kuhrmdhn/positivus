import CaseStudiesSection from "@/components/case-studies/CaseStudiesSection";
import ContactSection from "@/components/contact/ContactSection";
import CompanyMarquee from "@/components/hero/CompanyMarquee";
import HeroSection from "@/components/hero/HeroSection";
import ServicesSection from "@/components/services/ServicesSection";
import TeamSection from "@/components/team/TeamSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import WorkingProcessSection from "@/components/working-process/WorkingProcessSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CompanyMarquee />
      <ServicesSection />
      <CaseStudiesSection />
      <WorkingProcessSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection/>
    </div>
  );
}
