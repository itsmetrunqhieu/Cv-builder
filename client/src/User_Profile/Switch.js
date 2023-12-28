import React, { useState } from 'react';
import './Switch.css'; // Import file CSS để tùy chỉnh giao diện của switch

const Switch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={isChecked} onChange={handleToggle} />
      <span className="slider"></span>
    </label>
  );
};

export default Switch;
