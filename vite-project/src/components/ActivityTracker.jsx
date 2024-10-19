import React, { useState } from 'react';
import './ActivityTracker.css';

const screenshots = [
  '/images/screenshot1.png',
  '/images/screenshot2.png',
  '/images/screenshot3.png',
  '/images/screenshot4.png',
  '/images/screenshot5.png',
];

function ActivityTracker() {
  const [selectedScreenshot, setSelectedScreenshot] = useState(0);

  const handleSelect = (index) => {
    setSelectedScreenshot(index);
  };

  return (
    <div className="activity-tracker">
      <h2>Activity Tracker</h2>

      <div className="selected-screenshot-container">
        <img
          src={screenshots[selectedScreenshot]}
          alt={`Screenshot ${selectedScreenshot + 1}`}
          className="selected-screenshot"
        />
      </div>

    
      <div className="thumbnail-container">
        {screenshots.map((screenshot, index) => (
          <img
            key={index}
            src={screenshot}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${selectedScreenshot === index ? 'active' : ''}`}
            onClick={() => handleSelect(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ActivityTracker;
