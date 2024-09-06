import { useState, useEffect } from "react";

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };

function CountdownTimer() {
    const targetDate = "2024-12-31T23:59:59"
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });;

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft(targetDate));
      }, 1000);
  
      return () => clearInterval(timer); // Cleanup the interval on component unmount
    }, [targetDate]);
  
    function calculateTimeLeft(targetDate: string): TimeLeft {
      const difference = +new Date(targetDate) - +new Date();
  
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }
    }
  
    return timeLeft;
  }
  
  export default CountdownTimer;