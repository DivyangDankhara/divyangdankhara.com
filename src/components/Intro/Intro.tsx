import React from 'react';

const Intro: React.FC = () => {
  return (
    <header className="intro">
      <h1 className="intro__hello">
        Hello!
        <span className="emoji wave-hand animated" role="img" aria-label="waving hand" />
      </h1>

      <h2 className="intro__tagline">
        I'm <span className="name">Divyang Dankhara</span>, a user-focused software developer passionate about crafting clean, intuitive digital experiences and simplifying complex systems through thoughtful design and engineering.
      </h2>

      <h3 className="intro__contact">
        <span>Get in touch </span>
        <span className="emoji pointer" role="img" aria-label="pointing finger" />
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
