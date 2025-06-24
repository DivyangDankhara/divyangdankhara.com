import React from 'react';

const EmploymentStatus: React.FC = () => {
  return (
    <a
      className="status"
      href="https://www.linkedin.com/in/divyangdankhara/" //
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="status__light">
        <div className="status__light__ring"></div>
        <div className="status__light__led"></div>
      </div>
      <div className="status__message">Currently seeking full-time opportunities!</div>
    </a>
  );
};

export default EmploymentStatus;
