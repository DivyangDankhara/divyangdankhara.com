import React, { useEffect, useState } from 'react';

const Switch: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const body = document.body;
    const d = new Date();
    const hours = d.getHours();
    const isNight = hours >= 19 || hours <= 7;

    if (isNight) {
      setIsChecked(true);
      body.classList.add('night');
    }
  }, []);

  const handleToggle = () => {
    const body = document.body;
    if (isChecked) {
      body.classList.remove('night');
    } else {
      body.classList.add('night');
    }
    setIsChecked(!isChecked);
  };

  return (
    <div className="switch-wrapper">
      <div className="sun"></div>
      <div className="toggle-wrapper">
        <input
          id="switch"
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
        />
        <label htmlFor="switch" id="toggle">Toggle</label>
      </div>
      <div className="moon"></div>
    </div>
  );
};

export default Switch;
