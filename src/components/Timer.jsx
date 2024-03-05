

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Timer({ level, setLevel ,numbers,score,setScore}) {
  const [time, setTime] = useState({ minutes: 0, seconds: 10 });
  let navigate = useNavigate();

  useEffect(() => {
    let interval;
    if (time.minutes === 0 && time.seconds === 0) {
      if(level===5)
      {
          let num=0;
          numbers.forEach(e => {
             if(e.value==e.index+1)
                num+=10;
          });
          console.log(num);
          setScore(score+num);
      }
      setLevel((prevLevel) => prevLevel + 1);
    } else {
      interval = setInterval(() => {
        if (time.seconds === 0) {
          setTime((prevTime) => ({ minutes: prevTime.minutes - 1, seconds: 59 }));
        } else {
          setTime((prevTime) => ({ minutes: prevTime.minutes, seconds: prevTime.seconds - 1 }));
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [time, setLevel]);

  useEffect(() => {
    // Set initial time based on the level
    if (level === 1) setTime({ minutes: 0, seconds: 10});
    else if (level === 3) setTime({ minutes: 0, seconds: 30 });
    else if (level === 5) setTime({ minutes: 0, seconds: 30 });
  }, [level]);

  return (
    <div className='timer'>
      {`${time.minutes}:${time.seconds < 10 ? '0' : ''}${time.seconds}`}
    </div>
  );
}

export default Timer;
