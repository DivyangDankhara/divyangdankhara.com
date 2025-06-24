import React, { useEffect, useState } from 'react';

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const intro = document.querySelector('.intro');
    const introHeight = intro?.getBoundingClientRect().height ?? 300;

    const onScroll = () => {
      setVisible(window.scrollY > introHeight);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button id="top-button" onClick={scrollToTop} className="top-button">
      ↑ Top
    </button>
  );
};

export default ScrollToTop;
