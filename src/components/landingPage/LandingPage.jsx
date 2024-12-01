import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import BenefitSection from "./BenefitSection";
import HowItWorksSection from "./HowItWorksSection";
import KeyFeatureSection from "./KeyFeatureSection";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BenefitSection />
      <HowItWorksSection />
      <KeyFeatureSection />
      <Testimonials />
      <Footer />
    </>
  );
};