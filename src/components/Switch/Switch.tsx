import React from 'react';

const Switch: React.FC = () => {
  return (
    <div className="switch-wrapper">
      <div className="sun" />
      <div className="toggle-wrapper">
        <input id="switch" type="checkbox" />
        <label htmlFor="switch" id="toggle">Toggle</label>
      </div>
      <div className="moon" />
    </div>
  );
};

export default Switch;
