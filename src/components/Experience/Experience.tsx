import React from 'react';
import { ExperienceItem } from '../../types/experience';

interface ExperienceProps {
  data: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <section className="section experience">
      <div className="section__title">Experience</div>
      <div className="section__content">
        <div className="jobs">
          {data.map((job, index) => (
            <div className="job" key={index}>
              <div className="time-place">
                <div className="job__company">
                  <a href={job.url} target="_blank" rel="noopener noreferrer">
                    {job.company}
                  </a>
                </div>
                <div className="job__time">{job.time}</div>
              </div>
              <div className="job__position">{job.position}</div>
            </div>
          ))}
        </div>

        {/* Optional resume link */}
        {/* <a href="/documents/resume.pdf" target="_blank" className="arrow-link">View My Resume</a> */}
      </div>
    </section>
  );
};

export default Experience;
