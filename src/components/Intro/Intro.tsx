import React, { useEffect } from 'react';

const Intro: React.FC = () => {
  useEffect(() => {
    const hand = document.querySelector('.emoji.wave-hand') as HTMLElement;
    if (!hand) return;

    const waveOnLoad = () => {
      hand.classList.add('wave');
      setTimeout(() => hand.classList.remove('wave'), 2000);
    };

    const onHover = () => hand.classList.add('wave');
    const onOut = () => hand.classList.remove('wave');

    setTimeout(waveOnLoad, 1000);
    hand.addEventListener('mouseover', onHover);
    hand.addEventListener('mouseout', onOut);

    return () => {
      hand.removeEventListener('mouseover', onHover);
      hand.removeEventListener('mouseout', onOut);
    };
  }, []);

  return (
    <header className="intro">
      <h1 className="intro__hello">
        Hello!
        <span className="emoji wave-hand animated" aria-label="waving hand" role="img"></span>
      </h1>

      <h2 className="intro__tagline">
        I&apos;m <span className="name">Divyang Dankhara</span>, a user-focused software developer passionate about
        crafting clean, intuitive digital experiences and simplifying complex systems through thoughtful design and
        engineering.
      </h2>

      <h3 className="intro__contact">
        <span>Get in touch </span>
        <span className="emoji pointer" aria-label="pointer" role="img"></span>
        <span>
          <a
            href="mailto:divyangdankhara007@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            divyangdankhara007@outlook.com
          </a>
        </span>
      </h3>
    </header>
  );
};

export default Intro;
