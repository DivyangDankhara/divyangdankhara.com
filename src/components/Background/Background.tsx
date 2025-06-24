import React from 'react';
import EmploymentStatus from '../EmploymentStatus/EmploymentStatus';

const Background: React.FC = () => {
  return (
    <section className="section background">
      <div className="section__title">Background</div>
      <div className="section__content">
        <p>
          I'm a Senior Software Developer passionate about building thoughtful, modern software experiences.
          Most recently, I worked at a global logistics company where I helped transform complex legacy systems
          into clean, efficient, and user-focused web applications.
        </p>

        <p>
          I enjoy finding the balance between structure and creativity — turning technical challenges into
          intuitive solutions that are both scalable and enjoyable to use. For me, the best products are the ones
          that quietly do their job well, without getting in the user's way.
        </p>

        <p>
          Outside of work, I'm developing a side project that helps people improve their typing skills,&nbsp;
          preparing for my next big move, and always on the lookout for meaningful, impactful work with great teams.
        </p>

        <EmploymentStatus />
      </div>
    </section>
  );
};

export default Background;
