import { useState, useEffect } from "react";

function Timer({ deadline }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const distance = new Date(deadline) - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        setTimeLeft("Time's up!");
      }
    };

    const interval = setInterval(updateTimer, 1000);
    updateTimer(); // Run once immediately to avoid delay

    return () => clearInterval(interval);
  }, [deadline]);

  return <p style={{ color: 'red', fontSize:13 }}>{timeLeft} until Jan 20, 2025 11:59 PM</p>;
}

export default Timer;
