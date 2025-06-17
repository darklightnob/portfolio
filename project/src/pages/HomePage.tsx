import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { HobbiesSection } from '../components/HobbiesSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ContactSection } from '../components/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      <HeroSection />
      <AboutSection />
      <HobbiesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};