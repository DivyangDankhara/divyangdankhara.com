import React from 'react';
import socialLinks from '../../data/social';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <p className='section__content'>© {new Date().getFullYear()} Divyang Dankhara. All rights reserved.</p>
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
