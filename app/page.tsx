import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Stats from "./components/Stats";
import LuxurySection from "./components/LuxurySection";
import MasterplanShowcase from "./components/MasterplanShowcase";
import Divider from "./components/Divider";
import ScrollProgress from "./components/ScrollProgress";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactCTA from "./components/ContactCTA";
import FounderMessage from "./components/FounderMessage";
import Footer from "./components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Real Estate in Rajasthan",

  description:
    "Premium residential and commercial developments designed by AtelierHauz.",

  alternates: {
    canonical: "https://atelierhauz.in",
  },
};


export default function Home() {
  return (
    <>
      <ScrollProgress />

      <Navbar />
      
      

      <Hero />

      <Divider />

      <FeaturedProjects />

      <Divider />

      <About />

      <Divider />

      <Gallery />

      <Divider />

      <Stats />

      <Divider />

      <LuxurySection />

      <Divider />

      <MasterplanShowcase />

      <Divider />

      <Services />

      <Divider />

      <WhyChooseUs />

      <Divider />

      <Testimonials />

      <Divider />

      <ContactCTA />

      <Divider />

      <FounderMessage />

      <Divider />

      <Footer />
    </>
  );
}
