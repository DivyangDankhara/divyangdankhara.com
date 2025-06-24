import React from 'react';
import socialLinks from '../../data/social';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <div className="top">
          <span>Designed &amp; Developed by</span>
        </div>
        <div className="bottom">
          <span>Divyang Dankhara</span>
          <img className="emoji" src="/img/emojis/rockon.png" alt="rock on emoji" />
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
      <div className="footer__links">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.title}
          >
            <span className="text">{link.title}</span>
            <img
              src={`/img/social/${link.title}.svg`}
              alt={link.title}
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
