import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file

const CountdownTimer = () => {
  const [targetDate, setTargetDate] = useState('');
  const [timeLeft, setTimeLeft] = useState({});

  const handleChange = (event) => {
    setTargetDate(event.target.value);
  };

  useEffect(() => {
    if (!targetDate) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateTimeLeft(date) {
    const difference = new Date(date) - new Date();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <div className="countdown">
      <h2>~~ Countdown Timer ~~</h2>
      <div className="input-container">
        <input type="datetime-local" onChange={handleChange} />
      </div>
      <p className="timer">
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </p>
      <button className="button" onClick={() => setTargetDate('')}>Reset</button>
    </div>
    <div style="text-align: center; margin-top: 20px; font-size: 14px; color: black;">
  &copy; 2024 All rights reserved to MS Corporation
</div>

  );
};

export default CountdownTimer;
