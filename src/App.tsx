import React from 'react';
import Switch from './components/Switch/Switch';
import Intro from './components/Intro/Intro';
import Background from './components/Background/Background';
import EmploymentStatus from './components/EmploymentStatus/EmploymentStatus';
import Skills from './components/Skills/Skills';
import skillsData from './data/skills';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { useScrollReveal } from './hooks/useScrollReveal';
import experienceData from './data/experience';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  useScrollReveal();
  return (
    <main>
      <Switch />
      <Intro />
      <Background />
 
      <Skills data={skillsData} />
      <Experience data={experienceData} />
      <Footer />

      <ScrollToTop />
    </main>
  );
};

export default App;
