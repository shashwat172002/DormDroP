
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Stopwatch = () => {
  const navigate = useNavigate();
  const { currentReceiver } = useSelector((state) => state.RECEIVER);

  const [countdown, setCountdown] = useState(() => {
    const initialCountdown = localStorage.getItem('countdown');
    return initialCountdown ? parseInt(initialCountdown, 10) : currentReceiver.waitTime * 60;
  });

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown(prevCountdown => {
        const newCountdown = Math.max(prevCountdown - 1, 0);
        localStorage.setItem('countdown', newCountdown.toString());
        return newCountdown;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      localStorage.removeItem('countdown');
      console.log('Time completed');
      navigate('/receiverpost');
    }
  }, [countdown, navigate]);

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  return (
    <div className="flex flex-col items-center justify-center h-full mb-40">
      <div className="flex items-center mb-10">
        <h1 className="text-4xl font-bold">Countdown Timer</h1>
      </div>
      <div className="text-6xl font-bold">
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
    </div>
  );
};

export default Stopwatch;
