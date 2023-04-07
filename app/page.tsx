"use client";

import SectionWrapper from "@/components/SectionWrapper";
import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Contact,
  StarsCanvas,
  Banner,
  Footer,
  Project,
} from "../components";

const Portfolio = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <SectionWrapper Component={Banner} idName="about" />
      <SectionWrapper Component={About} idName="" />
      <SectionWrapper Component={Experience} idName="work" />
      <SectionWrapper Component={Tech} idName="" />
      <SectionWrapper Component={Project} idName="project" />
      <div className="relative z-0">
        <SectionWrapper Component={Contact} idName="contact" />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
