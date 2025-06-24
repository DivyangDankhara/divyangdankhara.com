import React from 'react';
import Switch from './components/Switch/Switch';
import Intro from './components/Intro/Intro';
import Background from './components/Background/Background';
import EmploymentStatus from './components/EmploymentStatus/EmploymentStatus';
import Skills from './components/Skills/Skills';
import skillsData from './data/skills';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { useScrollReveal } from './hooks/useScrollReveal';

const App: React.FC = () => {
  useScrollReveal();
  return (
    <main>
      <Switch />
      <Intro />
      <Background />
      <p>Outside of work, I'm developing a side project ...</p>
      <EmploymentStatus />
      <Skills data={skillsData} />



      <ScrollToTop />
    </main>
  );
};

export default App;
